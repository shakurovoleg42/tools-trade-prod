"use client";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import styles from "@/styles/Request.module.css";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

const Request = ({email_address}) => {
  const { region } = useParams();
  const pathname = usePathname();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending...", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/contact`, formData);
      toast.success("Thank you for your message!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    //   setFormData({
    //     name: "",
    //     email: "",
    //     message: "",
    // });
    console.log(res);
    } catch (error) {
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };

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
              <strong>Tools & Trade</strong> Shop # 85 Nakheel Center, Deira Dubai
            </p>
          </div>
          <div className={styles.linkContainer}>
            <p className={styles.linkToMail}>
              <Link href={`mailto:${address}`}>
                {address}
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.requestForm}>
          <div className={styles.formContainer}>
            <p className={styles.RequestQuote}>Request a Quote</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formControl1}
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group" style={{ marginTop: "22.44px" }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formControl2}
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.messageInput}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formControl3}
                  placeholder="Your Message"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <ToastContainer />
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
