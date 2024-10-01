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
      <head>
        {/* Google Tag Manager script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0VB9YY4E5"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q0VB9YY4E5');
          `,
        }} />
        <link
          rel="alternate"
          href="https://toolsandtrade.com"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://toolsandtrade.com/sa"
          hreflang="en-sa"
        />
        <link
          rel="alternate"
          href="https://toolsandtrade.com/ae"
          hreflang="en-ae"
        />
      </head>
      <body>
        <NextTopLoader />
        <Header phone={main.phone} mail={main.mail} />
        <main>{children}</main>
        <Request email_address={main.email_address} address={main.address} />
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
