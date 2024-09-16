import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import NextTopLoader from "nextjs-toploader";
import { fetchRegions } from "@/utils/regions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Request from "@/components/Request";
import Head from "next/head";

export async function generateMetadata() {
  const regions = await fetchRegions();
}

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <link rel="alternate" hrefLang='x-default' href={`https://toolsandtrade.com/${params.region}`} />
      <link rel="alternate" hrefLang={`en-${params.region}`} href={`https://toolsandtrade.com/${params.region}`} />
      <body>
        <NextTopLoader />
        <Header />
        <main>{children}</main>
        <Request />
        <Footer region={params.region} />
      </body>
    </html>
  );
}
