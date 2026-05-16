import { motion } from "motion/react";
import { Zap, Repeat, Target, Share2, MousePointer2, Settings } from "lucide-react";

const pillars = [
  { 
    title: "Habit Loops", 
    desc: "We don't just build sites; we build retention engines that keep users coming back through data and AI.",
    icon: Repeat 
  },
  { 
    title: "Distribution Engines", 
    desc: "Built-in viral loops and programmatic SEO that ensure your traffic grows while you sleep.",
    icon: Share2 
  },
  { 
    title: "Programmatic SEO", 
    desc: "Scalable search strategies that dominate thousands of indexed keywords in your industry.",
    icon: Target 
  },
  { 
    title: "Conversion Psychology", 
    desc: "High-end UX inspired by billion-traffic giants like Stripe, Linear, and Apple.",
    icon: MousePointer2 
  },
];

export default function StrategicVision() {
  return (
    <section className="py-32 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-orange font-bold uppercase tracking-widest text-sm"
            >
              The Billion-Traffic Strategy
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mt-6 mb-8 leading-[0.9]">
               WE DON'T SELL <br />
               <span className="text-brand-orange">SERVICES.</span>
            </h2>
            <h3 className="text-3xl font-display font-bold mb-8 text-brand-black/40 italic">
               We build Growth Ecosystems.
            </h3>
            <p className="text-xl text-brand-grey-text mb-12 max-w-lg leading-relaxed">
              The world's biggest brands don't succeed because of "good design" alone. They succeed because of systems. We implement the exact same frameworks used by Google, Amazon, and Stripe.
            </p>

            <div className="space-y-12">
               {pillars.map((p, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex gap-6 group"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-brand-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-all">
                       <p.icon className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                       <p className="text-brand-grey-text leading-relaxed">{p.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
               animate={{ 
                 rotate: [0, 360],
               }}
               transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-dashed border-brand-orange/20 rounded-full"
            />
            
            <div className="liquid-glass p-12 rounded-[4rem] relative z-10 border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
               <div className="flex items-center gap-5 mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/30">
                     <Settings className="text-white w-7 h-7 animate-spin-slow" />
                  </div>
                  <div>
                    <div className="text-white font-black tracking-tight text-lg">GROWTH ENGINE v5.0</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Active System</span>
                    </div>
                  </div>
               </div>

               <div className="space-y-10">
                  {[
                    { label: "Content Distribution", val: "Viral Enabled" },
                    { label: "Retention Loop", val: "Automatic" },
                    { label: "AI Personalization", val: "Active" },
                    { label: "Programmatic SEO", val: "Indexing" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                          <span>{item.label}</span>
                          <span className="text-brand-orange">{item.val}</span>
                       </div>
                       <div className="h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-md">
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "100%" }}
                             transition={{ delay: i * 0.2, duration: 1.5, ease: "easeOut" }}
                             className="h-full bg-brand-orange shadow-[0_0_15px_rgba(255,152,0,0.5)]" 
                          />
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-12 p-8 glass-dark rounded-[2.5rem] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-brand-orange font-display font-black text-5xl mb-1 mt-1 leading-none">99.8%</div>
                    <div className="text-white/40 uppercase font-black text-[10px] tracking-[0.2em]">Efficiency Score</div>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Zap className="text-brand-orange w-8 h-8" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
