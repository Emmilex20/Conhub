import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conhub",
  description: "Creator growth, analytics, campaigns and monetization in one platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
