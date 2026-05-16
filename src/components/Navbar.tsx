import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <nav
        className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-500 rounded-[2rem] border border-white/20 shadow-4xl ${
          isScrolled 
            ? "glass-dark py-3 px-8" 
            : "liquid-glass py-4 px-10"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="pointer-events-auto">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-orange text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-2 group shadow-lg shadow-brand-orange/20">
              DEPLOY SYSTEM
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 active:scale-95 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="p-8 flex flex-col gap-6 glass-dark rounded-3xl border border-white/10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-black tracking-tight text-white/80 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full bg-brand-orange text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs mt-4">
                  START GROWTH AUDIT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
