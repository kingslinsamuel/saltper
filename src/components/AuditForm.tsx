import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  return (
    <section id="audit" className="py-32 bg-brand-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#FF9800,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs"
          >
            Limited Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mt-6 mb-8"
          >
            GET A FREE <br />
            <span className="text-brand-orange">WEBSITE AUDIT.</span>
          </motion.h2>
          <p className="text-xl text-white/60 mb-10 max-w-md">
            Stop guessing. We'll analyze your current site for speed, SEO, and conversion gaps. No strings attached.
          </p>

          <ul className="space-y-4">
            {[
              "Conversion Gap Analysis",
              "Technical SEO Audit",
              "Speed & Performance Test",
              "AI Automation Potential"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i*0.1 }}
                className="flex items-center gap-3 text-white/80"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 glass-dark rounded-[3rem] text-center"
            >
               <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-brand-orange" />
               </div>
               <h3 className="text-3xl font-display font-bold mb-4">Audit Requested!</h3>
               <p className="text-white/60 mb-8">We'll analyze your site and send the report within 24 hours. Redirecting to calendar...</p>
               <button className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold">
                  Book Strategy Call Now
               </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-10 md:p-12 glass-dark rounded-[3rem] border-white/10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Work Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Website URL</label>
                  <input required type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors" placeholder="https://yoursite.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Monthly Revenue Range</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors">
                    <option className="bg-brand-dark">Startup (f0-$10k)</option>
                    <option className="bg-brand-dark">Growth ($10k-$50k)</option>
                    <option className="bg-brand-dark">Scale ($50k-$200k)</option>
                    <option className="bg-brand-dark">Enterprise ($200k+)</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-brand-orange text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20"
                >
                  Get My Free Audit
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          )}

          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
