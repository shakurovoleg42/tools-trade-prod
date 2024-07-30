"use client";

import styles from "@/styles/Header.module.css";
import "react-modern-drawer/dist/index.css";

import { useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import DrawerComponent from "react-modern-drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { region } = useParams();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleSearch = () => {
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formData);

    params.set("query", fields.query);
    router.replace(`/${region}/search` + "?" + params.toString());
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.burger}>
          <button onClick={toggleDrawer}>
            <Image
              src="/hamburger.svg"
              width={44}
              height={44}
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
            </DrawerComponent>
            <button className={styles.CloseModal} onClick={toggleDrawer}>
              <Image
                src="/x.svg"
                width={25}
                height={25}
                draggable="false"
                className="hidden md:block"
                alt="to close modal"
              />
            </button>
          </>
        )}
        <div className={styles.headerLogo}>
          <Link href={`/${region}`}>
            <Image
              src="/logo.svg"
              width={111.69}
              height={74.51}
              draggable="false"
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/logo.svg"
              width={101.69}
              height={55.51}
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
            <Image
              src="/search_icon.svg"
              width={45}
              height={29}
              draggable="false"
              className="hidden md:block"
              style={{ display: "inline-block" }}
              alt="При клике выпадает меню"
            />
          </button>
        </div>
        <div className={clsx(styles.mail, { [styles.hidden]: open })}>
          <Image
            src="/mail_icon.svg"
            width={20.71}
            height={15.53}
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
          <form className={styles.panel} onSubmit={handleSubmit}>
            <button type="submit">
              <Image
                src="/search.svg"
                width={20}
                height={20}
                draggable="false"
                alt="search on active input"
              />
            </button>
            <input
              type="text"
              name="query"
              placeholder="What Are You Looking For?"
            />
          </form>
          <button className={styles.close} onClick={toggleSearch}>
            <Image
              src="/x.svg"
              width={12}
              height={12}
              draggable="false"
              style={{ alignItems: "center" }}
              alt="to close search input"
            />
          </button>
        </div>
        <p className={clsx(styles.phone, { [styles.hidden]: open })}>
          <Link href="tel:+971556305217">+971 55 630 52 17</Link>
        </p>
      </div>
    </div>
  );
};
export default Header;
