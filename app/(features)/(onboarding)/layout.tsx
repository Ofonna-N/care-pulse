import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./../../globals.css";
import AppProviders from "../../context/app_providers";

const jakartaSansInter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--jakarta-sans",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={jakartaSansInter.className}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
