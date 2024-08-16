import styles from "@/styles/Brands.module.css";
import Link from "next/link";
import fetchService from "@/services/fetchs";
import { fetchRegionByCode } from "@/utils/regions";

export async function generateMetadata({ params }) {
  const currentRegion = await fetchRegionByCode(params.region);
  return {
    title: `Supplier of Industrial Automation & Control Instruments in ${currentRegion.name} - Tools And Trade`,
    description: `In our store you will find all the best in Automation & Control Instruments. More than 100 brands of industrial appliances with fast delivery to ${currentRegion.cities}`,
  };
}

const groupBrandsByLetter = (brands) => {
  const grouped = {};

  brands.forEach((brand) => {
    const letter = brand.name.charAt(0).toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(brand);
  });

  const groupedArray = Object.keys(grouped).map((letter) => ({
    letter,
    brands: grouped[letter],
  }));

  groupedArray.sort((a, b) => a.letter.localeCompare(b.letter));
  groupedArray.forEach((group) => {
    group.brands.sort((a, b) => a.name.localeCompare(b.name));
  });

  return groupedArray;
};

const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const Brands = async ({ params }) => {
  const region = params.region;
  const brands = await fetchService.getBrands();
  const data = groupBrandsByLetter(brands);

  return (
    <div className={styles.brands}>
      <link rel="canonical" href={`/${params.region}/brands`} />
      <div className={styles.container}>
        <div className={styles.href}>
          <h1>BRANDS</h1>
        </div>
        <div className={styles.Links}>
          {data.map((brandGroup) => (
            <div className={styles.links} key={brandGroup.letter}>
              <p>{brandGroup.letter}</p>
              <div className={styles.to}>
                {brandGroup.brands.map((brand) => (
                  <p key={brand.id}>
                    <Link href={`/${region}/brands/${brand.slug}`}>
                      {capitalize(brand.name)}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
