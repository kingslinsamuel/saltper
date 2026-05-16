import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Globe, Search, BarChart, Bot, Shield } from "lucide-react";

const features = [
  { icon: Globe, text: "Premium High-Conversion Website" },
  { icon: Search, text: "Advanced SEO Infrastructure" },
  { icon: BarChart, text: "Custom ROI Tracking Dashboard" },
  { icon: Bot, text: "AI Sales Assistant (24/7)" },
  { icon: Zap, text: "Full Business Automation Flows" },
  { icon: Shield, text: "Enterprise Level Maintenance" },
];

export default function GrowthSystemOffer() {
  return (
    <section className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#FF9800,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 rounded-full border border-brand-orange/30 mb-8"
          >
            <Zap className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">Flagship System</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 leading-[0.9]">
            THE GROWTH <br />
            <span className="text-brand-orange">WEBSITE SYSTEM.</span>
          </h2>
          
          <p className="text-2xl text-white/60 mb-12 max-w-lg leading-relaxed">
            Stop buying isolated services. Our flagship system integrates design, SEO, analytics, and AI into a single, weaponized growth machine.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-orange transition-colors">
                  <f.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-lg font-medium text-white/80">{f.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-brand-orange text-white rounded-full font-bold text-xl flex items-center gap-3 shadow-2xl shadow-brand-orange/30 group"
          >
            Deploy This System
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl shadow-brand-orange/10 relative z-10"
          >
            <div className="bg-brand-graphite p-4 border-b border-white/10 flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-red-400" />
               <div className="w-3 h-3 rounded-full bg-amber-400" />
               <div className="w-3 h-3 rounded-full bg-green-400" />
               <div className="ml-4 text-[10px] uppercase font-bold tracking-widest text-white/40">Growth Dashboard v4.2</div>
            </div>
            <div className="aspect-[4/5] bg-brand-black p-1">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                 alt="Dashboard"
                 className="w-full h-full object-cover rounded-[3.5rem] opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
          
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-dark p-8 rounded-[2.5rem] border-brand-orange/30 z-20 hidden md:block"
          >
             <div className="text-brand-orange font-display font-black text-5xl">+340%</div>
             <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Revenue Growth</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
