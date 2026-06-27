import React from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  // Track normalized mouse position (-0.5 to 0.5) for the 3D parallax tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const translateZ = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-8 relative z-10"
        >

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Mukund<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                Kumar Jha
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-white/90">
              Full Stack Software Engineer | <span className="font-light text-white/70">MERN Ecosystem</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed pt-4">
              Building scalable, high-performance web applications. Focused on component-driven architecture, robust REST APIs, and exceptional user experiences.
            </p>
          </div>

          {/* Primary call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 relative z-30">
            <a href="#projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-[#050505] font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center gap-3 px-8 py-4 bg-[#121218] text-white font-bold rounded-xl hover:bg-[#1a1a24] transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background border border-white/15">
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </div>

          {/* Social links and current location indicator */}
          <div className="flex items-center gap-6 pt-10 border-t border-white/5">
            <div className="flex gap-4">
              <a href="https://github.com/mukundjha728-dotcom" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-secondary hover:text-white transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1">
                <FaGithub className="w-6 h-6 group-hover:scale-110 group-hover:text-emerald-400 transition-all" />
              </a>
              <a href="https://linkedin.com/in/mukund-kumarjha" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-secondary hover:text-white transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1">
                <FaLinkedin className="w-6 h-6 group-hover:scale-110 group-hover:text-blue-400 transition-all" />
              </a>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
              <MapPin className="w-4 h-4 text-emerald-400" />
              India
            </div>
          </div>
        </motion.div>

        {/* Right column — profile portrait with interactive 3D tilt card */}
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:ml-auto aspect-[3/4] flex items-center justify-center lg:[perspective:1000px] mt-8 lg:mt-0 z-20">
          
          {/* Ambient glow — adds depth behind the portrait card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Framer Motion tilt card — rotates with mouse position via spring physics */}
          <motion.div
            style={{ 
              rotateX, 
              rotateY,
              z: translateZ,
              transformStyle: "preserve-3d" 
            }}
            className="relative w-full h-full rounded-3xl glass border border-white/10 shadow-2xl p-3 md:p-6"
          >
            {/* Layered depth rings to create a holographic depth illusion */}
            <motion.div 
              className="absolute inset-0 border border-emerald-500/30 rounded-3xl pointer-events-none"
              style={{ translateZ: "20px" }}
            />
            <motion.div 
              className="absolute -inset-4 border border-cyan-500/20 rounded-3xl pointer-events-none"
              style={{ translateZ: "-20px" }}
            />

            {/* Profile photo with a subtle gradient overlay fading to the background */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0d1117]">
              <img 
                src="/MukundJhaPortfolio.jpeg" 
                alt="Mukund Kumar Jha"
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
