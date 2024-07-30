"use client";

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
      <button>Whatsapp us</button>
    </div>
  );
};

export default Call;
