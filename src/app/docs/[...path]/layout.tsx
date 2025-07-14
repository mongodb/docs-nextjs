import { getPageAST } from "lib/db";
import "lib/db";
import { log } from "utils/logger";

const PATH_PREFIX = "docs";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ path?: string[] }>;
}) {
  log("layout");
  const { path } = await params;
  const fullPagePath = [PATH_PREFIX, path?.join("/") ?? ""].join("/");
  const pageDoc = await getPageAST(fullPagePath);
  //  TODO: DOP-5909 get template and return layout
  return <>{children}</>;
}
