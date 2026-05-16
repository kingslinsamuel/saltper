import { motion } from "motion/react";
import { Building2, ShoppingBag, Stethoscope, Briefcase, Rocket, Home } from "lucide-react";

const industries = [
  { name: "SaaS & AI", icon: Rocket, desc: "High-conversion funnels for software products." },
  { name: "Real Estate", icon: Home, desc: "Lead generation systems for luxury properties." },
  { name: "Ecommerce", icon: ShoppingBag, desc: "Revenue-optimized Shopify & Custom stores." },
  { name: "Clinics", icon: Stethoscope, desc: "Patient booking & reputation management." },
  { name: "Legal / Finance", icon: Briefcase, desc: "Professional authority with lead qualifier AI." },
  { name: "Agencies", icon: Building2, desc: "Premium portfolios and service-selling machines." },
];

export default function IndustryShowcase() {
  return (
    <section className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Targeted Solutions</span>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mt-4">
              TAILORED FOR YOUR <span className="text-brand-orange">NICHE.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-grey-text max-w-sm">
            Generic websites don't convert. We build industry-specific weaponized growth funnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-[3rem] bg-brand-grey-light/30 border border-brand-grey-border hover:border-brand-orange transition-all group relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                <ind.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{ind.name}</h3>
              <p className="text-brand-grey-text leading-relaxed mb-8">{ind.desc}</p>
              
              <button className="text-sm font-bold uppercase tracking-widest text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Funnel {'->'}
              </button>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
