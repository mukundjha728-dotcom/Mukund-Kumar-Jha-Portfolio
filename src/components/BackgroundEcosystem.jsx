import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * 1. MATHEMATICS & ENGINEERING ELEMENTS
 */
const Integral = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <path d="M10 19c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    <path d="M14 5c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4s-4-1.8-4-4" />
  </svg>
);

const Sigma = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 4 6 4 13 12 6 20 18 20" />
  </svg>
);

const NetworkNode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <circle cx="12" cy="12" r="3" />
    <circle cx="4" cy="6" r="2" />
    <circle cx="20" cy="6" r="2" />
    <circle cx="12" cy="20" r="2" />
    <line x1="10.5" y1="10.5" x2="5.5" y2="7.5" />
    <line x1="13.5" y1="10.5" x2="18.5" y2="7.5" />
    <line x1="12" y1="15" x2="12" y2="18" />
  </svg>
);

const FractalHexagon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <polygon points="12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7" />
    <polygon points="12 6 17.2 9 17.2 15 12 18 6.8 15 6.8 9" />
    <polygon points="12 10 13.73 11 13.73 13 12 14 10.27 13 10.27 11" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="3.34" y1="7" x2="20.66" y2="17" />
    <line x1="3.34" y1="17" x2="20.66" y2="7" />
  </svg>
);

/**
 * 2. SOFTWARE ENGINEERING ELEMENTS
 */
const CodeBrackets = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <path d="M9 4H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h2" />
    <path d="M15 4h2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-2" />
  </svg>
);

const GitBranch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

const Database = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const LogicGate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <path d="M6 4v16" />
    <path d="M6 4h4a8 8 0 0 1 8 8 8 8 0 0 1-8 8H6" />
    <line x1="2" y1="8" x2="6" y2="8" />
    <line x1="2" y1="16" x2="6" y2="16" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

/**
 * 3. INDIC GEOMETRY ELEMENTS
 */
const SriYantraCore = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    {/* Upward triangles */}
    <polygon points="12 2 20 18 4 18" />
    <polygon points="12 6 18 16 6 16" />
    {/* Downward triangles */}
    <polygon points="12 22 4 6 20 6" />
    <polygon points="12 18 6 8 18 8" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const MandalaGeometry = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="8" />
    <polygon points="12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10" />
    <polygon points="12 4 13.5 10.5 20 12 13.5 13.5 12 20 10.5 13.5 4 12 10.5 10.5" />
  </svg>
);

const OrbitChakra = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
    <circle cx="12" cy="12" r="9" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="6" />
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M5.636 5.636l12.728 12.728" />
    <path d="M18.364 5.636L5.636 18.364" />
  </svg>
);

/**
 * CONFIGURATION
 */
const ELEMENTS = [
  Integral, Sigma, NetworkNode, FractalHexagon, 
  CodeBrackets, GitBranch, Database, LogicGate,
  SriYantraCore, MandalaGeometry, OrbitChakra
];

const COLORS = [
  "text-white", 
  "text-white", 
  "text-white", 
  "text-white", 
  "text-blue-400", // Soft cyan
  "text-indigo-400", // Electric blue
  "text-emerald-400", // Emerald
  "text-purple-400", // Violet
  "text-amber-400" // Warm gold
];

const generateItems = (count, layer) => {
  return Array.from({ length: count }).map((_, i) => {
    const Component = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
    
    // Scale properties based on layer depth
    let size, opacity, speed, color;
    
    if (layer === 1) { // Deep layer (smallest, faintest, slowest)
      size = Math.random() * 20 + 15; // 15px - 35px
      opacity = Math.random() * 0.05 + 0.02; // 2% - 7%
      speed = Math.random() * 60 + 100; // 100s - 160s loop
      color = "text-white";
    } else if (layer === 2) { // Mid layer
      size = Math.random() * 40 + 30; // 30px - 70px
      opacity = Math.random() * 0.08 + 0.04; // 4% - 12%
      speed = Math.random() * 40 + 60; // 60s - 100s loop
      color = Math.random() > 0.8 ? COLORS[Math.floor(Math.random() * COLORS.length)] : "text-white";
    } else { // Foreground layer (largest, sharpest, occasional accent)
      size = Math.random() * 100 + 80; // 80px - 180px
      opacity = Math.random() * 0.12 + 0.05; // 5% - 17%
      speed = Math.random() * 30 + 30; // 30s - 60s loop
      color = Math.random() > 0.6 ? COLORS[Math.floor(Math.random() * COLORS.length)] : "text-white";
    }

    return {
      id: `layer${layer}-${i}`,
      Component,
      size,
      opacity,
      speed,
      color,
      xStart: Math.random() * 100, // 0 - 100% viewport width
      yStart: Math.random() * 100, // 0 - 100% viewport height
      xEnd: Math.random() * 100,
      yEnd: Math.random() * 100,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 360, // -180deg to +180deg rotation during animation
    };
  });
};

const BackgroundEcosystem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Generate static items once on mount to avoid hydration mismatch and rapid rerenders
    const layer1 = generateItems(15, 1);
    const layer2 = generateItems(8, 2);
    const layer3 = generateItems(3, 3);
    setItems([...layer1, ...layer2, ...layer3]);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* Base dark gradient to ensure the center has natural depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#080808] via-[#050505] to-[#030303]"></div>

      {items.map((item) => {
        const { Component } = item;
        return (
          <motion.div
            key={item.id}
            initial={{
              x: `${item.xStart}vw`,
              y: `${item.yStart}vh`,
              rotate: item.rotation,
              opacity: 0,
            }}
            animate={{
              x: [`${item.xStart}vw`, `${item.xEnd}vw`, `${item.xStart}vw`],
              y: [`${item.yStart}vh`, `${item.yEnd}vh`, `${item.yStart}vh`],
              rotate: [item.rotation, item.rotation + item.rotationSpeed],
              opacity: [0, item.opacity, item.opacity, 0],
            }}
            transition={{
              duration: item.speed,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: item.size,
              height: item.size,
            }}
            className={`${item.color}`}
          >
            <Component />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BackgroundEcosystem;
