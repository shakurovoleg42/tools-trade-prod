import { fetchRegionByCode } from "@/utils/regions";
import About from "@/blocks/home/About/About";
import Banner from "@/blocks/home/Banner/Banner";
import FeatureCategories from "@/blocks/home/FeatureCategories/FeatureCategories";
import ProductsPreview from "@/blocks/home/ProductsPreview/ProductsPreview";
import fetchService from "@/services/fetchs";

export async function generateMetadata({ params }) {
  const currentRegion = await fetchRegionByCode(params.region);

  return {
    title: `Tools & Trade is supplier of Test Instruments in ${currentRegion.name}`,
    description: `Tools & Trade offer best prices for Test Instruments & Industrial Equipment with a wide range of products, FREE delivery in ${currentRegion.name} and delivery to door for all International Orders with duties and taxes included!`,
  };
}

const Home = async ({ params }) => {
  const currentRegion = await fetchRegionByCode(params.region);
  const featuredProducts = await fetchService.getFeaturedProducts();

  return (
    <>
      <Banner currentRegion={currentRegion} />
      <FeatureCategories />
      <About />
      <ProductsPreview featuredProducts={featuredProducts} />
    </>
  );
};

export default Home;