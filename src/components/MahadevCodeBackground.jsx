import React, { useEffect, useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Code snippets — real React/JS blocks that appear scattered across the background
// ─────────────────────────────────────────────────────────────────────────────
const CODE_SNIPPETS = [
  { code: `import React from 'react';\nimport { motion } from 'framer-motion';\n\nconst Mahadev = () => {\n  return (\n    <Meditation state="deep">\n      <Consciousness level={Infinity} />\n    </Meditation>\n  );\n};`, x: 2, y: 3 },
  { code: `const consciousness = useMemo(() => {\n  return merge(code, devotion);\n}, [universe]);`, x: 55, y: 2 },
  { code: `// System initializing cosmic cycle...\nuseEffect(() => {\n  const cycle = new SamsaraCycle();\n  cycle.begin({ loop: true });\n  return () => cycle.dissolve();\n}, []);`, x: 75, y: 15 },
  { code: `while (alive) {\n  code();\n  meditate();\n  create();\n}`, x: 72, y: 55 },
  { code: `const energy = flow(code);\nreturn universe.merge(\n  consciousness,\n  geometry,\n  devotion\n);`, x: 60, y: 35 },
  { code: `export default Universe;\n\n// Aum Namah Shivaya`, x: 3, y: 75 },
  { code: `const [Consciousness] = useState(0);\n\nsetInterval(() => {\n  prev => prev + 1);\n}, 1);`, x: 2, y: 30 },
  { code: `clearInterval(interval);\n\n// Compiling geometric reality...`, x: 1, y: 55 },
  { code: `const reality = new RealityEngine();\nreality.render({\n  energy: "infinite",\n  form: "wireframe"\n});`, x: 78, y: 75 },
  { code: `<Universe>\n  <Mahadev />\n</Universe>`, x: 40, y: 85 },
];

// Math and algorithm formulas rendered as faint ambient labels
const MATH_FORMULAS = [
  { text: "E = mc²", x: 72, y: 68 },
  { text: "ε₀", x: 52, y: 5 },
  { text: "∫ f(x) dx", x: 85, y: 8 },
  { text: "Σ (n→∞)", x: 15, y: 90 },
  { text: "O(log n)", x: 88, y: 45 },
  { text: "λ = h/p", x: 8, y: 65 },
  { text: "∇ × E = -∂B/∂t", x: 60, y: 92 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Syntax highlighter — applies real editor-style token coloring to code strings
// ─────────────────────────────────────────────────────────────────────────────
const HighlightedCode = ({ code, progress }) => {
  const visible = code.substring(0, Math.floor(progress * code.length));
  const lines = visible.split('\n').map((line, i) => {
    const html = line
      .replace(/\b(import|from|const|return|export|default|while|new|useMemo|useEffect|setInterval|clearInterval|useState|prev)\b/g,
        '<span style="color:#f472b6">$1</span>')
      .replace(/\b(React|motion|Mahadev|Meditation|Consciousness|Tapasya|Universe|SamsaraCycle|RealityEngine)\b/g,
        '<span style="color:#34d399;font-weight:600">$1</span>')
      .replace(/(<[^>]+>)/g, '<span style="color:#60a5fa">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span style="color:#fcd34d">$1</span>')
      .replace(/(\/\/.*)/g, '<span style="color:#64748b;font-style:italic">$1</span>');
    return <div key={i} dangerouslySetInnerHTML={{ __html: html || '&nbsp;' }} />;
  });

  return (
    <div className="font-mono text-[10px] md:text-xs leading-relaxed whitespace-pre" style={{ color: '#94a3b8' }}>
      {lines}
      {progress > 0 && progress < 1 && (
        <span className="inline-block w-1.5 h-3 ml-0.5 align-middle animate-pulse" style={{ background: 'rgba(255,255,255,0.5)' }} />
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Geometric SVG elements — hexagons, network graphs, and sacred geometry shapes
// ─────────────────────────────────────────────────────────────────────────────
const GeometricElements = () => {
  const shapes = useMemo(() => [
    // Large hexagon in the top-right corner
    { x: 82, y: 3, size: 50, type: 'hexagon' },
    // Network graph node cluster positioned mid-left
    { x: 5, y: 45, size: 60, type: 'network' },
    // Smaller hexagon anchored in the bottom-right
    { x: 90, y: 88, size: 35, type: 'hexagon' },
    // Sacred triangle in the upper-left area
    { x: 15, y: 12, size: 40, type: 'triangle' },
  ], []);

  return (
    <>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ rotate: [0, 360], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 50 50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" className="w-full h-full">
            {s.type === 'hexagon' && (
              <>
                <polygon points="25,2 45,14 45,36 25,48 5,36 5,14" />
                <line x1="25" y1="2" x2="25" y2="48" />
                <line x1="5" y1="14" x2="45" y2="36" />
                <line x1="45" y1="14" x2="5" y2="36" />
              </>
            )}
            {s.type === 'network' && (
              <>
                <circle cx="10" cy="10" r="3" /><circle cx="40" cy="10" r="3" />
                <circle cx="25" cy="25" r="3" /><circle cx="10" cy="40" r="3" />
                <circle cx="40" cy="40" r="3" />
                <line x1="10" y1="10" x2="25" y2="25" /><line x1="40" y1="10" x2="25" y2="25" />
                <line x1="10" y1="40" x2="25" y2="25" /><line x1="40" y1="40" x2="25" y2="25" />
                <line x1="10" y1="10" x2="40" y2="10" /><line x1="10" y1="40" x2="40" y2="40" />
              </>
            )}
            {s.type === 'triangle' && (
              <>
                <polygon points="25,5 45,42 5,42" />
                <polygon points="25,42 15,22 35,22" />
              </>
            )}
          </svg>
        </motion.div>
      ))}
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Mahadev image layer — loads the SVG silhouette from the public folder
// ─────────────────────────────────────────────────────────────────────────────
const MahadevImage = ({ visible }) => (
  <motion.div
    className="w-full h-full flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: visible ? 0.85 : 0 }}
    transition={{ duration: 2.5, ease: "easeInOut" }}
  >
    <img
      src="/W4qm301.svg"
      alt=""
      className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      style={{ filter: 'brightness(0.9) contrast(1.1)' }}
    />
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main background component — orchestrates the full animated background loop
// ─────────────────────────────────────────────────────────────────────────────
const MahadevCodeBackground = () => {
  const [typingProgress, setTypingProgress] = useState(0);
  const [showMahadev, setShowMahadev] = useState(false);
  const codeControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const runLoop = async () => {
      while (isMounted) {
        // ── Phase 1: Animate code typing from 0% to 100% over 5 seconds ──
        setTypingProgress(0);
        setShowMahadev(false);
        codeControls.set({ opacity: 0.15 });

        const t0 = Date.now();
        const TYPING = 5000;
        const tick = setInterval(() => {
          if (!isMounted) return;
          setTypingProgress(Math.min((Date.now() - t0) / TYPING, 1));
        }, 40);

        await new Promise(r => setTimeout(r, TYPING));
        clearInterval(tick);
        if (!isMounted) break;

        // ── Phase 2: Fade code out and reveal the Mahadev image for 5 seconds ──
        codeControls.start({ opacity: 0.04, transition: { duration: 1.5 } });
        setShowMahadev(true);

        await new Promise(r => setTimeout(r, 5000));
        if (!isMounted) break;

        // ── Phase 3: Reset everything and restart the loop ──
        setShowMahadev(false);
        codeControls.start({ opacity: 0, transition: { duration: 0.4 } });
        await new Promise(r => setTimeout(r, 400));
      }
    };

    runLoop();
    return () => { isMounted = false; };
  }, [codeControls]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Deep dark solid base behind all layers */}
      <div className="absolute inset-0 bg-[#040408]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,24,40,0.8),rgba(4,4,8,1))]" />

      {/* Animated code snippets layer — fades in as typing progresses */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={codeControls}
        initial={{ opacity: 0.15 }}
      >
        {CODE_SNIPPETS.map((snippet, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: `${snippet.x}%`, top: `${snippet.y}%`, maxWidth: '320px' }}
          >
            <HighlightedCode code={snippet.code} progress={typingProgress} />
          </div>
        ))}
      </motion.div>

      {/* Floating math and algorithm formula labels */}
      <div className="absolute inset-0 overflow-hidden">
        {MATH_FORMULAS.map((f, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-white/10 text-xs md:text-sm pointer-events-none"
            style={{ left: `${f.x}%`, top: `${f.y}%` }}
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      {/* Slowly rotating SVG geometric shapes for ambient texture */}
      <GeometricElements />

      {/* Centered Mahadev silhouette — fades in during phase 2 of the loop */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: 'min(85vh, 700px)', height: 'min(85vh, 700px)' }}>
          <MahadevImage visible={showMahadev} />
        </div>
      </div>

      {/* Subtle static star-field effect via tiny radial gradient dots */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.15), transparent), radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.1), transparent), radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.08), transparent), radial-gradient(1px 1px at 80% 80%, rgba(255,255,255,0.12), transparent), radial-gradient(1px 1px at 10% 90%, rgba(255,255,255,0.06), transparent), radial-gradient(1px 1px at 90% 50%, rgba(255,255,255,0.08), transparent)' }} />
    </div>
  );
};

export default MahadevCodeBackground;
