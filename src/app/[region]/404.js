"use client";

import React from "react";

export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        backgroundColor: "#fff",
        color: "#000000",
        flexDirection: "column",
        textAlign: "center",
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      }}
    >
      <div>
        <h1
          style={{
            display: "inline-block",
            margin: "0 20px 0 0",
            paddingRight: "23px",
            fontSize: "34px",
            fontWeight: "500",
            verticalAlign: "top",
            lineHeight: "49px",
            borderRight: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          404
        </h1>
        <div
          style={{
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle",
          }}
        >
          <h2
            style={{
              margin: "0",
              padding: "0",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "inherit",
            }}
          >
            This page could not be found.
          </h2>
        </div>
      </div>
      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "30px",
          fontSize: "18px",
          color: "#0070f3",
          textDecoration: "none",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          borderBottom: "1px solid #0070f3",
        }}
      >
        Go back
      </button>
    </div>
  );
}
