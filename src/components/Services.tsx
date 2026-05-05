"use client";

import { motion } from "framer-motion";
import { Smartphone, Code2, Layout } from "lucide-react";

const services = [
  {
    title: "App Development",
    description: "Building intuitive and high-performance mobile applications with seamless user experiences across all platforms.",
    icon: <Smartphone size={32} />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Software Development",
    description: "Creating robust, scalable enterprise software solutions and complex system architectures tailored to business needs.",
    icon: <Code2 size={32} />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Web Development",
    description: "Developing modern, responsive, and SEO-optimized web applications using the latest cutting-edge technologies.",
    icon: <Layout size={32} />,
    color: "from-orange-500/20 to-yellow-500/20"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-24 bg-background relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
            Technical <span className="text-foreground/40">Expertise</span>
          </h2>
          <p className="text-foreground/50 font-mono text-sm tracking-[0.3em] uppercase">
            Specialized Digital Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl relative overflow-hidden group border-foreground/5"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 text-foreground group-hover:scale-110 transition-transform duration-500 border border-foreground/10">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-foreground/60 leading-relaxed font-light">
                  {service.description}
                </p>
                
                <div className="mt-8 flex items-center text-foreground/30 group-hover:text-foreground/80 transition-colors duration-300">
                   <div className="w-8 h-[1px] bg-current mr-3" />
                   <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
