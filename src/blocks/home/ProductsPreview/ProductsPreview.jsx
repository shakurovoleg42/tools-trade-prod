"use client";
import styles from "@/blocks/home/ProductsPreview/ProductsPreview.module.css";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsPreview = ({ featuredProducts }) => {
  const { region } = useParams();

  const handleShowMore = (slug) => {
    window.location.href = `/${region}/products/${slug}`;
  };

  return (
    <div className={styles.products_container}>
      <div className={styles.PR_title}>
        <h2 className={styles.PR__title}>Featured products</h2>
      </div>
      <div className={styles.product_container}>
        <div className={styles.sliderr}>
          <Slider
            className={styles.slyder}
            dots={true}
            autoplay={true}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={3}
            arrows={false}
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  dots: true,

                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true,
                },
              },
              {
                breakpoint: 913,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: false,
                },
              },
              {
                breakpoint: 861,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                },
              },
              {
                breakpoint: 350,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className={styles.product_block}
                onClick={() => handleShowMore(product.slug)}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductsPreview;
