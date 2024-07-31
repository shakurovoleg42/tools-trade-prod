import styles from "@/styles/Products.module.css";

import { fetchRegionByCode } from "@/utils/regions";

import ListProducts from "@/blocks/allProducts/ListProducts";
import fetchService from "@/services/fetchs";
import Filter from "@/components/Filter/Filter";

export async function generateMetadata({ params }) {
  const currentRegion = await fetchRegionByCode(params.region);
  return {
    title: `Buy Industrial Automation & Control Instruments at best prices in ${currentRegion.name} ${currentRegion.cities}`,
    description: `Buy Industrial Automation & Control Instruments at the best price in ${currentRegion.name} ${currentRegion.cities} | Industrial Automation & Control Instruments Supplier & Reseller`,
  };
}

const Products = async ({ params, searchParams }) => {
  const region = params.region;

  const categories = await fetchService.getCategories();
  const brands = await fetchService.getBrands();
  const products = await fetchService.getProducts({
    page: searchParams.page,
    cats: searchParams.cats,
  });

  return (
    <>
      <link rel="canonical" href={`/${params.region}/products`} />
      <div className={styles.products}>
        <div className={styles.container}>
          <div className={styles.href}>
            <h1>PRODUCTS</h1>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <Filter categories={categories} brands={brands} />
            </div>
            <ListProducts
              products={products.data}
              pagination={products.pagination}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
