import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavbarLayout from "./components/navbar/NavbarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next",
  description: "유권희 포트폴리오 프론트엔드 개발자 ( Yoogwonhee portfolio )",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0`}>
        <NavbarLayout>{children}</NavbarLayout>
      </body>
    </html>
  );
}
