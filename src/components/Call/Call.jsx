"use client";
import Link from "next/link";

const Call = ({ styles }) => {
  const handleScroll = () => {
    const section = document.getElementById("quote");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.toCall}>
      <button onClick={handleScroll}>Request a quote</button>
      <Link href='https://api.whatsapp.com/send?phone=971556305217'>
      <button>Whatsapp us</button>
      </Link>
      
    </div>
  );
};

export default Call;
