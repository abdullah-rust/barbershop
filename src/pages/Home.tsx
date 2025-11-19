// src/pages/Home.tsx - FINAL TS-SAFE CODE

// 🌟 FIX: framer-motion se import karna zaroori hai
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Home.module.css";
// Farz karte hain aapke paas ek high-res image hai
import heroBg from "../assets/homeimag.jpg";

// Animation Variants (Variants type use kiya for safety)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  // y, opacity, aur transition properties ko standard framer-motion format mein rakha
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// Naya variant contact box ke liye
const contactBoxVariant: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8, type: "spring", stiffness: 80 },
  },
};

export default function Home() {
  return (
    <motion.section
      className={styles.heroSection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.heroBackground}>
        <img src={heroBg} alt="Luxurious Barber Shop Interior" />
      </div>

      <div className={styles.heroContent}>
        {/* Headline */}
        <motion.h1 className={styles.heroTitle} variants={itemVariants}>
          Crafting Confidence, One Cut at a Time.
        </motion.h1>

        {/* Subtitle/Brand Promise */}
        <motion.p className={styles.heroSubtitle} variants={itemVariants}>
          Islamabad's finest hair and grooming experience since 2024. Discover
          your perfect style with <b> Saeed Hair Craft</b>.
        </motion.p>

        {/* CTA Button (Now Contact) */}
        <motion.div className={styles.ctaWrapper} variants={itemVariants}>
          <motion.div
            whileHover={{
              scale: 1.05,
              // Gold Shadow: Hex code use kiya for clarity
              boxShadow: "0 0 25px rgba(161, 131, 91, 1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="tel:+923003798901" className={styles.ctaButton}>
              <FaPhoneAlt style={{ marginRight: "10px" }} /> Call For
              Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 🌟 NEW: Contact/Location Info Box */}
      <motion.div
        className={styles.contactInfoBox}
        variants={contactBoxVariant}
        initial="hidden"
        animate="visible"
      >
        <h3>Visit Us</h3>

        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.infoIcon} />
          <p>#1 Basement Ar1 Plaza, B-17 Main Markaz, Islamabad</p>
        </div>

        <div className={styles.infoItem}>
          <FaPhoneAlt className={styles.infoIcon} />
          <p>+92 300 3798901</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
