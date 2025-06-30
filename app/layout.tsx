import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Notion Cloned",
  description:
    "A clone of Notion, built with Next.js and Shadcn UI Components and Tailwind CSS Framework and Geist UI.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "https://img.icons8.com/?size=96&id=uVERmCBZZACL&format=png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons8-notion.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
