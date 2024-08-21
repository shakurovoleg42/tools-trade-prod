import React from "react";

export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000", // черный фон
        color: "#fff", // белый цвет текста
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>404</h1>
        <p style={{ fontSize: "1.5rem" }}>This page could not be found.</p>
      </div>
    </div>
  );
}
