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
  resumeUrl: "/Syed_Umais_Zia_Resume.pdf", // put your resume file in /public and update this path
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
    description: "What it is: A sleek, fully responsive web section for ProConsult International — featuring customized headers, clear subtext, and dual call-to-action buttons designed for smooth viewing across all screen sizes.What it does: Entices corporate visitors with a high-impact section (Let's Grow Together) that directs them straight to a Contact Us action or a Request a Demo page.Why it helps: Gives the firm a polished, executive appearance with fast load times and clean animations — guiding potential clients directly into your consultation funnel without cluttering the page.What it's not: It isn't a complex user portal or backend client dashboard — it is a high-converting front-end marketing component built to capture business leads.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/projects/thumbnail-1.png", // put images in /public/projects
    liveUrl: "https://umais-proconsult.vercel.app/"
  },
  {
    title: "Project Two",
    description: "What it is: A full, modern website for a dental clinic — home, services, doctors, gallery, blog, appointment booking, contact — all in one polished, animated, mobile-friendly site.What it does: Lets patients browse treatments and doctors, and actually book an appointment online — the request emails straight to the clinic instead of them only getting phone calls.Why it helps: Makes the clinic look credible, easy to find on Google (every service/doctor has its own page), and easy to book with — without needing a developer for every small content change, since it's all editable from one file.What it's not: No admin panel, no real-time availability calendar, no patient database — it's a lead-generating marketing site, not clinic management software.",
    tags: ["React", "Typescript", "Tailwindcss", "Javascript"],
    image: "/projects/thumbnail-2.png",
    liveUrl: "https://dentistry-and-co-website.vercel.app/",
  },
  {
    title: "Project Three",
    description: "What it is: A modern, animated website for NEXORA, a fictional AI workspace product, with a full-screen AI landing page, login/sign-up, and a working demo dashboard. Built with React, TypeScript, Tailwind CSS and Framer Motion. What it does: Lets visitors explore the landing page, then click through the dashboard: chat with the assistant, add projects and sources, and change settings. The hero background can be an animated AI network, a video or an image. Why it helps: A ready-made base for an AI/SaaS site, portfolio piece or client demo. All text, colours and dashboard widgets are editable from one config file or the built-in Customize panel. What it's not: No real backend, database or authentication. The login and assistant are simulated, and saved changes live in the browser only.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/projects/thumbnail-3.png",
    liveUrl: "https://nexora-ai-one-beryl.vercel.app/",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
