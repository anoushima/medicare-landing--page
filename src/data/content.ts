import type {
  Consultant,
  FeatureItem,
  FooterLinkGroup,
  MedicalFeature,
  NavLink,
} from "../types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

export const primaryFeatures: FeatureItem[] = [
  {
    id: "mobile-apps",
    title: "Mobile Health Apps",
    description:
      "Tools for patients to track symptoms, medications, and appointments right from their phone.",
  },
  {
    id: "secure-messaging",
    title: "Secure Messaging Systems",
    description:
      "HIPAA-compliant platforms that keep every conversation between you and your care team private.",
  },
];

export const smallFeatures: FeatureItem[] = [
  {
    id: "prescriptions",
    title: "Online Prescription Services",
    description: "Facilitate easy ordering and refills without the wait.",
  },
  {
    id: "global-service",
    title: "Online Global Service",
    description: "We provide care access from almost any country.",
  },
];

export const trustedCompanies: string[] = [
  "Praxent",
  "Altudo",
  "Praxent",
  "Praxent",
  "Reactt",
  "Altudo",
  "Praxent",
  "Reactt",
];

export const consultants: Consultant[] = [
  {
    id: "miles",
    name: "Miles",
    role: "Medicine Specialist",
    description:
      "Offer program focused on preventive care, nutrition, and exercise.",
    initials: "M",
  },
  {
    id: "nguyen",
    name: "Nguyen",
    role: "Senior Consultant",
    description:
      "Offer programs focused on breast cancer awareness and screening.",
    initials: "N",
  },
  {
    id: "flores",
    name: "Flores",
    role: "Cardiologist",
    description:
      "Offer programs focused on preventive cardiac care and monitoring.",
    initials: "F",
  },
];

export const medicalFeatures: MedicalFeature[] = [
  { id: "assessment", label: "Personalized Health Assessment" },
  { id: "insurance", label: "Integration with Insurance Providers" },
  { id: "emergency", label: "Emergency Contact Feature" },
  { id: "reminders", label: "Patient Education" },
  { id: "chat", label: "24-hour Health Assistant" },
  { id: "tracking", label: "Health Tracking" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Features",
    links: ["Appointments", "Messaging", "Prescriptions", "Dashboard"],
  },
  {
    title: "Solutions",
    links: ["For Clinics", "For Hospitals", "For Patients", "Pricing"],
  },
  {
    title: "For Accountants",
    links: ["Billing", "Reports", "Integrations", "Support"],
  },
];
