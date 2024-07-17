import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import AppProviders from "./_providers/app_providers";

const jakartaSansInter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--jakarta-sans",
  // weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Care Pulse",
  description: "A health care management system for the modern age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakartaSansInter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
