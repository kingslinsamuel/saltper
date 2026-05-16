import { motion } from "motion/react";
import { AlertCircle, TrendingDown, Clock, ZapOff } from "lucide-react";

const pains = [
  {
    title: "Losing Potential Clients",
    desc: "Your website looks outdated and fails to build instant trust with premium visitors.",
    icon: AlertCircle
  },
  {
    title: "Invisible on Google",
    desc: "Without expert SEO, your competitors are capturing all the search traffic that should be yours.",
    icon: TrendingDown
  },
  {
    title: "Zero Conversion Power",
    desc: "Visitors arrive but never leave their details. Your site is a brochure, not a sales machine.",
    icon: ZapOff
  },
  {
    title: "Manual Overhead",
    desc: "You're still handling FAQs and bookings manually instead of using AI to do it 24/7.",
    icon: Clock
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-brand-white border-t border-brand-grey-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-bold uppercase tracking-widest text-sm"
          >
            The Hard Truth
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter mt-4"
          >
            MOST BUSINESSES LOSE LEADS BECAUSE THEIR WEBSITE <span className="text-brand-red">FAILS TO CONVERT.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-brand-grey-light/30 border border-brand-grey-border hover:border-brand-red/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-brand-grey-text leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
