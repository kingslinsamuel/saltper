import { motion, AnimatePresence } from "motion/react";
import { Calendar, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto"
        >
          <div className="flex items-center gap-4 glass-dark px-8 py-5 rounded-[2.5rem] shadow-4xl border-white/20 backdrop-blur-[60px]">
             <div className="hidden sm:block">
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-brand-orange mb-0.5">Strategic Growth</div>
                <div className="text-sm font-black text-white whitespace-nowrap">DEPLOY YOUR ECOSYSTEM</div>
             </div>
             <div className="w-px h-10 bg-white/20 hidden sm:block mx-2" />
             <button className="bg-brand-black text-white px-10 py-3.5 rounded-2xl text-sm font-black hover:bg-brand-orange transition-all flex items-center gap-3 shadow-2xl border border-white/10 group">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                GET STARTED
             </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
