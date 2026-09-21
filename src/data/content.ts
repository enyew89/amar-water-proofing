// Canonical public URL of the site (single source of truth for SEO tags).
// If you buy a custom domain later, change only this line.
export const siteUrl = "https://amar-water-proofing.vercel.app";

export const company = {
  name: "AMAR WATER PROOFING",
  tagline: "Protecting Your Property, Drop by Drop",
  description:
    "Ethiopia's trusted waterproofing specialists, protecting roofs, terraces, basements, and commercial structures for universities, contractors, and government institutions across the country.",
  phone: "+251 911 524 838",
  email: "info@amarwaterproofing.com",
  address: "Lideta Ahmed Building, 9th Floor, Addis Ababa, Ethiopia",
  workingHours: "Mon – Sat: 9:00 AM – 5:00 PM",
  yearsExperience: 15,
  projectsCompleted: 4000,
  happyClients: 1800,
  warrantyYears: 10,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    id: 1,
    title: "Roof Waterproofing",
    description:
      "Complete roof membrane systems that shield against monsoon rains, UV damage, and thermal expansion for lasting protection.",
    icon: "Home",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 2,
    title: "Terrace & Balcony",
    description:
      "Advanced liquid-applied coatings and tile-over systems to eliminate leaks and create beautiful, usable outdoor spaces.",
    icon: "Layers",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    title: "Basement Waterproofing",
    description:
      "Structural injection grouting, negative-side waterproofing, and drainage solutions to keep foundations dry year-round.",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    id: 4,
    title: "Bathroom & Kitchen",
    description:
      "Precision waterproofing for wet areas using SBR-modified mortars and flexible membranes to prevent seepage.",
    icon: "Droplets",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: 5,
    title: "Swimming Pool",
    description:
      "Specialized pool liners, epoxy coatings, and crack repair systems engineered for constant water pressure.",
    icon: "Waves",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
  },
  {
    id: 6,
    title: "Commercial Projects",
    description:
      "Large-scale waterproofing for malls, hospitals, and industrial facilities with minimal downtime and certified materials.",
    icon: "Factory",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 4000, suffix: "+", label: "Projects Done" },
  { value: 1800, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: " Yr", label: "Warranty" },
];

export const contractors: {
  name: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  dark?: boolean;
}[] = [
  {
    name: "Temer Properties",
    logo: "/contractors/temer.png",
    logoWidth: 88,
    logoHeight: 100,
  },
  {
    name: "Pyramid",
    logo: "/contractors/pyramid.png",
    logoWidth: 56,
    logoHeight: 56,
  },
  {
    name: "Tilahun Abebe GC",
    logo: "/contractors/tilahun-abebe.png",
    logoWidth: 100,
    logoHeight: 40,
  },
  {
    name: "Tabco",
    logo: "/contractors/tabco.png",
    logoWidth: 100,
    logoHeight: 35,
    dark: true,
  },
  {
    name: "Elhadar",
    logo: "/contractors/elhadar.png",
    logoWidth: 60,
    logoHeight: 48,
  },
  {
    name: "FE Group",
    logo: "/contractors/fe-group.png",
    logoWidth: 62,
    logoHeight: 40,
    dark: true,
  },
  { name: "Unity" },
  { name: "Ayro General Business" },
  { name: "SATCON" },
  { name: "TNT" },
];

export const projects = [
  {
    id: 1,
    title: "4 Killo Building",
    category: "Full Building Solution",
    location: "Addis Ababa",
    image: "/4-killo.jpg",
  },
  {
    id: 2,
    title: "Bole Project",
    category: "Structural Waterproofing",
    location: "Addis Ababa",
    image: "/bole.jpg",
  },
  {
    id: 3,
    title: "African Union Headquarters",
    category: "Commercial Roofing",
    location: "Addis Ababa",
    image: "/africa-union.jpg",
  },
  {
    id: 4,
    title: "Bahir Dar Stadium",
    category: "Basement Protection",
    location: "Bahir Dar",
    image: "/bahirdar-stadium.jpg",
  },
  {
    id: 5,
    title: "Bahirdar Airport",
    category: "Commercial Roofing",
    location: "Bahir Dar",
    image: "/bd-airport.jpg",
  },
  {
    id: 6,
    title: "Elilta Project",
    category: "Terrace Waterproofing",
    location: "Addis Ababa",
    image: "/elilta.jpg",
  },
  {
    id: 7,
    title: "Haramaya University",
    category: "Commercial Roofing",
    location: "Haramaya",
    image: "/haramaya-university.jpg",
  },
  {
    id: 8,
    title: "Mesob Project",
    category: "Full Building Solution",
    location: "Addis Ababa",
    image: "/mesob.jpg",
  },
  {
    id: 9,
    title: "National Palace",
    category: "Structural Waterproofing",
    location: "Addis Ababa",
    image: "/national-palace.jpg",
  },
  {
    id: 10,
    title: "Prosperity Party Headquarter",
    category: "Commercial Roofing",
    location: "Addis Ababa",
    image: "/prosperity-party-headquarter.jpg",
  },
  {
    id: 11,
    title: "Tewodros Collider",
    category: "Structural Waterproofing",
    location: "Addis Ababa",
    image: "/tewodros-collider.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Selamawit Haile",
    role: "Construction Department Head, Ayro General Business",
    quote:
      "Amar Water Proofing P.L.C completed 100% of the contract for the waterproofing works on the Assosa University Laboratories Project, executing everything to the agreed specification and desired quality. We gladly recommend them and hope to work together on more projects in the future.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ephrem Tesfaye",
    role: "Construction Business Director, Pyramid Construction",
    quote:
      "We signed a subcontracting agreement with Amar Water Proofing P.L.C to execute the waterproofing works for Worabe Industrial College in SNNPRS, Silte Zone. Our company is fully satisfied with the subcontractor's work and professionalism.",
    rating: 5,
  },
  {
    id: 3,
    name: "Getahun Legesse",
    role: "Deputy Manager, Tilahun Abebe General Contractor",
    quote:
      "From the Addis Ababa 40/60 project to Medawelabu University and Fincha Sugar Factory Hospital, Amar Water Proofing accomplished every waterproofing package successfully, in accordance with the signed agreement and to the satisfaction of the client. Their commitment and workmanship were outstanding, and we recommend them without hesitation for similar works.",
    rating: 5,
  },
];

export const whyChooseUs = [
  {
    title: "Certified Materials",
    description: "We use only ISI-marked, internationally certified waterproofing products.",
  },
  {
    title: "Expert Team",
    description: "Skilled technicians trained in the latest application techniques and safety standards.",
  },
  {
    title: "10-Year Warranty",
    description: "Every project backed by our comprehensive workmanship and material warranty.",
  },
  {
    title: "Free Inspection",
    description: "Complimentary site survey and detailed quotation with no hidden charges.",
  },
];

export const processSteps = [
  { step: "01", title: "Site Inspection", description: "Free on-site assessment and moisture mapping" },
  { step: "02", title: "Custom Solution", description: "Tailored system design based on structure type" },
  { step: "03", title: "Expert Application", description: "Professional installation with quality checks" },
  { step: "04", title: "Quality Assurance", description: "Water test, documentation, and warranty handover" },
];
