import styles from "@/styles/Product.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";

import { fetchRegionByCode } from "@/utils/regions";
import fetchService from "@/services/fetchs";
import SimilarProductsSlider from "@/components/SimilarProductsSlider/SimilarProductsSlider";
import Tabs from "@/components/Tabs/Tabs";
import Call from "@/components/Call/Call";

export const generateMetadata = async ({ params }) => {
  const currentRegion = await fetchRegionByCode(params.region);
  const product = await fetchService.getProduct(params.slug);

  return {
    title: `${product.name} ${product.short_description} supplier in ${currentRegion.name}`,
    description: `Buy ${product.name} ${product.short_description} at best price in ${currentRegion.cities}, ${currentRegion.name} | ${product.brand} Reseller, Dealer and Distributor`,
  };
};

const Product = async ({ params }) => {
  const region = params.region;
  const currentRegion = await fetchRegionByCode(region);
  const product = await fetchService.getProduct(params.slug);

  const defaultImage = "/default-image.png";

  return (
    <>
      <div className={styles.container}>
        <link rel="canonical" href={`/${region}/products/${product.name.toLowerCase()}`} />
        {product && (
          <div className={styles.containerProduct}>
            <div className={styles.href}>
              <p>
                <Link href={`/${region}/categories/${product.category_slug}`}>
                  {product.category}
                </Link>
                /
                <Link href={`/${region}/brands/${product.brand_slug}`}>
                  {product.brand}
                </Link>
                / {product.name}
              </p>
            </div>
            <div className={styles.mainInfo}>
              <div className={styles.column}>
                <div className={styles.imgContainer}>
                  <img
                    src={product.image || defaultImage}
                    className="product_image"
                    draggable="false"
                    alt="product image"
                  />
                </div>
                <div className={styles.about}>
                  <div className={styles.title}>
                    <h1>{product.name}</h1>
                  </div>
                  <div className={styles.short}>
                    <h2>{product.short_description}</h2>
                  </div>
                  <div className={styles.manufacturer}>
                    <p>manufacturer:</p>
                    <Link href={`/${region}/brands/${product.brand_slug}`}>
                      <span>{product.brand}</span>
                    </Link>
                  </div>
                  <div className={styles.category}>
                    <p className={styles.categoryName}>category:</p>
                    <Link href={`/${region}/categories/${product.category_slug}`}>
                    <p className={styles.categoryTitle}>{product.category}</p>
                    </Link>
                  </div>
                  <div className={styles.descProduct}>
                    <h3>
                      Tools and Trade is a leading supplier and reseller of{" "}
                      {product.name} in {currentRegion.name}, we ship to all
                      major cities such as {currentRegion.cities}
                    </h3>
                  </div>
                  <Call styles={styles} />
                </div>
              </div>
            </div>
            <div className={styles.presentation}>
              <Tabs styles={styles} product={product} />
            </div>
            <div className={styles.lists}>
              <div>
                <h2 className={styles.lists_title}>Why Buy from Us:</h2>
              </div>
              <ul>
                <li>Best online price for {product.name}</li>
                <li>Explore our wide range of {product.brand} products</li>
                <li>Bulk discount available for traders and resellers</li>
                <li>Shipping to door with all duties and taxes included!</li>
                <li>
                  Pay via Bank Transfer, Credit Card or secure Stripe payment
                </li>
              </ul>
            </div>
            <div className={styles.recomendations}>
              <div className={styles.Title}>
                <p>SIMILAR PRODUCTS</p>
              </div>
              <div className={styles.similars}>
                <SimilarProductsSlider
                  styles={styles}
                  similarProducts={product.similar_products}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
