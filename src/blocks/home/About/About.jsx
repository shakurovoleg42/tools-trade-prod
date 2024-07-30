import styles from "@/blocks/home/About/About.module.css";
import "/public/fonts/style.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_content}>
        <div className={styles.about_title}>
          <p>About Us</p>
        </div>
        <div className={styles.about_paragraph}>
          <p>
            Welcome to Tools & Trade, your premier source in Dubai, UAE for
            top-tier Test and Measuring Instruments and Industrial Equipment.
            Serving customers across the United Arab Emirates, Saudi Arabia,
            Oman, and Qatar, we are a trusted name in the industry, dedicated to
            offering a wide range of precision tools to meet the diverse needs
            of our clients.<br></br>
            <br></br>At Tools & Trade, we recognize the critical importance of
            accuracy and reliability in various industries. Our extensive
            collection of test and measuring instruments ensures that businesses
            and institutions have access to high-quality, compliant products
            that prioritize performance and precision.<br></br>
            <br></br>What sets us apart is our unwavering commitment to
            affordability. Tools & Trade is synonymous with highly competitive
            prices, guaranteeing that our clients receive the best value for
            their investment without compromising on the quality of our
            instruments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
