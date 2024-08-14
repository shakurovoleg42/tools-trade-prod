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

  // return {
  //   alternates: {
  //     canonical: process.env.NEXT_URL,
  //     languages: {
  //       "x-default": process.env.NEXT_URL,
  //       ...Object.fromEntries(
  //         Object.keys(regions).map((region) => [
  //           `en-${region}`,
  //           `${process.env.NEXT_URL}/${region}`,
  //         ]),
  //       ),
  //     },
  //   },
  // };
}

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
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
