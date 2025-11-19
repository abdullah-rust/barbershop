// src/components/Header.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
// NOTE: Agar aap 'motion/react' use kar rahe hain, toh 'framer-motion' install karein.
import { motion, AnimatePresence } from "motion/react"; // AnimatePresence bhi import karein
import styles from "./Header.module.css";
import { HiMenu, HiX } from "react-icons/hi";
import kenchi from "../assets/kenchi.png";

// Links ka array TypeScript mein
interface NavLink {
  path: string;
  name: string;
}

const navLinks: NavLink[] = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/about", name: "About" },
];

const navLinksmo: NavLink[] = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false); // Mobile Menu ke liye

  // Function: Link click hone par menu band ho
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Animation variants
  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 } as const,
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Links thoda der se show honge
      },
    }),
  };

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      {/* 1. BRAND/LOGO */}
      <div className={styles.logo}>
        <Link to="/" onClick={handleLinkClick}>
          <img src={kenchi} alt="kenchi" className={styles.logopng} />
          <span className={styles.logoText}>Saeed Hair Craft</span>
        </Link>
      </div>

      {/* 2. DESKTOP NAVIGATION (Jaisa pehle tha) */}
      <nav className={styles.navDesktop}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <motion.li
              key={link.path}
              className={styles.navItem}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={link.path}
                className={`${styles.navLink} ${
                  location.pathname === link.path ? styles.active : ""
                }`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* 3. CTA BUTTON */}
      <motion.div
        className={styles.ctaButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/contact" onClick={handleLinkClick}>
          Contact{" "}
        </Link>
      </motion.div>

      {/* 4. MOBILE MENU TOGGLE */}
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* 5. MOBILE NAVIGATION (Ab ismein links bhi hain) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav" // Key for AnimatePresence to track it
            className={styles.navMobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <ul className={styles.navList}>
              {navLinksmo.map((link, index) => (
                <motion.li
                  key={link.path}
                  className={styles.navItem}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    to={link.path}
                    onClick={handleLinkClick} // 👈 Click par menu band hoga
                    className={`${styles.navLink} ${
                      location.pathname === link.path ? styles.active : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              {/* Mobile CTA Button bhi add kar sakte hain (optional) */}
              <motion.li
                className={styles.navItem}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={navLinks.length}
                style={{ marginTop: "1rem" }}
              ></motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
