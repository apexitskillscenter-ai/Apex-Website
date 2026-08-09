import type { Instructor } from "@/types";

/**
 * Real management & teaching team from apexitskills.com.
 *
 * Photo workflow:
 *   1. Drop each photo into /public/images/team/ using the filename below.
 *   2. Cards will automatically display the real photo (no code change needed).
 *   3. Until a file exists at the path, the card shows a branded gradient
 *      initial-avatar — so the page always looks complete.
 */
export const instructors: Instructor[] = [
  {
    id: "i1",
    name: "Jamshaid Akhtar",
    specialty: "HOD — Digital Marketing",
    image: "/images/team/jamshaid-akhtar.jpg",
    bio: "A seasoned tech leader with an M.Phil in Computer Science and 10+ years of IT experience. Expert in advanced SEO, social media algorithms, and business scaling strategies, dedicated to helping students turn digital skills into profitable careers.",
    socials: {
      facebook: "https://www.facebook.com/share/1De7sBxWWt/",
    },
  },
  {
    id: "i2",
    name: "Muhammad Jamshaid",
    specialty: "HOD — Freelancing",
    image: "/images/team/muhammad-jamshaid.jpg",
    bio: "With 12+ years of success in the global gig economy, Muhammad is a master of platforms like Upwork and Fiverr. He mentors students on profile optimization, client communication, and securing high-ticket international projects.",
    socials: {
      facebook: "https://www.facebook.com/muhammad.jamshaid.56",
    },
  },
  {
    id: "i3",
    name: "Mohsin Anyat Choudhary",
    specialty: "HOD — Spoken English",
    image: "/images/team/mohsin-anyat.jpg",
    bio: "Holding an M.Phil in Linguistics, Mohsin is an expert in communication dynamics. He empowers students to overcome language barriers and master fluency for IELTS, PTE, and professional global environments.",
    socials: {},
  },
  {
    id: "i4",
    name: "Alishba Abdul Raheem",
    specialty: "Admin",
    image: "/images/team/alishba.jpg",
    bio: "Holding a Bachelor of Business & Information Technology, Alishba is efficient and organized, managing administrative tasks and student support to ensure smooth operations at Apex.",
    socials: {},
  },
  {
    id: "i5",
    name: "Bisma Khalil",
    specialty: "Assistant — Graphic Designer",
    image: "/images/team/bisma-khalil.jpg",
    bio: "A creative graphic designer who assists in delivering visual design projects and supports students in the Graphic Designing course with hands-on guidance and feedback.",
    socials: {},
  },
];
