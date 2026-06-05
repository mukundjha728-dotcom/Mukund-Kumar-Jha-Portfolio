import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Import Export Platform",
      company: "VR AND Sons",
      description:
        "Engineered a scalable B2B platform showcasing import-export operations. Designed with a focus on high performance, secure data presentation, and seamless cross-device compatibility.",
      techStack: ["React.js", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.vrandsons.com/",
    },
    {
      title: "Premium E-Commerce",
      company: "Architecture Project",
      description:
        "Architected a high-conversion e-commerce storefront with advanced state management, intelligent filtering, and component-driven development for massive scalability.",
      techStack: ["React.js", "Tailwind CSS", "Zustand"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://furniture-website-8sts.vercel.app/",
    },
    {
      title: "Email Verification API",
      company: "Tooling",
      description:
        "Developed a high-throughput validation service ensuring data integrity. Focused on algorithmic efficiency, real-time feedback, and secure endpoint communication.",
      techStack: ["Node.js", "Express", "React.js"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.graphurahub.in/",
    },
    {
      title: "Task Management OS",
      company: "Productivity",
      description:
        "Built a robust productivity ecosystem featuring real-time state synchronization, secure authentication flows, and a highly modular UI architecture.",
      techStack: ["MongoDB", "Express", "React.js", "Node.js"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://task-management-liart-nu.vercel.app/",
    },
    {
      title: "School Management System",
      company: "Enterprise",
      description:
        "Designed a complex administrative dashboard with role-based access control, secure data querying, and intuitive data visualization interfaces.",
      techStack: ["MongoDB", "Express", "React.js", "Node.js"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://school-management-phi-sandy.vercel.app/",
    },
    {
      title: "Fruits Bounty UI",
      company: "Frontend",
      description:
        "Crafted a visually engaging product landing page leveraging modern CSS architectures, micro-animations, and strict performance budgets.",
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
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
                    className="text-secondary hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-white transition-colors"
                    aria-label="Live Project Link"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/mukundjha728-dotcom"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 gap-3"
          >
            <FaGithub className="w-5 h-5" />
            Explore More Architecture
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
