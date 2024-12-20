import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
  FaUserMd,
  FaFilePrescription,
  FaCommentDots,
  FaShieldAlt,
} from "react-icons/fa";

export const approachItem = [
  {
    no: 1,
    title: "Make Appointment",
    desc: "You must make an appointment in advance, to choose the service and date.",
  },
  {
    no: 2,
    title: "Consultations",
    desc: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
  },
  {
    no: 3,
    title: "Treatment Planning",
    desc: "The Ayurvedic practitioner creates a personalized treatment plan for you",
  },
  {
    no: 4,
    title: "Maintenance",
    desc: "These visits allow for assessment of progress, adjustments to the treatment.",
  },
];

export const discoverItem = [
  {
    title: "Personalized Wellness",
    desc: "Get treatments made just for you based on your individual doshas ( body type)",
    imgUrl: "./heartbeat.svg",
  },
  {
    title: "Focus on prevention",
    desc: "Stop problems even before they start.",
    imgUrl: "./ribbon.svg",
  },
  {
    title: "Mind-Body Connection",
    desc: "Keep your mind and body in sync for a happy life.",
    imgUrl: "./lotusPosition.svg",
  },
  {
    title: "Holistic Healing",
    desc: "Fix the root problem for long-lasting health.",
    imgUrl: "./protection.svg",
  },
  {
    title: "Natural Remedies",
    desc: "Using herbs and natural therapies for healing.",
    imgUrl: "./ayurveda.svg",
  },
  {
    title: "Boosting immunity",
    desc: "Stay strong and healthy for life, not just for today.",
    imgUrl: "./strong.svg",
  },
];
export const featureItem = [
  {
    imgUrl: <FaCommentDots size={35} color="#3A643B" />,
    text: "Convenient online & In-clinic consultations",
  },
  {
    imgUrl: <FaShieldAlt size={35} color="#3A643B" />,
    text: "Safe and Effective treatment",
  },
  {
    imgUrl: <FaUserMd size={35} color="#3A643B" />,
    text: "Experienced Ayurvedic Practitioners",
  },
  {
    imgUrl: <FaFilePrescription size={35} color="#3A643B" />,
    text: "Personalized Treatment Plans & Guidance",
  },
];

export const icons = [
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
];

export const informationLinks = [
  "About Us",
  "Terms and Conditions",
  "Privacy Policy",
  "Privacy Policy for Mobile Apps",
  "Shipping and Returns Policy",
  "International Delivery",
  "For Businesses, Hotels and Resorts",
];

export const apartCard = [
  {
    title: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।",
    desc: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
    isText: true,
    span: "col-span-2",
  },
  {
    isText: false,
    imgUrl: "./MaaBeti.svg",
  },

  {
    title: "Precise Diagnosis",
    desc: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
    isText: true,
  },
  {
    title: "Zero side-effects",
    desc: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs ",
    isText: true,
  },
  {
    isText: false,
    imgUrl: "./jadibuti.svg",
  },

  {
    title: "Individual Treatment",
    desc: "all Treatments are personalized based on a person's unique constitution and health concerns.",
    isText: true,
  },
  {
    isText: false,
    imgUrl: "./girl.svg",
  },
];
