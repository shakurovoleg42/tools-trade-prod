import { fetchRegionByCode } from "@/utils/regions";
import About from "@/blocks/home/About/About";
import Banner from "@/blocks/home/Banner/Banner";
import FeatureCategories from "@/blocks/home/FeatureCategories/FeatureCategories";
import ProductsPreview from "@/blocks/home/ProductsPreview/ProductsPreview";
import fetchService from "@/services/fetchs";
import Head from "next/head";
import Custom404 from "@/app/[region]/404";

export async function generateMetadata({ params }) {
  try {
    const currentRegion = await fetchRegionByCode(params.region);

    return {
      title: `Tools & Trade is supplier of Test Instruments in ${currentRegion.name}`,
      description: `Tools & Trade offer best prices for Test Instruments & Industrial Equipment with a wide range of products, FREE delivery in ${currentRegion.name} and delivery to door for all International Orders with duties and taxes included!`,
    };
  } catch (error) {
    <Custom404 />;
  }
}

const Home = async ({ params }) => {
  try {
    const currentRegion = await fetchRegionByCode(params.region);
    const featuredCategories = await fetchService.getBigCategories();
    const featuredProducts = await fetchService.getFeaturedProducts();
    const region = params.region;

    return (
      <>
        <link rel="canonical" href={`/${params.region}`} />
        <Banner currentRegion={currentRegion} />
        <FeatureCategories featuredCategories={featuredCategories} />
        <About />
        <ProductsPreview featuredProducts={featuredProducts} />
      </>
    );
  } catch (error) {
    <Custom404 />;
  }
};

export default Home;
