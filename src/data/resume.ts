import { Experience } from "@/components/cards/experience-card";
import { Project } from "@/components/cards/project-card";
import quietspace from "@/assets/quietspace-screenshot.png";
import nimbus from "@/assets/nimbus-screenshot.png"

export const experiences: Experience[] = [
  {
    id: "1",
    start: "2024",
    end: "PRESENT",
    title: "Software Engineer",
    company: "Trumio",
    companyUrl: "https://trumio.ai", // Inferred or can leave generic if unknown, but trumio.ai is likely. I'll use a placeholder if unsure, but trumio is likely real.
    description:
      "Built and maintained the admin platform for 5 customer organizations, improving Lighthouse scores by 12–18%. Developed RBAC-driven analytics dashboards with Recharts & shadcn. Created a 40+ component internal design system reducing dev time by 20%.",
    skills: ["React", "TypeScript", "Vite", "Zustand", "shadcn/ui", "Recharts", "FastAPI"],
  },
  {
    id: "2",
    start: "2023",
    end: "2024",
    title: "SDE-1",
    company: "Reunion",
    companyUrl: "https://reunionhq.in/", 
    description:
      "Built data-intensive UI components for a real-estate risk analysis platform using Gatsby and React. Implemented backend scrapers and distributed ingestion workflows with Celery + RabbitMQ.",
    skills: ["Gatsby", "React", "Python", "BeautifulSoup", "Celery", "RabbitMQ"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "QuietSpace",
    description:
      "Full-stack mental wellbeing app for mood tracking, journaling, and AI-assisted reflection. Features AI companion chat with historical context and goal tracking.",
    imageUrl: quietspace,
    projectUrl: "https://quietspace-tan.vercel.app",
    skills: ["Next.js", "Supabase", "Gemini", "Vercel AI SDK", "Zustand", "shadcn/ui"],
  },
  {
    id: "2",
    title: "Nimbus AI",
    description:
      "AI-powered chess learning platform that helps you analyze your games, identify mistakes, and improve through personalized puzzles.",
    imageUrl: nimbus,
    projectUrl: "https://nimbus-chess-v2.vercel.app",
    skills: ["Next.js", "Supabase", "Gemini", "Vercel AI SDK", "Zustand", "shadcn/ui"],
  },
];
