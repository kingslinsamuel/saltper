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
          <div className="flex items-center gap-4 bg-brand-black/90 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full shadow-2xl">
            <div className="hidden sm:block">
               <div className="text-[10px] uppercase font-bold tracking-widest text-brand-orange">Next Step</div>
               <div className="text-sm font-bold text-white whitespace-nowrap">Scale your business</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <button className="bg-brand-orange text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-brand-orange-hover transition-all flex items-center gap-2">
               <Calendar className="w-4 h-4" />
               Book Strategy Call
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
