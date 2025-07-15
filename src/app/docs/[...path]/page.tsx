import { getPageDocFromParams } from "@/lib/db";

export default async function Page({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const pageDoc = await getPageDocFromParams(params);
  if (!pageDoc) {
    // TODO: create a default 404 page
    return <div>404</div>;
  }
  return <div>{JSON.stringify(pageDoc.ast)}</div>;
}
