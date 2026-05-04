"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/muhibmirza58@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-24 border-t border-white/5 bg-[#0a0a0a]" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">
              Let&apos;s Create <br /> <span className="text-white/40">Something Great</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8 max-w-md">
              Whether you have a question about my work, a project proposal, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/40 group cursor-pointer hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest">Email Me</p>
                  <p className="text-white font-medium">muhibmirza58@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/40 group cursor-pointer hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest">Based In</p>
                  <p className="text-white font-medium">Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60 mb-8">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="text" 
                        name="name" 
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-white/20" size={18} />
                    <textarea 
                      name="message" 
                      required
                      rows={5}
                      placeholder="Your message goes here..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                    <AlertCircle size={18} />
                    <p className="text-sm">Something went wrong. Please try again later.</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center gap-2 bg-white hover:bg-[#e0e0e0] text-black font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
