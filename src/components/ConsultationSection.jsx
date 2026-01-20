import React from "react";
import styles from "./ConsultationSection.module.css";
import bgImage from "../assets/images/Home/bg6.png";

export default function ConsultationSection() {
  return (
    <section className={styles.consultationSection}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.contentWrapper}>
          
          {/* ✅ Left Text */}
          <div className={styles.textBlock}>
            <p className={styles.eyebrow}>CONSULTATION</p>
            <h2 className={styles.title}>
              Request For <br /> Consultation
            </h2>
            <p className={styles.subtitle}>
              The form below allows you to request a free quote from us for your
              specific project, no matter how big or small it is.
            </p>
          </div>

          {/* ✅ Right Form */}
          <div className={styles.formBlock}>
            <form className={styles.form}>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="City Name" />
              <button type="submit">SUBMIT REQUEST</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
