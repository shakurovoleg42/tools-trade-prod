"use client";
import Link from "next/link";

const Call = ({ styles }) => {
  return (
    <div className={styles.toCall}>
      <Link href="mailto:inquiry@gulfinstruments.com">
        <button>
          Request a quote
        </button>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=971556305217">
        <button>Whatsapp us</button>
      </Link>
    </div>
  );
};

export default Call;
