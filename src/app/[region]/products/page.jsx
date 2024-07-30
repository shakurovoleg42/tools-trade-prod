import styles from "@/styles/Products.module.css";

import Link from "next/link";

import ListProducts from "@/blocks/allProducts/ListProducts";
import fetchService from "@/services/fetchs";
import Filter from "@/components/Filter/Filter";

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
      <div className={styles.products}>
        <div className={styles.container}>
          <div className={styles.href}>
            <p>PRODUCTS</p>
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
