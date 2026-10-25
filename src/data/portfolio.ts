export interface Project {
  id: string;
  title: string;
  role: string;
  tagline: string;
  summary: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  period: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  award: string;
  period: string;
  description: string;
}

export const RESUME_DATA = {
  name: "Sameer Dhakad",
  title: "Full-Stack Engineer & Product Builder",
  location: "New Delhi, India",
  timezone: "IST (UTC+5:30)",
  email: "sameerdkh21@gmail.com",
  github: "https://github.com/sameer-dhakad",
  linkedin: "https://www.linkedin.com/in/sameer-dhakad-b0935423b/",
  resumePdfUrl: "/resume.pdf",

  about:
    "Full-stack engineering undergraduate at SRMIST passionate about building clean web apps, developer tools, and agentic workflows. Proficient in React, Next.js, Node.js, Python, and PostgreSQL with multiple deployed projects.",

  stats: [
    { label: "SRMIST B.Tech CSE", value: "8.75 / 10.0 CGPA" },
    { label: "Flipkart GRID 8.0", value: "National Semi-Finalist" },
    { label: "DTU RiseIn Hackathon", value: "3rd Place Winner" },
  ],

  projects: [
    {
      id: "settle",
      title: "Settle — Group Expense Splitter",
      role: "Full-Stack MERN",
      tagline: "Educational-grade expense calculation and group debt resolution",
      summary:
        "Full-stack application engineered to model complex shared expense graphs, multi-user splits, and debt settlement with real-time state updates.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/sameer-dhakad/settle",
      period: "Jul 2026",
    },
    {
      id: "ap2-gateway",
      title: "AP2-Gateway",
      role: "Razorpay AI Buildathon",
      tagline: "Agentic payment verification gateway for autonomous AI agents",
      summary:
        "Built for Razorpay AI Buildathon to decouple AI agent negotiation from financial execution with deterministic signature verification and spend mandate limits.",
      tech: ["Python", "Node.js", "Razorpay API", "LLMs", "Express"],
      githubUrl: "https://github.com/sameer-dhakad/ap2-gateway",
      period: "Sep 2026",
    },
    {
      id: "financial-ledger",
      title: "Financial Transaction Ledger",
      role: "Backend & Systems",
      tagline: "ACID-compliant simulated banking transaction engine",
      summary:
        "Engineered transactional balance consistency using strict PostgreSQL isolation levels, parameterized queries, and atomic double-entry bookkeeping blocks.",
      tech: ["Node.js", "PostgreSQL", "SQL", "Express"],
      githubUrl: "https://github.com/sameer-dhakad/bank-ledger",
      period: "Oct 2025",
    },
    {
      id: "stackpilot",
      title: "StackPilot",
      role: "Full-Stack DevTools",
      tagline: "Developer project telemetry and build history dashboard",
      summary:
        "Production developer dashboard tracking microservice health and deployments with JWT auth, express-validator, and compound MongoDB search indexes.",
      tech: ["React 19", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/sameer-dhakad/stackpilot",
      period: "Aug 2026",
    },
  ] as Project[],

  experience: [
    {
      company: "Bhanzu",
      role: "Tech & Marketing Intern",
      period: "May 2026 – Jul 2026",
      highlights: [
        "Authored comprehensive technical documentation, translating complex software workflows into clear guides.",
        "Tested features, reviewed software bugs, and provided constructive feedback to the engineering team for rapid resolution.",
        "Built and evaluated simple workflows using Generative AI tools (LLMs) to automate repetitive tasks.",
      ],
    },
    {
      company: "Yuga Yatra Retail Pvt. Ltd.",
      role: "Software Developer Intern",
      period: "Jul 2026 – Sep 2026",
      highlights: [
        "Gained hands-on experience building backend APIs and writing custom PostgreSQL queries reflecting real industry practices.",
        "Collaborated using Git and GitHub version control to maintain clean code and integrate database features smoothly.",
      ],
    },
    {
      company: "DevTown",
      role: "Campus Ambassador Intern",
      period: "Aug 2024 – Feb 2025",
      highlights: [
        "Coordinated student outreach for technical coding workshops, fostering a community of learners.",
        "Communicated practical project-based engineering skills to undergraduate peers.",
      ],
    },
  ] as Experience[],

  achievements: [
    {
      title: "Flipkart GRID 8.0",
      award: "National Semi-Finalist",
      period: "Aug 2026",
      description:
        "Demonstrated strong system design logic and problem-solving in a high-stakes national engineering competition.",
    },
    {
      title: "DTU RiseIn Hackathon",
      award: "3rd Place Winner",
      period: "Sep 2023",
      description:
        "Built and deployed a functional web prototype under a strict 24-hour hackathon sprint.",
    },
  ] as Achievement[],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SRM Institute of Science and Technology",
      period: "2023 – 2027",
      score: "8.75 / 10.0 CGPA",
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "The Lotus International Sr. Sec. School",
      period: "2022",
      score: "87.8%",
    },
    {
      degree: "Class X (Secondary)",
      institution: "The Lotus International Sr. Sec. School",
      period: "2020",
      score: "94.0%",
    },
  ],

  skills: [
    {
      category: "Full-Stack & Web",
      items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
      category: "Databases & Backend",
      items: ["PostgreSQL", "MongoDB", "SQL Queries", "Python", "C++", "REST APIs"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git & GitHub", "Postman", "System Design Basics", "Linux CLI", "Vercel"],
    },
    {
      category: "AI & Workflow",
      items: ["Generative AI (LLMs)", "Technical Writing", "Workflow Automation", "Code Review"],
    },
  ],
};
