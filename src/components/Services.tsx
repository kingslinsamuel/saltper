import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Laptop, Palette, Search, BarChart3, Bot, ShieldCheck, TrendingUp, Megaphone, Layout } from "lucide-react";

const services = [
  {
    title: "Website Design",
    desc: "Business, Ecommerce, & SaaS Landing Pages built for speed and conversion.",
    items: ["Shopify & WooCommerce", "WordPress & Framer", "Custom API Integrations"],
    cta: "Get Website Quote",
    icon: Laptop,
    color: "bg-blue-600",
    size: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    desc: "Dashboards, Products & Mobile interfaces.",
    items: ["Product Design", "Wireframing", "Prototyping"],
    cta: "Start Designing",
    icon: Layout,
    color: "bg-brand-orange",
    size: "md:col-span-1",
  },
  {
    title: "Branding",
    desc: "Visual identity systems from logos to brand guidelines.",
    items: ["Identity Systems", "Marketing Assets", "Pitch Decks"],
    cta: "Brand My Business",
    icon: Palette,
    color: "bg-purple-600",
    size: "md:col-span-1",
  },
  {
    title: "SEO Services",
    desc: "Dominate search results with a data-driven strategy.",
    items: ["Local & Technical SEO", "Keyword Strategy", "Backlink Growth"],
    cta: "Get Free SEO Audit",
    icon: Search,
    color: "bg-red-600",
    size: "md:col-span-2",
  },
  {
    title: "Analytics & ROI",
    desc: "Custom tracking dashboards that actually show results.",
    items: ["GA4/GSC Setup", "Conversion ROI Tracking", "User Heatmaps"],
    cta: "View Dashboard Demo",
    icon: BarChart3,
    color: "bg-green-600",
    size: "md:col-span-1",
  },
  {
    title: "AI Automation",
    desc: "The future of business efficiency is automated.",
    items: ["AI Chatbots", "CRM Workflows", "WhatsApp Automation"],
    cta: "Try AI Assistant",
    icon: Bot,
    color: "bg-indigo-600",
    size: "md:col-span-2 shadow-2xl shadow-indigo-500/10",
  },
  {
    title: "Growth Systems",
    desc: "High-ticket enterprise solutions for global scale.",
    items: ["Full Automation", "SaaS Development", "Business Intelligence"],
    cta: "Book Strategy Session",
    icon: TrendingUp,
    color: "bg-brand-black",
    size: "md:col-span-3 border-brand-orange border-2",
  },
  {
    title: "Digital Marketing",
    desc: "Full-funnel marketing campaigns that drive traffic.",
    items: ["Google & Meta Ads", "Social Management", "Email Funnels"],
    cta: "Launch My Ads",
    icon: Megaphone,
    color: "bg-amber-500",
    size: "md:col-span-1",
  },
  {
    title: "Maintenance",
    desc: "24/7 security and performance for total peace of mind.",
    items: ["Malware Protection", "Daily Backups", "Core Web Vitals"],
    cta: "Protect My Site",
    icon: ShieldCheck,
    color: "bg-brand-graphite",
    size: "md:col-span-2",
  },
];

export function ServiceCard({ s, i, progress }: { s: any, i: number, progress: any }) {
  const x = useTransform(progress, [0, 0.4 + i * 0.05], [i % 2 === 0 ? -100 : 100, 0]);
  const opacity = useTransform(progress, [0, 0.3 + i * 0.05], [0, 1]);
  const rotate = useTransform(progress, [0, 0.4 + i * 0.05], [i % 2 === 0 ? -3 : 3, 0]);

  return (
    <motion.div
      style={{ x, opacity, rotate }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`${s.size} group p-10 rounded-[3rem] border border-brand-grey-border hover:border-brand-orange transition-all duration-500 bg-white relative overflow-hidden flex flex-col shadow-sm hover:shadow-2xl`}
    >
      <div className="flex justify-between items-start mb-10">
        <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
          <s.icon className="w-8 h-8" />
        </div>
        {s.title === "Growth Systems" && (
           <span className="px-3 py-1 bg-brand-orange text-white text-[10px] uppercase font-black tracking-[0.3em] rounded-full">High-Ticket</span>
        )}
      </div>
      
      <h3 className="text-3xl font-display font-black mb-4 tracking-tighter italic">{s.title}</h3>
      <p className="text-brand-grey-text text-lg leading-relaxed mb-8">{s.desc}</p>
      
      <div className="mt-auto pt-8 flex items-center justify-between">
        <div className="space-y-2">
          {s.items?.map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-black/40 group-hover:text-brand-black/80 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                {item}
            </div>
          ))}
        </div>
        <button className="px-8 py-3.5 bg-brand-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-orange translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl">
          {s.cta}
        </button>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-grey-light/30 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-colors" />
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-6 block"
            >
              MISSION CRITICAL CAPABILITIES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-display font-extrabold tracking-tighter mt-4 leading-[0.8]"
            >
               ELITE <br />
               <span className="text-brand-orange italic">SERVICES.</span>
            </motion.h2>
          </div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-sm mb-6 pb-2 border-b border-brand-orange/20"
          >
            <p className="text-xl text-brand-grey-text leading-relaxed">
              We don't just build sites; we deploy high-performance growth ecosystems engineered for billion-traffic potential.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
