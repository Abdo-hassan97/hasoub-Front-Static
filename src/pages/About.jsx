import React from 'react'
import styles from "./About.module.css";
import slider1 from "../assets/images/About/slider1.png";
import img1 from "../assets/images/About/img1.png";
import flage from "../assets/images/About/flage.png";
import Group1 from "../assets/images/About/Group1.png";
import image from "../assets/images/About/image.png";
import experience from "../assets/images/About/experience.png";
import image2 from "../assets/images/About/image2.png";
import icon from "../assets/images/About/icon.png";
import icon2 from "../assets/images/About/icon2.png";
import icon3 from "../assets/images/About/icon3.png";
import BG1 from "../assets/images/About/BG1.png";
import Image22 from "../assets/images/About/Image22.png";
import Image222 from "../assets/images/About/Image222.png";
import Image23 from "../assets/images/About/Image23.png";
import Image24 from "../assets/images/About/Image24.png";

function About() {
  // Features data for the grid
  const features = [
    {
      title: "Bill of Quantity",
      description: "Technical And Sales",
      icon: Group1
    },
    {
      title: "Data Infrastructure",
      description: "ELV Systems",
      icon: Group1
    }
  ];
  const features2 = [
    {
      title: "Technical And Sales",
      description: "Technical And Sales",
      icon: Group1
    },
    {
      title: "ELV Systems",
      description: "ELV Systems",
      icon: Group1
    }
  ];

  // Mission/Vision/Goals cards data
  const cards = [
    {
      title: "Our Mission",
      description: "As a top ELV distributor, offers cutting-edge solutions in enabling data centers, power, and cooling. Our certified team ensures customer satisfaction with top-quality service.",
      icon: icon
    },
    {
      title: "Our Vision",
      description: "At Hasoub, we support MEA customers to reach business goals with advanced tech solutions. We empower local communities through training and innovation.",
      icon: icon2
    },
    {
      title: "Our Goals",
      description: "Hasoub aims to lead Middle East IT services with innovative solutions tailored to unique client needs.",
      icon: icon3
    }
  ];

  // Timeline data
  const timelineItems = [
    {
      year: "2004",
      description: "HASOUB founded in Saudi Arabia, Kingdom of Saudi Arabia in 2004, with us to provide IT solutions provider and cutting-edge technologies to optimize business capabilities"
    },
    {
      year: "2007",
      description: "Expanded our operations to Egypt, extending our expertise and service capabilities to North Africa, and solidifying our presence in the region."
    },
    {
      year: "2010",
      description: "Established a branch in Bahrain, enhancing our service network within the Gulf Cooperation Council (GCC) region and strengthening our market position."
    },
    {
      year: "2013",
      description: "Launched operations in the United Arab Emirates, further expanding our reach and solidifying our role as a leading distributor in the Middle East."
    },
    {
      year: "2022",
      description: "Expanded into Oman, continuing our strategic growth and commitment to providing top-notch data infrastructure and ELV solutions across the region."
    }
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      image: Image22,
      company: "Rittal - Germany",
      title: "Channel Partner Of The Year-2018"
    },
    {
      id: 2,
      image: Image222,
      company: "Schneider Electric",
      title: "Certified Partner 2020"
    },
    {
      id: 3,
      image: Image23,
      company: "Cisco Systems",
      title: "Gold Certified Partner"
    },
    {
      id: 4,
      image: Image24,
      company: "HP Enterprise",
      title: "Platinum Partner 2021"
    }
  ];

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section 
        className={styles.aboutSection}
        style={{ backgroundImage: `url(${slider1})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h2 className={styles.header}>About Hasoub ---</h2>
          <h1 className={styles.slogan}>
            WE BUILD THE BUSINESS<br />
            SUCCESS OF YOUR <span className={styles.highlight}>DREAMS!</span>
          </h1>
          <p className={styles.paragraph}>
            We excel in optimizing business capabilities across the Kingdom and the 
            Middle East through innovative IT solutions.
          </p>
          <div className={styles.buttonsContainer}>
            <a href="#services" className={styles.servicesButton}>
              OUR SERVICES
            </a>
            <a href="#contact" className={styles.contactButton}>
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT US SECTION ==================== */}
      <section className={styles.aboutUsSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutRow}>
            {/* Column 5 - Image */}
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img 
                  src={img1} 
                  alt="Hasoub Office" 
                  className={styles.mainImage}
                />
                <img 
                  src={flage} 
                  alt="Flag" 
                  className={styles.flagImage}
                />
              </div>
            </div>

            {/* Column 7 - Content */}
            <div className={styles.contentColumn}>
              <h3 className={styles.aboutHeader}>ABOUT US</h3>
              <h2 className={styles.aboutTitle}>
                We Are Increasing Business Success With Technology
              </h2>
              <p className={styles.aboutDescription}>
                HASOUB is a leading regional distributor established in 2004 in Kingdom of Saudi Arabia 
                with branches in Egypt, Bahrain, United Arab Emirates and Oman, specialized in data 
                infrastructure, data center solutions, ELV and other complementary solutions. We cater 
                to system integrators and MEP contractors.
                Beyond material supply, we provide expertise in helping/ suggesting, reviewing, and 
                designing the bill of quantity (BOQ).
              </p>

              {/* Features Grid */}
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className={styles.featureIcon}
                    />
                    <div className={styles.featureContent}>
                      <h4>{feature.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.featuresGrid}>
                {features2.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className={styles.featureIcon}
                    />
                    <div className={styles.featureContent}>
                      <h4>{feature.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Products Button */}
              <a href="#products" className={styles.productsButton}>
                View Our Products
                <span className={styles.buttonArrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE HASOUB SECTION ==================== */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContainer}>
          <div className={styles.whyChooseRow}>
            {/* Left Column - Image */}
            <div className={styles.whyImageColumn}>
              <div className={styles.whyImageWrapper}>
                <img 
                  src={image} 
                  alt="Hasoub Technology" 
                  className={styles.whyImage}
                />
              </div>
              {/* Mission/Vision/Goals Cards */}
              <div className={styles.cardsGrid}>
                {cards.map((card, index) => (
                  <div key={index} className={styles.card}>
                    <img 
                      src={card.icon} 
                      alt={card.title}
                      className={styles.cardIcon}
                    />
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={styles.whyContentColumn}>
              <h3 className={styles.whyHeader}>WHY CHOOSE HASOUB</h3>
              <h2 className={styles.whyTitle}>
                Empowering Businesses With Smart IT Infrastructure
              </h2>
              <p className={styles.whyDescription}>
                HASOUB delivers end-to-end IT and infrastructure solutions designed to power modern 
                businesses with reliability, security, and scalability. From structured cabling and 
                data centers to security systems, networking, and power protection, we build technology 
                foundations that support continuous growth and uninterrupted operations.
              </p>

              {/* Stats Images */}
              <div className={styles.statsContainer}>
                <div className={styles.statImage1}>
                  <img src={experience} alt="Experience" />
                </div>
                <div className={styles.statImage}>
                  <img src={image2} alt="Achievements" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR HISTORY SECTION ==================== */}
      <section className={styles.historySection}>
        <div className={styles.historyContainer}>
          <h2 className={styles.historyHeader}>Our History</h2>
          <p className={styles.historyDescription}>
            HASOUB was founded with the goal of delivering reliable, high-quality IT and infrastructure 
            solutions to support the growing digital needs of businesses. Over the years, we have expanded 
            our expertise to cover structured cabling, data centers, security systems, networking, power 
            protection, and cooling solutions. Through continuous innovation, technical excellence, and a 
            strong focus on client success, HASOUB has grown into a trusted partner for enterprises seeking 
            secure and future-ready infrastructure.
          </p>

          {/* Timeline */}
          <div className={styles.timeline}>
            <div className={styles.timelineRow}>
              {timelineItems.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineContent}>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATIONS SECTION ==================== */}
      <section className={styles.certificationsSection}>
        {/* Background Image */}
        <div 
          className={styles.certificationsBackground}
          style={{ backgroundImage: `url(${BG1})` }}
        ></div>
        
   
        
        <div className={styles.certificationsContainer}>
          <div className={styles.certificationsHeader}>
            <h4 className={styles.badgesHeader}>Badges</h4>
            <h2 className={styles.certificationsTitle}>HASOUB Certifications</h2>
          </div>

          <div className={styles.certificationsGrid}>
            {certifications.map((cert) => (
              <div key={cert.id} className={styles.certificationCard}>
                <div className={styles.certificationImage}>
                  <img src={cert.image} alt={cert.title} />
                  <div className={styles.certificationOverlay}>
                    <div className={styles.overlayContent}>
                      <p>{cert.company}</p>
                      <p>{cert.title}</p>
                    </div>
                  </div>
                </div>
                {/* <div className={styles.certificationInfo}>
                  <span className={styles.companyTag}>{cert.company}</span>
                  <h3 className={styles.certificationName}>{cert.title}</h3>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About