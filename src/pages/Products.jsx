import { useState, useRef, useEffect } from "react";
import styles from "./Products.module.css";
import section1Image from "../assets/images/Products/section1.png";
import section2Image from "../assets/images/Products/section2.png";
import section3Image from "../assets/images/Products/section3.png";
import orangebgImage from "../assets/images/Products/orangebg.png";
import streetLightIcon from "../assets/images/Products/street-light.png";
import trafficIcon from "../assets/images/Products/traffic.png";
import solarPanelIcon from "../assets/images/Products/solar-panel.png";
import batteryChargeIcon from "../assets/images/Products/battery-charge.png";
import img1 from "../assets/images/Products/img1.png";
import img2 from "../assets/images/Products/img2.png";
import img3 from "../assets/images/Products/img3.png";
import img4 from "../assets/images/Products/img4.png";
import img5 from "../assets/images/Products/img5.png";
import whitebgImage from "../assets/images/Products/whitebg.png";
import arrowLeft from "../assets/images/Products/arrowleft.png";
import arrowRight from "../assets/images/Products/arrowright.png";
import orangegraybg from "../assets/images/Products/orangegraybg.png";
import ProductsComponent from "../components/Products";

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const cardsRef = useRef(null);

  const handleArrowClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveCardIndex(index);
  };

  const handleSolutionDetailsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Do nothing when clicking the orange button
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = 1;
      return prevIndex < maxIndex ? prevIndex + 1 : prevIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const minIndex = -3;
      return prevIndex > minIndex ? prevIndex - 1 : prevIndex;
    });
  };

  useEffect(() => {
    const updateTransform = () => {
      if (cardsRef.current && cardsRef.current.children[0]) {
        const cardElement = cardsRef.current.children[0];
        const cardWidth = cardElement.offsetWidth;
        const gap = 32; // 2rem in pixels
        const translateX = -(currentIndex * (cardWidth + gap));
        cardsRef.current.style.transform = `translateX(${translateX}px)`;
      }
    };

    updateTransform();
    
    // Recalculate on window resize
    const handleResize = () => {
      updateTransform();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);
  return (
    <div className={styles.productsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} id="products-hero" aria-label="Products hero section">
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: `url(${section1Image})` }}
          role="presentation"
        />

        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>
            ENTERPRISE-GRADE IT & INFRASTRUCTURE SERVICES
          </p>

          <h1 className={styles.heroTitle}>
            Tech Empowers Growth
          </h1>

          <a href="/contact" className={styles.heroCta}>
            Contact Us Today
            <span className={styles.heroCtaArrow}>→</span>
          </a>
        </div>
      </section>

      {/* Section 2 */}
      <div className={styles.section2Container}>
      <section className={styles.section2} id="section2" aria-label="Customer-centric solutions">
        <div
          className={styles.section2Background}
          style={{ backgroundImage: `url(${section2Image})` }}
          role="presentation"
        />

        <div className={styles.section2Content}>
          <div className={styles.section2Left}>
            <h2 className={styles.section2Title}>Customer-Centric Solutions</h2>
            <p className={styles.section2Description}>
              At HASOUB, our expanding clientele across diverse sectors attests to the enhanced value streams
              we bring to their businesses. With consistent growth, we proudly stand among the top 10 systems
              integrators locally.
            </p>

            <div className={styles.section2Stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLabel}>Certified experts</span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statValue}>20+</span>
                <span className={styles.statLabel}>Years Of Experience</span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statValue}>5</span>
                <span className={styles.statLabel}>Countries Global reach</span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Customer Support</span>
              </div>
            </div>
          </div>
          <div className={styles.section2Right}></div>
        </div>
        </section>
      </div>

      {/* White Spacer */}
      <div className={styles.whiteSpacer}></div>

      {/* Section 3 */}
      <section className={styles.section3} id="section3">
        <div
          className={styles.section3Background}
          style={{ backgroundImage: `url(${section3Image})` }}
          role="presentation"
        />
        <div className={styles.section3ContentContainer}>
          <div className={styles.servicesHeader}>
            <div className={styles.servicesHeaderLeft}>
              <p className={styles.servicesEyebrow}>SOLUTIONS</p>
              <h2 className={styles.servicesTitle}>Our Comprehensive Services Include</h2>
            </div>
            <div className={styles.servicesNav}>
              <button
                type="button"
                className={styles.navButtonLeft}
                onClick={handlePrev}
                disabled={currentIndex <= -1}
                aria-label="Previous services"
              >
                <img src={arrowLeft} alt="Previous" className={styles.navButtonIcon} />
              </button>
              <button
                type="button"
                className={styles.navButtonRight}
                onClick={handleNext}
                disabled={currentIndex >= 0}
                aria-label="Next services"
              >
                <img src={arrowRight} alt="Next" className={styles.navButtonIcon} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.section3OrangeBg}
          style={{ backgroundImage: `url(${orangebgImage})` }}
          role="presentation">
            <div className={styles.section3Content}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src={streetLightIcon} alt="Structured Cabling" className={styles.serviceIconImage} />
                </div>
                <h3 className={styles.serviceTitle}>Structured Cabling</h3>
                <p className={styles.serviceDescription}>
                  High-Performance Copper And Fiber Cabling Solutions Designed To Support Reliable, Scalable, And Network Infrastructures.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src={trafficIcon} alt="Data Center" className={styles.serviceIconImage} />
                </div>
                <h3 className={styles.serviceTitle}>Data Center</h3>
                <p className={styles.serviceDescription}>
                  Complete Data Center Design, Build, And Maintenance Aligned With International Standards For Performance.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src={solarPanelIcon} alt="Network" className={styles.serviceIconImage} />
                </div>
                <h3 className={styles.serviceTitle}>Network</h3>
                <p className={styles.serviceDescription}>
                  Advanced Wired And Wireless Network Solutions Enabling Secure, Fast, And Communication Across Your Enterprise.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src={batteryChargeIcon} alt="Power & UPS" className={styles.serviceIconImage} />
                </div>
                <h3 className={styles.serviceTitle}>Power & UPS Solutions</h3>
                <p className={styles.serviceDescription}>
                  Reliable Uninterrupted Power Supply Systems That Ensure Business Continuity And Protect Mission-Critical Equipment From Outages.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.section3CardsWrapper}>
            <div className={styles.section3Cards} ref={cardsRef}>
              <div 
                className={styles.serviceCardMain}
                style={{ backgroundImage: `url(${whitebgImage})` }}
              >
              <div className={styles.serviceCardMainImage}>
                <img src={img1} alt="Datacenter Solutions" />
              </div>
              <h3 className={styles.serviceCardMainTitle}>Datacenter Solutions</h3>
              <p className={styles.serviceCardMainDescription}>
                Our specialists offer design, construction, and maintenance for vital Datacenter Facilities. Adhering to international standards, we ensure alignment with client requirements and core business activities.
              </p>
              <div className={styles.serviceCardButtonContainer}>
                <a 
                  href="#" 
                  className={styles.serviceCardArrowButton}
                  style={{ display: activeCardIndex === 0 ? 'none' : 'inline-flex' }}
                  onClick={(e) => handleArrowClick(0, e)}
                >
                  <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
                <a 
                  href="#" 
                  className={styles.serviceCardLinkButtonHover}
                  style={{ 
                    opacity: activeCardIndex === 0 ? 1 : 0,
                    visibility: activeCardIndex === 0 ? 'visible' : 'hidden',
                    transform: activeCardIndex === 0 ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                  onClick={handleSolutionDetailsClick}
                >
                  Solution Details <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
              </div>
            </div>

            <div 
              className={styles.serviceCardMain}
              style={{ backgroundImage: `url(${whitebgImage})` }}
            >
              <div className={styles.serviceCardMainImage}>
                <img src={img2} alt="CCTV" />
              </div>
              <h3 className={styles.serviceCardMainTitle}>CCTV</h3>
              <p className={styles.serviceCardMainDescription}>
                Hasoub Offers Security Solutions, Including CCTV Systems With Cameras, Monitors, And Recording Devices. Used In Public Areas, Homes, And Businesses, CCTV Enhances Security, Aids Investigations, And Provides Peace Of Mind.
              </p>
              <div className={styles.serviceCardButtonContainer}>
                <a 
                  href="#" 
                  className={styles.serviceCardArrowButton}
                  style={{ display: activeCardIndex === 1 ? 'none' : 'inline-flex' }}
                  onClick={(e) => handleArrowClick(1, e)}
                >
                  <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
                <a 
                  href="#" 
                  className={styles.serviceCardLinkButtonHover}
                  style={{ 
                    opacity: activeCardIndex === 1 ? 1 : 0,
                    visibility: activeCardIndex === 1 ? 'visible' : 'hidden',
                    transform: activeCardIndex === 1 ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                  onClick={handleSolutionDetailsClick}
                >
                  Solution Details <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
              </div>
            </div>

            <div 
              className={styles.serviceCardMain}
              style={{ backgroundImage: `url(${whitebgImage})` }}
            >
              <div className={styles.serviceCardMainImage}>
                <img src={img3} alt="Infrastructure Solutions" />
              </div>
              <h3 className={styles.serviceCardMainTitle}>Infrastructure Solutions</h3>
              <p className={styles.serviceCardMainDescription}>
                HASOUB's Structured Cabling Solutions Empower Enterprises For Mission-Critical Applications, Ensuring Today's Success And Long-Term Profitability. A Comprehensive One-Stop Shop For Network Infrastructure Needs.
              </p>
              <div className={styles.serviceCardButtonContainer}>
                <a 
                  href="#" 
                  className={styles.serviceCardArrowButton}
                  style={{ display: activeCardIndex === 2 ? 'none' : 'inline-flex' }}
                  onClick={(e) => handleArrowClick(2, e)}
                >
                  <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
                <a 
                  href="#" 
                  className={styles.serviceCardLinkButtonHover}
                  style={{ 
                    opacity: activeCardIndex === 2 ? 1 : 0,
                    visibility: activeCardIndex === 2 ? 'visible' : 'hidden',
                    transform: activeCardIndex === 2 ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                  onClick={handleSolutionDetailsClick}
                >
                  Solution Details <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
              </div>
            </div>

            <div 
              className={styles.serviceCardMain}
              style={{ backgroundImage: `url(${whitebgImage})` }}
            >
              <div className={styles.serviceCardMainImage}>
                <img src={img4} alt="Material Supply" />
              </div>
              <h3 className={styles.serviceCardMainTitle}>Material Supply</h3>
              <p className={styles.serviceCardMainDescription}>
                Our Comprehensive Procurement Solutions Provide Material Supply, Saving Clients Time And Costs. Adding Value, We Ensure A Competitive Edge And Heightened Customer Satisfaction Through Efficient Processes.
              </p>
              <div className={styles.serviceCardButtonContainer}>
                <a 
                  href="#" 
                  className={styles.serviceCardArrowButton}
                  style={{ display: activeCardIndex === 3 ? 'none' : 'inline-flex' }}
                  onClick={(e) => handleArrowClick(3, e)}
                >
                  <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
                <a 
                  href="#" 
                  className={styles.serviceCardLinkButtonHover}
                  style={{ 
                    opacity: activeCardIndex === 3 ? 1 : 0,
                    visibility: activeCardIndex === 3 ? 'visible' : 'hidden',
                    transform: activeCardIndex === 3 ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                  onClick={handleSolutionDetailsClick}
                >
                  Solution Details <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
              </div>
            </div>

            <div 
              className={styles.serviceCardMain}
              style={{ backgroundImage: `url(${whitebgImage})` }}
            >
              <div className={styles.serviceCardMainImage}>
                <img src={img5} alt="Consultation" />
              </div>
              <h3 className={styles.serviceCardMainTitle}>Consultation</h3>
              <p className={styles.serviceCardMainDescription}>
                Elevate Business Success With Our Advanced Structured Cabling Solutions. HASOUB Serves As Your One-Stop Shop, Offering Top-Tier Products To Meet Diverse Network Infrastructure Needs, Ensuring Sustained Success.
              </p>
              <div className={styles.serviceCardButtonContainer}>
                <a 
                  href="#" 
                  className={styles.serviceCardArrowButton}
                  style={{ display: activeCardIndex === 4 ? 'none' : 'inline-flex' }}
                  onClick={(e) => handleArrowClick(4, e)}
                >
                  <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
                <a 
                  href="#" 
                  className={styles.serviceCardLinkButtonHover}
                  style={{ 
                    opacity: activeCardIndex === 4 ? 1 : 0,
                    visibility: activeCardIndex === 4 ? 'visible' : 'hidden',
                    transform: activeCardIndex === 4 ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                  onClick={handleSolutionDetailsClick}
                >
                  Solution Details <img src={arrowRight} alt="Arrow" className={styles.serviceCardArrowIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3ContentBottom}>
          <div className={styles.section3ContentBottomImage}>
            <img src={orangegraybg} alt="Section 3 Content Bottom" />
          </div>
          <div className={styles.consultancyContainer}>
            <div className={styles.consultancyLeft}>
              <p className={styles.consultancyEyebrow}>GET FREE CONSULTANCY</p>
              <h2 className={styles.consultancyTitle}>Or Call Us For Consultancy</h2>
              <p className={styles.consultancyPhone}>+258-3269 125</p>
            </div>
            <div className={styles.consultancyRight}>
              <form className={styles.consultancyForm}>
                <div className={styles.consultancyFormRow}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={styles.consultancyInput}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles.consultancyInput}
                    required
                  />
                </div>
                <button type="submit" className={styles.consultancyButton}>
                  Send Message <img src={arrowRight} alt="Arrow" className={styles.consultancyButtonArrow} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className={styles.section4} id="section4">
        <ProductsComponent />
      </section>
    </div>
  );
}

