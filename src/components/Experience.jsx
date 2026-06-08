import React from "react";
import {
  Briefcase,
  GraduationCap,
  Terminal,
  Code2,
  ChevronRight,
  MonitorSmartphone,
  Cpu,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern (MERN)",
      company: "Athenura",
      duration: "April 2026 - Present",
      points: [
        "Engineered scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Designed and implemented RESTful APIs to facilitate seamless data communication between microservices.",
        "Optimized database schemas and queries, improving backend performance for high-volume data handling.",
      ],
    },
    {
      title: "Frontend Engineer Intern",
      company: "Graphura India Private Limited",
      duration: "Dec 2025 - March 2026",
      points: [
        "Architected responsive, high-performance user interfaces using React.js and modern CSS frameworks.",
        "Developed a robust library of reusable UI components, improving development velocity and code maintainability by 30%.",
        "Implemented critical performance optimizations and accessibility features, resulting in significantly faster load times.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Maharshi Dayanand University (MDU)",
      duration: "2023 - 2026",
    },
  ];

  const skills = [
    {
      category: "Frontend & UI",
      icon: <MonitorSmartphone size={18} className="text-accent" />,
      items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design", "Accessibility"],
    },
    {
      category: "Backend & Database",
      icon: <Database size={18} className="text-accent" />,
      items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs"],
    },
    {
      category: "Languages & Core",
      icon: <Terminal size={18} className="text-accent" />,
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Component Architecture"],
    },
    {
      category: "Tools & DevOps",
      icon: <Code2 size={18} className="text-accent" />,
      items: ["Git", "GitHub", "Vite", "Performance Optimization", "Postman"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      {/* Soft radial glow in the top-right to add visual depth */}
      <div className="absolute top-40 right-[-10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Experience <span className="text-accent">&</span> Skills<span className="text-accent">.</span>
          </h2>
          <p className="text-secondary max-w-2xl text-lg">
            My professional journey and the technical arsenal I use to build robust digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left column — scrollable work and education timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-12"
          >
            {/* Work experience cards arranged in a vertical timeline */}
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="p-2.5 glass-card text-accent">
                  <Briefcase size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </motion.div>

              <div className="relative border-l border-border ml-6 space-y-10">
                {experiences.map((exp, index) => (
                  <motion.div variants={fadeUp} key={index} className="relative pl-8 group">
                    {/* Accent dot on the timeline track, highlights on hover */}
                    <div className="absolute -left-[6px] top-1.5 w-3 h-3 bg-background border-2 border-accent rounded-full group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    
                    <div className="glass-card p-6 lg:p-8 hover:border-accent/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-secondary font-medium mt-1">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <ul className="space-y-3 mt-6">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start text-sm text-secondary leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-accent/70 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education cards below the work experience timeline */}
            <div className="pt-6">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="p-2.5 glass-card text-accent">
                  <GraduationCap size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </motion.div>

              <div className="relative border-l border-border ml-6">
                {education.map((edu, index) => (
                  <motion.div variants={fadeUp} key={index} className="relative pl-8 group">
                    <div className="absolute -left-[6px] top-1.5 w-3 h-3 bg-background border-2 border-accent rounded-full group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    
                    <div className="glass-card p-6 hover:border-accent/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 whitespace-nowrap">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-secondary text-sm">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — sticky skills grid panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="glass p-8 rounded-3xl lg:sticky lg:top-28">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Technical Arsenal</h3>
                <p className="text-secondary text-sm">Specialized technologies and tools I use daily.</p>
              </div>

              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="flex items-center gap-3 text-sm font-semibold text-white mb-4">
                      <span className="p-1.5 rounded-md bg-white/5 border border-white/10">
                        {skillGroup.icon}
                      </span>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 bg-surface2 border border-border rounded-lg text-secondary text-sm hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
