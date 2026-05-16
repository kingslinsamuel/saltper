import { motion } from "motion/react";
import { Linkedin, Twitter, Instagram, Quote } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] rounded-[4rem] overflow-hidden relative z-10 border-2 border-brand-orange/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                alt="Founder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
            </motion.div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
          </div>

          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">The Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mt-4 mb-8">
               PEOPLE BUY FROM <span className="text-brand-orange">PEOPLE.</span>
            </h2>
            
            <div className="relative mb-10">
              <Quote className="absolute -top-8 -left-8 w-16 h-16 text-brand-orange/10" />
              <p className="text-2xl font-medium leading-relaxed italic text-brand-black/80">
                "At SaltPer, we don't just build websites. We build relationships and systems that work while you sleep. Our mission is to move your needle, not just your pixels."
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div>
                <h4 className="text-xl font-bold">Kingslin Samuel</h4>
                <p className="text-brand-grey-text">Founder & CEO, SaltPer</p>
              </div>
              <div className="flex gap-4">
                 {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 rounded-xl bg-brand-grey-light border border-brand-grey-border flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
                      <Icon className="w-5 h-5" />
                   </a>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-brand-grey-border pt-12">
               <div>
                  <div className="text-3xl font-display font-bold">150+</div>
                  <div className="text-brand-grey-text text-sm">Global Projects</div>
               </div>
               <div>
                  <div className="text-3xl font-display font-bold">8+</div>
                  <div className="text-brand-grey-text text-sm">Years Experience</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
