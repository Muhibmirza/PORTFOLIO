"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
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
        className="h-screen w-full flex flex-col items-center justify-center sticky top-0 px-6"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground text-center leading-[0.9]">
          MUHIB MIRZA
        </h1>
        <p className="text-sm md:text-2xl font-light text-foreground/60 mt-6 tracking-[0.3em] uppercase text-center">
          Software Developer | IT Manager
        </p>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        style={{ opacity: opacity2, y: y2 }}
        className="h-screen w-full flex items-center justify-start px-8 md:px-24 sticky top-0"
      >
        <div className="max-w-xl bg-background/10 backdrop-blur-sm p-6 rounded-2xl">
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Digital <br className="md:hidden" /> Architecture.
          </h2>
          <p className="text-base md:text-xl text-foreground/70 leading-relaxed font-light">
            I build scalable digital experiences and manage complex IT infrastructures. 
            Bridging design and engineering with extreme performance.
          </p>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        style={{ opacity: opacity3, y: y3 }}
        className="h-screen w-full flex items-center justify-end px-8 md:px-24 sticky top-0"
      >
        <div className="max-w-xl text-right bg-background/10 backdrop-blur-sm p-6 rounded-2xl">
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Engineering <br className="md:hidden" /> the Future.
          </h2>
          <p className="text-base md:text-xl text-foreground/70 leading-relaxed font-light">
            From modern web apps to enterprise-level network security.
            Focusing on stability, security, and elegant system design.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
