"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from "react";
import styles from "@/styles/Banner.module.css";

const Banner = ({ currentRegion }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/contact`,
        formData
      );
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
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
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
              <div className="form-group">
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
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formControl3}
                  placeholder="Your Message"
                />
                <div style={{ textAlign: "center" }}>
                  <button type="submit" className={styles.submit}>
                    SEND INQUIRY
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
        <div className={styles.iac}>
          <h1 className={styles.iacText}>
            Industrial Automation
            <br />& Control supplier in {currentRegion.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
