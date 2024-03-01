import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PenIcon, YoutubeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Mukesh Murugan",
  initials: "MM",
  resume: "/cv.pdf",
  location: "Trivandrum, Kerala, India",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Software Engineer focused on building products with extra attention to detail!",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iammukeshm/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/iammukeshm",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/iammukeshm",
        icon: XIcon,
      },
      {
        name: "Blog",
        url: "https://codewithmukesh.com/",
        icon: PenIcon,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@codewithmukesh/videos",
        icon: YoutubeIcon,
      },
    ],
  },
  education: [
    {
      school: "Birla Institute of Technology, Mesra",
      degree: "Electronics & Communication Engineering.",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "CSG International",
      location: "Bangalore, Karnataka",
      badges: ["remote"],
      title: "SDE 2",
      start: "February, 2022",
      end: "Current",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "ALLIANZ",
      location: "Trivandrum, Kerala",
      badges: ["remote"],
      title: "Senior Software Engineer",
      start: "March, 2021",
      end: "February, 2022",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "PITS",
      location: "Trivandrum, Kerala",
      badges: [],
      title: "Software Engineer",
      start: "July, 2019",
      end: "March, 2021",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Adroit Solutions LLC",
      location: "Al Khuwair, Oman",
      badges: [],
      title: "C/C++ Developer",
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    ".NET",
    "ASP.NET Core",
    "Web API",
    "Golang",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform",
    "GitHub Actions",
    "SQL",
    "NoSQL"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
