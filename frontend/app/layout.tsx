import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Agentic AI Console",
  description: "Production-ready fullstack template"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Inter, Arial, sans-serif", margin: 0, background: "#0b1020", color: "#e2e8f0" }}>
        {children}
      </body>
    </html>
  );
}
