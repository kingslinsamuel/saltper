import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "The B2B Retention Loop: How to keep clients forever.",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    date: "May 2026"
  },
  {
    title: "Programmatic SEO: The hidden secret of billion-traffic sites.",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    date: "April 2026"
  },
  {
    title: "AI Personalization: The next frontier of digital conversion.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    date: "April 2026"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Authority Content</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mt-4">INSIGHTS & INTEL.</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 group font-bold border-b-2 border-brand-orange pb-1">
             Read All Insights <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 relative">
                <img src={a.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={a.title} />
                <div className="absolute top-6 left-6 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                  {a.category}
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-grey-text mb-3">{a.date}</div>
              <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-brand-orange transition-colors">
                {a.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
