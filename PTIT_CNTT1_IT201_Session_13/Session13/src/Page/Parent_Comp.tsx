import React from "react";

const LayoutEx7: React.FC = () => {
  return (
    <div
      className="layout-ex7"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--fg)",
        transition: "background-color .2s ease, color .2s ease",
      }}
    >
      <header>
        <h1>Layout Example 7</h1>
      </header>
      <main>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
};

export default LayoutEx7;