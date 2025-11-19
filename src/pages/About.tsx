// src/pages/About.tsx

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import TeamCard from "../components/TeamCard";
import type { TeamMember } from "../components/TeamCard";
import styles from "./About.module.css";
import Ali from "../assets/Ali.png";
import Saeed from "../assets/saeed.jpeg";

// Example Team Data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Saeed Ahmad (Founder)",
    designation: "Master Barber & Visionary",
    bio: "With over 15 years of hands-on experience, he’s a master of long hair transformations, step cuts, and precision styling. Known for his detail-oriented approach, every cut reflects his artistry and deep understanding of modern and classic trends alike.",
    image: Saeed, // Replace with actual image path
    instagramUrl: "#",
  },
  {
    id: 2,
    name: "Sufiyan Ali (Master Barber)",
    designation: "Senior Stylist",
    bio: "With 8 years of professional experience, he’s a true Fade Specialist — mastering modern men’s cuts, sharp detailing, and trend-driven styles. His precision work and creative technique set a new standard in every haircut.",
    image: Ali,
    instagramUrl: "#",
  },
];

const sectionVariants: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function About() {
  return (
    <motion.div
      className={styles.aboutPage}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Page Header (Our Story Section) */}
      <section className={styles.headerSection}>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.mainTitle}
        >
          Crafting Legacy: The Saeed Hair Craft Story
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={styles.storyText}
        >
          Founded in 2024, <strong>Saeed Hair Craft</strong> was built on a
          simple belief — grooming is not just about style, it’s about
          self-respect. What started as a small local barbershop in Islamabad
          has evolved into a modern grooming studio where tradition meets
          precision. Every cut, fade, and style we create is a reflection of
          mastery, discipline, and passion.
          <br />
          <br />
          We don’t follow trends — we set them. Our mission is to redefine men’s
          grooming with craftsmanship that speaks confidence, character, and
          class.
        </motion.p>
      </section>

      {/* 2. Meet The Master Craftsmen (Team Grid) */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionHeading}>Meet The Master Craftsmen</h2>

        <motion.div className={styles.teamGrid} variants={sectionVariants}>
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>
      {/* (Baqi sections jese USP, Awards baad mein add honge) */}
    </motion.div>
  );
}
