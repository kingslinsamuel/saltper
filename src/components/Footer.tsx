import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-brand-white pt-24 pb-12 border-t border-brand-grey-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-1 mb-8">
              <span className="text-3xl font-display font-extrabold tracking-tighter">
                <span className="text-brand-orange">Salt</span>Per<span className="text-brand-red">.</span>
              </span>
            </a>
            <p className="text-xl text-brand-grey-text max-w-sm mb-10 leading-relaxed">
              We design and build premium digital experiences that win clients and drive massive revenue growth.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-brand-grey-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Portfolio", "Process", "Pricing", "Careers"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-brand-grey-text hover:text-brand-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Global Locations</h4>
            <ul className="space-y-4 text-brand-grey-text">
               <li>India 🇮🇳</li>
               <li>United States 🇺🇸</li>
               <li>United Kingdom 🇬🇧</li>
               <li>Germany 🇩🇪</li>
               <li>UAE 🇦🇪</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-brand-grey-border gap-6">
          <div className="text-sm text-brand-grey-text">
            © 2026 SALTPER. All rights reserved. Built for winners.
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
