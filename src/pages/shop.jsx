import React, { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import styles from "./shop.module.css";

// Product Images
import prod1 from "../assets/images/shop/prod1.png";
import prod2 from "../assets/images/shop/prod2.png";
import prod3 from "../assets/images/shop/prod3.png";
import prod4 from "../assets/images/shop/prod4.png";
import prod5 from "../assets/images/shop/prod5.png";
import prod6 from "../assets/images/shop/prod6.png";
import prod7 from "../assets/images/shop/prod7.png";
import prod8 from "../assets/images/shop/prod8.png";
import prod9 from "../assets/images/shop/prod9.png";
import prod10 from "../assets/images/shop/prod10.png";
import prod11 from "../assets/images/shop/prod11.png";
import prod12 from "../assets/images/shop/prod12.png";
import prod13 from "../assets/images/shop/prod13.png";
import prod14 from "../assets/images/shop/prod14.png";
import prod15 from "../assets/images/shop/prod15.png";
import prod16 from "../assets/images/shop/prod16.png";
import prod17 from "../assets/images/shop/prod17.png";
import prod18 from "../assets/images/shop/prod18.png";
import prod19 from "../assets/images/shop/prod19.png";
import prod20 from "../assets/images/shop/prod20.png";

import fav from "../assets/images/shop/fav.png";

function Shop() {
  const categoryOptions = [
    "Server Rack Cabinet",
    "Wall-Mount Server Rack",
    "Cable Management",
    "Patch Panels",
    "Network Switches",
    "Headsets",
    "Routers",
    "Fiber Cabling Kits",
    "Copper Cabling",
    "KVM Switches",
    "PDU",
    "UPS",
    "Monitoring Systems",
    "Cooling Systems",
    "CCTV",
    "Access Control",
    "Firewall",
    "Patch Cords",
    "Fiber Modules"
  ];

  const products = [
    { id: 1, name: "Server Rack Cabinet (19-inch, 42U Floor)", category: "Server Rack Cabinet", img: prod1, price: 100 },
    { id: 2, name: "Wall-Mount Server / Network Rack", category: "Wall-Mount Server Rack", img: prod2, price: 100 },
    { id: 3, name: "Cable Management & Cable Tray Systems", category: "Cable Management", img: prod3, price: 100 },
    { id: 4, name: "Patch Panels (Copper and Fiber Optic)", category: "Patch Panels", img: prod4, price: 100 },
    { id: 5, name: "Managed Network Switch", category: "Network Switches", img: prod5, price: 100 },
    { id: 6, name: "Headset T50RP MK3N - Black and Red", category: "Headsets", img: prod6, price: 100 },
    { id: 7, name: "Core / Edge Router — for network routing", category: "Routers", img: prod7, price: 100 },
    { id: 8, name: "Fiber Optic Cabling Kit", category: "Fiber Cabling Kits", img: prod8, price: 100 },
    { id: 9, name: "Copper Cabling (Cat6 / Cat6a / Cat7)", category: "Copper Cabling", img: prod9, price: 100 },
    { id: 10, name: "KVM Switch / Console Server", category: "KVM Switches", img: prod10, price: 100 },
    { id: 11, name: "Headset T50RP MK3N - Black and Red", category: "Headsets", img: prod11, price: 100 },
    { id: 12, name: "Power Distribution Unit (PDU)", category: "PDU", img: prod12, price: 100 },
    { id: 13, name: "Uninterruptible Power Supply (UPS)", category: "UPS", img: prod13, price: 100 },
    { id: 14, name: "Environmental Monitoring System", category: "Monitoring Systems", img: prod14, price: 100 },
    { id: 15, name: "Cooling / CRAC / CRAH / Rack-based", category: "Cooling Systems", img: prod15, price: 100 },
    { id: 16, name: "CCTV Camera System (IP Cameras)", category: "CCTV", img: prod16, price: 100 },
    { id: 17, name: "Access Control Systems", category: "Access Control", img: prod17, price: 100 },
    { id: 18, name: "Firewall & Network Security Appliance", category: "Firewall", img: prod18, price: 100 },
    { id: 19, name: "Patch Cords & Network Cables", category: "Patch Cords", img: prod19, price: 100 },
    { id: 20, name: "Fiber Optic Connect & Modules", category: "Fiber Modules", img: prod20, price: 100 },
  ];

  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    maxPrice: 500,
  });

  const brands = ["CommScope", "Datwyler", "Legrand", "Rittal"];

  const filtered = products.filter((p) => {
    return (
      (filters.category === "" || p.category === filters.category) &&
      (filters.brand === "" || p.brand === filters.brand) &&
      p.price <= filters.maxPrice
    );
  });

  return (
    <div className={styles.pageWrap}>
      <Row>
        {/* ========== LEFT FILTER ========== */}
        <Col lg={2} md={3} sm={12} className={styles.filterBox}>
          <h4 className={styles.filterHead}>Filter Product</h4>

          {/* CATEGORIES */}
          <div className={styles.filterSection}>
            <h6 className={styles.secTitle}>Categories</h6>

            {categoryOptions.map((cat, i) => (
              <p
                key={i}
                className={`${styles.categoryItem} ${
                  filters.category === cat ? styles.active : ""
                }`}
                onClick={() =>
                  setFilters({ ...filters, category: filters.category === cat ? "" : cat })
                }
              >
                {cat}
              </p>
            ))}
          </div>

          {/* BRANDS */}
          <div className={styles.filterSection}>
            <h6 className={styles.secTitle}>Brand</h6>

            {brands.map((b, i) => (
              <div key={i} className={styles.brandRow}>
                <Form.Check
                  type="checkbox"
                  id={b}
                  label={b}
                  checked={filters.brand === b}
                  onChange={() =>
                    setFilters({ ...filters, brand: filters.brand === b ? "" : b })
                  }
                />
              </div>
            ))}
          </div>

          {/* PRICE */}
          <div className={styles.filterSection}>
            <h6 className={styles.secTitle}>Price</h6>
            <Form.Range
              min={50}
              max={500}
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
            />
            <p className={styles.priceLabel}>
              Price: EGP 0 – EGP {filters.maxPrice}
            </p>

            <Button className={styles.filterBtn}>Filter</Button>
          </div>
        </Col>

        {/* ========== PRODUCTS GRID ========== */}
        <Col lg={9} md={8} sm={12}>
          <h4 className={styles.filterHead}>Products</h4>
          <Row className="g-2">
            {filtered.map((p) => (
              <Col key={p.id} className={styles.prodCol} lg={3} md={4} sm={6} xs={6}>
                <Card className={styles.card}>
                  <img src={fav} className={styles.favIcon} alt="fav" />

                  <Card.Img variant="top" src={p.img} className={styles.prodImg} />

                  <Card.Body>
                    <h6 className={styles.prodName}>{p.name}</h6>

                    <p className={styles.soldText}>200 items sold</p>

                    <div className={styles.priceRow}>
                      <span className={styles.price}>EGP {p.price}</span>
                      <Button className={styles.enquiryBtn}>Enquiry</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Shop;
