"use client";

import { useParams, useRouter } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";

const SimilarProductsSlider = ({ styles, similarProducts }) => {
  const router = useRouter();
  const { region } = useParams();

  const navigateToProduct = (slug) => {
    router.push(`/${region}/products/${slug}`);
  };

  return (
    <Slider
      className={styles.slyder}
      dots={true}
      autoplay={true}
      infinite={true}
      slidesToShow={3}
      slidesToScroll={3}
      responsive={[
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 470,
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
      {similarProducts.map((similarProduct) => (
        <div
          key={similarProduct.id}
          className={styles.block}
          onClick={() => navigateToProduct(similarProduct.slug)}
        >
          <div className={styles.image}>
            <img
              src={similarProduct.image || defaultImage}
              draggable="false"
              alt="similar products"
            />
          </div>
          <div className={styles.title}>
            <p>{similarProduct.name}</p>
          </div>
          <div className={styles.shortDesc}>
            <p>{similarProduct.short_description}</p>
          </div>
          <div className={styles.btn}>
            <button onClick={() => navigateToProduct(similarProduct.slug)}>
              MORE
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimilarProductsSlider;
