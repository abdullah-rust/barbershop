// src/data/dealsData.ts
import type { DealItem } from "../../components/DealsCard";
import DealImage from "../../assets/dealImage.png";

export const dealsData: DealItem[] = [
  {
    id: 101,
    name: "Gentleman's Essentials Package",
    price: 2000,
    originalPrice: 3200,
    duration: "75 mins",
    description:
      "Complete grooming package: Professional haircut + beard trimming + deep face cleansing with refreshing head wash. Perfect for everyday freshness.",
    image_url: DealImage,
    category: "Deal",
    discount: 38,
    popular: true,
  },
  {
    id: 102,
    name: "Royal Polish & Relaxation Deal",
    price: 3300,
    originalPrice: 4800,
    duration: "90 mins",
    description:
      "Premium grooming experience: Beard care + hair polishing treatment + deep cleansing + relaxing head & shoulder massage. Feel rejuvenated and styled.",
    image_url: DealImage,
    category: "Deal",
    discount: 31,
    popular: true,
  },
  {
    id: 103,
    name: "Elite Grooming Experience",
    price: 4000,
    originalPrice: 6200,
    duration: "120 mins",
    description:
      "Ultimate luxury package: Doctor Derma half facial with steam + head & shoulder massage + beard grooming + haircut + professional styling. Look your absolute best!",
    image_url: DealImage,
    category: "Deal",
    discount: 35,
    popular: false,
  },
];
