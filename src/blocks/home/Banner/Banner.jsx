import styles from "@/styles/Banner.module.css";

const Banner = ({ currentRegion }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
        <div className={styles.requestForm}>
          <div className={styles.formContainer}>
            <p className={styles.RequestQuote}>Request a Quote</p>
            <form>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.formControl1}
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={styles.formControl2}
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.messageInput}>
                <input
                  className={styles.formControl3}
                  placeholder="Your Message"
                ></input>
                <div style={{ textAlign: "center" }}>
                  <button type="submit" className={styles.submit}>
                    SEND INQUIRY
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.iac}>
          <h1 className={styles.iacText}>
            Industrial Automation<br></br>& Control supplier in{" "}
            {currentRegion.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
