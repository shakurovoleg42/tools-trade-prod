import styles from "./styles.module.css";

import Link from "next/link";

import { Product } from "@/blocks/allProducts/ListProducts";
import fetchService from "@/services/fetchs";

const Search = async ({ params, searchParams }) => {
  const region = params.region;
  const data = await fetchService.search(searchParams.query);

  return (
    <section>
      <div className="container">
        <h1>Results for search {searchParams.query}</h1>
        <ul className={styles.wrapper}>
          {data.manufacturers.map((brand) => (
            <li key={brand.id}>
              <Link href={`/${region}/brands/${brand.slug}`}>{brand.name}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles.wrapper}>
          {data.categories.map((category) => (
            <li key={category.id}>
              <Link href={`/${region}/categories/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.wrapper}>
          {data.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
