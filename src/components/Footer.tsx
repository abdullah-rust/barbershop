// app/components/Footer.tsx
import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaUserAlt,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import kenchi from "../assets/kenchi.png";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/saeed_haircraft/" },
    { icon: FaWhatsapp, url: "https://wa.me/923003798901" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@saeed.haircraft" },
  ];

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/barbershop/#/services", name: "Services" },
    { path: "/barbershop/#/about", name: "About Us" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* 1. BRAND & SOCIAL */}
        <div className={styles.footerSection}>
          <a href="/" className={styles.logo}>
            <img
              src={kenchi}
              alt="Saeed Hair Craft Logo"
              className={styles.logopng}
              width={40}
              height={40}
            />
            <span>Saeed Hair Craft</span>
          </a>
          <p className={styles.tagline}>Crafting Confidence Since 2024.</p>

          <div className={styles.socialLinks}>
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* 2. NAVIGATION LINKS */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className={styles.footerLink}
                  onClick={scrollToTop}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:+923003798901" className={styles.footerLink}>
                Call Us Now
              </a>
            </li>
          </ul>
        </div>

        {/* 3. CONTACT & LOCATION */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Contact & Visit</h3>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <p>#1 Basement Ar1 Plaza, B- Block Main Markaz, B-17 Islamabad</p>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <p>+92 300 3798901</p>
          </div>

          {/* Abdullah info */}
          <div className={styles.contactItem}>
            <FaUserAlt className={styles.contactIcon} />
            <p>
              Developer: <strong>Abdullah Riaz</strong> <br />
              <a
                href="https://wa.me/923298625816"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                WhatsApp: +92 329 8625816
              </a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <p className={styles.timings}>Mon - Sat: 9:00 AM - 1:00 AM</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Saeed Hair Craft. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
