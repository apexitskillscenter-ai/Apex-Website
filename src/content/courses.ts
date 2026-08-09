import type { Course } from "@/types";

/**
 * Full course catalogue — fees and durations from the official Apex fee
 * structure flyer. Add a course by appending an object; the listing page,
 * filter, dynamic detail page, fee table, sitemap, and JSON-LD all read here.
 *
 * Fee notes from the flyer:
 *  - One-time admission/registration fee: Rs 2,000 (paid once).
 *  - Diploma fee on demand: Rs 4,000 (6 months) / Rs 8,000 (1 year).
 *  - Courses marked "decided at admission" use feeNote instead of a price.
 */
export const courses: Course[] = [
  {
    slug: "office-management",
    title: "Computer Basics / Office Management",
    category: "IT & Computer",
    duration: "3 Months",
    monthlyFee: 5000,
    diplomaFee: { sixMonth: 4000, oneYear: 8000 },
    level: "Beginner",
    lessons: 100,
    students: 300,
    icon: "Monitor",
    featured: true,
    summary:
      "Computer basics plus MS Word, Excel, PowerPoint, Google Drive, Canva and AI tools.",
    description:
      "Get job-ready with the essential computer and office skills every modern workplace expects. Perfect for boosting productivity in any digital office environment, from data entry to professional presentations.",
    outcomes: [
      "Use a computer and manage files confidently",
      "Create documents, sheets and presentations",
      "Use Google Drive, Canva and AI tools",
      "Qualify for office and data-entry roles",
    ],
    modules: [
      "Computer fundamentals",
      "MS Word & professional documents",
      "MS Excel & spreadsheets",
      "MS PowerPoint presentations",
      "Google Drive & cloud tools",
      "Canva & AI productivity tools",
    ],
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    category: "Design",
    duration: "3 Months",
    monthlyFee: 6000,
    diplomaFee: { sixMonth: 4000, oneYear: 8000 },
    level: "Beginner",
    lessons: 100,
    students: 100,
    icon: "Palette",
    featured: true,
    summary:
      "Learn Illustrator, Photoshop, CorelDraw, Canva and AI design tools from basic to advanced.",
    description:
      "Unleash your creativity and start a design career. From basics to advanced techniques, you'll master the industry-standard tools and build a portfolio that wins clients and jobs.",
    outcomes: [
      "Design logos, posters and social media graphics",
      "Master Illustrator, Photoshop and CorelDraw",
      "Use Canva and AI design tools",
      "Start a freelance design career",
    ],
    modules: [
      "Design principles & colour theory",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDraw",
      "Canva & AI design tools",
      "Portfolio & client projects",
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Design",
    duration: "1 Month",
    monthlyFee: 6000,
    level: "Beginner",
    lessons: 40,
    students: 30,
    icon: "Clapperboard",
    summary:
      "Editing for YouTubers, teachers and freelancers — cuts, transitions, audio and export.",
    description:
      "Learn practical video editing for content creation. Ideal for YouTubers, teachers and freelancers who want polished, professional videos that grow an audience or win clients.",
    outcomes: [
      "Edit professional videos end-to-end",
      "Add transitions, text and audio",
      "Create content for YouTube and social media",
      "Offer editing services as a freelancer",
    ],
    modules: [
      "Editing software basics",
      "Cuts, trims & transitions",
      "Text, titles & effects",
      "Audio & music",
      "Color & export settings",
      "A finished project",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development & SEO",
    category: "IT & Computer",
    duration: "2 Months",
    monthlyFee: 6000,
    diplomaFee: { sixMonth: 4000, oneYear: 8000 },
    level: "Intermediate",
    lessons: 80,
    students: 60,
    icon: "Code2",
    featured: true,
    summary:
      "Build websites with WordPress and learn Search Engine Optimization (SEO).",
    description:
      "Build professional websites with WordPress and learn how to rank them on Google with SEO. A practical path to client work, jobs, and running your own web projects.",
    outcomes: [
      "Build complete websites with WordPress",
      "Optimize sites for search engines (SEO)",
      "Deploy and manage live websites",
      "Take on web development clients",
    ],
    modules: [
      "Web fundamentals",
      "WordPress setup & themes",
      "Pages, posts & plugins",
      "On-page SEO",
      "Keyword research & ranking",
      "Launch & maintenance",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Marketing",
    duration: "3 Months",
    monthlyFee: 6000,
    level: "Beginner",
    lessons: 60,
    students: 40,
    icon: "Share2",
    summary:
      "Grow brands on Facebook, TikTok, WhatsApp and Instagram with paid and organic strategy.",
    description:
      "Master the platforms that matter in Pakistan. Learn to build an audience and run campaigns on Facebook, TikTok, WhatsApp and Instagram for businesses and clients.",
    outcomes: [
      "Build and grow social media pages",
      "Run Facebook and Instagram campaigns",
      "Create content for TikTok and WhatsApp",
      "Offer social media services to clients",
    ],
    modules: [
      "Social platforms overview",
      "Content strategy & calendar",
      "Facebook & Instagram ads",
      "TikTok & WhatsApp marketing",
      "Analytics & growth",
      "Client management",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    duration: "3 Months",
    monthlyFee: 6000,
    diplomaFee: { sixMonth: 4000, oneYear: 8000 },
    level: "Intermediate",
    lessons: 70,
    students: 50,
    icon: "TrendingUp",
    featured: true,
    summary:
      "Learn SEO, social media, Google Ads, email marketing and e-commerce strategies.",
    description:
      "Turn digital skills into real-world success. Master the strategies that grow online businesses and boost sales — from search engines to social platforms and paid ads.",
    outcomes: [
      "Run SEO and social media campaigns",
      "Manage Google Ads and email marketing",
      "Grow online businesses and boost sales",
      "Offer digital marketing services to clients",
    ],
    modules: [
      "SEO fundamentals",
      "Social media marketing",
      "Google Ads",
      "Email marketing",
      "E-commerce strategy",
      "Analytics & reporting",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce (Daraz / Shopify)",
    category: "Marketing",
    duration: "3 Months",
    monthlyFee: 6000,
    level: "Intermediate",
    lessons: 60,
    students: 30,
    icon: "ShoppingCart",
    summary:
      "Start and run an online store on Daraz and Shopify — listings, orders and growth.",
    description:
      "Learn how to build and run a profitable online store. Covers selling on Daraz and Shopify, from product listings and order management to scaling sales.",
    outcomes: [
      "Set up Daraz and Shopify stores",
      "Create winning product listings",
      "Manage orders and customers",
      "Grow online sales",
    ],
    modules: [
      "E-commerce basics",
      "Daraz seller setup",
      "Shopify store setup",
      "Product listings & photography",
      "Orders & customer service",
      "Marketing & scaling",
    ],
  },
  {
    slug: "freelancing",
    title: "Freelancing",
    category: "Freelancing",
    duration: "3 Months",
    monthlyFee: 6000,
    diplomaFee: { sixMonth: 4000, oneYear: 8000 },
    level: "Beginner",
    lessons: 70,
    students: 100,
    icon: "Briefcase",
    featured: true,
    summary:
      "Learn to earn online from Fiverr, Upwork and Freelancer with winning profiles and skills.",
    description:
      "Be your own boss and work from anywhere. Learn the in-demand skills, profile optimization, and client communication that turn freelancing into a real income — just like our students already earning while they learn.",
    outcomes: [
      "Create winning profiles on Fiverr and Upwork",
      "Win and manage international clients",
      "Build in-demand, marketable skills",
      "Earn online from anywhere",
    ],
    modules: [
      "Freelancing platforms overview",
      "Profile & gig optimization",
      "Client communication & proposals",
      "Project & time management",
      "Payments & withdrawals in Pakistan",
      "Scaling your freelance income",
    ],
  },
  {
    slug: "crypto-trading",
    title: "Crypto Trading",
    category: "Finance",
    duration: "3 Months",
    monthlyFee: 10000,
    level: "Intermediate",
    lessons: 100,
    students: 10,
    icon: "LineChart",
    summary:
      "Understand crypto trading, the Binance platform, market analysis and risk management.",
    description:
      "Step into the world of digital finance with confidence. Learn how to buy, sell and grow assets securely, with a strong focus on market analysis and managing risk.",
    outcomes: [
      "Understand crypto trading basics",
      "Use the Binance platform",
      "Apply market analysis techniques",
      "Manage risk responsibly",
    ],
    modules: [
      "Introduction to crypto & markets",
      "Binance platform walkthrough",
      "Technical analysis basics",
      "Risk & money management",
      "Trading strategies",
      "Security & wallet safety",
    ],
  },
  {
    slug: "typing-course",
    title: "Typing Course",
    category: "IT & Computer",
    duration: "1 Month",
    monthlyFee: 5000,
    level: "Beginner",
    lessons: 30,
    students: 50,
    icon: "Keyboard",
    summary:
      "Build fast, accurate typing speed — a foundation skill for every computer career.",
    description:
      "A focused one-month course to build real typing speed and accuracy. A practical foundation that makes every other computer skill faster and easier.",
    outcomes: [
      "Type quickly without looking",
      "Improve speed and accuracy",
      "Build a foundation for office work",
      "Pass typing-speed tests",
    ],
    modules: [
      "Keyboard layout & posture",
      "Home-row drills",
      "Speed building",
      "Accuracy practice",
      "Numbers & symbols",
      "Speed test preparation",
    ],
  },
  {
    slug: "final-year-projects",
    title: "Final Year Projects",
    category: "IT & Computer",
    duration: "1 Month",
    feeNote: "Decided at admission",
    level: "Advanced",
    icon: "FolderKanban",
    summary:
      "Mentorship and technical guidance to complete your academic final-year project.",
    description:
      "Get expert mentorship and technical guidance to plan, build and present your final-year project with confidence. Fee is decided at the time of admission based on project scope.",
    outcomes: [
      "Plan and scope a strong project",
      "Get technical implementation help",
      "Prepare documentation and a demo",
      "Present with confidence",
    ],
    modules: [
      "Project planning & scope",
      "Technical guidance",
      "Implementation support",
      "Documentation",
      "Testing & demo prep",
      "Presentation coaching",
    ],
  },
  {
    slug: "practicals-matric-ics",
    title: "Practicals (Matric & ICS)",
    category: "IT & Computer",
    duration: "1 Month",
    feeNote: "Decided at admission",
    level: "Beginner",
    icon: "FlaskConical",
    summary:
      "Computer practicals preparation for Matric and ICS students ahead of exams.",
    description:
      "Hands-on practical preparation for Matric and ICS computer subjects, so students walk into their practical exams confident and prepared. Fee is decided at admission.",
    outcomes: [
      "Master the practical syllabus",
      "Practice exam-style tasks",
      "Build confidence for the viva",
      "Prepare a complete practical file",
    ],
    modules: [
      "Syllabus overview",
      "Core practicals",
      "Programs & exercises",
      "Practical file preparation",
      "Viva preparation",
      "Mock practical exam",
    ],
  },
  {
    slug: "research-work-course",
    title: "Research Work Course",
    category: "IT & Computer",
    duration: "1 Month",
    feeNote: "Decided at admission",
    level: "Advanced",
    icon: "BookOpenCheck",
    summary:
      "Research support for M.Phil and Ph.D scholars — methodology, tools and writing.",
    description:
      "Specialised guidance for M.Phil and Ph.D scholars on research methodology, tools, and academic writing. Fee is decided at the time of admission based on scope.",
    outcomes: [
      "Apply sound research methodology",
      "Use research and analysis tools",
      "Improve academic writing",
      "Prepare work for submission",
    ],
    modules: [
      "Research methodology",
      "Literature review",
      "Data collection & analysis tools",
      "Academic writing",
      "Citations & formatting",
      "Review & submission",
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English",
    category: "Spoken English",
    duration: "3 Months",
    monthlyFee: 10000,
    level: "Beginner",
    lessons: 100,
    students: 100,
    icon: "Languages",
    featured: true,
    summary:
      "Speak English confidently — grammar, vocabulary, conversation and fluency.",
    description:
      "Build the confidence to speak English fluently in everyday and professional settings. Covers grammar, vocabulary, pronunciation and lots of real conversation practice.",
    outcomes: [
      "Speak English confidently",
      "Improve grammar and vocabulary",
      "Communicate clearly at work",
      "Build everyday fluency",
    ],
    modules: [
      "Grammar foundations",
      "Vocabulary building",
      "Pronunciation & fluency",
      "Everyday conversation",
      "Professional communication",
      "Confidence practice",
    ],
  },
  {
    slug: "ielts",
    title: "IELTS",
    category: "Spoken English",
    duration: "3 Months",
    monthlyFee: 10000,
    level: "Intermediate",
    lessons: 90,
    students: 50,
    icon: "GraduationCap",
    summary:
      "Complete IELTS preparation across listening, reading, writing and speaking.",
    description:
      "Targeted IELTS preparation for students aiming to study or work abroad. Covers all four modules with exam techniques, practice tests and speaking practice.",
    outcomes: [
      "Master all four IELTS modules",
      "Learn proven exam techniques",
      "Improve your band score",
      "Prepare for study abroad",
    ],
    modules: [
      "IELTS overview & strategy",
      "Listening",
      "Reading",
      "Writing tasks 1 & 2",
      "Speaking practice",
      "Full mock tests",
    ],
  },
  {
    slug: "pte",
    title: "PTE",
    category: "Spoken English",
    duration: "3 Months",
    monthlyFee: 10000,
    level: "Intermediate",
    lessons: 90,
    students: 40,
    icon: "Headphones",
    summary:
      "PTE Academic preparation with computer-based practice and proven techniques.",
    description:
      "Focused PTE Academic preparation, including the computer-based format, scoring, and the strategies that lift your score across speaking, writing, reading and listening.",
    outcomes: [
      "Understand the PTE format and scoring",
      "Master computer-based test techniques",
      "Improve across all sections",
      "Prepare for study or migration",
    ],
    modules: [
      "PTE overview & scoring",
      "Speaking & writing",
      "Reading",
      "Listening",
      "Computer-based practice",
      "Mock tests",
    ],
  },
  {
    slug: "duolingo",
    title: "Duolingo English Test",
    category: "Spoken English",
    duration: "3 Months",
    monthlyFee: 10000,
    level: "Intermediate",
    lessons: 80,
    students: 30,
    icon: "Languages",
    summary:
      "Preparation for the Duolingo English Test — fast, online, accepted worldwide.",
    description:
      "Prepare for the Duolingo English Test, an affordable, online English certification accepted by many universities. Covers the format, question types and score-boosting techniques.",
    outcomes: [
      "Understand the Duolingo test format",
      "Practice all question types",
      "Improve your score",
      "Meet university requirements",
    ],
    modules: [
      "Test format & rules",
      "Literacy questions",
      "Comprehension questions",
      "Conversation & writing",
      "Practice sessions",
      "Mock tests",
    ],
  },
  {
    slug: "kids-it-program",
    title: "APEX Smart Learning & AI Camp (Kids)",
    category: "Kids",
    duration: "7 Months",
    monthlyFee: 5000,
    level: "Beginner",
    ageRange: "Class 2 - 10",
    timing: "10:00 AM - 12:00 PM",
    lessons: 120,
    students: 50,
    icon: "Baby",
    featured: true,
    summary:
      "A 7-month smart learning & AI camp for children - spoken English, computers, MS Office, AI tools, robotics and creative thinking.",
    description:
      "Build a strong foundation for your child's future. The APEX Smart Learning & AI Camp gives students from Class 2 to 10 a complete, hands-on grounding in modern technology - from spoken English and computer skills to AI tools and Arduino robotics. Every enrolled student gets their own laptop under an M.Phil-supervised curriculum, with real practicals, presentations and tests. Limited seats - classes begin 1 June.",
    outcomes: [
      "Confident spoken English and handwriting",
      "Computer, typing and MS Office skills",
      "Hands-on AI tools and Arduino robotics",
      "Creative, critical thinking and problem-solving",
      "Early exposure to freelancing and online earning",
    ],
    modules: [
      "Spoken English & handwriting",
      "Computer fundamentals & typing",
      "MS Office (Word, Excel, PowerPoint)",
      "Modern technology & AI tools",
      "Arduino robotics",
      "Multimedia & projector-based learning",
      "Creative thinking & problem-solving",
      "Intro to freelancing & online earning",
    ],
  },
];

export const featuredCourses = courses.filter((c) => c.featured);

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const courseCategories = [
  "IT & Computer",
  "Design",
  "Marketing",
  "Freelancing",
  "Spoken English",
  "Finance",
  "Kids",
] as const;
