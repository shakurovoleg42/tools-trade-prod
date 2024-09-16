import styles from "@/styles/Footer.module.css";

import Link from "next/link";

const Footer = ({ region, logo, phone, mail }) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBox}>
        <div className={styles.logo}>
          <Link href={`/${region}`}>
            <img
              src={logo}
              draggable="false"
              alt="Footer logo"
            />
          </Link>
        </div>
        <div className={styles.listLinks}>
          <p>Useful Links</p>
          <ul>
            <li>
              <Link href={`/${region}`}>Home</Link>
            </li>
            <li>
              <Link href={`/${region}/products`}>Products</Link>
            </li>
            <li>
              <Link href={`/${region}/categories`}>Categories</Link>
            </li>
            <li>
              <Link href={`/${region}/brands`}>Brands</Link>
            </li>
          </ul>
        </div>
        <div className={styles.addressLinks}>
          <p className={styles.title}>Information</p>
          <div className={styles.information}>
            <div className={styles.infoBlock}>
              <p className={styles.label}>Address:</p>
              <p>Shop # 85 Nakheel Center, Deira Dubai</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.labelPhone}>Call Us:</p>
              <div>
                <p>
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </p>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.mailUs}>Mail Us:</p>
              <p>
                <Link href={`mailto:${mail}`}>
                  {mail}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
