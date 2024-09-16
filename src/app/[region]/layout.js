import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import NextTopLoader from "nextjs-toploader";
import { fetchRegions } from "@/utils/regions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Request from "@/components/Request";
import fetchService from "@/services/fetchs";

export async function generateMetadata() {
  const regions = await fetchRegions();

}

export default async function RootLayout({ children, params }) {

  const main = await fetchService.getMain();
  // console.log(main.logo)

  return (
    <html lang="en">
      <link rel="alternate" hrefLang='x-default' href={`https://toolsandtrade.com/${params.region}`} />
      <link rel="alternate" hrefLang={`en-${params.region}`} href={`https://toolsandtrade.com/${params.region}`} />
      <body>
        <NextTopLoader />
        <Header logo={main.logo} phone={main.phone} mail={main.mail}/>
        <main>{children}</main>
        <Request />
        <Footer region={params.region} logo={main.logo} phone={main.phone} mail={main.mail}/>
      </body>
    </html>
  );
}
