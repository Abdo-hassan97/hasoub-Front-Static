import React, { useState } from "react";
import styles from "./CustomerSaying.module.css";
import bgImage from "../assets/images/Home/bg7.png";
import client1Logo from "../assets/images/Home/client1.png";
import client2Logo from "../assets/images/Home/client2.png";
import client3Logo from "../assets/images/Home/client3.png";

const customers = [
  {
    id: 1,
    logo: client1Logo,
    title: "Data Infrastructure and ELV Systems",
    content:
      "Their highly skilled technical and sales teams bring extensive experience to the table, ensuring precision in data infrastructure and ELV systems.",
    name: "Ahmad H. Abdullah",
    role: "Chairman",
  },
  {
    id: 2,
    logo: client2Logo,
    title: "Cloud Solutions",
    content:
      "Their highly skilled technical and sales teams bring extensive experience to the table, ensuring precision in data infrastructure and ELV systems.",
    name: "Sara Al-Farouq",
    role: "CEO",
  },
  {
    id: 3,
    logo: client3Logo,
    title: "Cybersecurity Services",
    content:
      "Their highly skilled technical and sales teams bring extensive experience to the table, ensuring precision in data infrastructure and ELV systems.",
    name: "Mohammed Khalid",
    role: "CTO",
  },
];

export default function CustomerSaying() {
  const [activeCustomer, setActiveCustomer] = useState(customers[0]);

  return (
    <>
      {/* ✅ Heading */}
      <div className={styles.heading}>
        <span>OUR TESTIMONIAL</span>
        <h2>What Our Customers Say</h2>
      </div>

      <section
        className={styles.customerSayingSection}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.container}>
          <div className={styles.contentWrapper}>

            {/* ✅ Logos */}
            <div className={styles.logoList}>
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className={`${styles.logoWrapper} ${
                    customer.id === activeCustomer.id ? styles.active : ""
                  }`}
                  onClick={() => setActiveCustomer(customer)}
                >
                  <img src={customer.logo} alt="customer" />
                </div>
              ))}
            </div>

            {/* ✅ Testimonial Box */}
            <div className={styles.testimonialBox} key={activeCustomer.id}>
              <div className={styles.orangeBox}>
                <div className={styles.stars}>★★★★★</div>
              </div>

              <h3>{activeCustomer.title}</h3>
              <p>{activeCustomer.content}</p>

              <div className={styles.customerInfo}>
                <strong>{activeCustomer.name}</strong>
                <span>{activeCustomer.role}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
