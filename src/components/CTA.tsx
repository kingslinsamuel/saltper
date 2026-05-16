import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative rounded-[4rem] bg-brand-black p-12 md:p-32 text-center overflow-hidden"
        >
           {/* Animated Background Gradients */}
           <motion.div 
             animate={{ 
               scale: [1, 1.2, 1],
               rotate: [0, 90, 0]
             }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/20 blur-[150px] rounded-full" 
           />
           <motion.div 
             animate={{ 
               scale: [1.2, 1, 1.2],
               rotate: [0, -90, 0]
             }}
             transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[130px] rounded-full" 
           />

           <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
              >
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">Limited slots available</span>
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-display font-extrabold text-white tracking-tighter leading-[0.9] mb-12">
                YOUR WEBSITE SHOULD <br />
                <span className="text-brand-orange underline underline-offset-4 decoration-white/20">SELL</span> WHILE YOU SLEEP.
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                 <button className="px-12 py-6 bg-brand-orange text-white rounded-full font-bold text-xl hover:bg-brand-orange-hover transition-all flex items-center gap-3 shadow-2xl shadow-brand-orange/40 group">
                    Book Free Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="px-12 py-6 bg-white text-brand-black rounded-full font-bold text-xl hover:bg-brand-grey-light transition-all">
                    Start Your Project
                 </button>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
