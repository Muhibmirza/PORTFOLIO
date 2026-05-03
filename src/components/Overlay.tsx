"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Section 1: Intro (0-20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: Experience (25-45%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

  // Section 3: Vision (55-75%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      {/* Section 1 */}
      <motion.section
        style={{ opacity: opacity1, y: y1 }}
        className="h-screen w-full flex flex-col items-center justify-center sticky top-0"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white text-center">
          MUHIB MIRZA
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/60 mt-4 tracking-widest">
          SOFTWARE DEVELOPER | IT MANAGER
        </p>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        style={{ opacity: opacity2, y: y2 }}
        className="h-screen w-full flex items-center justify-start px-10 md:px-24 sticky top-0"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Architecture.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
            I build scalable digital experiences and manage complex IT infrastructures. 
            Bridging the gap between robust engineering and seamless performance.
          </p>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        style={{ opacity: opacity3, y: y3 }}
        className="h-screen w-full flex items-center justify-end px-10 md:px-24 sticky top-0"
      >
        <div className="max-w-2xl text-right">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engineering the Future.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
            From Next.js applications to enterprise-level network security.
            Focusing on performance, security, and elegant system design.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
