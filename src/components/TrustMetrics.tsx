import { motion } from "motion/react";
import { Users, Star, Globe, TrendingUp } from "lucide-react";

const metrics = [
  { label: "Projects Delivered", value: "120+", icon: Globe },
  { label: "Client Retention", value: "98%", icon: Star },
  { label: "Revenue Generated", value: "$2M+", icon: TrendingUp },
  { label: "Conversion Lift", value: "40%+", icon: Users },
  { label: "Traffic Growth", value: "340%", icon: TrendingUp },
  { label: "Industries Served", value: "15+", icon: Globe },
];

export default function TrustMetrics() {
  return (
    <section className="py-20 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/50 transition-all">
                <m.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-extrabold mb-2 tracking-tighter">
                {m.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-grey-text">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
