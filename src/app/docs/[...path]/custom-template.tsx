import React from "react";
import { ASTDocument } from "@/lib/db/types";
import DocumentTemplate from "@/components/templates/document";

function getTemplate(templateOption: string): React.ComponentType<{ children?: React.ReactNode }> {
  switch (templateOption) {
    case "document":
      return DocumentTemplate;
    case "product-landing":
      return DocumentTemplate; // Replace with actual ProductLandingTemplate when available
    default:
      return DocumentTemplate;
  }
}

export default async function Template({ children, pageDoc }: {
  pageDoc: ASTDocument;
  children?: React.ReactNode;
}) {
  const TemplateComponent = getTemplate(pageDoc.ast.options?.template || "document");
  return (
    <TemplateComponent>
      <div style={{ background: "yellow" }}>
        {children}
      </div>

    </TemplateComponent>
  );

}