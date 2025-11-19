import React from "react";
import { motion } from "motion/react"; // 'motion/react' ki jagah 'framer-motion' use ho raha hai for standard React
import type { Variants } from "motion/react";
import styles from "./DealsCard.module.css";
import { FaClock, FaTag, FaCut, FaStar, FaFire } from "react-icons/fa";

// TypeScript Interface: Deal structure
export interface DealItem {
  id: number;
  name: string;
  price: number;
  duration: string;
  description: string;
  image_url: string;
  category: "Deal";
  originalPrice?: number; // Special for deals
  discount?: number; // Percentage discount
  popular?: boolean; // Popular deal flag
}

// Component Props
interface DealsCardProps {
  deal: DealItem;
  index: number;
}

// Animation Variants (framer-motion syntax ke mutabiq)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.1,
    },
  },
};

const DealsCard: React.FC<DealsCardProps> = ({ deal, index }) => {
  const discountPercentage = deal.originalPrice
    ? Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className={`${styles.card} ${deal.popular ? styles.popularCard : ""}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      {/* Popular Badge */}
      {deal.popular && (
        <div className={styles.popularBadge}>
          <FaFire className={styles.fireIcon} />
          Most Popular
        </div>
      )}

      {/* Discount Ribbon */}
      {discountPercentage > 0 && (
        <div className={styles.discountRibbon}>Save {discountPercentage}%</div>
      )}

      {/* Image Section - Standard <img> used */}
      <div className={styles.imageContainer}>
        <img
          src={deal.image_url}
          alt={deal.name}
          // width aur height ke props yahan sirf styling ke liye hain, Next/Image ki tarah required nahi.
          style={{ width: "100%", height: "auto" }}
          className={styles.dealImage}
          // placeholder="blur" aur blurDataURL nikal diye gaye hain
        />

        {/* Price Tag - Special Styling for Deals */}
        <div className={styles.priceTag}>
          <FaTag size={14} style={{ marginRight: "5px" }} />
          PKR {deal.price.toLocaleString()}
          {/* Original Price if available */}
          {deal.originalPrice && (
            <span className={styles.originalPrice}>
              PKR {deal.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <h3 className={styles.name}>{deal.name}</h3>
        <p className={styles.description}>{deal.description}</p>

        {/* Features List */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <FaStar className={styles.featureIcon} />
            <span>Multiple Services</span>
          </div>
          <div className={styles.featureItem}>
            <FaClock className={styles.featureIcon} />
            <span>{deal.duration}</span>
          </div>
        </div>

        {/* Savings Info */}
        {deal.originalPrice && (
          <div className={styles.savings}>
            You save: PKR {(deal.originalPrice - deal.price).toLocaleString()}
          </div>
        )}

        {/* CTA Button */}
        <motion.a
          href="tel:+923003798901"
          className={styles.ctaButton}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#b59b77",
            boxShadow: "0 10px 25px rgba(161, 131, 91, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCut style={{ marginRight: "8px" }} />
          Grab This Deal!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default DealsCard;
