/**
 * Portfolio Data Configuration
 * All content for Danish Khursheed's portfolio website
 * Update this file to modify portfolio content
 */

// ============================================
// Personal Information
// ============================================
export const personalInfo = {
  name: "Danish",
  fullName: "Danish Khursheed",
  role: "Software Engineer",
  tagline: "Building Scalable Systems & AI-Powered Solutions",
  email: "pdkh100@gmail.com",
  phone: "+91-7006055161",
  location: "Bangalore, India",
  website: "danishkhursheed.vercel.app",
  github: "https://github.com/danishpeer",
  linkedin: "https://linkedin.com/in/danishpeer",
  resumeUrl: "/assets/Danish Resume (4).pdf",
  
  // Short bio for hero section
  shortBio: "Hi, I'm Danish. A Software Engineer Building Modern Digital Experiences.",
  
  // Longer bio for about section
  aboutBio: `Engineering is not just a job for me, it's my passion. I thrive on building 
  scalable systems that serve millions of users and integrating cutting-edge AI to solve 
  real-world problems. From real-time chat systems to machine learning models, I love 
  turning complex challenges into elegant solutions.`,
};

// ============================================
// Navigation Links
// ============================================
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
];

// ============================================
// Stats for About Section
// ============================================
export const stats = [
  {
    value: "14M+",
    label: "Monthly Active Users",
    description: "Monthly active users on Services built",
  },
  {
    value: "10+",
    label: "Projects",
    description: "Large Scale Projects Completed",
  },
  {
    "value": "95%",
    "label": "Deployment Time Reduced",
    "description": "Deployment Time Reduced by CI/CD Pipelines",
  }
];

// ============================================
// Companies/Organizations Worked With (for Logo Marquee)
// ============================================
export const companies = [
  { name: "Swiggy", logo: "/images/logos/swiggy.svg" },
  { name: "Oracle", logo: "/images/logos/oracle.svg" },
  { name: "IISc Bangalore", logo: "/images/logos/iisc.svg" },
  { name: "NIT Srinagar", logo: "/images/logos/nit.svg" },
  { name: "AWS", logo: "/images/logos/aws.svg" },
  { name: "Docker", logo: "/images/logos/docker.svg" },
  { name: "Kubernetes", logo: "/images/logos/kubernetes.svg" },
  { name: "PyTorch", logo: "/images/logos/pytorch.svg" },
];

// ============================================
// Services/Skills Offered
// ============================================
export const services = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "Building robust, scalable backend systems using Node.js, Spring Boot, Go, and microservices architecture that handle millions of requests.",
    icon: "server",
  },
  {
    id: 2,
    title: "System Design",
    description:
      "Architecting high-level and low-level system designs for distributed, scalable applications with focus on reliability and performance.",
    icon: "layout",
  },
  {
    id: 3,
    title: "AI/ML Engineering",
    description:
      "Developing and deploying machine learning models using PyTorch, TensorFlow, and integrating LLM-based solutions into production systems.",
    icon: "brain",
  },
  {
    id: 4,
    title: "DevOps & Cloud",
    description:
      "Setting up CI/CD pipelines, container orchestration with Kubernetes, and cloud infrastructure on AWS and OCI.",
    icon: "cloud",
  },
];

// ============================================
// Work Experience Timeline
// ============================================
export const experiences = [
  {
    id: 1,
    role: "Software Engineer 2",
    company: "Swiggy",
    location: "Bangalore (Remote)",
    duration: "Feb 2025 - Present",
    type: "Full-time",
    highlights: [
      "Designed real-time chat system scaling to 14M+ monthly active users",
      "Built AI-powered Copilot with LLM-based message verification",
      "Technologies: Redis, Kafka, DynamoDB, SQS, Docker, Java, Go",
    ],
  },
  {
    id: 2,
    role: "Associate Software Engineer",
    company: "Oracle",
    location: "Bangalore",
    duration: "Aug 2023 - Feb 2025",
    type: "Full-time",
    highlights: [
      "Built CI/CD pipelines reducing deployment time by 90%",
      "Led AI/ML integration for predictive modelling and automated reports",
      "Technologies: Java, Python, OCI, Kubernetes, Oracle NoSQL, PyTorch, React",
    ],
  },
  {
    id: 3,
    role: "ML Research Intern",
    company: "Indian Institute of Science",
    location: "Bangalore",
    duration: "Jan 2023 - Jun 2023",
    type: "Internship",
    highlights: [
      "Developed NER model with 98% accuracy for clinical phenotype extraction",
      "Optimized model training with PyTorch DDP, reducing time by 95%",
      "Technologies: PyTorch, Python, CUDA, Distributed Learning, NLP",
    ],
  },
  {
    id: 4,
    role: "B.Tech in ECE",
    company: "NIT Srinagar",
    location: "Srinagar",
    duration: "Aug 2019 - Jul 2023",
    type: "Education",
    highlights: [
      "CGPA: 9.38/10 - Gold Medalist",
      "Thesis: Phenotype Identification using BERT-Based ML Model",
      "Electronics and Communication Engineering",
    ],
  },
];

// ============================================
// Projects/Portfolio
// ============================================
export const projects = [
  {
    id: 1,
    title: "Velorum",
    subtitle: "AI Coding Agent CLI",
    description:
      "A command-line AI coding assistant built with LangGraph and LangChain, enabling developers to interact with codebases through natural language. Features multi-provider LLM support, Human-in-the-Loop approval workflow, and intelligent task planning.",
    image: "/images/projects/velorum.png",
    tags: ["LangChain", "LangGraph", "Python", "LLM", "CLI"],
    github: "https://github.com/danishpeer/velorum",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "Passify",
    subtitle: "Auth as a Service",
    description:
      "A plug-and-play authentication solution with Node.js backend for React and Next.js apps. Offers ready-to-use, customizable login/signup components with credentials and Google OAuth support.",
    image: "/images/projects/passify.png",
    tags: ["Node.js", "React", "Next.js", "OAuth", "Authentication"],
    github: "https://github.com/danishpeer/passify",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Transformer from Scratch",
    subtitle: "Deep Learning Implementation",
    description:
      "Built key Transformer components—Encoder, Decoder, Multi-Head Attention, Projection layers—from scratch in PyTorch, following 'Attention Is All You Need' paper.",
    image: "/images/projects/transformer.png",
    tags: ["PyTorch", "Deep Learning", "NLP", "Transformers"],
    github: "https://github.com/danishpeer/transformer",
    live: "",
    featured: true,
  },
];

// ============================================
// Testimonials/Awards
// ============================================
export const testimonials = [
  {
    id: 1,
    quote:
      "Recognized for exceptional engineering contributions and delivering high-impact features that scaled to millions of users. Danish consistently demonstrates technical excellence and innovation.",
    author: "MVP Award",
    role: "Swiggy Engineering Team",
    avatar: "/images/swiggy-logo.png",
  },
  {
    id: 2,
    quote:
      "Awarded the Gold Medal for outstanding academic performance throughout the Bachelor's program, demonstrating exceptional dedication and excellence in Electronics and Communication Engineering.",
    author: "Gold Medalist",
    role: "NIT Srinagar, B.Tech ECE",
    avatar: "/images/nit-logo.png",
  },
];

// ============================================
// Tech Stack for Skills Section
// ============================================
export const techStack = {
  languages: ["Java", "Go", "Python", "TypeScript", "JavaScript"],
  backend: ["Spring Boot", "Node.js", "Express.js", "Helidon SE"],
  frontend: ["React.js", "Next.js", "Tailwind CSS"],
  databases: ["DynamoDB", "Oracle NoSQL", "Redis", "PostgreSQL"],
  cloud: ["AWS (EC2, S3, SQS)", "OCI Compute", "Docker", "Kubernetes"],
  ml: ["PyTorch", "TensorFlow", "Keras", "Hugging Face"],
  tools: ["Git", "GitLab CI", "ArgoCD", "Kafka"],
};

// ============================================
// Blog Configuration
// ============================================
export const blogConfig = {
  mediumUsername: "danishpeer", // Update with your Medium username
  sectionTitle: "Latest Insights",
  sectionDescription: "Thoughts on software engineering, and AI/ML, or just about anything else.",
};

// ============================================
// Footer Links
// ============================================
export const footerLinks = {
  quickLinks: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/danishpeer", icon: "github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/danishpeer", icon: "linkedin" },
    { name: "Email", href: "mailto:pdkh100@gmail.com", icon: "mail" },
  ],
};

