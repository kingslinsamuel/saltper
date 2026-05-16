import { motion } from "motion/react";
import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

const comparisons = [
  {
    title: "Vortex SaaS",
    before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    metric: "+240% MRR",
    desc: "From a static landing page to a weaponized funnels system."
  },
  {
    title: "NexLevel Realty",
    before: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    metric: "4.8x ROI",
    desc: "Complete rebrand and SEO infrastructure overhaul."
  }
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Visual Evolution</span>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mt-4">
              WITNESS THE <span className="text-brand-orange">TRANSFORMATION.</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <button 
               onClick={() => setActive(prev => (prev === 0 ? comparisons.length - 1 : prev - 1))}
               className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"
             >
                <MoveLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={() => setActive(prev => (prev === comparisons.length - 1 ? 0 : prev + 1))}
               className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"
             >
                <MoveRight className="w-6 h-6" />
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 relative">
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div 
                key={`before-${active}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative group"
              >
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-widest">Before</div>
                <img src={comparisons[active].before} className="w-full aspect-[4/3] object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700" alt="Before" />
              </motion.div>
              <motion.div 
                key={`after-${active}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative group"
              >
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-brand-orange rounded-full text-[10px] uppercase font-bold tracking-widest">After SaltPer</div>
                <img src={comparisons[active].after} className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl shadow-brand-orange/20" alt="After" />
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-8">
            <motion.div
               key={`content-${active}`}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
            >
               <h3 className="text-4xl font-display font-bold mb-4">{comparisons[active].title}</h3>
               <p className="text-xl text-white/60 mb-8 leading-relaxed">{comparisons[active].desc}</p>
               
               <div className="p-8 rounded-[2rem] border border-brand-orange/30 bg-brand-orange/5">
                  <div className="text-brand-orange font-display font-black text-6xl mb-2">{comparisons[active].metric}</div>
                  <div className="text-white/40 uppercase font-bold tracking-widest text-xs">Primary Key Result</div>
               </div>
            </motion.div>
            
            <button className="flex items-center gap-2 text-lg font-bold text-white group">
               Read Full Case Study 
               <ArrowRight className="w-5 h-5 text-brand-orange group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
