"use client";

import styles from "@/styles/Header.module.css";
import "react-modern-drawer/dist/index.css";

import { useState, useEffect } from "react";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import DrawerComponent from "react-modern-drawer";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // Добавляем состояние для поиска
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { region } = useParams();

  useEffect(() => {
    // Очистка поля поиска при переходе на главную страницу
    if (pathname === `/${region}`) {
      setSearchValue("");
    }
  }, [pathname, region]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleSearch = () => {
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleSearch();

    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formData);

    if (!fields.query) {
      toast.error("Can't search empty value", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info("Searching...", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      params.set("query", fields.query);
      setSearchValue("");
      router.push(`/${region}/search?${params.toString()}`);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.burger}>
          <button onClick={toggleDrawer}>
            <img
              src="/hamburger.svg"
              style={{ width: "44px !important", height: "44px !important" }}
              draggable="false"
              alt="Burger icon"
            />
          </button>
        </div>
        {isOpen && (
          <>
            <DrawerComponent
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className={styles.leftMenu}
            >
              <ul className={styles.navigation}>
              <li>
                  <Link href={`/${region}/`} onClick={toggleDrawer} className="home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={`/${region}/products`} onClick={toggleDrawer} className="products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href={`/${region}/categories`} onClick={toggleDrawer} className="categories">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href={`/${region}/brands`} onClick={toggleDrawer} className="brands">
                    Brands
                  </Link>
                </li>
              </ul>
            </DrawerComponent>
            <button className={styles.CloseModal} onClick={toggleDrawer}>
              <img
                src="/x.svg"
                style={{ width: "25px !important", height: "25px !important" }}
                draggable="false"
                className="hidden md:block"
                alt="to close modal"
              />
            </button>
          </>
        )}
        <div className={styles.headerLogo}>
          <Link href={`/${region}`}>
            <img
              src="/logo.svg"
              draggable="false"
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <img
              src="/logo.svg"
              style={{ width: "101.69px !important", height: "55.51px !important" }}
              draggable="false"
              className="block md:hidden"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </Link>
        </div>
        <ul className={clsx(styles.menu, { [styles.hidden]: open })}>
          <li>
            <Link href={`/${region}/products`} className="products">
              Products
            </Link>
          </li>
          <li>
            <Link href={`/${region}/categories`} className="categories">
              Categories
            </Link>
          </li>
          <li>
            <Link href={`/${region}/brands`} className="brands">
              Brands
            </Link>
          </li>
        </ul>
        <div>
          <button
            onClick={toggleSearch}
            className={clsx(styles.search_btn, { [styles.hidden]: open })}
          >
            <img
              src="/search_icon.svg"
              style={{ width: "45px !important", height: "29px !important", display: "inline-block" }}
              draggable="false"
              className="hidden md:block"
              alt="Search icon"
            />
          </button>
        </div>
        <div className={clsx(styles.mail, { [styles.hidden]: open })}>
          <img
            src="/mail_icon.svg"
            style={{ width: "20.71px !important", height: "15.53px !important" }}
            draggable="false"
            alt="Mail Icon"
          />
          <Link href="mailto:inquiry@gulfinstruments.com">
            <span>inquiry@gulfinstruments.com</span>
          </Link>
        </div>
        <div
          className={clsx(styles.searchPanel, {
            [styles.visible]: open,
            [styles.hidden]: !open,
          })}
        >
          <div className={styles.search}>
            <form className={styles.panel} onSubmit={handleSubmit}>
              <button type="submit">
                <img
                  src="/search.svg"
                  style={{ width: "20px !important", height: "20px !important" }}
                  draggable="false"
                  alt="Search icon"
                />
              </button>
              <input
                type="text"
                name="query"
                placeholder="What Are You Looking For?"
                value={searchValue} // Привязка значения
                onChange={(e) => setSearchValue(e.target.value)} // Обработка изменения
              />
            </form>
            <button className={styles.close} onClick={toggleSearch}>
              <img
                src="/x.svg"
                style={{ width: "12px !important", height: "12px !important", alignItems: "center" }}
                draggable="false"
                alt="Close search"
              />
            </button>
          </div>
        </div>
        <p className={clsx(styles.phone, { [styles.hidden]: open })}>
          <Link href="tel:+971556305217">+971 55 630 52 17</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
