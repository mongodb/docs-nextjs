import { getPageAST } from "@/lib/db";

const PATH_PREFIX = "docs";

export default async function Page({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path } = await params;
  const fullPagePath = [PATH_PREFIX, path?.join("/") ?? ""].join("/");
  const pageDoc = await getPageAST(fullPagePath);
  if (!pageDoc) {
    // TODO: create a default 404 page
    return <div>404</div>;
  }
  return <div>{JSON.stringify(pageDoc.ast)}</div>;
}
