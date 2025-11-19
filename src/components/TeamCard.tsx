import React from "react";
import { motion } from "motion/react";
import styles from "./TeamCard.module.css";
import { FaInstagram, FaStar } from "react-icons/fa";

// TypeScript Interface for Team Data
export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  bio: string;
  image: string;
  instagramUrl?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

// Animation Config
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      duration: 0.5,
    } as const,
  },
};

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -5,
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)",
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* IMAGE AREA */}
      <div className={styles.imageContainer}>
        <img
          src={member.image}
          alt={member.name}
          className={styles.memberImage}
        />
        <div className={styles.designationBadge}>
          <FaStar className={styles.starIcon} />
          {member.designation}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className={styles.content}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.bio}>{member.bio}</p>

        {member.instagramUrl && (
          <a
            href={member.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramLink}
            aria-label={`Follow ${member.name} on Instagram`}
          >
            <FaInstagram style={{ marginRight: "5px" }} /> View Profile
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
