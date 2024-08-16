import styles from "@/styles/Products.module.css";

import Link from "next/link";

import { fetchRegionByCode } from "@/utils/regions";
import fetchService from "@/services/fetchs";
import ListProducts from "@/blocks/allProducts/ListProducts";
import Filter from "@/components/Filter/Filter";

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
  });
  // const brandsData = await fetchService.getBrands(

  // );
  
  const categories = data.categories;
  const products = data.products.data;
  const pagination = data.pagination;

  return (
    <div className={styles.products}>
    <link rel="canonical" href={`/${region}/products/${data.brands.name.toLowerCase()}`} />
      <div className={styles.container}>
        <div className={styles.href}>
          <p>
            <Link href={`/${region}/brands`}>BRANDS</Link> / {data.brands.name}
          </p>
        </div>
        <h1>{data.brands.name}</h1>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <Filter categories={categories} isBrands={true} />
          </div>
          <ListProducts products={products} pagination={pagination} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
