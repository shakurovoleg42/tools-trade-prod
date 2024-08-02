'use client';
import styles from "@/styles/FeaturureCategories.module.css";
import Image from "next/image";
import fetchService from "@/services/fetchs";
import Link from "next/link";
import { useParams } from "next/navigation";

const FeatureCategories = async ({ params }) => {
  // const region = params.region;
  // const data = await fetchService.homeCategories(params);

  // console.log(123);
  // const { region } = useParams();

  const { region } = useParams();

  // const handleShowMore = (slug) => {
  //   window.location.href = `/${region}/categories/accessories`;
  // };
  


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Featured categories</h2>
      </div>
      <div className={styles.items}>
        <div className={styles.first} onClick={() => window.location.href = `/${region}/categories/accessories`}>
          <Image
            src="/Accessories.png"
            width={190}
            height={190}
            draggable="false"
            alt="accessories"
          />
          <div className={styles.text}>
            {/* <Link href={`/${region}/categories/accessories`}> */}
            <p>Accessories</p>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles.second} onClick={() => window.location.href = `/${region}/categories/communication-modules`}>
          <Image
            src="/Communication_modules.png"
            width={190}
            height={190}
            draggable="false"
            alt="comm modules"
          />
          <div className={styles.text}>
            <p>communication Modules</p>
          </div>
        </div>
        <div className={styles.third} onClick={() => window.location.href = `/${region}/categories/controls-plcs-peripherals`}>
          <Image
            src="/PLCS.png"
            width={190}
            height={190}
            draggable="false"
            alt="PLCS"
          />
          <div className={styles.text}>
            <p>Controls, Plcs, & Peripherals</p>
          </div>
        </div>
        <div className={styles.thirdty} onClick={() => window.location.href = `/${region}/categories/safety`}>
          <Image
            src="/safety.png"
            width={190}
            height={190}
            draggable="false"
            alt="safety"
          />
          <div className={styles.text}>
            <p>Safety</p>
          </div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.thirdty} onClick={() => window.location.href = `/${region}/categories/meters`}>
          <Image
            src="/meters.png"
            width={190}
            height={190}
            draggable="false"
            alt="meters"
          />
          <div className={styles.text}>
            <p>Meters</p>
          </div>
        </div>
        <div className={styles.thirdty} onClick={() => window.location.href = `/${region}/categories/interface-modules`}>
          <Image
            src="/interface-modules.png"
            width={190}
            height={190}
            draggable="false"
            alt="accessories"
          />
          <div className={styles.text}>
            <p>Interface Modules</p>
          </div>
        </div>
        <div className={styles.thirdty} onClick={() => window.location.href = `/${region}/categories/counter-instruments`}>
          <Image
            src="/counters&timers.png"
            width={190}
            height={190}
            draggable="false"
            alt="accessories"
          />
          <div className={styles.text}>
            <p>Counters & Timers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureCategories;
