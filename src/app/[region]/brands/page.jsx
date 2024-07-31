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
    const letter = brand.name.charAt(0).toUpperCase(); // Первая буква в верхнем регистре
    if (!grouped[letter]) {
      grouped[letter] = []; // Если ещё нет такой группы, создаем её
    }
    grouped[letter].push(brand); // Добавляем бренд в соответствующую группу
  });

  // Преобразуем объект в массив для использования в компоненте
  const groupedArray = Object.keys(grouped).map((letter) => ({
    letter,
    brands: grouped[letter],
  }));

  // Сортируем группы и бренды внутри каждой группы
  groupedArray.sort((a, b) => a.letter.localeCompare(b.letter));
  groupedArray.forEach((group) => {
    group.brands.sort((a, b) => a.name.localeCompare(b.name));
  });

  return groupedArray;
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
          <p>BRANDS</p>
        </div>
        <div className={styles.Links}>
          {data.map((brandGroup) => (
            <div className={styles.links} key={brandGroup.letter}>
              <p>{brandGroup.letter}</p>
              <div className={styles.to}>
                {brandGroup.brands.map((brand) => (
                  <p key={brand.id}>
                    <Link href={`/${region}/brands/${brand.slug}`}>
                      {brand.name}
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
