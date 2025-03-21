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
    <html lang="ja" className="lg:text-[100%] md:text-[1.666666666666667vw]">
      <body className="md:text-[.8125rem] leading-[2.153846153846154]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
