import type { ServiceItem } from "../../components/ServiceCard";
import classicCutting from "../../assets/menscutting.jpg";
import childHairCutting from "../../assets/childCutting.jpg";
import hairDying from "../../assets/hair dye.jpg";
import styling from "../../assets/styling.jpg";
import fiber from "../../assets/fiber.webp";
import layerCutting from "../../assets/layer.png";
import wex from "../../assets/hot bean wex.jpeg";
import cleansing from "../../assets/cleansing.jpg";
import beard from "../../assets/beard.webp";
import shave from "../../assets/shave.jpg";
import karatin from "../../assets/karatin.webp";
import hairPolishing from "../../assets/polishing.webp";
import hairColorAppliyng from "../../assets/colorApplying.jpeg";
import joson from "../../assets/jonsonf.webp";
import darma from "../../assets/darma.jpg";
import darmacos from "../../assets/darmacos.webp";
import head from "../../assets/head.jpg";
import ShoulderMassag from "../../assets/shoulder.png";
import hairPermsImage from "../../assets/perms.jpg";

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    name: "Classic Haircut",
    price: "499",
    duration: "30 mins",
    description:
      "A precise and refreshing haircut tailored to your face shape and personal style. Includes finishing touches and light styling.",
    image: classicCutting,
    category: "Hair",
  },
  {
    id: 2,
    name: "Kids Haircut",
    price: "399",
    duration: "25 mins",
    description:
      "Gentle and stylish haircut for children with extra care to keep them comfortable while ensuring a perfect look.",
    image: childHairCutting,
    category: "Hair",
  },
  {
    id: 3,
    name: "Hair Color Application (Color Not Included)",
    price: "499",
    duration: "10 mins",
    description:
      "Professional hair color application service — fee covers expert application only. Color product cost is additional.",
    image: hairDying,
    category: "Hair",
  },
  {
    id: 4,
    name: "Basic Hair Styling",
    price: "399",
    duration: "15 mins",
    description:
      "Quick and elegant styling perfect for parties or casual outings. Includes blow drying and light finishing.",
    image: styling,
    category: "Hair",
  },
  {
    id: 5,
    name: "Premium Fiber Styling",
    price: "499",
    duration: "20 mins",
    description:
      "Advanced styling using premium hair fiber products for a sharp, defined look with long-lasting hold.",
    image: fiber,
    category: "Hair",
  },
  {
    id: 6,
    name: "Layered Haircut",
    price: "1,999",
    duration: "60 mins",
    description:
      "Modern layered haircut that adds movement, depth, and volume — perfect for a sophisticated, trendy appearance.",
    image: layerCutting,
    category: "Hair",
  },
  {
    id: 7,
    name: "Hot Bean Wax (Facial)",
    price: "400",
    duration: "20 mins",
    description:
      "Premium hot bean wax for smooth, irritation-free facial hair removal with soothing aftercare treatment.",
    image: wex,
    category: "Treatment",
  },
  {
    id: 8,
    name: "Deep Face Cleansing",
    price: "1,499",
    duration: "25 mins",
    description:
      "Thorough cleansing treatment to remove dirt, oil, and blackheads — revealing clean, fresh, and glowing skin.",
    image: cleansing,
    category: "Treatment",
  },
  {
    id: 9,
    name: "Beard Trim & Shaping",
    price: "350",
    duration: "20 mins",
    description:
      "Professional beard shaping and trimming for a clean, defined look. Perfect for maintaining your style.",
    image: beard,
    category: "Shave",
  },
  {
    id: 10,
    name: "Traditional Straight Razor Shave",
    price: "299",
    duration: "20 mins",
    description:
      "Classic straight-razor shave with premium oils and hot towels for an ultra-smooth, relaxing experience.",
    image: shave,
    category: "Shave",
  },
  {
    id: 11,
    name: "Keratin & Botox Hair Treatment",
    price: "8,000 - 16,000",
    duration: "2-3 hours",
    description:
      "Advanced smoothing and repair treatment that restores shine, strength, and manageability to damaged hair.",
    image: karatin,
    category: "Treatment",
  },
  {
    id: 19,
    name: "Hair Perm (Permanent Waves)",
    price: "5,000 - 12,000",
    duration: "2-4 hours",
    description:
      "Professional perming service to create beautiful, long-lasting curls or waves—adding volume and texture.",
    image: hairPermsImage,
    category: "Hair",
  },
  {
    id: 12,
    name: "Hair Polishing Treatment",
    price: "2,500",
    duration: "30 mins",
    description:
      "Revitalize dull hair with this shine-boosting treatment that enhances smoothness and natural glow instantly.",
    image: hairPolishing,
    category: "Treatment",
  },
  {
    id: 13,
    name: "Complete Hair Color Service",
    price: "1,000 - 3,000",
    duration: "40 mins",
    description:
      "Full hair coloring service with expert application for even coverage and rich, lasting color results.",
    image: hairColorAppliyng,
    category: "Hair",
  },
  {
    id: 14,
    name: "Johnson Premium Facial",
    price: "6,000 - 10,000",
    duration: "60 mins",
    description:
      "Luxury facial using Johnson professional products for deep cleansing, rejuvenation, and instant radiance.",
    image: joson,
    category: "Treatment",
  },
  {
    id: 15,
    name: "Doctor Derma Clinical Facial",
    price: "3,000 - 5,000",
    duration: "70 mins",
    description:
      "Clinical-grade facial that targets skin concerns for visibly healthier, glowing complexion.",
    image: darma,
    category: "Treatment",
  },
  {
    id: 16,
    name: "Dermacos Deep Cleansing Facial",
    price: "3,000 - 5,000",
    duration: "60 mins",
    description:
      "Intensive pore-cleansing facial with Dermacos products to remove impurities and hydrate skin deeply.",
    image: darmacos,
    category: "Treatment",
  },
  {
    id: 17,
    name: "Relaxing Head Massage",
    price: "300",
    duration: "15 mins",
    description:
      "Soothing head massage that relieves tension, improves blood circulation, and provides instant relaxation.",
    image: head,
    category: "Treatment",
  },
  {
    id: 18,
    name: "Shoulder & Neck Massage",
    price: "400",
    duration: "15 mins",
    description:
      "Targeted massage to relieve stiffness and tension in neck and shoulders, promoting deep relaxation.",
    image: ShoulderMassag,
    category: "Treatment",
  },
];

export default servicesData;
