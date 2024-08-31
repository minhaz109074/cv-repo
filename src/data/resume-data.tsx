import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PenIcon, YoutubeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Minhazul Abedin",
  initials: "MA",
  avatar: "/minhazul-abedin.png",
  resume: "/cv.pdf",
  location: "Dhaka, Bangladesh",
  url: "https://www.linkedin.com/in/minhazul-abedin-1b5b2b1ab",
  ogImage: " ",
  twitter: " ",
  about:
    "Software Engineer focused on building scalable micro services on the cloud.",
  summary:
    "I am a Software Engineer with over 1.5 years of experience in developing and deploying robust software solutions, focusing on .NET technologies such as .NET Framework, ASP.NET Core, and ASP.NET MVC. I am skilled in building scalable backend applications and microservices.",
  personalWebsiteUrl: " ",
  contact: {
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/minhazul-abedin-1b5b2b1ab",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/minhaz109074",
        icon: GitHubIcon,
      },
   
     
    ],
  },
  education: [
    {
      school: "Noakhali Science and Technology University",
      degree: "Bachelor of Science in Computer Science and Telecommunication Engineering",
      start: "2017",
      end: "2022",
      location: "Noakhali, Bangladesh",
      gpa: "3.58",
    },
  ],
  work: [
    {
      company: "Astha IT",
      location: "Dhaka, Bangladesh",
      badges: [],
      title: "Software Engineer",
      start: "December, 2022",
      end: "Current",
      description:
        "Developed and maintained backend solutions using .NET Core and Microservices architecture. Implemented a robust file storage system, developed new features for client, and optimized data processing and system.",
    },
    {
      company: "Astha IT",
      location: "Dhaka, Bangladesh",
      badges: [],
      title: "Software Engineer Intern",
      start: "August, 2022",
      end: "November, 2022",
      description:
        "Participated in Astha IT Dev Bootcamp, gaining practical experience with various technologies and developing small-scale projects to learn and apply new skills.",
    },
  ],
  skills: [
    "C#",
    ".NET Framework",
    "ASP.NET Core",
    "ASP.NET MVC",
    "Web API",
    "Docker",
    "AWS",
    "JIRA",
    "Git",
    "SQL",
    "Vector Database"
  ],
  projects: [
    {
      title: "DocIT",
      organization: "Astha IT",
      techStack: [
        "Angular",
        "React",
        "ASP.NET Core",
        "Cassandra",
        "PostgreSQL",
        "AWS",
        "Micro services",
        "Kafka"
      ],
      description: "DocIT is a cloud-based learning management system designed for healthcare organizations to create customized training modules and access pre-built courses, enhancing staff proficiency in healthcare operations and clinical documentation.",
      points: [
        "Maintained and monitored 13 microservices on the backend, ensuring system stability and resolving issues.",
        "Developed key features such as course management, organization creation, and progress tracking and reporting.",
        "Assisted in converting the project from a single-tenant to a multi-tenant architecture."
      ],
    },
    {
      title: "Caboodle Services",
      organization: "Astha IT",
      techStack: [
        "ReactJS",
        "NextJS",
        "Tailwind",
        "ASP.NET Core",
        "AWS",
        "PostgreSQL"
      ],
      description: "Caboodle is an all-in-one platform for natural product sales teams, integrating sales tracking, trade promotions, data analytics, and marketing functions.",
      points: [
        "Designed and optimized database schemas to efficiently handle large-scale client sales data.",
        "Achieved a 75% speed improvement for data insertion through bulk operations.",
        "Developed a file storage system for managing files, including uploading, downloading, deleting, moving, and folder management."
      ],
    },
  ],
} as const;
