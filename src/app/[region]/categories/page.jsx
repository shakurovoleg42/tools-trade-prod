import styles from "@/styles/Categories.module.css";

import Link from "next/link";
import fetchService from "@/services/fetchs";
import { fetchRegionByCode } from "@/utils/regions";
import Custom404 from "@/app/[region]/404";

export async function generateMetadata({ params }) {
  try {
    const currentRegion = await fetchRegionByCode(params.region);
  return {
    title: `Industrial Automation & Control Instruments product categories in ${currentRegion.name}| Tools And Trade`,
    description: `More than 100 categories of Industrial Automation & Control Instruments from world manufacturers at the best prices in ${currentRegion.cities}- Tools And Trade`,
  };
  } catch (error) {
    <Custom404 />;
  }
  
}

const Categories = async ({ params }) => {
  try {
    const region = params.region;
  const data = await fetchService.getBigCategories();
  console.log(data);

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div>
      <link rel="canonical" href={`/${params.region}/categories`} />
      <div className={styles.href}>
        <h1>CATEGORIES</h1>
      </div>
      <div className={styles.rowsContainer}>
        <div className={styles.rows}>
          {data.map((bcategory) => (
            <div key={bcategory.id} className={styles.card}>
              <img
                src={bcategory.image || "/default-image.png"}
                // width={260}
                // height={260}
                className="bccategory_image"
                draggable="false"
                alt=""
              />
              <Link
                href={`/${region}/bcategories/${bcategory.slug}`}
                className={styles.title}
              >
                {capitalize(bcategory.slug)}
              </Link>
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
  } catch (error) {
    <Custom404 />;
  }
  
};

export default Categories;