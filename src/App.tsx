/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Suspense, lazy, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import TrustMetrics from "./components/TrustMetrics";
import ProblemSection from "./components/ProblemSection";
import StrategicVision from "./components/StrategicVision";
import GrowthSystemOffer from "./components/GrowthSystemOffer";
import Services from "./components/Services";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import AIChatbot from "./components/AIChatbot";

// Lazy load non-critical sections
const EcosystemDiagram = lazy(() => import("./components/EcosystemDiagram"));
const IndustryShowcase = lazy(() => import("./components/IndustryShowcase"));
const AnalyticsPreview = lazy(() => import("./components/AnalyticsPreview"));
const SecurityPerformance = lazy(() => import("./components/SecurityPerformance"));
const ROICalculator = lazy(() => import("./components/ROICalculator"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const BeforeAfter = lazy(() => import("./components/BeforeAfter"));
const PricingCalculator = lazy(() => import("./components/PricingCalculator"));
const FounderSection = lazy(() => import("./components/FounderSection"));
const AuditForm = lazy(() => import("./components/AuditForm"));
const Process = lazy(() => import("./components/Process"));
const SuccessTimeline = lazy(() => import("./components/SuccessTimeline"));
const BlogPreview = lazy(() => import("./components/BlogPreview"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));

function SectionLoader() {
  return (
    <div className="w-full h-96 flex items-center justify-center bg-brand-white/50 animate-pulse">
      <div className="w-12 h-12 rounded-full border-2 border-brand-orange/20 border-t-brand-orange animate-spin" />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-white">
      {/* Reduced background opacity/complexity for better frame rates */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square bg-brand-orange/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-brand-blue/10 rounded-full blur-[100px]"
        />
      </div>

      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustMetrics />
        <ProblemSection />
        <StrategicVision />
        <GrowthSystemOffer />
        <Services />
        <Suspense fallback={<SectionLoader />}>
          <EcosystemDiagram />
          <IndustryShowcase />
          <AnalyticsPreview />
          <SecurityPerformance />
          <ROICalculator />
          <Portfolio />
          <BeforeAfter />
          <PricingCalculator />
          <FounderSection />
          <AuditForm />
          <Process />
          <SuccessTimeline />
          <BlogPreview />
          <Testimonials />
          <FAQ />
          <CTA />
        </Suspense>
      </main>
      <Footer />
      <AIChatbot />
      <StickyCTA />
    </div>
  );
}
