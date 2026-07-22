export const siteConfig = {
  name: "Ziel",
  title: "Zielzone",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/tomcomtang/astro-multiplepage-portfolio",
    twitter: "https://x.com/astrodotbuild",
    email: "mailto:364786053@qq.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Zieru",
  description:
    "Exploring ideas through code, visuals, and words.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/posts/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Your Portfolio",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "I build things to understand ideas. Through code, visuals, and words. This space collects projects, experiments, and notes that reflect how I think and work. I focus on building systems that are functional, clear, and grounded in real use. Currently exploring web development, visual design, and writing as one continuous practice.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Git",
    "AWS",
  ],
  image: {
    src: "/assets/images/about/Wolf_ava.png",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2022 - 2024",
        position: "Head of IT Student Community (RIT)",
        company: "University",
        description:
          "Led and coordinated technology-based student initiatives, managed and facilitated collaborative projects or events across members.",
      },
      {
        period: "2025",
        position: "IT Support Intern",
        company: "Pertamina Geothermal Energy",
        description:
          "Provided technical support, assisted system maintenance, and documented operational processes.",
      },
      {
        period: "2024 - Present",
        position: "System & Web Development Projects",
        company: "Independent Projects",
        description:
          "Designed business flows, built web applications using Laravel, and practiced project management using Agile methodologies with jira.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can find us on social media or drop us an",
    email: {
      text: "email",
      href: "azrielnoer28@gmail.com",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Your Portfolio",
    description: "Showcase of my best work and projects",
  },
  title: "Our Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  projects: [
    {
      title: "Project One",
      description:
        "A brief description of your first project. Explain what it does and what technologies you used.",
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Project Two",
      description:
        "Describe your second project here. Highlight the key features and your role in development.",
      image: "/assets/images/projects/project2.jpg",
      href: "#",
    },
    {
      title: "Project Three",
      description:
        "Share details about your third project. What problems did it solve? What was the outcome?",
      image: "/assets/images/projects/project3.png",
      href: "#",
    },
  ],
};

