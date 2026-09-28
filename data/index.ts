export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[300px] lg:min-h-[44vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[150px] lg:min-h-[21vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[150px] lg:min-h-[21vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 min-h-[190px] lg:min-h-[210px]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Hriday was an absolute pleasure. His professionalism, clear communication, and dedication to delivering clean, scalable code were evident from day one. He brought our web interface to life with remarkable precision.",
    name: "Michael Johnson",
    title: "Director at AlphaStream Technologies",
  },
  {
    quote:
      "Hriday has a rare ability to bridge creative UI design with robust frontend engineering. He turned our complex interactive requirements into a seamless, fast experience that our users genuinely enjoy.",
    name: "Sarah Jenkins",
    title: "Product Lead at CloudScale",
  },
  {
    quote:
      "Working with Hriday was effortless and productive. He delivered our frontend features well ahead of schedule and took extra care to ensure every animation and interaction felt completely natural and responsive.",
    name: "David Chen",
    title: "Co-Founder at NexusLabs",
  },
  {
    quote:
      "Hriday's technical proficiency and proactive problem-solving made a huge difference on our platform launch. He is receptive to feedback, pays great attention to detail, and writes truly maintainable code.",
    name: "Elena Rostova",
    title: "Engineering Manager at Veloce Digital",
  },
  {
    quote:
      "If you need a developer who can take an idea, understand the vision, and execute with exceptional craft, Hriday is the ideal partner. His work on our web applications exceeded our expectations.",
    name: "Marcus Vance",
    title: "Founder at Studio Lumina",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export interface WorkExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  desc: string;
  skills: string[];
  thumbnail: string;
  metric?: string;
  isCurrent?: boolean;
}

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Lead UI/UX Designer",
    company: "Studio Lumina & Partners",
    period: "2024 — Present",
    desc: "Spearheading end-to-end product design across multi-platform SaaS applications and web portals. Established atomic design systems and conducted deep user research that reduced workflow friction by 38%.",
    skills: ["Figma", "Design Systems", "User Research", "Interactive Prototyping"],
    thumbnail: "/exp4.svg",
    metric: "⚡ -38% Workflow Friction",
    isCurrent: true,
  },
  {
    id: 2,
    title: "Senior Product Designer",
    company: "FinPulse Technologies",
    period: "2023 — 2024",
    desc: "Designed intuitive financial dashboards, mobile investment flows, and complex data visualizations. Collaborated closely with frontend engineers to translate micro-interactions into pixel-perfect production code.",
    skills: ["Product Strategy", "Fintech UX", "Mobile Design", "Information Architecture"],
    thumbnail: "/exp3.svg",
    metric: "📈 +45% Onboarding Retention",
  },
  {
    id: 3,
    title: "UI/UX & Interaction Designer",
    company: "Nexus Digital Agency",
    period: "2022 — 2023",
    desc: "Crafted high-conversion marketing websites, interactive 3D web concepts, and responsive client applications. Built wireframes, user journeys, and high-fidelity clickable prototypes for early-stage tech startups.",
    skills: ["Interaction Design", "Wireframing", "Web UI", "Micro-Animations"],
    thumbnail: "/exp2.svg",
    metric: "✨ 60fps Interactive 3D Web",
  },
  {
    id: 4,
    title: "Design System & UX Specialist",
    company: "Veloce Labs",
    period: "2021 — 2022",
    desc: "Built and maintained a unified design token library with 200+ accessible UI components across Figma and React. Streamlined the handoff process between cross-functional design and engineering teams.",
    skills: ["Design Tokens", "Accessibility (WCAG)", "UI Components", "Design Handoff"],
    thumbnail: "/exp1.svg",
    metric: "💎 200+ Design System Tokens",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",
    school: "National University of Mongolia",
    period: "2020 — 2024",
    desc: "Focused on software engineering, distributed systems, and applied machine learning. Graduated with honors.",
    grade: "GPA 3.8 / 4.0",
    tag: "Bachelor",
  },
  {
    id: 2,
    degree: "Fullstack Web Development",
    school: "Meta / Coursera Specialization",
    period: "2023",
    desc: "Intensive program covering React, Node.js, cloud deployment, and modern CI/CD workflows.",
    grade: "Certified",
    tag: "Certificate",
  },
  {
    id: 3,
    degree: "Cloud & AI Engineering",
    school: "AWS Academy",
    period: "2024 — Present",
    desc: "Hands-on training in scalable cloud architecture, serverless design, and production AI systems.",
    grade: "In Progress",
    tag: "Track",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
