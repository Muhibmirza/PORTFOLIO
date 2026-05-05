"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-24 bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-foreground/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
              About <span className="text-foreground/40">Me</span>
            </h2>
            <div className="w-20 h-1 bg-foreground mb-8" />
            <p className="text-foreground/40 font-mono text-sm tracking-widest uppercase mb-4">
              Legacy & Vision
            </p>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
                I am an experienced <span className="text-foreground font-semibold italic">IT Manager and Software Developer</span> with strong
                expertise in full-stack development, including <span className="text-foreground border-b border-foreground/20 pb-1">PHP, MySQL, React.js, Next.js,
                MongoDB, Node.js, and the MERN stack</span>.
              </p>
              
              <p className="text-lg text-foreground/60 leading-relaxed">
                I specialize in building responsive, scalable web applications and dynamic user interfaces. 
                Alongside development, I have hands-on experience in IT infrastructure management, system 
                administration, networking, and implementing secure enterprise-level solutions.
              </p>
              
              <p className="text-lg text-foreground/60 leading-relaxed">
                I continuously focus on delivering efficient, reliable, and high-performance technology solutions 
                that drive business growth and user satisfaction.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
