/**
 * Single source of truth for global site data.
 * Real data from apexitskills.com. Edit values here — they propagate across
 * the whole site: metadata, structured data, header, footer, lead links.
 */

export const siteConfig = {
  name: "Apex IT Skills Center Zafarwal",
  shortName: "Apex IT Skills",
  tagline: "Build practical IT skills for a better future",
  description:
    "Apex IT Skills Center Zafarwal offers career-oriented computer and digital skills training — graphic design, freelancing, digital marketing, office management, web development, and spoken English. Learn through hands-on professional training.",
  // Prefers the env var (set in Vercel) and falls back to the production URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apexitskills.com",
  locale: "en_PK",

  contact: {
    // Primary number, full international format for call / WhatsApp links.
    phone: "+923002526520",
    phoneDisplay: "0300-2526520",
    whatsapp: "923002526520",
    // Additional office numbers shown in footer / contact page.
    altPhones: ["0332-4662783", "0346-6778334"],
    email: "apexitskillscenter@gmail.com",
    altEmail: "info@apexitskills.com",
    address: "Old Chawinda Road, near Elia Gym, Zafarwal",
    city: "Zafarwal",
    region: "Punjab",
    country: "PK",
    hours: "Mon–Sat, 8:00 AM – 7:00 PM",
    mapsUrl:
      "https://www.google.com/maps/place/Apex+IT+Skills+Center+Zafarwal",
    // Approx coordinates for Zafarwal (used in LocalBusiness geo schema).
    geo: { latitude: 32.343348, longitude: 74.892165 },
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.827216217081!2d74.89216467446505!3d32.34334780602439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ea7001fa3c3c5%3A0xeb90b67ec304d949!2sApex%20IT%20Skills%20Center%20Zafarwal!5e0!3m2!1sen!2s!4v1766585887085!5m2!1sen!2s",
  },

  socials: {
    facebook: "https://www.facebook.com/apexitskills",
    instagram: "https://www.instagram.com/apexitskills",
    tiktok: "https://tiktok.com/@apex.it.skills.ce",
  },

  // Registration / certification charges (from live fee structure).
  charges: {
    registration: 2000,
    certification: 1000,
  },

  stats: [
    { value: "1,000+", label: "Students trained" },
    { value: "15+", label: "Courses offered" },
    { value: "10+", label: "Expert instructors" },
    { value: "98%", label: "Student satisfaction" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
