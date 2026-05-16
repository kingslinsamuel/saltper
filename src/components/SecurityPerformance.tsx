import { motion } from "motion/react";
import { ShieldCheck, Zap, Lock, Globe, Server, Cpu } from "lucide-react";

const items = [
  { 
    title: "95+ Lighthouse Score", 
    desc: "Every site is optimized for Google's Core Web Vitals to ensure top-tier ranking.",
    icon: Zap,
    stat: "Ultra Fast"
  },
  { 
    title: "Enterprise SSL Security", 
    desc: "Locked down with bank-grade encryption and secure payment gateways.",
    icon: ShieldCheck,
    stat: "SSL Validated"
  },
  { 
    title: "Daily Cloud Backups", 
    desc: "Rest easy knowing your business data is backed up daily in the cloud.",
    icon: Server,
    stat: "100% Secure"
  },
  { 
    title: "Global CDN Setup", 
    desc: "Lightning fast content delivery from India to NYC, London to Dubai.",
    icon: Globe,
    stat: "Worldwide"
  },
];

export default function SecurityPerformance() {
  return (
    <section className="py-32 bg-brand-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Bulletproof Tech</span>
            <h2 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mt-6 mb-8 leading-[0.9]">
               PERFORMANCE <br />
               <span className="text-brand-orange">WITHOUT COMPROMISE.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed">
              We build on a modern stack that prioritizes speed, security, and scalability. Your visitors never wait, and your data is always safe.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
               {items.map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="space-y-4"
                 >
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                          <item.icon className="w-5 h-5" />
                       </div>
                       <span className="font-bold text-white/40 text-xs uppercase tracking-widest">{item.stat}</span>
                    </div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square opacity-10"
            >
               <div className="w-full h-full rounded-full border border-dashed border-white" />
               <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full bg-brand-orange" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-dark border border-white/10 p-12 rounded-[4rem] relative z-10 text-center"
            >
               <div className="w-24 h-24 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-orange/30">
                  <Cpu className="w-12 h-12 text-brand-orange" />
               </div>
               <div className="text-7xl font-display font-black text-white mb-2 leading-none">99.9%</div>
               <div className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-8">Uptime Guaranteed</div>
               
               <div className="space-y-4 text-left border-t border-white/10 pt-8">
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-white/40 font-bold uppercase tracking-widest tracking-widest">Load Speed</span>
                     <span className="text-brand-orange font-bold">1.2s</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "95%" }}
                       className="h-full bg-brand-orange" 
                     />
                  </div>
                  <div className="flex justify-between items-center text-sm pt-4">
                     <span className="text-white/40 font-bold uppercase tracking-widest">Security Score</span>
                     <span className="text-green-500 font-bold">A+</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "100%" }}
                       className="h-full bg-green-500" 
                     />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
