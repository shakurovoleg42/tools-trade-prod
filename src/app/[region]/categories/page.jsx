import styles from "@/styles/Categories.module.css";

import Image from "next/image";
import Link from "next/link";

import fetchService from "@/services/fetchs";

const Categories = async ({ params }) => {
  const region = params.region;

  const data = await fetchService.getBigCategories();

  return (
    <div>
      <div className={styles.href}>
        <p>CATEGORIES</p>
      </div>
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
  );
};

export default Categories;
