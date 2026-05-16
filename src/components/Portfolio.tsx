import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vortex SaaS",
    category: "Web App / Branding",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200",
    impact: "+240% MRR Growth",
    color: "bg-indigo-600",
  },
  {
    title: "NexLevel Realty",
    category: "Real Estate / SEO",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    impact: "Page 1 Google Rank",
    color: "bg-emerald-600",
  },
  {
    title: "Zenith Watch Co.",
    category: "E-commerce / Lifestyle",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
    impact: "6.2x ROAS",
    color: "bg-amber-600",
  },
  {
    title: "Aura Skincare",
    category: "DTC / Shopify",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200",
    impact: "45% AOV Increase",
    color: "bg-rose-600",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mt-4">CASE STUDIES.</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-black font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
            View All Work <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-6">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-black">
                      <ExternalLink className="w-6 h-6" />
                   </div>
                </div>
                {/* Result Tag */}
                <div className={`absolute top-6 right-6 px-4 py-2 ${p.color} text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg`}>
                   {p.impact}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-1 tracking-tight group-hover:text-brand-orange transition-colors">{p.title}</h3>
                  <p className="text-brand-grey-text font-medium">{p.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
