import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 font-['Old_Standard_TT'] ${
        scrolled
          ? "bg-[#f4f1ea] border-b-4 border-slate-900 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="group flex items-center gap-2">
              <span className="font-['Playfair_Display'] font-black text-2xl tracking-tighter uppercase text-slate-900">
                MKJ.
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-900 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1V3AdZcsOysQ3dUU_ZG258U31712qkfzu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2 border-2 border-slate-900 bg-transparent text-slate-900 font-bold uppercase text-sm tracking-wider hover:bg-slate-900 hover:text-[#f4f1ea] transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-slate-900 focus:outline-none"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#f4f1ea] border-b-4 border-slate-900 shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-200 transition-colors border-b border-slate-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-4">
                <a
                  href="https://drive.google.com/file/d/1V3AdZcsOysQ3dUU_ZG258U31712qkfzu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 border-2 border-slate-900 bg-slate-900 text-[#f4f1ea] font-bold uppercase tracking-wider hover:bg-transparent hover:text-slate-900 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
