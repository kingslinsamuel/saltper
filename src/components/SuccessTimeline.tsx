import { motion } from "motion/react";
import { CheckCircle2, Clock, BarChart3, Bot, Rocket } from "lucide-react";

const steps = [
  {
    title: "Month 1: The Foundation",
    deliverable: "New High-Performance Website",
    desc: "We launch your conversion-focused weapon. Optimized for speed and premium branding.",
    icon: Clock
  },
  {
    title: "Month 2: The Traffic",
    deliverable: "SEO Infrastructure Growth",
    desc: "We scale your organic visibility with technical SEO and data-driven content strategy.",
    icon: Rocket
  },
  {
    title: "Month 3: The Optimization",
    deliverable: "ROI Analytics & CRO",
    desc: "We deploy heatmaps and advanced conversion tracking to identify and fix leaky funnels.",
    icon: BarChart3
  },
  {
    title: "Month 4+: The Automation",
    deliverable: "AI Sales & Workflow Systems",
    desc: "We integrate AI Chatbots and automated lead qualification to capture revenue 24/7.",
    icon: Bot
  }
];

export default function SuccessTimeline() {
  return (
    <section className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Long-Term Growth</span>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mt-4 mb-6">
            YOUR ROADMAP <br /> TO <span className="text-brand-orange">GLOBAL SCALE.</span>
          </h2>
          <p className="text-xl text-brand-grey-text">
            We don't just build sites. We build evolving growth systems that mature over time.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-grey-border hidden lg:block" />

          <div className="space-y-24 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 lg:text-right w-full lg:w-auto contents lg:block">
                  <div className={`p-10 rounded-[3rem] bg-white border border-brand-grey-border hover:border-brand-orange transition-all group flex-1 ${
                    i % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                  }`}>
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                          <step.icon className="w-6 h-6" />
                       </div>
                       <div className="text-xs font-black uppercase tracking-widest text-brand-orange">{step.title}</div>
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4">{step.deliverable}</h3>
                    <p className="text-brand-grey-text leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-black border-4 border-brand-orange flex items-center justify-center text-brand-orange z-10 shadow-xl shadow-brand-orange/20">
                     <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
