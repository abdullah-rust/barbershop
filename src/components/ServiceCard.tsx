// src/components/ServiceCard.tsx

import React from "react";
import { motion } from "motion/react";
import styles from "./ServiceCard.module.css";
import { FaClock, FaTag, FaCut } from "react-icons/fa"; // Relevant icons

// TypeScript Interface: Data structure
export interface ServiceItem {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  image: string; // Image path for the service
  category: "Hair" | "Shave" | "Treatment" | "Deal";
}

// Component Props definition
interface ServiceCardProps {
  service: ServiceItem;
  // Optional: Animation delay ke liye index
  index: number;
}

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      delay: 0.1, // Thoda initial delay
    } as const,
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // Jab card view mein aaye tab animate ho
      viewport={{ once: true, amount: 0.3 }} // Screen ka 30% dikhe tab trigger ho
    >
      {/* 1. Image Area */}
      <div className={styles.imageContainer}>
        {/* NOTE: Isko aapko actual path se replace karna hoga */}
        <img
          src={service.image}
          alt={service.name}
          className={styles.serviceImage}
        />
        {/* Price Tag (Top right par gold accent) */}
        <div className={styles.priceTag}>
          <FaTag size={14} style={{ marginRight: "5px" }} />
          PKR {service.price}
        </div>
      </div>

      {/* 2. Content Area */}
      <div className={styles.content}>
        {/* Name */}
        <h3 className={styles.name}>{service.name}</h3>

        {/* Description */}
        <p className={styles.description}>{service.description}</p>

        {/* Meta Info (Duration) */}
        <div className={styles.metaInfo}>
          <FaClock className={styles.metaIcon} />
          <span className={styles.duration}>{service.duration}</span>
        </div>

        {/* CTA Button */}
        <motion.a
          href="tel:+923003798901" // Direct Call link
          className={styles.ctaButton}
          whileHover={{ scale: 1.03, backgroundColor: "#b59b77" }}
          whileTap={{ scale: 0.98 }}
        >
          <FaCut style={{ marginRight: "8px" }} />
          Call to Book
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
