"use client";

import { useState } from "react";

const Tabs = ({ styles, product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <div className={styles.tabs}>
        <button
          className={`${styles.first} ${activeTab === "description" ? styles.buttonActive : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`${styles.second} ${activeTab === "shipping" ? styles.buttonActive : ""}`}
          onClick={() => setActiveTab("shipping")}
        >
          Shipping Details
        </button>
      </div>
      <div className={styles.paragraph}>
        <div
          className={`${styles.content} ${activeTab === "description" ? styles.active : ""}`}
        >
          <p>
            The {product.name} retractor has long-life spring for lasting
            performance and full range of motion with 360˚ swivel hanger. Easy
            tension adjustment with no tools required.
            <br />
            <br />
            <strong>Search Keywords: {product.name}</strong>
          </p>
        </div>
        <div
          className={`${styles.content} ${activeTab === "shipping" ? styles.active : ""}`}
        >
          <p>
            Tools & Trade use reputable courier service to deliver{" "}
            {product.brand} products right to your door. All orders are
            dispatched within 1-3 working days after stock availability.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
