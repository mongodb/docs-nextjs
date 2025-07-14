/**
 * Module to secure MDB connections
 * DB connections credentials should be sourced from env file
 * Intended be calld from Server Components, or Route Handlers
 */

import { cache } from "react";
import { Filter, FindOptions, MongoClient } from "mongodb";
import { ASTDocument } from "./types";
import { assertTrailingSlash } from "utils/assertTrailingSlash";
import { log } from "utils/logger";

const uri = process.env.MONGODB_URI as string;
const collectionName = "documents";

if (!uri) {
  throw new Error("MONGODB_URI is missing as an env variable");
}

let client: MongoClient | null;

function getClient() {
  if (!client) {
    client = new MongoClient(uri, {
      appName: "docs-nextjs-" + (process.env.ENV ?? "dev"),
    });
  }
  return client;
}

function getDbName(env: string) {
  switch (env) {
    case "production":
      return "snooty_prod";
    case "dotcomstg":
      return "snooty_dotcomstg";
    case "dotcomprd":
      return "snooty_dotcomprd";
    default:
      return "snooty_dev";
  }
}

async function getPagesDocumentCollection() {
  const client = getClient();
  const dbName = getDbName(process.env.ENV || "");
  return client.db(dbName).collection<ASTDocument>(collectionName);
}

/**
 * Using react cache here to prevent double querying 
 */
export const getPageAST = cache(
  async (path: string | string[], prId?: number) => {
    const collection = await getPagesDocumentCollection();
    const pathString = typeof path === "string" ? path : path.join("/");
    const query: Filter<ASTDocument> = {
      page_path: assertTrailingSlash(pathString),
    };
    if (prId) {
      query["pr_id"] = prId;
    }
    const DEFAULT_SORT: FindOptions = { sort: { id: -1 } };
    try {
      const pageRes = collection.findOne(query, DEFAULT_SORT);
      return pageRes;
    } catch (e) {
      log(String(e), 'error');
      throw e;
    }
  }
);

export async function clearClient(signal?: string) {
  if (signal) {
    log(`${signal} received. Closing MongoDB connection...`);
  }
  if (client) {
    await client.close();
    client = null;
  }
}

process.on("SIGINT", async () => clearClient("SIGINT"));

process.on("SIGTERM", async () => clearClient("SIGTERM"));
