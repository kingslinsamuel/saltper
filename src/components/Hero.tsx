import { motion, useMotionValue, useSpring, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play, TrendingUp, Zap, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = duration * 1000;
    let frameDuration = 1000 / 60;
    let totalFrames = Math.round(totalDuration / frameDuration);
    let counter = 0;

    const timer = setInterval(() => {
      counter++;
      const progress = counter / totalFrames;
      setCount(Math.floor(end * progress));

      if (counter === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const mockupRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - 200);
      mouseY.set(clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[900px] w-full overflow-hidden flex items-center bg-brand-white">
      {/* Cinematic Background Layering */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-black" 
             style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }} />
        
        {/* Animated Light Trails */}
        <motion.div 
           animate={{ x: [-1000, 1000], opacity: [0, 0.5, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 left-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent blur-sm rotate-12"
        />
        <motion.div 
           animate={{ x: [1000, -1000], opacity: [0, 0.3, 0] }}
           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-1/4 left-0 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent blur-sm -rotate-6"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-24 items-center">
        {/* Parallax Content Layer */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-white mix-blend-difference"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-3xl mb-12 shadow-2xl"
          >
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full border-2 border-brand-black bg-brand-grey-light" />
               ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Trusting Systems v5.2</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-display font-extrabold leading-[0.8] mb-10 tracking-tighter italic">
            YOUR <br />
            <span className="text-brand-orange">ECOSYSTEM</span> <br />
            DEPLOYED.
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/60 max-w-lg mb-12 leading-relaxed font-light italic">
            Elite growth architectures engineered to automate your dominance.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-brand-orange text-white rounded-[2rem] font-black text-xl shadow-[0_20px_40px_-10px_rgba(255,152,0,0.4)] flex items-center gap-4 group transition-all"
            >
              DEPLOY NOW
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <a
              href="#audit"
              className="px-12 py-5 bg-transparent border border-white/20 text-white rounded-[2rem] font-black text-xl flex items-center gap-4 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Zap className="w-5 h-5 text-brand-orange" />
              SYSTEM AUDIT
            </a>
          </div>
        </motion.div>

        {/* Dynamic Scene Layer */}
        <motion.div
           style={{ scale: mockupScale, rotate: mockupRotate }}
           className="hidden md:block relative perspective-1000"
        >
          <div className="relative z-10 w-full aspect-square liquid-glass rounded-[5rem] p-6 shadow-[0_80px_160px_-30px_rgba(0,0,0,0.9)] overflow-hidden">
             <div className="w-full h-full rounded-[4rem] overflow-hidden relative group">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                 alt="System Growth" 
                 className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 transition-transform duration-[2000ms]"
                 loading="eager"
                 decoding="async"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-transparent to-brand-orange/30 mix-blend-overlay" />
               
               {/* Real-time Counter Card */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.8 }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 liquid-glass rounded-[3rem] p-10 border-white/30 shadow-4xl backdrop-blur-3xl"
               >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center text-brand-orange">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Global ROI</div>
                  </div>
                  <div className="text-5xl font-display font-black text-white mb-2 leading-none">
                    $<Counter value={2450900} />
                  </div>
                  <div className="text-xs font-black text-brand-orange uppercase tracking-[0.2em]">Net Revenue Distributed</div>
               </motion.div>

               {/* Layered Detail Tags */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-10 left-10 py-3 px-6 liquid-glass rounded-2xl border-white/20 flex items-center gap-3"
               >
                  <Target className="w-4 h-4 text-brand-orange" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Target Met: 100%</span>
               </motion.div>
             </div>
          </div>
          
          {/* Parallax Background Elements */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute -top-20 -left-20 w-48 h-48 border-2 border-brand-orange/10 rounded-full border-dashed"
          />
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
