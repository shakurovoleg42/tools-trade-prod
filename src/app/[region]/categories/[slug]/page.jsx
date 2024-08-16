import styles from "@/styles/Products.module.css";

import Link from "next/link";

import { fetchRegionByCode } from "@/utils/regions";
import fetchService from "@/services/fetchs";
import ListProducts from "@/blocks/allProducts/ListProducts";
import Filter from "@/components/Filter/Filter";

export const generateMetadata = async ({ params }) => {
  const currentRegion = await fetchRegionByCode(params.region);
  const category = await fetchService.getCategory(params.slug);

  return {
    title: `Buy ${category.categories.name} at best prices in ${currentRegion.name} ${currentRegion.cities}`,
    description: `Buy ${category.categories.name} at the best price in ${currentRegion.name} ${currentRegion.cities} | ${category.categories.name} Supplier & Reseller`,
  };
};

const Category = async ({ params, searchParams }) => {
  const region = params.region;

  const data = await fetchService.getCategory(params.slug, {
    page: searchParams.page,
  });
  const brands = data.brands;
  const products = data.products.data;
  const pagination = data.pagination;

  return (
    <div className={styles.products}>
    <link rel="canonical" href={`/${region}/products/${data.categories.name.toLowerCase()}`} />
      <div className={styles.container}>
        <div className={styles.href}>
          <p>
            <Link href={`/${region}/categories`}>CATEGORIES</Link> /{" "}
            {data.categories.name}
          </p>
        </div>
        <h1>{data.categories.name}</h1>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <Filter brands={brands} />
          </div>
          <ListProducts products={products} pagination={pagination} />
        </div>
      </div>
    </div>
  );
};

export default Category;
