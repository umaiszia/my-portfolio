// ────────────────────────────────────────────────────────────
// EDIT EVERYTHING HERE. This is the only file you need to touch
// to change the text, links, projects and skills on your site.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Umais Zia",
  role: "Frontend Developer",
  tagline: "I build fast, clean interfaces with React,Javascript and Tailwind CSS.",
  location: "Rawalpindi, Pakistan",
  email: "umaiisziia@gmail.com",
  resumeUrl: "/resume.pdf", // put your resume file in /public and update this path
  socials: {
    github: "https://github.com/umaiszia",
    linkedin: "https://linkedin.com/in/umais-zia-9a04552a1",
  },
};

export const about = {
  paragraphs: [
    "I'm a frontend developer focused on building interfaces that feel fast and effortless. My main stack is React, JavaScript and Tailwind CSS, and I also build and customize WordPress sites for clients who need a CMS-driven workflow.",
    "I care about the details most people skip — load time, spacing, motion that has a reason to exist. I like turning a static design into something that actually responds when you touch it.",
  ],
};

export const skills = [
  { category: "Core", items: ["JavaScript (ES6+)", "React", "Tailwind CSS", "HTML5 / CSS3"] },
  { category: "Tooling", items: ["Vite", "Git & GitHub", "Figma", "npm"] },
  { category: "CMS", items: ["WordPress", "Elementor", "Custom Themes"] },
];

// Add or remove project objects freely — the grid adjusts automatically.
export const projects = [
  {
    title: "Project One",
    description: "A short, honest description of what this project does and the problem it solves for the user.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/projects/project-1.jpg", // put images in /public/projects
    liveUrl: "https://umais-proconsult.vercel.app/"
  },
  {
    title: "Project Two",
    description: "A short, honest description of what this project does and the problem it solves for the user.",
    tags: ["React", "JavaScript"],
    image: "/projects/project-2.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "A short, honest description of what this project does and the problem it solves for the user.",
    tags: ["WordPress"],
    image: "/projects/project-3.jpg",
    liveUrl: "https://example.com",
    repoUrl: "",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
