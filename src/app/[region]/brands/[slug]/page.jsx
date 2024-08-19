import styles from "@/styles/Products.module.css";

import Link from "next/link";

import { fetchRegionByCode } from "@/utils/regions";
import fetchService from "@/services/fetchs";
import ListProducts from "@/blocks/allProducts/ListProducts";
import Filter from "@/components/Filter/Filter";

const formatURL = (str) => {
  return str
    .toLowerCase() // Convert to lower case
    .replace(/[^\w\s.-]/g, "") // Remove all non-word characters except hyphens, spaces, and dots
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/\./g, "-") // Replace dots with hyphens
    .replace(/-+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove hyphens from the start and end
};

export const generateMetadata = async ({ params }) => {
  const currentRegion = await fetchRegionByCode(params.region);
  const brand = await fetchService.getBrand(params.slug);

  return {
    title: `Buy ${brand.brands.name} products at best prices in ${currentRegion.name} ${currentRegion.cities}`,
    description: `${brand.brands.name} supplier and reseller in ${currentRegion.name} ${currentRegion.cities} | Request a quote at +971 556305217 or inquiry@gulfinstruments.com`,
  };
};

const Brand = async ({ params, searchParams }) => {
  const region = params.region;

  const data = await fetchService.getBrand(params.slug, {
    page: searchParams.page,
    cats: searchParams.cats,
  });
  // const brandsData = await fetchService.getBrands(

  // );
  
  const categories = data.categories;
  const products = data.products.data;
  const pagination = data.pagination;
  const formattedTitle = formatURL(data.brands.name);

  return (
    <div className={styles.products}>
    <link rel="canonical" href={`/${region}/brands/${formattedTitle}`} />
      <div className={styles.container}>
        <div className={styles.href}>
          <p>
            <Link href={`/${region}/brands`}>BRANDS</Link> / {data.brands.name}
          </p>
        </div>
        <h1>{data.brands.name}</h1>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <Filter categories={categories} />
          </div>
          <ListProducts products={products} pagination={pagination} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
