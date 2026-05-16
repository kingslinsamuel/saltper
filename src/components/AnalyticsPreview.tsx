import { motion } from "motion/react";
import { BarChart, ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";

export default function AnalyticsPreview() {
  return (
    <section className="py-32 bg-brand-graphite text-white overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-orange font-bold uppercase tracking-widest text-sm"
            >
              Advanced Insights
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mt-4 mb-8 leading-none"
            >
              DATA THAT <br />
              DRIVES GROWTH.
            </motion.h2>
            <p className="text-xl text-brand-grey-text mb-12 max-w-md">
              Every decision we make is backed by real-time data. We implement tracking that actually helps you scale.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Traffic Growth", value: "+340%", icon: TrendingUp },
                { label: "ROAS Increase", value: "4.8x", icon: Target },
                { label: "Conversion Rate", value: "+62%", icon: ArrowUpRight },
                { label: "Leads Generated", value: "1.2k+", icon: Users },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass-dark rounded-3xl border-white/5"
                >
                   <item.icon className="w-6 h-6 text-brand-orange mb-4" />
                   <div className="text-3xl font-display font-bold">{item.value}</div>
                   <div className="text-xs text-brand-grey-text uppercase tracking-widest mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="liquid-glass rounded-[3.5rem] border-white/20 p-10 shadow-3xl">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center shadow-lg shadow-brand-orange/30">
                    <BarChart className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black tracking-tight">GROWTH ENGINE</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Analytics v4.2</div>
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/30" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                   <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
              </div>
              
              {/* Visual Graph Placeholder */}
              <div className="h-64 rounded-3xl bg-white/5 border border-white/10 p-8 relative overflow-hidden flex items-end gap-1.5 glass-dark">
                 {[40, 70, 45, 90, 65, 80, 50, 100, 85, 95, 75, 110].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.05 }}
                     className="flex-1 bg-gradient-to-t from-brand-orange via-brand-orange/50 to-transparent rounded-t-lg"
                   />
                 ))}
                 <div className="absolute top-8 left-8 p-6 liquid-glass rounded-2xl border-white/20 shadow-2xl">
                    <div className="text-[10px] uppercase font-black tracking-widest text-white/60 mb-1">Live Efficiency</div>
                    <div className="text-3xl font-display font-black text-brand-orange">94.8%</div>
                 </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="h-24 rounded-2xl glass-dark border border-white/5 flex items-center justify-center">
                     <div className="w-8 h-8 rounded-lg bg-white/5 animate-pulse" />
                   </div>
                 ))}
              </div>
            </div>
            
            {/* Decorative Card */}
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 p-8 liquid-glass rounded-[2rem] shadow-4xl border-white/30 z-20 min-w-[240px]"
            >
               <div className="text-[10px] font-black tracking-[0.2em] text-brand-orange mb-3 uppercase">Neural Insight</div>
               <div className="text-sm font-medium leading-relaxed">Optimization identified: Scalability bottleneck resolved in Region-01.</div>
               <div className="mt-4 flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full" />
                 <span className="text-[10px] uppercase font-black text-white/40 tracking-widest">Applying fix...</span>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
