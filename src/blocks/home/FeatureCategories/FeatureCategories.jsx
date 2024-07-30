import styles from "@/styles/FeaturureCategories.module.css";
import Image from "next/image";

const FeatureCategories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Featured categories</p>
      </div>
      <div className={styles.items}>
        <div className={styles.first}>
          <Image
            src="/Accessories.png"
            width={190}
            height={190}
            draggable="false"
            alt="accessories"
          />
          <div className={styles.text}>
            <p>Accessories</p>
          </div>
        </div>
        <div className={styles.second}>
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
        <div className={styles.third}>
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
      </div>
      <div className={styles.items}>
        <div className={styles.thirdty}>
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
        <div className={styles.thirdty}>
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
        <div className={styles.thirdty}>
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
        <div className={styles.thirdty}>
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
