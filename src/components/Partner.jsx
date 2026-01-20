import { useRef, useState } from "react";
import styles from "./Partner.module.css";

import p1 from "../assets/images/Home/p1.png";
import p2 from "../assets/images/Home/p2.png";
import p3 from "../assets/images/Home/p3.png";
import p4 from "../assets/images/Home/p4.png";
import p5 from "../assets/images/Home/p5.png";

const customers = [
  { id: 1, name: "Partner One", logo: p1 },
  { id: 2, name: "Partner Two", logo: p2 },
  { id: 3, name: "Partner Three", logo: p3 },
  { id: 4, name: "Partner Four", logo: p4 },
  { id: 5, name: "Partner Five", logo: p5 },
];

const PER_VIEW = 5;

export default function Partner() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const maxIndex = Math.max(customers.length - PER_VIEW, 0);

  // ✅ Touch (Mobile)
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50 && index < maxIndex) setIndex(index + 1);
    if (diff < -50 && index > 0) setIndex(index - 1);
  };

  // ✅ Mouse Drag (Desktop)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.clientX;

    if (diff > 50 && index < maxIndex) setIndex(index + 1);
    if (diff < -50 && index > 0) setIndex(index - 1);

    isDragging.current = false;
  };

  return (
    <section className={styles.fifthSection}>
      <div className={styles.fifthHeader}>
        <p className={styles.fifthEyebrow}>OUR CUSTOMERS</p>
        <h2 className={styles.fifthTitle}>We Worked With</h2>
      </div>

      <div
        className={styles.customerViewport}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          className={styles.customerTrack}
          style={{
            transform: `translateX(-${index * (100 / PER_VIEW)}%)`,
            "--customers-per-view": PER_VIEW,
          }}
        >
          {customers.map((item) => (
            <div key={item.id} className={styles.customerSlide}>
              <img src={item.logo} alt={item.name} />
              <div className={styles.customerOverlay}>
                <div>
                  <p>OUR CUSTOMER</p>
                  <h3>{item.name}</h3>
                </div>
                <span className={styles.customerArrowIcon}>↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
