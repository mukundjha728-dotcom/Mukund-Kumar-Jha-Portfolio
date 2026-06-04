import React from "react";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080810]/95 backdrop-blur-sm border-t border-border pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#home" className="inline-block mb-6">
              <span className="font-sans font-black text-3xl tracking-tighter text-white">
                MKJ<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-secondary leading-relaxed max-w-sm">
              Building high-performance, scalable web applications with modern architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-4 lg:ml-auto">
            <h4 className="text-white font-bold mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-secondary hover:text-accent transition-colors font-medium text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 lg:col-span-4 lg:ml-auto">
            <h4 className="text-white font-bold mb-6 tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/mukundjha728-dotcom"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface2 border border-border text-secondary hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mukundjha01"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface2 border border-border text-secondary hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:mukundjha728@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface2 border border-border text-secondary hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm font-medium">
            &copy; {currentYear} Mukund Kumar Jha. All rights reserved.
          </p>
          <p className="text-secondary text-sm flex items-center gap-1.5 font-medium">
            Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
