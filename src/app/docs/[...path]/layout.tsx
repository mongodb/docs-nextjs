import { getPageDocFromParams } from "@/lib/db";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ path?: string[] }>;
}) {
  const pageDoc = await getPageDocFromParams(params);
  //  TODO: DOP-5909 get template and return layout
  return <>{children}</>;
}
