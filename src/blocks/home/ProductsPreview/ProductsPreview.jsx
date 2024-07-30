"use client";
import styles from "@/blocks/home/ProductsPreview/ProductsPreview.module.css";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProductsPreview = ({ featuredProducts }) => {
  const { region } = useParams();

  const handleShowMore = (slug) => {
    window.location.href = `/${region}/products/${slug}`;
  };

  return (
    <div className={styles.products_container}>
      <div className={styles.PR_title}>
        <p className={styles.PR__title}>Featured products</p>
      </div>
      <div className={styles.product_container}>
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className={styles.poduct_block}
            onClick={() => handleShowMore(product.slug)}
          >
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                width={326.38}
                height={245.14}
                draggable="false"
                alt="product"
              />
            </div>
            <div className={styles.title_product}>
              <p>{product.name}</p>
            </div>
            <div className={styles.description}>
              <div>
                <b>DESCRIPTION</b>
                <p>{product.short_description}</p>
              </div>
            </div>
            <div className={styles.showmore}>
              <Link href={`/${region}/products`}>
                <button>More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
