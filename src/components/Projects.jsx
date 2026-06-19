import React, { useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Global Chanakya",
      company: "Geopolitical Intelligence Platform",
      description:
        "Open-access geopolitical intelligence platform for real-time strategic analysis, conflict monitoring, country intelligence, and global risk forecasting. Features real-time intelligence reports, a country intelligence engine, conflict timeline system, leader intelligence pages, watchlists, an enterprise-grade admin panel, advanced SEO architecture, and security hardening.",
      techStack: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS", "Framer Motion", "Zod", "RBAC", "SEO Engine"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://global-chanakya-web.vercel.app/",
    },
    {
      title: "IndiaFy",
      company: "Trust-first Hyperlocal Multi-Commerce Platform",
      description:
        "IndiaFy is a modern multi-commerce ecosystem combining Quick Commerce, Wholesale B2B, and Hyperlocal Marketplace into one unified platform for fast local shopping, bulk sourcing, and verified seller-based commerce.",
      techStack: ["React.js", "Vite", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://india-fy.vercel.app/",
    },
    {
      title: "Rajeev Engineering Workshop",
      company: "Industrial Iron Fabrication Website",
      description:
        "A premium multi-language industrial fabrication website built for Rajeev Engineering Workshop showcasing 1000+ iron design catalogs including gates, shutters, railings, grills, sheds, furniture, and custom iron works. Includes product catalog filtering, SEO optimization, blog system, product detail pages, and local business targeting.",
      techStack: ["React.js", "Tailwind CSS", "React Router", "i18next", "Vite", "SEO Optimization"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://rajeev-engineering-workshop-six.vercel.app/",
    },
    {
      title: "Import Export Platform",
      company: "VR AND Sons",
      description:
        "Developed a responsive B2B platform utilizing React.js and a modular component-based architecture. Leveraged Tailwind CSS to build accessible, cross-browser compatible interfaces with optimized frontend rendering for seamless cross-device usage.",
      techStack: ["React.js", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.vrandsons.com/",
    },
    {
      title: "Modern E-Commerce Storefront",
      company: "Architecture Project",
      description:
        "Architected a scalable e-commerce storefront using React.js. Implemented robust global state management for dynamic product filtering, utilizing reusable UI components to ensure a maintainable code structure and optimal frontend performance.",
      techStack: ["React.js", "Tailwind CSS", "Zustand"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://frinature-e-commerce.vercel.app/",
    },
    {
      title: "Email Verification Service",
      company: "Tooling",
      description:
        "Engineered a high-throughput email validation API using Node.js and Express.js. Designed secure REST API endpoints featuring comprehensive data validation, strict error handling, and seamless frontend API integration to ensure data integrity.",
      techStack: ["Node.js", "Express", "React.js"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.graphurahub.in/",
    },
    {
      title: "Task Management Application",
      company: "Productivity",
      description:
        "Built a secure, full-stack application on the MERN stack. Engineered a scalable backend architecture featuring robust authentication, RESTful API routing, and integrated it with a responsive React frontend via efficient state-driven UI updates.",
      techStack: ["MongoDB", "Express", "React.js", "Node.js"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://task-management-liart-nu.vercel.app/",
    },
    {
      title: "School Administration Dashboard",
      company: "Enterprise",
      description:
        "Designed an enterprise dashboard focusing on scalable database design and efficient CRUD operations. Utilized MongoDB and Mongoose to execute complex aggregation pipelines for secure data querying, coupled with role-based access control.",
      techStack: ["MongoDB", "Express", "React.js", "Node.js"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://school-management-phi-sandy.vercel.app/",
    },
    {
      title: "Fruits Bounty UI",
      company: "Frontend",
      description:
        "Crafted a highly interactive, responsive landing page with React.js and Tailwind CSS. Emphasized semantic HTML for web accessibility, optimized micro-animations for performance, and maintained strict version control via Git and GitHub.",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.fruitsbounty.in/",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Subtle center glow to draw focus toward the project grid */}
      <div className="absolute top-0 left-[20%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Featured <span className="text-accent">Projects</span>.
          </h2>
          <p className="text-lg text-secondary">
            A curated selection of scalable applications, architectural experiments, and production-ready code.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(showAll ? projects : projects.slice(0, 6)).map((project, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 } }
              }}
              key={project.title}
              className="glass-card p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative group hover:border-accent/50 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)]"
            >
              {/* Card header — code icon on the left, GitHub and live link icons on the right */}
              <div className="flex justify-between items-center mb-8">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-accent/20 transition-colors">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
                    aria-label="View Source Code on GitHub"
                  >
                    <FaGithub className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
                    aria-label="View Live Project"
                  >
                    <ExternalLink className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Card body — project title, category label, and description */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono font-medium text-accent mb-4">
                  {project.company}
                </p>
                <p className="text-secondary text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Card footer — technology stack pills separated by a divider */}
              <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-border">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-secondary bg-surface border border-border px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {projects.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {showAll ? "View Less" : "View All"}
            </button>
          )}
          <a
            href="https://github.com/mukundjha728-dotcom"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FaGithub className="w-5 h-5" />
            Explore More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
