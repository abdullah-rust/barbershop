// app/contact/page.tsx
"use client";

import { motion } from "motion/react"; // Corrected import
import type { Variants } from "motion/react"; // Corrected import
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import styles from "./Contact.module.css";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const, // Type assertion
      stiffness: 100,
    },
  },
};

export default function Contact() {
  return (
    <div>
      <motion.div
        className={styles.contactPage}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Header Section */}
        <section className={styles.headerSection}>
          <motion.h1 className={styles.mainTitle} variants={itemVariants}>
            Get In Touch: Let&apos;s Craft Your Next Look
          </motion.h1>
          <motion.p className={styles.subtext} variants={itemVariants}>
            For appointments, consultations, or any questions, please reach out
            to us directly.
          </motion.p>
        </section>

        {/* 2. Direct Info Only */}
        <section className={styles.mainContent}>
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <h2 className={styles.infoTitle}>Direct Contact</h2>

            {/* Phone */}
            <div className={styles.infoItem}>
              <FaPhoneAlt className={styles.infoIcon} />
              <div>
                <p>Call Us Directly:</p>
                <a href="tel:+923003798901" className={styles.infoDetail}>
                  +92 300 3798901
                </a>
              </div>
            </div>

            {/* Address */}
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <p>Our Location:</p>
                <address className={styles.infoDetail}>
                  #1 Basement Ar1 Plaza, B-17 Main Markaz, Islamabad
                </address>
              </div>
            </div>

            <div className={styles.timings}>
              <p>Working Hours:</p>
              <p>Mon - Sat: **9:00 AM - 1:00 PM**</p>
            </div>
          </motion.div>
        </section>

        {/* 3. Social and Map Section */}
        <section className={styles.socialMapSection}>
          <motion.h2 className={styles.sectionHeading} variants={itemVariants}>
            Connect With Us
          </motion.h2>

          {/* Social Links */}
          <motion.div className={styles.socialLinks} variants={itemVariants}>
            <a
              href="https://wa.me/923003798901"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className={styles.socialIcon} />
            </a>

            <a
              href="https://www.instagram.com/saeed_haircraft/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="Instagram"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="TikTok"
            >
              <FaTiktok className={styles.socialIcon} />
            </a>
          </motion.div>

          {/* Map Section */}
          <motion.div className={styles.mapContainer} variants={itemVariants}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d986.9874563336243!2d72.82957750725467!3d33.68780612975617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssaeed%20hair%20craft!5e0!3m2!1sen!2s!4v1762805591163!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Our Location on Google Maps"
            ></iframe>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}
