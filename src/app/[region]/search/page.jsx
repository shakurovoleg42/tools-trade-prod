// 'use client';
import styles from "./styles.module.css";
import Link from "next/link";
import { Product } from "@/blocks/allProducts/ListProducts";
import fetchService from "@/services/fetchs";

const Search = async ({ params, searchParams }) => {
  const region = params.region;
  const query = searchParams.query;

  try {
    const data = await fetchService.search(query);

    if (data.products && Array.isArray(data.products.data)) {
      console.log("Products array:", data.products.data);

      return (
        <section>
          <div className="container">
            <h1>Results for search {query}</h1>
            {data.products.data.length > 0 ? (
              <div className={styles.wrapper}>
                {data.products.data.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p>No products found</p>
            )}
          </div>
        </section>
      );
    } else {
      console.error("Products data is not an array:", data.products);
      return (
        <section>
          <div className="container">
            <p>Error: Products data is not in the expected format.</p>
          </div>
        </section>
      );
    }
  } catch (error) {
    console.error("Search request failed:", error);
    return (
      <section>
        <div className="container">
          <p>Error loading search results</p>
        </div>
      </section>
    );
  }
};

export default Search;
