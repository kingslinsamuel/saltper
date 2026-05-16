import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BarChart, ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";

export default function AnalyticsPreview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const dashboardRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const insightX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-32 bg-brand-graphite text-white overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
            >
              SCALABLE INTELLIGENCE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mt-4 mb-10 leading-[0.85]"
            >
               DATA IS <br />
               <span className="text-brand-orange">CINEMATIC.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white/60 mb-16 max-w-md font-light leading-relaxed"
            >
              We implement the exact visual tracking systems used by elite global startups to visualize and conquer their markets.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Traffic Growth", value: "+340%", icon: TrendingUp },
                { label: "ROAS Increase", value: "4.8x", icon: Target },
                { label: "Conversion Rate", value: "+62%", icon: ArrowUpRight },
                { label: "Leads Generated", value: "1.2k+", icon: Users },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 liquid-glass rounded-[2rem] border-white/5 group hover:border-brand-orange/50 transition-all"
                >
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                   </div>
                   <div className="text-4xl font-display font-black mb-1 italic tracking-tighter">{item.value}</div>
                   <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            style={{ y: dashboardY, rotateZ: dashboardRotate }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="liquid-glass rounded-[4rem] border-white/20 p-12 shadow-[0_64px_120px_-20px_rgba(0,0,0,0.8)] relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-orange/40">
                    <BarChart className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xl font-black tracking-tight text-white italic">ECOSYSTEM CORE</div>
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Live Pulse V.04</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-3 h-3 rounded-full bg-white/10" />
                   ))}
                </div>
              </div>
              
              {/* Visual Graph with cinematic reveal */}
              <div className="h-80 rounded-[2.5rem] bg-brand-black/40 border border-white/5 p-10 relative overflow-hidden flex items-end gap-2 glass-dark">
                 {[40, 70, 45, 90, 65, 120, 50, 110, 85, 95, 75, 140, 100, 130].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0, opacity: 0 }}
                     whileInView={{ height: `${h * 0.6}%`, opacity: 1 }}
                     transition={{ 
                       type: "spring",
                       stiffness: 100,
                       damping: 10,
                       delay: i * 0.03 
                     }}
                     className="flex-1 bg-gradient-to-t from-brand-orange via-brand-orange/60 to-transparent rounded-t-xl"
                   />
                 ))}
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent pointer-events-none" />
                 
                 <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.8 }}
                   className="absolute top-10 left-10 p-8 liquid-glass rounded-3xl border-white/20 shadow-4xl backdrop-blur-3xl"
                 >
                    <div className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-orange mb-2">System ROI</div>
                    <div className="text-5xl font-display font-black text-white">$450k<span className="text-brand-orange">+</span></div>
                 </motion.div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-8">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="h-28 rounded-3xl liquid-glass border border-white/5 flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-1 rounded-full bg-white/5" />
                      <div className="w-16 h-1 rounded-full bg-white/5" />
                   </div>
                 ))}
              </div>
            </div>
            
            {/* Floating Insight Card */}
            <motion.div 
              style={{ x: insightX }}
              className="absolute -bottom-16 -right-20 p-10 liquid-glass rounded-[3rem] shadow-[0_48px_96px_-12px_rgba(255,152,0,0.3)] z-20 min-w-[320px] border-brand-orange/30 overflow-hidden group"
            >
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute -top-10 -right-10 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl" 
               />
               <div className="text-[10px] font-black tracking-[0.4em] text-brand-orange mb-4 uppercase text-center border-b border-white/10 pb-2">Predictive Intel</div>
               <div className="text-lg font-bold leading-tight text-white mb-2 italic">Scale Horizon Reached.</div>
               <div className="text-sm text-white/50 mb-6">Autonomous systems deploying next-phase growth protocols.</div>
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-brand-orange rounded-full animate-ping" />
                   <span className="text-[10px] uppercase font-black text-white tracking-[0.2em]">Live Scaling</span>
                 </div>
                 <div className="text-brand-orange font-black text-xl">100%</div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
