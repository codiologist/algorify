// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
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
  title: {
    default: "Algorify Labs",
    template: "%s | Algorify Labs",
  },
  description:
    "Algorify Labs. We help businesses amplify their online presence with cutting-edge marketing strategies, high-impact designs, and scalable digital solutions.",
  keywords: [
    "Algorify Labs",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Webflow Development",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "AI Solutions",
    "Custom Software",
    "Tech Consultation",
    "Business Solutions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} antialiased`}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
