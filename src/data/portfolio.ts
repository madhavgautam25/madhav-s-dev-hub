export const personalInfo = {
  name: "Madhav Gautam",
  headline: "Full Stack Developer & AI Enthusiast",
  tagline: "B.Tech CSE student passionate about building scalable products, student-focused platforms, and AI-powered applications.",
  email: "gautam.madhav63@gmail.com",
  linkedin: "https://linkedin.com/in/madhavgautam",
  github: "https://github.com/madhavgautam",
  resumeUrl: "#",
};

export const aboutText = [
  "I'm a 2nd-year B.Tech Computer Science Engineering student at Chitkara University, driven by curiosity and a love for building things that matter.",
  "My journey revolves around Full Stack Web Development (MERN stack), AI integration, and solving real-world problems through code. I believe in learning by doing — every project I pick up teaches me something new.",
  "When I'm not coding, I'm exploring new AI APIs, brainstorming startup ideas, or contributing to hackathons. I'm always looking for opportunities to collaborate and create impact.",
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "REST APIs", icon: "" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
  {
    category: "AI Basics",
    items: [
      { name: "ML APIs", icon: "" },
      { name: "AI Integration", icon: "" },
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
  challenges: string[];
  status: "Completed" | "In Progress" | "Prototype";
  role: string;
  duration: string;
}

export const projects: Project[] = [
  {
    slug: "saarthi-platform",
    title: "SAARTHI Platform",
    description: "An all-in-one student productivity, placement preparation, and AI-powered guidance platform designed for college students.",
    longDescription: "SAARTHI is a comprehensive platform built to bridge the gap between academic learning and industry readiness. It combines AI-driven career guidance, placement preparation resources, productivity tools, and peer collaboration — all in one unified experience tailored for college students.",
    tech: ["React", "Node.js", "MongoDB", "AI APIs", "Express", "Tailwind CSS"],
    github: "https://github.com/madhavgautam/saarthi",
    demo: "#",
    features: [
      "AI-powered career path recommendations based on skills & interests",
      "Placement preparation module with coding challenges & mock interviews",
      "Student productivity dashboard with task management & goal tracking",
      "Peer-to-peer collaboration and discussion forums",
      "Resume builder with AI-assisted content suggestions",
    ],
    challenges: [
      "Integrating multiple AI APIs for intelligent recommendations",
      "Building a scalable architecture to handle concurrent users",
      "Designing an intuitive UX for diverse student needs",
    ],
    status: "In Progress",
    role: "Full Stack Developer & Project Lead",
    duration: "3 months",
  },
  {
    slug: "smart-soil-health-monitor",
    title: "Smart Soil Health Monitor",
    description: "IoT-based soil monitoring system using ESP32 sensors and solar power to provide real-time soil health data to farmers.",
    longDescription: "A smart agriculture solution that leverages IoT technology to monitor soil conditions in real-time. The system uses ESP32 microcontrollers with various sensors to measure soil moisture, pH, temperature, and nutrient levels, transmitting data to a web dashboard for farmers to make informed decisions.",
    tech: ["ESP32", "IoT", "React", "Node.js", "MQTT", "Chart.js"],
    github: "https://github.com/madhavgautam/soil-monitor",
    demo: "#",
    features: [
      "Real-time soil moisture, pH, and temperature monitoring",
      "Solar-powered sensor nodes for remote deployment",
      "Web dashboard with historical data visualization",
      "Alert system for critical soil condition changes",
      "Data-driven crop recommendation engine",
    ],
    challenges: [
      "Power optimization for solar-powered remote sensors",
      "Ensuring reliable data transmission in rural areas",
      "Calibrating sensors for accurate soil readings",
    ],
    status: "Completed",
    role: "IoT Developer & Frontend Lead",
    duration: "2 months",
  },
  {
    slug: "ai-career-advisor",
    title: "AI Career Advisor",
    description: "An AI-powered career guidance tool that provides personalized recommendations based on skills, interests, and market trends.",
    longDescription: "An intelligent career advisory system that analyzes a student's skills, interests, academic background, and current market trends to provide personalized career path recommendations. Uses OpenAI's API for natural language interactions and data-driven insights.",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/madhavgautam/ai-career",
    demo: "#",
    features: [
      "Conversational AI interface for career counseling",
      "Skills assessment and gap analysis",
      "Industry trend analysis and job market insights",
      "Personalized learning path recommendations",
      "Resume and portfolio optimization tips",
    ],
    challenges: [
      "Fine-tuning AI prompts for accurate career advice",
      "Integrating real-time job market data",
      "Handling diverse career paths and edge cases",
    ],
    status: "Completed",
    role: "Full Stack Developer",
    duration: "6 weeks",
  },
  {
    slug: "d2c-ecommerce",
    title: "D2C Ecommerce Website",
    description: "A full-stack direct-to-consumer online store with product management, cart, checkout, and payment integration.",
    longDescription: "A complete direct-to-consumer ecommerce platform built from scratch with a focus on performance and user experience. Features include product catalog management, shopping cart, secure checkout with Stripe integration, order tracking, and an admin dashboard for inventory management.",
    tech: ["React", "Express", "MongoDB", "Stripe", "Node.js", "JWT Auth"],
    github: "https://github.com/madhavgautam/ecommerce",
    demo: "#",
    features: [
      "Product catalog with filtering, search, and categories",
      "Shopping cart with real-time price calculation",
      "Secure payment gateway integration with Stripe",
      "Order tracking and email notifications",
      "Admin dashboard for product and order management",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Building a responsive product catalog with smooth UX",
      "Optimizing database queries for large product catalogs",
    ],
    status: "Completed",
    role: "Full Stack Developer",
    duration: "2 months",
  },
];

export const experiences = [
  {
    title: "Hackathon Participant",
    org: "Multiple Events",
    period: "2024 — Present",
    description: "Participated in college and inter-college hackathons, building MVPs under time pressure and collaborating with cross-functional teams.",
  },
  {
    title: "Academic / Capstone Projects",
    org: "Chitkara University",
    period: "2023 — Present",
    description: "Developed multiple academic projects applying full-stack development and AI integration skills to solve real-world problems.",
  },
  {
    title: "Digital Content Incharge",
    org: "School Leadership Role",
    period: "2021 — 2023",
    description: "Led the digital content team, managed social media presence, and created engaging content for school events and campaigns.",
  },
];

export const education = {
  degree: "B.Tech — Computer Science Engineering",
  institution: "Chitkara University",
  period: "2023 — 2027",
  description: "Pursuing a Bachelor's in CSE with focus on software development, AI/ML fundamentals, and hands-on project-based learning.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
