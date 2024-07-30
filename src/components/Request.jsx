"use client";

import styles from "@/styles/Request.module.css";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

const Request = () => {
  const { region } = useParams();
  const pathname = usePathname();

  if (pathname === `/${region}`) {
    return null;
  }

  return (
    <div id="quote" className={styles.container}>
      <div className={styles.rowContainer}>
        <div className={styles.contactsContainer}>
          <div className={styles.contactUsContainer}>
            <p className={styles.contactUs}>Contact Us</p>
          </div>
          <div className={styles.contactTextFirstContainer}>
            <p className={styles.contactTextFirst}>
              Please don’t hesitate to contact us with any comments, questions,
              or special requests
            </p>
          </div>
          <div className={styles.contactTextSecondContainer}>
            <p className={styles.contactTextSecond}>
              <strong>Tools & Trade</strong> Shop # 85 Nakheel Center, Deira
              Dubai
            </p>
          </div>
          <div className={styles.linkContainer}>
            <p className={styles.linkToMail}>
              <Link href="mailto:inquiry@gulfinstruments.com">
                inquiry@gulfinstruments.com
              </Link>
            </p>
          </div>
        </div>
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
              <div className="form-group" style={{ marginTop: "22.44px" }}>
                <input
                  type="email"
                  className={styles.formControl2}
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.messageInput}>
                <textarea
                  className={styles.formControl3}
                  placeholder="Your Message"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className={styles.submit}>
                  SEND INQUIRY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
