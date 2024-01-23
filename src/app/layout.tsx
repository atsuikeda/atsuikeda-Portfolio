import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Parts/Header";
import Footer from "@/components/Parts/Footer";

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
        <main className="my-8 min-h-screen sm:pl-[25%] sm:my-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
