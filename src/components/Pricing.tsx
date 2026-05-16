import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

type Region = "IN" | "US" | "UK" | "DE" | "UAE";

const pricingData: Record<Region, any[]> = {
  IN: [
    { name: "Starter", price: "₹25k", features: ["1 Landing Page", "Basic SEO", "Mobile Responsive", "7-Day Support"] },
    { name: "Growth", price: "₹65k", features: ["Full Website (5pg)", "Advanced SEO", "AI Chatbot", "30-Day Support"], recommended: true },
    { name: "Scale", price: "₹1.5L+", features: ["Custom Web App", "Full Automation", "Priority SEO", "Ongoing Growth System"] },
  ],
  US: [
    { name: "Starter", price: "$1,500", features: ["1 Landing Page", "Basic SEO", "Mobile Responsive", "7-Day Support"] },
    { name: "Growth", price: "$4,500", features: ["Full Website (5pg)", "Advanced SEO", "AI Chatbot", "30-Day Support"], recommended: true },
    { name: "Scale", price: "$10k+", features: ["Custom Web App", "Full Automation", "Priority SEO", "Ongoing Growth System"] },
  ],
  UK: [
    { name: "Starter", price: "£1,200", features: ["1 Landing Page", "Basic SEO", "Mobile Responsive", "7-Day Support"] },
    { name: "Growth", price: "£3,500", features: ["Full Website (5pg)", "Advanced SEO", "AI Chatbot", "30-Day Support"], recommended: true },
    { name: "Scale", price: "£8k+", features: ["Custom Web App", "Full Automation", "Priority SEO", "Ongoing Growth System"] },
  ],
  DE: [
    { name: "Starter", price: "€1,500", features: ["1 Landing Page", "Basic SEO", "Mobile Responsive", "7-Day Support"] },
    { name: "Growth", price: "€5,000", features: ["Full Website (5pg)", "Advanced SEO", "AI Chatbot", "30-Day Support"], recommended: true },
    { name: "Scale", price: "€12k+", features: ["Custom Web App", "Full Automation", "Priority SEO", "Ongoing Growth System"] },
  ],
  UAE: [
    { name: "Starter", price: "AED 5k", features: ["1 Landing Page", "Basic SEO", "Mobile Responsive", "7-Day Support"] },
    { name: "Growth", price: "AED 15k", features: ["Full Website (5pg)", "Advanced SEO", "AI Chatbot", "30-Day Support"], recommended: true },
    { name: "Scale", price: "AED 40k+", features: ["Custom Web App", "Full Automation", "Priority SEO", "Ongoing Growth System"] },
  ],
};

const regions: { code: Region; label: string; flag: string }[] = [
  { code: "IN", label: "India", flag: "🇮🇳" },
  { code: "US", label: "USA", flag: "🇺🇸" },
  { code: "UK", label: "UK", flag: "🇬🇧" },
  { code: "DE", label: "Germany", flag: "🇩🇪" },
  { code: "UAE", label: "UAE", flag: "🇦🇪" },
];

export default function Pricing() {
  const [region, setRegion] = useState<Region>("IN");

  return (
    <section id="pricing" className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Pricing Plans</span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mt-4 mb-10">INVEST IN GROWTH.</h2>
          
          {/* Region Switcher */}
          <div className="inline-flex bg-brand-grey-light p-1.5 rounded-2xl gap-2 overflow-x-auto no-scrollbar">
            {regions.map((r) => (
              <button
                key={r.code}
                onClick={() => setRegion(r.code)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  region === r.code ? "bg-white text-brand-black shadow-sm" : "text-brand-grey-text hover:text-brand-black"
                }`}
              >
                <span>{r.flag}</span> {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {pricingData[region].map((plan, i) => (
              <motion.div
                key={`${region}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[3rem] border relative ${
                  plan.recommended ? "bg-brand-black text-white border-brand-orange shadow-2xl" : "bg-white text-brand-black border-brand-grey-border"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-6 right-10 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="text-lg font-bold mb-2 uppercase tracking-widest opacity-60">{plan.name}</div>
                <div className="text-5xl font-display font-extrabold mb-8 tracking-tighter">{plan.price}</div>
                
                <div className="space-y-4 mb-12">
                  {plan.features.map((f: string, j: number) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.recommended ? "bg-brand-orange" : "bg-brand-grey-light"}`}>
                         <Check className={`w-3 h-3 ${plan.recommended ? "text-white" : "text-brand-black"}`} />
                      </div>
                      <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all ${
                  plan.recommended ? "bg-brand-orange text-white hover:bg-brand-orange-hover" : "bg-brand-black text-white hover:bg-brand-graphite"
                }`}>
                  Select Plan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
