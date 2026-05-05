"use client";

import { motion } from "framer-motion";
import { 
  Shield, Network, Layout, 
  Globe, Lock, Settings, Layers, Cpu
} from "lucide-react";
import React from "react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const getColoredIcon = (slug: string, name: string) => {
  return (
    <img 
      src={`https://skillicons.dev/icons?i=${slug}`} 
      alt={name} 
      className="w-8 h-8 object-contain group-hover/item:scale-125 transition-transform duration-300"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
};

const devSkills: Skill[] = [
  { name: "React.js", icon: getColoredIcon("react", "React") },
  { name: "Next.js", icon: getColoredIcon("nextjs", "Next.js") },
  { name: "Node.js", icon: getColoredIcon("nodejs", "Node.js") },
  { name: "TypeScript", icon: getColoredIcon("ts", "TypeScript") },
  { name: "PHP", icon: getColoredIcon("php", "PHP") },
  { name: "Laravel", icon: getColoredIcon("laravel", "Laravel") },
  { name: "MySQL", icon: getColoredIcon("mysql", "MySQL") },
  { name: "MongoDB", icon: getColoredIcon("mongodb", "MongoDB") },
  { name: "PostgreSQL", icon: getColoredIcon("postgres", "PostgreSQL") },
  { name: "Tailwind CSS", icon: getColoredIcon("tailwind", "Tailwind") },
  { name: "Express", icon: getColoredIcon("express", "Express") },
  { name: "Python", icon: getColoredIcon("py", "Python") },
  { name: "Flutter", icon: getColoredIcon("flutter", "Flutter") },
  { name: "Dart", icon: getColoredIcon("dart", "Dart") },
  { name: "Docker", icon: getColoredIcon("docker", "Docker") },
  { name: "Git", icon: getColoredIcon("git", "Git") },
];

const itSkills: Skill[] = [
  { name: "Infrastructure", icon: <Layout size={24} className="text-blue-400" /> },
  { name: "Cybersecurity", icon: <Shield size={24} className="text-red-400" /> },
  { name: "Networking", icon: <Network size={24} className="text-green-400" /> },
  { name: "Kerio Control", icon: <Lock size={24} className="text-yellow-400" /> },
  { name: "SysAdmin", icon: <Settings size={24} className="text-purple-400" /> },
  { name: "Active Directory", icon: <Shield size={24} className="text-blue-500" /> },
  { name: "Firewall", icon: <Lock size={24} className="text-orange-500" /> },
  { name: "VPN Config", icon: <Network size={24} className="text-cyan-400" /> },
  { name: "CCNA", icon: <Globe size={24} className="text-indigo-400" /> },
  { name: "Virtualization", icon: <Layers size={24} className="text-emerald-400" /> },
  { name: "Cloud Security", icon: <Shield size={24} className="text-rose-400" /> },
  { name: "Hardware", icon: <Cpu size={24} className="text-slate-400" /> },
];

export default function SkillSlider() {
  return (
    <div className="py-20 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-2">
          Expertise <span className="text-white/40">In Motion</span>
        </h2>
        <div className="w-16 h-1 bg-white mb-10" />
      </div>

      {/* Development Slider */}
      <div className="mb-12">
        <p className="max-w-7xl mx-auto px-6 text-white/30 text-xs font-mono uppercase tracking-[0.3em] mb-6">
          Development & Engineering
        </p>
        <InfiniteRow skills={devSkills} direction="left" speed={40} />
      </div>

      {/* IT Slider */}
      <div>
        <p className="max-w-7xl mx-auto px-6 text-white/30 text-xs font-mono uppercase tracking-[0.3em] mb-6">
          IT Infrastructure & Security
        </p>
        <InfiniteRow skills={itSkills} direction="right" speed={50} />
      </div>
    </div>
  );
}

function InfiniteRow({ skills, direction, speed }: { skills: Skill[], direction: "left" | "right", speed: number }) {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="flex overflow-hidden group">
      <motion.div
        className="flex whitespace-nowrap gap-6 py-4"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item"
          >
            <div className="flex items-center justify-center min-w-[32px] min-h-[32px]">
              {skill.icon}
            </div>
            <span className="text-white font-medium tracking-tight text-lg">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
