import { getPageAST } from "@/lib/db";

const PATH_PREFIX = "docs";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ path?: string[] }>;
}) {
  const { path } = await params;
  const fullPagePath = [PATH_PREFIX, path?.join("/") ?? ""].join("/");
  const pageDoc = await getPageAST(fullPagePath);
  //  TODO: DOP-5909 get template and return layout
  return <>{children}</>;
}
