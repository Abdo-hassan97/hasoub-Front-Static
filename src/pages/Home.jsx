import { useEffect, useMemo, useState } from "react";
import styles from "./Home.module.css";
import ConsultationSection from "../components/ConsultationSection";
import CustomerSaying from "../components/CustomerSaying";
import Products from "../components/Products";
import Partner from "../components/Partner";
import BusinessGrowthSection from "../components/BusinessGrowthSection";

import { Link } from "react-router-dom"; // لو بتستخدمي React Router


import slidePrimary from "../assets/images/Home/slide.png";
import slideAltOne from "../assets/images/Home/slide1.png";
import slideAltTwo from "../assets/images/Home/slide2.png";
import slideAltThree from "../assets/images/Home/slide3.png";
// import slideAltFour from "../assets/images/Home/slide4.png";
import slideAltFive from "../assets/images/Home/slide5.png";
import slideAltSix from "../assets/images/Home/slide6.png";
import slideAltSeven from "../assets/images/Home/slide7.png";
import heroLayer from "../assets/images/Home/layer1.png";
import heroLayer2 from "../assets/images/Home/layer2.png";
import heroLayer3 from "../assets/images/Home/layer3.png";
import heroLayer4 from "../assets/images/Home/layer4.png";
import heroLayer5 from "../assets/images/Home/layer5.png";
import heroLayer6 from "../assets/images/Home/layer6.png";
import heroLayer7 from "../assets/images/Home/layer7.png";

// Second section card images
import secondCardImageOne from "../assets/images/Home/Service1.png";
import secondCardImageTwo from "../assets/images/Home/Service2.png";
import secondCardImageThree from "../assets/images/Home/Service3.png";


// import productIconIdea from "../assets/images/Home/box-search.png";
// import productIconFiber from "../assets/images/Home/bending 1.png";
// import productIconCables from "../assets/images/Home/welding-mask 1.png";

// Fourth section logos (images only)
import vendorLogoOne from "../assets/images/Home/slidee1.png";
import vendorLogoTwo from "../assets/images/Home/slidee2.png";
import vendorLogoThree from "../assets/images/Home/slidee3.png";
import vendorLogoFour from "../assets/images/Home/slidee4.png";
import vendorLogoFive from "../assets/images/Home/slidee5.png";
import vendorLogoSix from "../assets/images/Home/slidee6.png";
import vendorLogoSeven from "../assets/images/Home/slidee7.png";
import vendorLogoEight from "../assets/images/Home/slidee8.png";
import vendorLogoNine from "../assets/images/Home/slidee9.png";
import vendorLogoTen from "../assets/images/Home/slidee10.png";

// Fifth section (customers) images
// import customerLogoOne from "../assets/images/Home/p1.png";
// import customerLogoTwo from "../assets/images/Home/p2.png";
// import customerLogoThree from "../assets/images/Home/p3.png";
// import customerLogoFour from "../assets/images/Home/p4.png";
// import customerLogoFive from "../assets/images/Home/p5.png";
// import customerLogoSix from "../assets/images/Home/slidee2.png";
// import customerLogoSeven from "../assets/images/Home/slidee3.png";
// import customerLogoEightImg from "../assets/images/Home/slidee4.png";
// import customerLogoNineImg from "../assets/images/Home/slidee5.png";
// import customerLogoTenImg from "../assets/images/Home/slidee6.png";










const heroSlides = [
  {
    id: "Structured-cabling",
    tagline: "Infrastructure Solutions",
    preTitle: "Structured",
    accentTitle: "Cabling",
    description:
      "Solutions empower enterprises for mission-critical applications, ensuring today’s success and long-term profitability.",
    ctaLabel: "MORE DETAILS",
    ctaHref: "#structured-cabling",
    image: slidePrimary,
    layer: heroLayer,
  },
  {
    id: "data-centers",
    tagline: "Offers security solutions",
    preTitle: "CCTV",
    accentTitle: "Systems",
    description:
      "Enhance your security with our CCTV Systems with cameras, monitors, and recording devices. Use areas such as homes, and businesses.",
    ctaLabel: "MORE DETAILS",
    ctaHref: "#data-centers",
    image: slideAltOne,
    layer: heroLayer2,
  },
  {
    id: "managed-services",
    tagline: "Our specialists offer best",
    preTitle: "Datacenter",
    accentTitle: "Solutions",
    description:
      "And maintenance for vital Datacenter Facilities. Adhering to international standards.",
    ctaLabel: "MORE DETAILS",
    ctaHref: "#managed-services",
    image: slideAltTwo,
    layer: heroLayer3,
  },
  {
    id: "smart-cities",
    tagline: "Technological Solutions",
    preTitle: "Integrated",
    accentTitle: "Smart Cities",
    description:
      "We are your reliable source of fiber optic cables & accessories, structured cabling solutions..",
    ctaLabel: "MORE DETAILS",
    ctaHref: "Technology",
    image: slideAltSeven,
    layer: heroLayer4,
  },
  {
    id: "managed-services",
    tagline: "Power up with our",
    preTitle: "UPS",
    accentTitle: "Solutions",
    description:
      "Our UPS systems safeguard against outages, ensuring continuous operations & protection for critical equipment..",
    ctaLabel: "MORE DETAILS",
    ctaHref: "#managed-services",
    image: slideAltThree,
    layer: heroLayer5,
  },
  {
    id: "cyber-defense",
    tagline: "Exagate and Boreas",
    preTitle: "cooling",
    accentTitle: "Solutions",
    description:
      "optimize temperature control in data centers. These systems ensure efficient cooling, preserving equipment..",
    ctaLabel: "MORE DETAILS",
    ctaHref: "#cyber-defense",
    image: slideAltFive,
    layer: heroLayer6,
  },
  {
    id: "cloud-transformation",
    tagline: "Data Center with Comprehensive",
    preTitle: "Monitoring",
    accentTitle: "Solutions",
    description:
      "Stay Ahead of the Curve with Real-Time Insights, Proactive Management, and Seamless Adaptability..",
    ctaLabel: "MORE DETAILS",
    ctaHref: "#cloud-transformation",
    image: slideAltSix,
    layer: heroLayer7,
  },
  // {
  //   id: "ai-analytics",
  //   tagline: "AI + Analytics",
  //   preTitle: "Intelligent",
  //   accentTitle: "Analytics",
  //   description:
  //     "Turn raw telemetry into actionable insights with accelerated data pipelines and domain-trained AI models.",
  //   ctaLabel: "Learn More",
  //   ctaHref: "#ai-analytics",
  //   image: slideAltSeven,
  // },
];

const vendorLogos = [
  vendorLogoOne,
  vendorLogoTwo,
  vendorLogoThree,
  vendorLogoFour,
  vendorLogoFive,
  vendorLogoSix,
  vendorLogoSeven,
  vendorLogoEight,
  vendorLogoNine,
  vendorLogoTen,
];

// const customers = [
//   { id: "aou", name: "Arab Open University", logo: customerLogoOne },
//   { id: "saei", name: "Saudia Aerospace Engineering", logo: customerLogoTwo },
//   { id: "kaust", name: "King Abdullah University", logo: customerLogoThree },
//   { id: "datacom", name: "Datacom", logo: customerLogoFour },
//   { id: "datwyler", name: "Datwyler", logo: customerLogoFive },

// ];

const VENDORS_PER_SLIDE = 4;
const CUSTOMERS_PER_VIEW = 5;

export default function Home() {
  const slides = useMemo(() => heroSlides, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const vendorSlides = useMemo(() => {
    const grouped = [];
    for (let i = 0; i < vendorLogos.length; i += VENDORS_PER_SLIDE) {
      grouped.push(vendorLogos.slice(i, i + VENDORS_PER_SLIDE));
    }
    return grouped;
  }, []);
  const [vendorSlideIndex, setVendorSlideIndex] = useState(0);
  // const [customerIndex, setCustomerIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => {
      window.clearInterval(timer);
    };
  }, [slides.length]);

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const showVendorPrev = () => {
    setVendorSlideIndex((prev) => (prev - 1 + vendorSlides.length) % vendorSlides.length);
  };

  const showVendorNext = () => {
    setVendorSlideIndex((prev) => (prev + 1) % vendorSlides.length);
  };

  // const maxCustomerIndex = Math.max(customers.length - CUSTOMERS_PER_VIEW, 0);

  // const showCustomerPrev = () => {
  //   setCustomerIndex((prev) => Math.max(prev - 1, 0));
  // };

  // const showCustomerNext = () => {
  //   setCustomerIndex((prev) => Math.min(prev + 1, maxCustomerIndex));
  // };

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection} id="hero" aria-label="Hero slider">
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: `url(${activeSlide.image})` }}
          role="presentation"
        />
        <div className={styles.heroGradient} aria-hidden="true" />

        <div className={styles.heroContent}>
          <p className={styles.heroTag}>{activeSlide.tagline}</p>

          <h1 className={styles.heroTitle}>
            <span>{activeSlide.preTitle}</span>
            <img
              src={activeSlide.layer || heroLayer}
              alt=""
              aria-hidden="true"
              className={styles.heroLayer}
            />
            <span className={styles.heroAccent}>{activeSlide.accentTitle}</span>
          </h1>

          <p className={styles.heroSubtitle}>{activeSlide.description}</p>

          <a className={styles.heroCta} href={activeSlide.ctaHref}>
            {activeSlide.ctaLabel}
          </a>
        </div>

        <div className={styles.heroArrows} role="group" aria-label="Slide navigation">
          <button type="button" className={styles.arrowButton} onClick={showPrev} aria-label="Previous slide">
            <span className={styles.arrowIcon}>←</span>
          </button>
          <button type="button" className={styles.arrowButton} onClick={showNext} aria-label="Next slide">
            <span className={styles.arrowIcon}>→</span>
          </button>
        </div>

        {/* <div className={styles.heroDots}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide: ${slide.preTitle} ${slide.accentTitle}`}
            />
          ))}
        </div> */}
      </section>

      {/* Second Section */}
      <section className={styles.secondSection} id="second-section" aria-label="Company highlights">
        <div className={styles.secondSectionOverlay} />

        <div className={styles.secondSectionInner}>
          <div className={styles.secondSectionText}>
          
            <h2 className={styles.secondSectionTitle}>
              Hasoub is a comprehensive IT
              <br />
              solutions provider that offers
            </h2>
          </div>

          <div className={styles.secondSectionCards}>
            <article className={styles.secondCard}>
              <img
                className={styles.secondCardImage}
                src={secondCardImageOne}
                alt="How we can help"
              />
              <div className={styles.secondCardLabel}>
                <span>How We Can Help?</span>
              </div>
            </article>

            <article className={styles.secondCard}>
              <img
                className={styles.secondCardImage}
                src={secondCardImageTwo}
                alt="Why partner with us"
              />
              <div className={styles.secondCardLabel}>
              
                <span>Why Partner With Us ?</span>
              </div>
            </article>

            <article className={styles.secondCard}>
              <img
                className={styles.secondCardImage}
                src={secondCardImageThree}
                alt="Client success stories"
              />
              <div className={styles.secondCardLabel}>
                <span>Client Success Stories</span>
              </div>
            </article>
          </div>
        </div>
      </section>

   <Products />

   {/* Fourth Section - Vendors */}
<section className={styles.fourthSection} id="vendors" aria-label="Vendors carousel">
  <div className={styles.fourthInner}>
    <div className={styles.fourthHeader}>
      <div className={styles.fourthHeaderPrimary}>
        <p className={styles.fourthEyebrow}>Vendors</p>
        <h2 className={styles.fourthTitle}>
          Reliable vendors ensuring quality,
          <br />
          efficiency & innovation
        </h2>
      </div>
      <p className={styles.fourthDescription}>
        Our solutions expertise allows your business to grow, and increase productivity. No
        matter the business, Hasoub has you covered with industry compliant solutions,
        customized to your company’s specific needs.
      </p>
    </div>

    <div className={styles.vendorCarousel}>
      <button
        type="button"
        className={styles.vendorArrow}
        onClick={showVendorPrev}
        aria-label="Previous vendors"
      >
        <span>‹</span>
      </button>

      <div className={styles.vendorViewport}>
        <div
          className={styles.vendorTrack}
          style={{ transform: `translateX(-${vendorSlideIndex * 100}%)` }}
        >
          {vendorSlides.map((group, slideIndex) => (
            <div className={styles.vendorSlide} key={`vendor-slide-${slideIndex}`}>
              {group.map((logoSrc, itemIndex) => (
                <a
                  href="/Shop" // كل صورة دلوقتي clickable
                  key={`vendor-logo-${slideIndex}-${itemIndex}`}
                  className={styles.vendorLogoCard}
                >
                  <img src={logoSrc} alt="Vendor logo" />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.vendorArrow}
        onClick={showVendorNext}
        aria-label="Next vendors"
      >
        <span>›</span>
      </button>
    </div>

    <div className={styles.vendorDots} role="tablist" aria-label="Vendor slide navigation">
      {vendorSlides.map((_, index) => (
        <button
          key={`vendor-dot-${index}`}
          type="button"
          className={`${styles.vendorDot} ${index === vendorSlideIndex ? styles.activeVendorDot : ""}`}
          onClick={() => setVendorSlideIndex(index)}
          aria-label={`Show vendor slide ${index + 1}`}
          aria-pressed={index === vendorSlideIndex}
        />
      ))}
    </div>
  </div>
</section>


      {/* Fifth Section - Customers */}
      <Partner />

      <ConsultationSection />
      <CustomerSaying />
      <BusinessGrowthSection />


    </div>
  );
}
