// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const grotesk = localFont({
  src: [
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Algorify Labs",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
