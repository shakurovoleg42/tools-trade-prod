"use client";

import styles from "./styles.module.css";

import { useCallback, useEffect, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";
const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
const Filter = ({ categories = [], brands = [], isBrands = false }) => {
  const [visibleCategoriesCount, setVisibleCategoriesCount] = useState(10);
  const [visibleBrandsCount, setVisibleBrandsCount] = useState(10);
  const router = useRouter();
  const pathname = usePathname();
  const { region } = useParams();
  const searchParams = useSearchParams();

  const showMoreCategories = () => {
    setVisibleCategoriesCount((prevCount) => prevCount + 10);
  };

  const showMoreBrands = () => {
    setVisibleBrandsCount((prevCount) => prevCount + 10);
  };

  const getSelectedCategories = useCallback(() => {
    const catsParam = searchParams.get("cats");
    return catsParam ? new Set(catsParam.split(",").map(Number)) : new Set();
  }, [searchParams]);

  const handleCategoryChange = (categoryId, isChecked) => {
    const selectedCategories = getSelectedCategories();

    if (isChecked) {
      selectedCategories.add(categoryId);
    } else {
      selectedCategories.delete(categoryId);
    }

    const catsParam = Array.from(selectedCategories).join(",");
    const params = new URLSearchParams(searchParams);

    if (catsParam) {
      params.set("cats", catsParam);
    } else {
      params.delete("cats");
    }

    router.replace(pathname + "?" + params.toString());
  };

  const updateCheckboxState = useCallback(() => {
    const selectedCategories = getSelectedCategories();
    categories.forEach((category) => {
      const checkbox = document.getElementById(`category${category.id}`);
      if (checkbox) {
        checkbox.checked = selectedCategories.has(category.id);
      }
    });
  }, [categories, getSelectedCategories]);

  // Обновление состояния чекбоксов при первой загрузке и при изменении числа видимых категорий
  useEffect(() => {
    updateCheckboxState();
  }, [
    categories,
    getSelectedCategories,
    visibleCategoriesCount,
    updateCheckboxState,
  ]);

  return (
    <div className={styles.filter}>
      {!!categories.length && (
        <>
          <p>CATEGORIES</p>
          {categories.slice(0, visibleCategoriesCount).map((category) =>
            isBrands ? (
              <Link
                className={styles.categories}
                key={category.id}
                href={`/${region}/categories/${category.slug}`}
              >
                {category.name}
              </Link>
            ) : (
              <div className={styles.categories} key={category.id}>
                <label htmlFor={`category${category.id}`}>
                  {category.name}
                </label>
                <input
                  type="checkbox"
                  id={`category${category.id}`}
                  name={`category${category.id}`}
                  onChange={(event) =>
                    handleCategoryChange(category.id, event.target.checked)
                  }
                />
              </div>
            ),
          )}
          {visibleCategoriesCount < categories.length && (
            <button onClick={showMoreCategories}>Show more</button>
          )}
        </>
      )}
      {!!brands.length && (
        <div
          className={styles.brands}
          style={{ marginTop: !!categories.length ? "50px" : 0 }}
        >
          <p>BRANDS</p>
          <div className={styles.brandsList}>
            {brands.slice(0, visibleBrandsCount).map((brand) => (
              <Link
                key={brand.id}
                href={`/${region}/brands/${brand.slug}`}
                data-brand={`brand${brand.id}`}
              >
                {capitalize(brand.name)}
              </Link>
            ))}
            {visibleBrandsCount < brands.length && (
              <button onClick={showMoreBrands}>Show more</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
