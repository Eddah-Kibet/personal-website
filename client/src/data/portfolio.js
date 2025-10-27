export const portfolioData = {
  personal: {
    name: "Eddah Kibet",
    title: "Full-Stack Software Developer",
    location: "Nairobi, Kenya (Open to Work)",
    email: "eddahkibet20@gmail.com",
    phone: "+254 794844373",
    links: {
      linkedin: "https://www.linkedin.com/in/eddah-kibet-9a11a5366/",
      github: "https://github.com/Eddah-Kibet"
    }
  },
  skills: {
    languages: ["JavaScript", "Python", "SQL", "HTML5", "CSS3"],
    frontend: ["React", "Tailwind CSS"],
    backend: ["Node.js", "Flask", "REST APIs"],
    databases: ["PostgreSQL"],
    tools: ["Git", "CI/CD"]
  },

  projects: [
    {
      id: 1,
      name: "JobFinder - Job Board Application",
      description: "JobFinder is a job board application built with React, allowing employers to post jobs and job seekers to browse and apply for opportunities. The project features a modern UI, job CRUD operations, and uses Tailwind CSS for styling.",
      technologies: ["React", "Node.js", "TailwindCSS", "Vite"],
      liveLink: "https://react-project-d0lf8nqxh-morris-projects-2e32107d.vercel.app/",
      codeLink: "https://github.com/Eddah-Kibet/React-project"
    },
    {
      id: 2,
      name: "Hotel Management System",
      description: "A web application for managing hotel bookings, including features for room availability, customer management, and booking processing.",
      technologies: ["Python", "REST API"],
      codeLink: "https://github.com/Eddah-Kibet/Hotel-Managament-system"
    },
    // {
    //   id: 3,
    //   name: "Portfolio Website v2",
    //   description: "Performant, statically generated portfolio achieving 95+ Lighthouse performance score for optimal SEO and load speed.",
    //   technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    //   liveLink: "https://alexchen.dev",
    //   codeLink: "https://github.com/alexchen/portfolio-v2"
    // }
  ],
  education: {
    degree: "Certificate in software development",
    school: "Moringa school",
    period: "May 2025 - November 2025",
    details: ["Relevant Coursework: Data Structures & Algorithms, Software Engineering, Web Development, Database Systems"]
  },
  certifications: [
    "AWS Certified Developer – Associate | Amazon Web Services (2022)",
    "1st Place, University Hackathon 2019 | Project: 'EduLink' - platform connecting students with tutors"
  ],
  blogPosts: [
    {
      title: "Understanding React's useEffect Hook: A Deep Dive",
      link: "https://alexchen.blog/understanding-useeffect"
    },
    {
      title: "How I Optimized My Next.js App to a 95+ Lighthouse Score",
      link: "https://alexchen.blog/nextjs-optimization"
    }
  ],
  learning: [
    "Exploring Go (Golang) for high-performance backend systems",
    "Diving deeper into Kubernetes for container orchestration",
    "Building a mobile app using React Native"
  ],
 
};