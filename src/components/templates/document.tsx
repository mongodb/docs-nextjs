
export default function DocumentTemplate({ children }: {
  // pageDoc: ASTDocument;
  children?: React.ReactNode;
}) {

  return (
    <div style={{ background: "lightblue" }}>
      <h1>Document Template Component</h1>
      {children}
    </div>
  );
}