import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Business strategy audit to identify growth levers.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "UX and conversion strategy mapping.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Premium UI/UX creation tailored for your brand.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Fast, responsive development targeting performance.",
  },
  {
    num: "05",
    title: "Growth",
    desc: "SEO, analytics, and AI optimization for scale.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-brand-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">How we work</span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mt-4">THE 5-STEP SYSTEM.</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-px bg-brand-grey-border md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                {/* Number Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-brand-black text-white flex items-center justify-center border-8 border-brand-white shadow-xl flex-shrink-0 group hover:bg-brand-orange transition-colors">
                   <span className="text-2xl font-display font-bold">{s.num}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                   <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">{s.title}</h3>
                   <p className="text-xl text-brand-grey-text max-w-md mx-auto md:mx-0 inline-block">{s.desc}</p>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
