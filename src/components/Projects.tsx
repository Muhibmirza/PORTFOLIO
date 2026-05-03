"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "NASA SpaceX Clone",
    description: "High-performance aerospace dashboard built with Next.js and Framer Motion.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    title: "Furniture E-commerce",
    description: "Premium shopping experience with 3D product previews and optimized checkout.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Dental Practice Platform",
    description: "Comprehensive management system for healthcare providers with real-time scheduling.",
    tags: ["PHP", "MySQL", "React"],
  },
  {
    title: "Savyx Garments Store",
    description: "Full-stack apparel store with enterprise-level inventory management.",
    tags: ["Next.js", "Express", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-32 px-10 md:px-24 bg-[#121212] relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
          SELECTED WORKS
        </h2>
        <div className="w-24 h-1 bg-white" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <ExternalLink className="text-white/40 hover:text-white cursor-pointer transition-colors" size={20} />
                  <Globe className="text-white/40 hover:text-white cursor-pointer transition-colors" size={20} />
                </div>
              </div>
              <p className="text-white/60 text-lg mb-8 font-light">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
