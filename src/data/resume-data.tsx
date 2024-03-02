import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PenIcon, YoutubeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Mukesh Murugan",
  initials: "MM",
  avatar: "/mukesh_murugan.png",
  resume: "/cv.pdf",
  location: "Trivandrum, Kerala, India",
  url: "https://cv.codewithmukesh.com",
  ogImage: "/mukeshmurugan_banner.png",
  twitter: "@iammukeshm",
  about:
    "Software Engineer focused on building scalable services on the cloud.",
  summary:
    "Software Engineer with 7+ Years of Experience in Backend development with .NET, Go, Docker, Kubernetes, Terraform and Cloud Technologies like AWS.",
  personalWebsiteUrl: "https://staging.codewithmukesh.com",
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
      degree: "Electronics & Communication Engineering",
      start: "2012",
      end: "2016",
      location: "Waljat College Of Applied Science, Oman",
      gpa: "7.2"
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
        "Designed & Implemented new features, worked on improving the Telecom Rating System. Experience in Microservices, Serverless, and Cloud Technologies.",
    },
    {
      company: "ALLIANZ",
      location: "Trivandrum, Kerala",
      badges: ["remote"],
      title: "Senior Software Engineer",
      start: "March, 2021",
      end: "February, 2022",
      description: "Worked on .NET Backend Microservices with RabbitMQ, Docker, ASP.NET Core Web API to build an Input Management System for Insurance Firms."
    },
    {
      company: "PITS",
      location: "Trivandrum, Kerala",
      badges: [],
      title: "Software Engineer",
      start: "July, 2019",
      end: "March, 2021",
      description: "Worked on .NET, WPF, SQL, ASP.NET Core WebAPI to build Point Of Sales System for Automobile Parts Vendors."
    },
    {
      company: "Adroit Solutions LLC",
      location: "Al Khuwair, Oman",
      badges: [],
      title: "C/C++ Developer",
      start: "2010",
      end: "2012",
      description: "Worked on .NET Web API, MVC, SQL for building Point Of Sales System that handle customer transactions."
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
      title: "ARC Offline",
      organization: "CSG International",
      techStack: [
        "Golang",
        ".NET",
        "Microservices",
        "AWS",
        "Docker",
        "Kubernetes",
        "Redis"
      ],
      description: "Telecom Rating and Processing System Backend with Microservice Architecture running on the Cloud(AWS).",
      points: [
        "Stack includes Golang, .NET, Kubernetes, Terraform, PostgreSQL, ECS, AWS Lambda, S3, Athena, DynamoDB, SNS, SQS, and other AWS Services.",
        "Optimized costs (over 2,000 USD per month) by implementing Multitenancy and reducing resource provisioning.",
        "Cross Team Collaboration for Features",
        "CI/CD with Azure DevOps Pipelines and AWS CodePipeline.",
        "Involved in Designing various cross-team integrations, Grooming, and Planning.",
        "DevOps Activities for cost monitoring, performance tracking, and deploying applications to production and customer - facing environments."
      ],
    },
    {
      title: "INSURANCE INPUT MANAGEMENT SYSTEM",
      organization: "Allianz",
      techStack: [
        ".NET",
        "Microservices",
        "Azure",
        "Computer Vision",
        "RabbitMQ",
        "Web API"
      ],
      description: "AIMS is responsible for monitoring customer mailboxes, performs OCR using Azure Computer Vision / Google Cloud Vision, and exports the document to other endpoints as needed by the business.",
      points: [
        "Worked with .NET Core, ASP.NET Core WebAPI, MongoDB, RabbitMQ, Angular, OCR",
        "Provided estimates based on tasks and ensured due delivery.",
        "Involved in complete SDLC for various OE Projects.",
        "Responsible to Deployment to UAT and Production Environments."
      ],
    }
  ],
} as const;
