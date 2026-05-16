import { motion } from "motion/react";
import { Plus, Check, Zap, ArrowRight, Shield, Bot, Search, BarChart3 } from "lucide-react";
import { useState } from "react";

const addons = [
  { id: "seo", name: "Advanced SEO", price: 500, icon: Search },
  { id: "ai", name: "AI Sales Chatbot", price: 800, icon: Bot },
  { id: "analytics", name: "ROI Dashboard", price: 300, icon: BarChart3 },
  { id: "maintenance", name: "Security & Speed", price: 200, icon: Shield },
];

export default function PricingCalculator() {
  const [basePrice] = useState(1500);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const total = basePrice + selected.reduce((acc, id) => {
    const addon = addons.find(a => a.id === id);
    return acc + (addon?.price || 0);
  }, 0);

  return (
    <section id="pricing" className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Transparency</span>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mt-4 mb-6">
            BUILD YOUR <span className="text-brand-orange">GROWTH STACK.</span>
          </h2>
          <p className="text-xl text-brand-grey-text">
            No hidden costs. Choose the components you need for your level of growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="p-8 rounded-[2.5rem] bg-brand-grey-light border border-brand-grey-border flex items-center justify-between group">
              <div>
                <h4 className="text-xl font-bold">Base Growth System</h4>
                <p className="text-brand-grey-text text-sm">Premium Website Design & Funnel Setup</p>
              </div>
              <div className="text-2xl font-display font-bold">${basePrice}</div>
            </div>

            <div className="text-xs uppercase font-black tracking-[0.2em] text-brand-grey-text pt-4 pb-2">Optional Accelerators</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addons.map((addon) => {
                const isActive = selected.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-6 rounded-[2rem] border transition-all text-left flex flex-col justify-between h-48 group ${
                      isActive 
                        ? "bg-brand-orange border-brand-orange text-white shadow-xl shadow-brand-orange/20" 
                        : "bg-white border-brand-grey-border hover:border-brand-orange"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-white/20" : "bg-brand-grey-light group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                    }`}>
                      <addon.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex justify-between items-end">
                        <span className={`font-bold ${isActive ? "text-white" : "text-brand-black"}`}>{addon.name}</span>
                        <span className={`text-sm ${isActive ? "text-white/80" : "text-brand-grey-text"}`}>+${addon.price}</span>
                      </div>
                      <div className={`mt-2 text-xs flex items-center gap-1 ${isActive ? "text-white" : "text-brand-orange underline"}`}>
                         {isActive ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                         {isActive ? "Included" : "Add to stack"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sticky top-32 p-12 rounded-[3.5rem] bg-brand-black text-white overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap className="w-48 h-48" />
             </div>

             <div className="relative z-10">
                <div className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Investment Summary</div>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-7xl font-display font-extrabold tracking-tighter">${total}</span>
                  <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Total Est.</span>
                </div>

                <div className="space-y-4 mb-10 border-t border-white/10 pt-10">
                   <div className="flex items-center gap-3 text-white/60">
                      <Check className="w-5 h-5 text-brand-orange" />
                      <span>Dedicated Account Manager</span>
                   </div>
                   <div className="flex items-center gap-3 text-white/60">
                      <Check className="w-5 h-5 text-brand-orange" />
                      <span>30-Day Launch Timeline</span>
                   </div>
                   <div className="flex items-center gap-3 text-white/60">
                      <Check className="w-5 h-5 text-brand-orange" />
                      <span>Post-Launch Strategy Call</span>
                   </div>
                </div>

                <button className="w-full py-5 bg-brand-orange text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20 hover:scale-[1.02] transition-all group">
                   Get Detailed Proposal
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center mt-6 text-white/40 text-[10px] font-bold uppercase tracking-widest leading-loose">
                   Prices may vary based on specific business <br /> requirements and complexity.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
