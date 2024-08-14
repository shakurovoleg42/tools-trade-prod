"use client";

import styles from "@/styles/ProductsList.module.css";

import { useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Product = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();
  const { region } = useParams();
  const defaultImage = "/default-image.png";

  const handleShowMore = () => {
    router.push(`/${region}/products/${product.slug}`);
  };

  return (
    <div className={styles.product}>
      <div className={styles.contmg}>
        <img
          src={product.image || defaultImage}
          onClick={handleShowMore}
          draggable="false"
          alt="product"
          onLoad={() => setImageLoaded(true)}
          className={`${!imageLoaded ? "hidden" : ""} hidden md:block`}
        />
      </div>
      <div className={styles.title}>
        <p>{product.name}</p>
      </div>
      <div className={styles.shortDesc}>
        <p>{product.short_description}</p>
      </div>
      <div className={styles.btn}>
        <button onClick={handleShowMore}>MORE</button>
      </div>
    </div>
  );
};

Product.displayName = "Product";

const ListProducts = ({ products, pagination }) => {
  const totalProducts = pagination.total;
  const itemsPerPage = pagination.per_page;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const page = +searchParams.get("page") || 1;

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (event, value) => {
    params.set("page", value);
    router.replace(pathname + "?" + params.toString());
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.papper}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))
        ) : (
          <p className={styles.noProducts}>No products for this filter</p>
        )}
      </div>
      <div className={styles.pagination}>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handlePageChange}
            onClick={handleScroll}
          />
        </Stack>
      </div>
    </div>
  );
};

export default ListProducts;
