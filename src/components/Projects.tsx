"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

// Custom Github icon since Lucide removed brand icons in v1.0
const Github = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "E COMMERCE",
    description: "High-performance aerospace dashboard built with Next.js and Framer Motion.",
    tags: ["Laravel", "Tailwind"],
    type: "github",
    link: "https://github.com/Muhibmirza/laravel-ecommerce",
  },
  {
    title: "LMS",
    description: "Learning Management system for university students",
    tags: ["Next.js", "Node.js", "MongoDB"],
    type: "live",
    link: "https://100bmac.devsliconsystems.com/",
  },
  {
    title: "Car Show Room Website",
    description: "Car show room website for Car Buyers",
    tags: ["PHP", "MySQL"],
    type: "github",
    link: "https://github.com/Muhibmirza/PHP-CarShowRoom",
  },
  {
    title: "Amna Ashraf Apparels",
    description: "Manufacturer and exporter of woven garments",
    tags: ["PHP", "MySQL"],
    type: "live",
    link: "https://aaapparels.com/",
  },
  {
    title: "Savyx Garments Store",
    description: "Full-stack apparel store with enterprise-level inventory management.",
    tags: ["Next.js", "Express", "PostgreSQL"],
    type: "live",
    link: "http://wholesale.savyxintl.com/",
  },
  {
    title: "Admin-Panel ESH",
    description: "Admin Panel for software houses",
    tags: ["PHP", "Mysql"],
    type: "github",
    link: "https://github.com/Muhibmirza/PHP-Admin-Panel-ESH",
  },
  {
    title: "Mega Shipping Agency",
    description: "For Shipping Agencies",
    tags: ["PHP", "Mysql"],
    type: "github",
    link: "https://github.com/Muhibmirza/PHP-Mega-Shipping-Agency",
  },
  {
    title: "Gaming Zone Website",
    description: "For Gaming Zone Community",
    tags: ["PHP", "Mysql"],
    type: "github",
    link: "https://github.com/Muhibmirza/https-gaming.com.io",
  },
   {
    title: "Covid 19 TMS",
    description: "Covid 19 TMS",
    tags: ["PHP", "Mysql"],
    type: "github",
    link: "https://github.com/Muhibmirza/PHP-Covid-19-tms",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-24 px-6 md:px-24 bg-[#121212] relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-20"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4">
          SELECTED WORKS
        </h2>
        <div className="w-16 md:w-24 h-1 bg-white" />
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

                {/* 🔥 Icons Logic */}
                <div className="flex gap-4">
                  {project.type === "live" ? (
                    <>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Globe className="text-white/40 hover:text-white cursor-pointer transition-colors" size={20} />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="text-white/40 hover:text-white cursor-pointer transition-colors" size={20} />
                      </a>
                    </>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="text-white/40 hover:text-white cursor-pointer transition-colors" size={20} />
                    </a>
                  )}
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
