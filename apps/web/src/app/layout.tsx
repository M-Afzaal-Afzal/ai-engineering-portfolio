import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SupportDesk AI",
  description:
    "Full-stack support ticket dashboard — the foundation for AI-powered customer support tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col lg:flex-row h-full min-h-screen bg-surface text-ink">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
