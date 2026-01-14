import { Project, Experience, Achievement, Publication, SkillCategory } from './types';
import { Code2, Database, Layout, Smartphone, Server, Figma } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Glorian Hilarius Kiantin Beda",
  role: "Software Developer & UI/UX Designer",
  location: "Cicurug, Sukabumi, West Java",
  email: "rian.beda246@gmail.com",
  linkedin: "https://linkedin.com/in/glorian-hilarius-568a97248/",
  github: "https://github.com/glorianbeda",
  summary: "Software Engineering Technology student at IPB University Vocational School with a strong passion for UI/UX design, android mobile app development, and web development. Detail-oriented and ambitious learner aiming to contribute in dynamic tech environments.",
  avatar: "https://tse1.mm.bing.net/th?q=personal%20photo%20glorian%20hilarius" // Placeholder for the provided image URL
};

export const PROJECTS: Project[] = [
  {
    title: "Engineering Intern - PT Amerta Indah Otsuka",
    date: "Present",
    role: "IT Engineering Support",
    description: "Contributing to the Engineering Department by developing internal automation tools and maintaining technical documentation systems to improve operational efficiency.",
    tags: ["Internal Tools", "System Maintenance", "Engineering Support"]
  },
  {
    title: "SatuFile: Cloud GUI for Server",
    date: "Dec 2025",
    role: "Fullstack Developer, DevOps",
    description: "Built a web-based cloud storage GUI using React & TypeScript with a high-performance Golang backend. Deployed on a self-hosted ARM server, exposed via Cloudflare Tunnel.",
    tags: ["React", "TypeScript", "Golang", "Cloudflare", "DevOps"]
  },
  {
    title: "SatuData Website",
    date: "Nov 2025",
    role: "Fullstack Developer",
    description: "Super App for 'Orang Muda Katolik', integrating document archiving, digital signatures, PDF editor, and collaborative notes.",
    tags: ["React.js", "Node.js", "Prisma ORM", "MySQL"]
  },
  {
    title: "Fotola: Photobooth Online",
    date: "Aug 2025",
    role: "Fullstack Developer",
    description: "Online photobooth using React & Node.js, integrated with Python for background removal. Implemented Google MediaPipe for hand gesture detection.",
    tags: ["React", "Node.js", "Python", "MediaPipe", "Computer Vision"]
  },
  {
    title: "SIPATUH Website",
    date: "May 2025",
    role: "Fullstack Developer",
    description: "Parking System designed with Vue.js + Vite (Frontend) and Express.js (Backend). Features dynamic dashboard, income tracking, and automated email notifications.",
    tags: ["Vue.js", "Express.js", "MySQL", "SMTP"]
  },
  {
    title: "IdRunner Website",
    date: "May 2025",
    role: "Model Trainer & Tester",
    description: "Trained YOLOv8 model to identify runners' bib numbers. Flask web app enables users to search photos by bib number.",
    tags: ["YOLOv8", "Flask", "Python", "Computer Vision"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Hati Maria Tak Bernoda (HMTB) Catholic Church",
    role: "Member Event Documentation",
    date: "Jan 2023 – Present",
    description: [
      "Documentation of major church activities (Easter, Christmas, etc).",
      "Creating annual church photo albums and photo editing."
    ]
  },
  {
    company: "Himavo Micro IT Community",
    role: "Web Development Division",
    date: "Feb 2023 – Feb 2024",
    description: [
      "Attended web design/development training.",
      "Event organizer for community events."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Place - UI/UX Vocation of Champions 2024",
    event: "Sebelas Maret University - Solo",
    date: "Nov 2024",
    rank: "Winner",
    description: "Designed UI/UX for an AI-powered learning platform supporting 'Indonesia Emas 2045'."
  },
  {
    title: "2nd Place - UI/UX SMART IT Competition 2024",
    event: "Sebelas Maret University - Solo",
    date: "Jun 2024",
    rank: "Runner Up",
    description: "Created UI design for 'Skillify', an online course mobile application."
  },
  {
    title: "2nd Place - UI/UX Tech Festival 2024",
    event: "Institut Teknologi Indonesia",
    date: "Feb 2024",
    rank: "Runner Up",
    description: "Designed 'V-Care' mobile app for student health consultations."
  },
  {
    title: "3rd Place - Compsphere 2023",
    event: "President University",
    date: "Oct 2023",
    rank: "3rd Place",
    description: "Designed 'retoru', an antique auction app with retro aesthetics."
  }
];

const getIcon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "HTML5", iconUrl: getIcon('html5') },
      { name: "CSS3", iconUrl: getIcon('css3') },
      { name: "JavaScript", iconUrl: getIcon('javascript') },
      { name: "TypeScript", iconUrl: getIcon('typescript') },
      { name: "PHP", iconUrl: getIcon('php') },
      { name: "Java", iconUrl: getIcon('java') },
      { name: "Kotlin", iconUrl: getIcon('kotlin') },
      { name: "Python", iconUrl: getIcon('python') },
      { name: "Golang", iconUrl: getIcon('go') },
      { name: "R", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" }, 
      { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    category: "Frameworks & Libs",
    items: [
      { name: "React", iconUrl: getIcon('react') },
      { name: "Vue.js", iconUrl: getIcon('vuejs') },
      { name: "Laravel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "Flask", iconUrl: getIcon('flask') },
      { name: "Express.js", iconUrl: getIcon('express') },
      { name: "Tailwind", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Figma", iconUrl: getIcon('figma') },
      { name: "Git", iconUrl: getIcon('git') },
      { name: "Android Studio", iconUrl: getIcon('androidstudio') },
      { name: "MySQL", iconUrl: getIcon('mysql') },
      { name: "MongoDB", iconUrl: getIcon('mongodb') },
      { name: "Firebase", iconUrl: getIcon('firebase') },
      { name: "Cloudflare", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
      { name: "Jira", iconUrl: getIcon('jira') },
      { name: "Notion", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" } 
    ]
  }
];

export const PUBLICATIONS: Publication[] = [];

export const ICONS_MAP = {
  React: Code2,
  Figma: Figma,
  Backend: Server,
  Database: Database,
  UIUX: Layout,
  Mobile: Smartphone
};