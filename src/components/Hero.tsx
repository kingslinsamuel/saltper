import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left Side - Black */}
        <div className="w-full h-1/2 md:h-full md:w-1/2 bg-brand-black" 
             style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }} />
        {/* Right Side - White */}
        <div className="w-full h-1/2 md:h-full md:w-1/2 bg-brand-white" />
      </div>

      {/* Floating Particles/Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-blue/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white mix-blend-difference"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">Agency of the year</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] mb-8 tracking-tighter">
            WE BUILD <br />
            <span className="text-brand-orange">GROWTH</span> <br />
            SYSTEMS.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-lg mb-10 leading-relaxed font-light">
            AI-powered revenue websites engineered for modern businesses ready to scale from ₹25k / $1,500.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg shadow-xl shadow-brand-orange/20 flex items-center gap-3 group"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <a
              href="#audit"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold text-lg flex items-center gap-3 hover:bg-white hover:text-brand-black transition-all"
            >
              Get Free Audit
            </a>
          </div>
        </motion.div>

        {/* Visual Element (Mockup/Abstract) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 w-full aspect-square glass-dark rounded-[10%] p-2 overflow-hidden shadow-2xl border-white/30 rotate-3">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
               alt="Digital Growth" 
               className="w-full h-full object-cover rounded-[8%]"
             />
             {/* Float metrics card */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-10 -left-10 glass p-4 rounded-2xl shadow-xl border-brand-orange/30"
             >
                <div className="text-xs text-brand-grey-text uppercase font-bold mb-1">Conversion Rate</div>
                <div className="text-2xl font-display font-bold text-brand-orange">+340%</div>
             </motion.div>
          </div>
          
          {/* Background shapes */}
          <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-brand-orange/20 rounded-[10%] -rotate-6 z-0" />
        </motion.div>
      </div>

      {/* Mouse Follow Glow */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        className="cursor-glow hidden md:block" 
      />
    </section>
  );
}
