import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, Vortex SaaS",
    content: "SaltPer transformed our business. Our conversion rate jumped by 340% within two months of launch. The AI integrations they built for us are game-changing.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Aura",
    content: "The attention to detail and premium aesthetic are unmatched. They didn't just build a website; they built a revenue machine. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Jameson Miller",
    role: "Founder, NexLevel",
    content: "Our SEO traffic has never been higher. We are now ranking for keywords we thought were impossible. A complete growth partner.",
    avatar: "https://i.pravatar.cc/150?u=jameson",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
           <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-center md:text-left">
             LOVED BY <br />
             <span className="text-brand-orange">GROWTH</span> MINDS.
           </h2>
           <div className="flex -space-x-4 mt-8 md:mt-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-brand-grey-light overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="User" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-orange text-white flex items-center justify-center text-xs font-bold">
                 +50
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-brand-grey-light/50 border border-brand-grey-border relative group"
            >
              <div className="mb-6 flex gap-1">
                 {[1, 2, 3, 4, 5].map((s) => (
                   <Star key={s} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                 ))}
              </div>
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand-orange opacity-10 group-hover:opacity-20 transition-opacity" />
              <p className="text-xl leading-relaxed mb-10 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                 <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full" />
                 <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-brand-grey-text">{t.role}</div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
