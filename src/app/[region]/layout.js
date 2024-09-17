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

  return (
    <html lang="en">
      <link
        rel="alternate"
        href="https://toolsandtrade.com"
        hreflang="x-default"
      />

      <link
        rel="alternate"
        href="https://toolsandtrade.com/qa"
        hreflang="en-qa"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/sa"
        hreflang="en-sa"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/kz"
        hreflang="en-kz"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/kw"
        hreflang="en-kw"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/iq"
        hreflang="en-iq"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/eg"
        hreflang="en-eg"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/az"
        hreflang="en-az"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/uz"
        hreflang="en-uz"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/tm"
        hreflang="en-tm"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/mn"
        hreflang="en-mn"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/ru"
        hreflang="en-ru"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/ir"
        hreflang="en-ir"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/cd"
        hreflang="en-cd"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/ao"
        hreflang="en-ao"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/ke"
        hreflang="en-ke"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/gh"
        hreflang="en-gh"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/ng"
        hreflang="en-ng"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/tz"
        hreflang="en-tz"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/pk"
        hreflang="en-pk"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/ae"
        hreflang="en-ae"
      />
      <link
        rel="alternate"
        href="https://toolsandtrade.com/om"
        hreflang="en-om"
      />
      <body>
        <NextTopLoader />
        <Header phone={main.phone} mail={main.mail} />
        <main>{children}</main>
        <Request email_address={main.email_address} address={main.address}/>
        <Footer
          region={params.region}
          phone={main.phone}
          mail={main.mail}
          address={main.address}
        />
      </body>
    </html>
  );
}
