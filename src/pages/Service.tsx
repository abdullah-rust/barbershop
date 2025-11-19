// src/pages/Services.tsx
import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import ServiceCard from "../components/ServiceCard";
import DealsCard from "../components/DealsCard"; // ✅ DealsCard import karo
// import type { ServiceItem } from "../components/ServiceCard";
// import type { DealItem } from "../components/DealsCard"; // ✅ DealItem type import karo
import styles from "./Services.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { servicesData } from "./help/help";
import { dealsData } from "./help//dealsData"; // ✅ Deals data import karo

// Section animation
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<"services" | "deals">("services");

  return (
    <motion.div
      className={styles.servicesPage}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Header / Title */}
      <div className={styles.pageHeader}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.mainTitle}
        >
          Our Menu of Masterful Crafts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={styles.subtext}
        >
          Quality, precision, and luxury in every service we offer.
        </motion.p>
      </div>

      {/* 2. Tabs for Sections */}
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "services" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("services")}
        >
          Services List
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "deals" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("deals")}
        >
          Special Deals
        </button>
      </div>

      {/* 3. Dynamic Section (Services or Deals) */}
      <motion.section
        key={activeTab}
        className={styles.servicesGrid}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "services"
          ? // ✅ Services ke liye ServiceCard
            servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))
          : // ✅ Deals ke liye DealsCard
            dealsData.map((deal, index) => (
              <DealsCard key={deal.id} deal={deal} index={index} />
            ))}
      </motion.section>

      {/* 4. CTA / Contact */}
      <section className={styles.finalCta}>
        <p>Ready for your transformation? Call us now to secure your spot.</p>
        <a href="tel:+923003798901" className={styles.finalCtaButton}>
          <FaPhoneAlt style={{ marginRight: "10px" }} /> +92 300 3798901
        </a>
      </section>
    </motion.div>
  );
}
