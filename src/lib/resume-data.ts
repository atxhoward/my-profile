export const resumeData = {
  profile: {
    fullName: "Austin Howard",
    shortName: "Software Engineer",
    role: "Austin Howard",
    heroIntro:
      "Accomplished full stack engineer with 4+ years of continuous growth and experience in software development. Designs scalable, performant web applications with intuitive, reliable user experiences.",
    aboutBody:
      "Austin is a father, musician, and Austinite at heart. When he’s not building software, he’s usually out with his young family checking out local parks, playgrounds, neighborhood spots, and the occasional craft brewery.",
    architectureIntro: "Time for the good stuff! Here's a peek under the hood of how this site is built and deployed.",
  },

  siteMeta: {
    navLabel: "Austin Howard",
    aboutImagePath: "/profile-placeholder.svg",
    includeFooter: true,
  },

  experience: [
    {
      orderIndex: 1,
      dateRange: "January 2026 - Present",
      title: "Software Engineer",
      bullets: [
        "Helped migrate a large backend platform to a new Azure environment, improving scalability, reliability, and long‑term maintainability.",
        "Improved system performance by building and maintaining asynchronous workflows using Azure Service Bus and Azure Functions.",
        "Contributed to more reliable production releases by aligning application changes with existing CI/CD and deployment workflows.",
      ],
    },
    {
      orderIndex: 2,
      dateRange: "January 2024 - January 2026",
      title: "Associate Software Engineer",
      bullets: [
        "Contributed to breaking down a legacy monolithic system into smaller, independent microservices using ASP.NET Core on Azure.",
        "Built and maintained internal tools with C#/.NET and React that helped customer service teams work more efficiently and reduced manual data cleanup.",
        "Improved application performance by optimizing high‑traffic services and refactoring data‑sync workflows.",
        "Worked closely with senior engineers in Agile sprints to design, build, and safely deploy production features with minimal customer impact.",
      ],
    },
    {
      orderIndex: 3,
      dateRange: "May 2022 - January 2024",
      title: "Application Support Engineer",
      bullets: [
        "Supported live production systems by monitoring applications and responding to incidents affecting both backend and frontend services.",
        "Built and standardized monitoring and alerting using Datadog and Squadcast, significantly improving how quickly the team could detect and respond to issues.",
        "Took part in high‑severity incident responses, helping identify root causes and implement long‑term fixes to prevent repeat problems.",
        "Wrote runbooks and troubleshooting guides to improve on‑call efficiency and coordinated fixes using Jira and Azure Boards.",
      ],
    },
    {
      orderIndex: 4,
      dateRange: "Dec 2021 - May 2022",
      title: "Frontend Engineer Intern",
      bullets: [
        "Built reusable UI components and helped standardize styling across the application to improve consistency and maintainability.",
        "Improved page performance and user experience by supporting a single‑page application with real‑time data updates.",
        "Refactored frontend code to simplify component logic and reduce complexity, making the codebase easier to understand and extend.",
      ],
    },
  ],

  education: [
    {
      orderIndex: 1,
      dateRange: "October 2020 - March 2021",
      title: "Full Stack Engineering Bootcamp",
      school: "App Academy",
      bullets: [
        "Completed intensive 24-week full-stack bootcamp with focus on modern web development practices.",
        "Built 4 full-stack applications using a combination of React, Node.js, Express.js, Python, Flask and PostgreSQL with deployment to production.",
        "Collaborated on team projects using Git, Agile workflows, and code review practices in a professional development environment.",
      ],
    },
  ],

  skillGroups: [
    {
      orderIndex: 1,
      name: "Languages",
      icon: "code",
      skills: [
        { orderIndex: 1, label: "C#" },
        { orderIndex: 2, label: "TypeScript" },
        { orderIndex: 3, label: "Python" },
        { orderIndex: 4, label: "SQL" },
        { orderIndex: 5, label: "JavaScript" },
      ],
    },
    {
      orderIndex: 2,
      name: "Frameworks",
      icon: "framework",
      skills: [
        { orderIndex: 1, label: ".NET" },
        { orderIndex: 2, label: "React" },
        { orderIndex: 3, label: "Next.js" },
        { orderIndex: 4, label: "Node.js" },
        { orderIndex: 5, label: "Express.js" },
      ],
    },
    {
      orderIndex: 3,
      name: "Tools & Data",
      icon: "db",
      skills: [
        { orderIndex: 1, label: "Azure" },
        { orderIndex: 2, label: "MSSQL" },
        { orderIndex: 3, label: "Cosmos DB" },
        { orderIndex: 4, label: "Entity Framework" },
        { orderIndex: 5, label: "Service Bus" },
        { orderIndex: 6, label: "Redis" },
        { orderIndex: 7, label: "Docker" },
        { orderIndex: 8, label: "Kafka" },
      ],
    },
  ],

  highlights: [
    {
      orderIndex: 1,
      title: "Cloud-Native Data & CI/CD",
      description:
        "Helped migrate a large backend platform to a new Azure environment, improving scalability, reliability, and long‑term maintainability.",
    },
    {
      orderIndex: 2,
      title: "Architecture & API Design",
      description:
        "Contributed to breaking down a legacy monolithic system into smaller, independent microservices using ASP.NET Core on Azure, improving scalability and maintainability.",
    },
    {
      orderIndex: 3,
      title: "Performance Optimization",
      description:
        "Improved application performance by optimizing high‑traffic services and refactoring data‑sync workflows",
    },
    {
      orderIndex: 4,
      title: "Incident Response & Reliability",
      description:
        "Participated in high-severity incident responses, helping identify root causes and implement long-term fixes to prevent repeat problems.",
    },
  ],
};
