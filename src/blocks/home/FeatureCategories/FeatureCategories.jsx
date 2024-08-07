"use client";

import styles from "@/styles/FeaturureCategories.module.css";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const FeatureCategories = ({ featuredCategories }) => {
  const { region } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Featured categories</h2>
      </div>
      <div className={styles.items}>
        {featuredCategories.map((bcategory) => (
          <div className={styles.item} key={bcategory.id}>
            <Link href={`/${region}/bcategories/${bcategory.slug}`}>
            <Image
              src={bcategory.image}
              width={190}
              height={190}
              draggable="false"
              alt="accessories"
            />
            
              {bcategory.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeatureCategories;
