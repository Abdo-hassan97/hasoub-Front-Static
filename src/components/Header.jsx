import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "./Header.module.css";

// Images
import location from "../assets/images/HeaderFooter/location.png";
import srch from "../assets/images/HeaderFooter/search-normal.png";
import srch2 from "../assets/images/HeaderFooter/shopping-cart.png";
import fb from "../assets/images/HeaderFooter/fb.png"; 
import yt from "../assets/images/HeaderFooter/youtube.png";
import linkedin from "../assets/images/HeaderFooter/linkedin.png";
import logo from "../assets/images/HeaderFooter/navber2.png";
// import logo2 from "../assets/images/HeaderFooter/logo.png";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`row g-0 ${styles.stickyRow}`}>
      {/* Column 1 (25%) - Logo (hidden on mobile and tablets; visible on lg+) */}
      <div className="col-3 d-none d-lg-flex customlogo">
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </div>
      
      {/* Column 2 (75%) - Header Content (full width on mobile & tablets; 9 col on lg+) */}
      <div className="col-12 col-lg-9 customheader">
        <header className={styles.headerWrapper}>
          {/* UPPER BAR */}
          <div className={styles.topBar}>
            <Container fluid className={styles.topContainer}>
              <div className={styles.topContent}>
                <div className={styles.topLeft}>
                  <img src={location} alt="location" className={styles.locIcon} />
                  <span className={styles.locationText}>
                    Madinah Munawarah Rd, Al Aziziyah District, Jeddah
                  </span>
                </div>

                <div className={styles.topRight}>
                  <a href="#" aria-label="facebook" className={styles.socialLink}>
                    <img src={fb} alt="facebook" />
                  </a>
                  <a href="#" aria-label="youtube" className={styles.socialLink}>
                    <img src={yt} alt="youtube" />
                  </a>
                  <a href="#" aria-label="linkedin" className={styles.socialLink}>
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <button
                    className={`d-lg-none ${styles.mobileBurger}`}
                    aria-controls="main-nav"
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                    onClick={() => setExpanded(!expanded)}
                  >
                    ☰
                  </button>
                </div>
              </div>
            </Container>
          </div>

          {/* LOWER NAVBAR */}
          <div className={styles.lowerBar}>
            <Navbar expand="lg" expanded={expanded} onToggle={(val) => setExpanded(val)} className={styles.navbar}>
              <Container fluid className={styles.navContainer}>
                <Navbar.Toggle aria-controls="main-nav" className="d-none" />

                <Navbar.Collapse id="main-nav" className={styles.navCollapse}>
                  <div className={styles.navContent}>
                    <Nav className={styles.navLinks}>
                      <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
                      <Nav.Link href="/About" className={styles.link}>About Us</Nav.Link>
                      <Nav.Link href="/products" className={styles.link}>Products & Solutions</Nav.Link>
                      <Nav.Link href="/contact" className={styles.link}>Contact Us</Nav.Link>
                    </Nav>

                    <div className={styles.rightGroup}>
                      <button className={styles.searchBtn} aria-label="search">
                        <img src={srch} alt="search" className={styles.searchIcon} />
                      </button>
                      <button className={styles.searchBtn} aria-label="cart">
                        <img src={srch2} alt="shopping cart" className={styles.searchIcon} />
                      </button>
                      <span href="/quote" className={styles.quoteBtn}>Get A Quote</span>
                    </div>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </header>
      </div>
    </div>
  );
}