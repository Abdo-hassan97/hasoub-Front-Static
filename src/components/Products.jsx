import React from 'react'
import styles from "../pages/Home.module.css";

// Third section images
import thirdSectionBg from "../assets/images/Home/bg3.png";
import productImageOne from "../assets/images/Home/gb1.png";
import productImageTwo from "../assets/images/Home/gb2.png";
import productImageThree from "../assets/images/Home/gb3.png";
import productImageFour from "../assets/images/Home/gb3.png";
import productImageFive from "../assets/images/Home/gb4.png";
import productImageSix from "../assets/images/Home/gb5.png";
export default function Products() {
  return (
    <div>
           {/* Third Section - Our Products */}
      <section className={styles.thirdSection} id="third-section" aria-label="Our products">
        <div
          className={styles.thirdSectionBackground}
          style={{ backgroundImage: `url(${thirdSectionBg})` }}
          aria-hidden="true"
        />

        <div className={styles.thirdSectionInner}>
          <div className={styles.thirdSectionHeader}>
            <p className={styles.thirdSectionEyebrow}>OUR PRODUCTS</p>
            <p className={styles.thirdSectionSubheading}>
              Our products are crafted with precision, addressing the unique challenges faced by
              businesses in the Kingdom of Saudi Arabia and the broader Middle East. Here’s a
              glimpse into the exceptional products.
            </p>
          </div>

          <div className={styles.thirdCardsGrid}>
            {/* Row 1 */}
            <article className={styles.thirdCard}>
              <div className={styles.thirdCardImageWrapper}>
                <img src={productImageOne} alt="Pre-terminated Solutions" />
                {/* <div className={styles.thirdCardIcon}>
                  <img src={productIconIdea} alt="" aria-hidden="true" />
                </div> */}
              </div>
              <div className={styles.thirdCardContent}>
                <h3>Pre-terminated Solutions</h3>
                <p>
                  We offer advanced Structured Cabling Solutions for seamless, smart wiring tailored
                  to modern infrastructures.
                </p>
                <button type="button" className={styles.thirdCardLink}>
                  READ MORE
                  <span className={styles.thirdCardArrow}>→</span>
                </button>
              </div>
            </article>

            <article className={styles.thirdCard}>
              <div className={styles.thirdCardImageWrapper}>
                <img src={productImageTwo} alt="Fiber Optic Cables" />
                {/* <div className={styles.thirdCardIcon}>
                  <img src={productIconFiber} alt="" aria-hidden="true" />
                </div> */}
              </div>
              <div className={styles.thirdCardContent}>
                <h3>Fiber Optic Cables</h3>
                <p>
                  Cutting-edge fiber optic cable products designed to optimize performance and
                  network capabilities.
                </p>
                <button type="button" className={styles.thirdCardLink}>
                  READ MORE
                  <span className={styles.thirdCardArrow}>→</span>
                </button>
              </div>
            </article>

            <article className={styles.thirdCard}>
              <div className={styles.thirdCardImageWrapper}>
                <img src={productImageThree} alt="Fiber Optic Connectivity" />
                {/* <div className={styles.thirdCardIcon}>
                  <img src={productIconCables} alt="" aria-hidden="true" />
                </div> */}
              </div>
              <div className={styles.thirdCardContent}>
                <h3>Fiber Optic Connectivity</h3>
                <p>
                  Discover unparalleled Fiber Optic Connectivity with our products, enhancing
                  communication and reliability.
                </p>
                <button type="button" className={styles.thirdCardLink}>
                  READ MORE
                  <span className={styles.thirdCardArrow}>→</span>
                </button>
              </div>
            </article>

            {/* Row 2 */}
            <article className={styles.thirdCard}>
              <div className={styles.thirdCardImageWrapper}>
                <img src={productImageFour} alt="Datacenter Solutions" />
                {/* <div className={styles.thirdCardIcon}>
                  <img src={productIconIdea} alt="" aria-hidden="true" />
                </div> */}
              </div>
              <div className={styles.thirdCardContent}>
                <h3>Datacenter Solutions</h3>
                <p>
                  Comprehensive suite of data center products, designed to enhance efficiency,
                  resilience, and scalability.
                </p>
                <button type="button" className={styles.thirdCardLink}>
                  READ MORE
                  <span className={styles.thirdCardArrow}>→</span>
                </button>
              </div>
            </article>

            <article className={styles.thirdCard}>
              <div className={styles.thirdCardImageWrapper}>
                <img src={productImageFive} alt="Copper Cables" />
                {/* <div className={styles.thirdCardIcon}>
                  <img src={productIconFiber} alt="" aria-hidden="true" />
                </div> */}
              </div>
              <div className={styles.thirdCardContent}>
                <h3>Copper Cables</h3>
                <p>
                  High-performance copper cable solutions for seamless data transmission and
                  communication needs.
                </p>
                <button type="button" className={styles.thirdCardLink}>
                  READ MORE
                  <span className={styles.thirdCardArrow}>→</span>
                </button>
              </div>
            </article>

            <article className={styles.thirdCard}>
              <div className={styles.thirdCardImageWrapper}>
                <img src={productImageSix} alt="CCTV" />
                {/* <div className={styles.thirdCardIcon}>
                  <img src={productIconCables} alt="" aria-hidden="true" />
                </div> */}
              </div>
              <div className={styles.thirdCardContent}>
                <h3>CCTV</h3>
                <p>
                  Empower security with our advanced CCTV products and cutting-edge surveillance
                  solutions.
                </p>
                <button type="button" className={styles.thirdCardLink}>
                  READ MORE
                  <span className={styles.thirdCardArrow}>→</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
      
    </div>
  )
}
