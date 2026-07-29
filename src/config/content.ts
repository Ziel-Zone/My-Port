export const siteConfig = {
  name: "Ziel",
  title: "Zielzone",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/ziel-zone/",
    twitter: "https://x.com/astrodotbuild",
    email: "mailto:azrielnoer28@gmail.com",
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
      title: "Kolase Photobooth Project",
      description:
        "Kolase Photobooth merupakan bisnis photobooth dengan beberapa outlet permanen dan event-based yang masih bergantung pada software pihak ketiga dengan biaya berlangganan rutin. Project ini bertujuan untuk merancang sistem internal yang mampu mendukung operasional photobooth secara lebih efisien dan scalable.",
      image: "/assets/images/projects/project1.jpg",
      href: "/posts/Project Kolase/",
    },
    {
      title: "Republic Information Technology (RIT)",
      description: "Founder & Community Lead yang memimpin ekosistem kolaborasi teknologi mahasiswa lintas divisi.",
      image: "/assets/images/projects/Logo BG.png", // Ganti dengan path gambar/logo RIT kamu
      href: "/posts/RIT project/", // Path slug ke file markdown-nya
    },
    {
      title: "RIT Showcase 2025",
      description: "Inisiator & Project Lead pameran teknologi mahasiswa yang menampilkan 5 proyek lintas divisi (IoT, AI, Web, Game).",
      image: "/assets/images/projects/project3.png", // Ganti dengan gambar thumbnail pameran/acara
      href: "/posts/RIT Showcase/", // Path slug mengarah ke file markdown-nya
    },
  ],
};

