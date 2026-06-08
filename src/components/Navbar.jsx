import React, { useState, useEffect, useRef } from "react";
import { Menu, X, FileText, ChevronRight, ChevronDown, Layers, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RESUME_OPTIONS = [
  {
    label: "Frontend Resume",
    description: "React · CSS · UI/UX",
    icon: <Code2 className="w-4 h-4" />,
    href: "https://drive.google.com/file/d/1KAsIeDn5nfXCZDvS4ukmakOIGcJ56XmG/view?usp=sharing",
  },
  {
    label: "Full Stack Resume",
    description: "MERN · REST APIs · Node",
    icon: <Layers className="w-4 h-4" />,
    href: "https://drive.google.com/file/d/1VZ4LvvUNkZgUbIaFk1oy1RvJmCF_Rd7K/view?usp=sharing",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Apply a glass background to the navbar once the user scrolls past 20px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the resume dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResumeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  /**
   * Handles navigation link clicks in the mobile menu.
   * We prevent the default anchor behavior and close the menu first,
   * then wait for the exit animation to finish before scrolling smoothly
   * to the target section. This avoids the overflow-hidden animation
   * blocking the browser's native scroll.
   */
  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${
        scrolled
          ? "py-4 glass border-b border-border shadow-lg shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="group flex items-center gap-2">
              <span className="font-sans font-black text-2xl tracking-tighter text-white">
                MKJ<span className="text-accent">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-secondary hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}

            {/* Desktop Resume Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setResumeDropdownOpen((prev) => !prev)}
                className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FileText className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span>Resume</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-secondary transition-transform duration-300 ${
                    resumeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {resumeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-56 glass border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
                  >
                    {/* Decorative top accent line */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-accent via-indigo-400 to-transparent" />

                    <div className="p-2 space-y-1">
                      {RESUME_OPTIONS.map((option) => (
                        <a
                          key={option.label}
                          href={option.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setResumeDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/8 hover:bg-white/[0.08] text-secondary hover:text-white transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          <span className="p-1.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                            {option.icon}
                          </span>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium leading-tight">
                              {option.label}
                            </span>
                            <span className="text-xs text-secondary/60 mt-0.5">
                              {option.description}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full glass border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 space-y-2 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 text-lg font-medium text-primary hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-secondary" />
                </a>
              ))}

              {/* Mobile resume section — both options displayed as individual buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-6 mt-2 border-t border-border space-y-3"
              >
                <p className="text-xs font-semibold text-secondary/60 uppercase tracking-widest px-1 mb-4">
                  Download Resume
                </p>
                {RESUME_OPTIONS.map((option) => (
                  <a
                    key={option.label}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-5 py-4 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/40 text-white font-medium rounded-xl transition-all duration-200 group"
                  >
                    <span className="p-1.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                      {option.icon}
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-semibold">{option.label}</span>
                      <span className="text-xs text-secondary/70 mt-0.5">
                        {option.description}
                      </span>
                    </div>
                    <FileText className="w-4 h-4 text-secondary ml-auto" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
