import styles from "@/styles/Categories.module.css";

import Image from "next/image";
import Link from "next/link";
import fetchService from "@/services/fetchs";
import { fetchRegionByCode } from "@/utils/regions";

export async function generateMetadata({ params }) {
  const currentRegion = await fetchRegionByCode(params.region);
  return {
    title: `Industrial Automation & Control Instruments product categories in ${currentRegion.name}| Tools And Trade`,
    description: `More than 100 categories of Industrial Automation & Control Instruments from world manufacturers at the best prices in ${currentRegion.cities}- Tools And Trade`,
  };
}

const Categories = async ({ params }) => {
  const region = params.region;
  const data = await fetchService.getBigCategories();

  return (
    <div>
      <link rel="canonical" href={`/${params.region}/categories`} />
      <div className={styles.href}>
        <p>CATEGORIES</p>
      </div>
      <div className={styles.rowsContainer}>
        <div className={styles.rows}>
          {data.map((bcategory) => (
            <div key={bcategory.id} className={styles.card}>
              <Image
                src={bcategory.image || "/default-image.png"}
                width={260}
                height={260}
                draggable="false"
                alt=""
              />
              <p className={styles.title}>{bcategory.name}</p>
              <ul className={styles.linksList}>
                {bcategory.categories.map((category) => (
                  <li key={category.id} className={styles.links}>
                    <Link href={`/${region}/categories/${category.slug}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
