

import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Parts/Header";
import Footer from "@/components/Parts/Footer";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Atsu Portfolio",
  description: "Atsu Ikedaのポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="my-10 min-h-[calc(100vh-88px-88px-80px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
