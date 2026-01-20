import React, { useState } from 'react';
import styles from './Footer.module.css';
import logo from "../assets/images/HeaderFooter/logo.png";
import linkedin2 from "../assets/images/HeaderFooter/linkedin2.png";
import messenger from "../assets/images/HeaderFooter/messenger.png";
import twitter from "../assets/images/HeaderFooter/twitter.png";
import twoo from "../assets/images/HeaderFooter/twoo.png";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const services = [
    { text: "Consultation", href: "/services/consultation" },
    { text: "Material Supply", href: "/services/material-supply" },
    { text: "Infrastructure Solutions", href: "/services/infrastructure" },
    { text: "CCTV", href: "/services/cctv" },
    { text: "Datacenter Solutions", href: "/services/datacenter" },
    { text: "Power (UPS)", href: "/services/power-ups" },
    { text: "Cooling (Ecagate and Boreas)", href: "/services/cooling" }
  ];

  const companyLinks = [
    { text: "About Us", href: "/about" },
    { text: "Vision", href: "/vision" },
    { text: "Mission", href: "/mission" },
    { text: "Certificates", href: "/certificates" },
    { text: "Contact Us", href: "/contact" }
  ];

  const socialIcons = [
    { icon: linkedin2, alt: "LinkedIn", link: "https://linkedin.com/company/hasoub" },
    { icon: messenger, alt: "Messenger", link: "https://m.me/hasoub" },
    { icon: twitter, alt: "Twitter", link: "https://twitter.com/hasoub" },
    { icon: twoo, alt: "Twoo", link: "https://twoo.com/hasoub" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>

          {/* Column 1 */}
          <div className={styles.logoColumn}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="HASOUB Logo" className={styles.logo} />
            </div>
            {/* <h3 className={styles.companyName}>HASOUB</h3> */}
            <p className={styles.tagline}>
              Hardware Solutions Builders - Providing comprehensive infrastructure and datacenter solutions
            </p>
            <div className={styles.socialMedia}>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <img src={social.icon} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>SERVICES</h4>
            <ul className={styles.linkList}>
              {services.map((service, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href={service.href} className={styles.link}>
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>HASOUB</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href={link.href} className={styles.link}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className={styles.column}>
            <h4 className={styles.newsletterTitle}>Join Our Newsletter</h4>
            <p className={styles.newsletterText}>Get the latest updates on our services and solutions</p>

            <form onSubmit={handleSubscribe} className={styles.newsletter}>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.emailInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.subscribeButton}>
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </form>

            <p className={styles.disclaimer}>
              Will send you weekly updates for your better tour packages.
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2023 - All rights reserved to{" "}
            <span className={styles.companyNameHighlight}>
              Hardware Solutions Builders (HASOUB)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
