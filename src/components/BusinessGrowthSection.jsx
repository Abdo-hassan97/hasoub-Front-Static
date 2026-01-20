import React from "react";
import styles from "./BusinessGrowthSection.module.css";
import playIcon from "../assets/images/Home/play-button.png"; // استبدلي بالمسار الصحيح للصورة
import bgImage from "../assets/images/BusinessGrowth.png"; // استبدلي بالمسار الصحيح للصورة

export default function BusinessGrowthSection() {
  return (
    <section
      className={styles.businessGrowthSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p className={styles.eyebrow}>business growth</p>
            <h2 className={styles.title}>HASOUB Has Grown Over The Years</h2>
            <p className={styles.subtitle}>
              Carving a consistent and impressive record of business growth.
            </p>
          </div>
          <div className={styles.videoButtonWrapper}>
            <button className={styles.playButton} aria-label="Play video">
              <img src={playIcon} alt="Play video" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
