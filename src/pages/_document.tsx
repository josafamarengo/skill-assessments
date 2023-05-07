import Header from "@/components/organisms/Header";
import Footer from "@/components/atoms/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
