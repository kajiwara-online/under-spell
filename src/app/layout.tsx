import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNDER SPELL",
  description: "UNDER SPELLのホームページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white">
        <Header />

        <main className="mt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
