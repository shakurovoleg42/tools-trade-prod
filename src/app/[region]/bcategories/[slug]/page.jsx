import styles from "@/styles/Products.module.css";

import Link from "next/link";

import { fetchRegionByCode } from "@/utils/regions";
import fetchService from "@/services/fetchs";
import Filter from "@/components/Filter/Filter";
import ListProducts from "@/blocks/allProducts/ListProducts";
import Custom404 from "@/app/[region]/404";


export const generateMetadata = async ({ params }) => {
  try {
    const currentRegion = await fetchRegionByCode(params.region);
    const category = await fetchService.getBigCategory(params.slug);

    return {
      title: `Buy ${category.big_category.name} at best prices in ${currentRegion.name} ${currentRegion.cities}`,
      description: `Buy ${category.big_category.name} at the best price in ${currentRegion.name} ${currentRegion.cities} | ${category.big_category.name} Supplier & Reseller`,
    };
  } catch (error) {
    <Custom404 />;
  }
};

const BCategory = async ({ params, searchParams }) => {
  try {
    const region = params.region;

    const data = await fetchService.getBigCategory(params.slug, {
      page: searchParams.page,
    });
    const categories = data.categories;
    const brands = data.brands.map((brand) => ({ ...brand, name: brand.name }));
    const products = data.products.data;
    const pagination = data.pagination;

    return (
      <div className={styles.products}>
        <div className={styles.container}>
          <div className={styles.href}>
            <p>
              <Link href={`/${region}/categories`}>CATEGORIES</Link> /{" "}
              {data.big_category.name}
            </p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <Filter categories={categories} brands={brands} isBrands />
            </div>
            <ListProducts products={products} pagination={pagination} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    <Custom404 />;
  }
};

export default BCategory;
