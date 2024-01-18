

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
        <main className="container px-10 mx-auto xl:max-w-screen-lg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
