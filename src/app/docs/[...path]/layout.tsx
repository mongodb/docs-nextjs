/**
 * A layout is UI that is shared all pages prepended by /docs/<path>. 
 * On navigation, layouts preserve state, remain interactive, and do not rerender.
 */

import { getPageDocFromParams } from "@/lib/db";
import Template from "./custom-template";
import { cookies } from "next/headers";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ path?: string[] }>;
}) {
  const cookiesObj = await cookies();
  const pageDoc = await getPageDocFromParams(params);

  //  TODO: DOP-5909 get template and return layout
  return (
    <>
      {/* <Header /> */}
      {/* insert nav bar here */}
      {/* insert side nav here */}
      <Template pageDoc={pageDoc!}>
        {children}
      </Template>
      {/* insert footer here */}
    </>)

  //   </body>
  // </html>);
}
