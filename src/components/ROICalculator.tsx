import { motion } from "motion/react";
import { Calculator, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ROICalculator() {
  const [traffic, setTraffic] = useState(5000);
  const [conversion, setConversion] = useState(1);
  const [aov, setAov] = useState(500);

  const currentRevenue = traffic * (conversion / 100) * aov;
  const targetConversion = conversion * 1.5; // Expected 50% increase
  const saltPerRevenue = traffic * (targetConversion / 100) * aov;
  const monthlyLift = saltPerRevenue - currentRevenue;

  return (
    <section className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-black rounded-[4rem] text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Calculator className="w-48 h-48" />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Growth Estimator</span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter mt-4 mb-8">
                SEE THE <span className="text-brand-orange">REVENUE</span> <br /> YOU'RE LEAVING ON THE TABLE.
              </h2>
              <p className="text-white/60 text-lg mb-12">
                Use our ROI calculator to estimate how much your revenue could grow by optimizing your conversion funnel with SaltPer.
              </p>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/40">Monthly Traffic</label>
                    <span className="text-xl font-display font-bold text-brand-orange">{traffic.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="1000" max="100000" step="1000" 
                    value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
                    className="w-full accent-brand-orange" 
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/40">Current Conv. Rate (%)</label>
                    <span className="text-xl font-display font-bold text-brand-orange">{conversion}%</span>
                  </div>
                  <input 
                    type="range" min="0.1" max="10" step="0.1" 
                    value={conversion} onChange={(e) => setConversion(Number(e.target.value))}
                    className="w-full accent-brand-orange" 
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/40">Average Order Value ($)</label>
                    <span className="text-xl font-display font-bold text-brand-orange">${aov}</span>
                  </div>
                  <input 
                    type="range" min="50" max="5000" step="50" 
                    value={aov} onChange={(e) => setAov(Number(e.target.value))}
                    className="w-full accent-brand-orange" 
                  />
                </div>
              </div>
            </div>

            <div className="glass-dark p-12 rounded-[3.5rem] border-white/10 text-center">
              <div className="text-white/40 uppercase tracking-widest font-bold text-xs mb-4">Estimated Monthly Lift</div>
              <motion.div 
                key={monthlyLift}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-6xl md:text-8xl font-display font-extrabold text-brand-orange tracking-tighter mb-4"
              >
                +${Math.round(monthlyLift).toLocaleString()}
              </motion.div>
              <p className="text-white/60 mb-10 max-w-xs mx-auto">
                Estimated monthly revenue increase based on a 50% improvement in conversion efficiency.
              </p>
              
              <button className="w-full py-5 bg-white text-brand-black rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-orange hover:text-white transition-all group">
                 Capture This Revenue
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
