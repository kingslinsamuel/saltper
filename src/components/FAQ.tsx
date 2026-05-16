import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does a premium website take?",
    a: "Our standard 'Growth System' launch takes between 3 to 5 weeks. This includes the strategy, premium UI design, and the technical build with SEO infrastructure."
  },
  {
    q: "Do you offer SEO as a standalone service?",
    a: "Yes, but we prefer a holistic approach. SEO works best when integrated into the architecture of your site from day one. We offer SEO ongoing retainers to keep you ranking."
  },
  {
    q: "Will my site be mobile-optimized?",
    a: "Absolutely. We follow a 'Mobile-First' design philosophy. Your site will look and perform flawlessly on everything from an iPhone to a 32-inch 4K monitor."
  },
  {
    q: "Can you manage our analytics and reporting?",
    a: "Yes. We set up GA4, Search Console, and custom ROI dashboards so you know exactly which campaigns are generating profit and where your users are dropping off."
  },
  {
    q: "Do you provide AI chatbot integration?",
    a: "Yes, we build custom GPT-powered assistants trained on your business data to handle FAQs, qualify leads, and book meetings for you 24/7."
  },
  {
    q: "Do you offer monthly support and maintenance?",
    a: "We offer premium retainers that cover security, daily backups, malware protection, and ongoing speed optimization to keep your site a revenue-generating machine."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-brand-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-grey-light rounded-full border border-brand-grey-border mb-6">
             <HelpCircle className="w-4 h-4 text-brand-orange" />
             <span className="text-xs font-bold uppercase tracking-widest">Questions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">
            FREQUENTLY ASKED <br /> <span className="text-brand-orange">ANSWERS.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`rounded-3xl border transition-all overflow-hidden ${
                open === i ? "bg-white border-brand-orange shadow-xl shadow-brand-orange/5" : "bg-brand-grey-light/50 border-brand-grey-border hover:border-brand-orange/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold pr-8">{f.q}</span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                   open === i ? "bg-brand-orange text-white" : "bg-white text-brand-black shadow-sm"
                }`}>
                   {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-8 pb-8 text-brand-grey-text leading-relaxed text-lg border-t border-brand-grey-border/10 pt-4">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
