import type { Metadata } from "next";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import "./globals.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "UNDER SPELL",
  description: "UNDER SPELLのホームページ",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
