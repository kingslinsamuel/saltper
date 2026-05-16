/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import TrustMetrics from "./components/TrustMetrics";
import ProblemSection from "./components/ProblemSection";
import GrowthSystemOffer from "./components/GrowthSystemOffer";
import Services from "./components/Services";
import IndustryShowcase from "./components/IndustryShowcase";
import AnalyticsPreview from "./components/AnalyticsPreview";
import ROICalculator from "./components/ROICalculator";
import Portfolio from "./components/Portfolio";
import BeforeAfter from "./components/BeforeAfter";
import SecurityPerformance from "./components/SecurityPerformance";
import PricingCalculator from "./components/PricingCalculator";
import FounderSection from "./components/FounderSection";
import AuditForm from "./components/AuditForm";
import Process from "./components/Process";
import SuccessTimeline from "./components/SuccessTimeline";
import StrategicVision from "./components/StrategicVision";
import EcosystemDiagram from "./components/EcosystemDiagram";
import BlogPreview from "./components/BlogPreview";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-white overflow-hidden">
      {/* Liquid Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square bg-brand-orange/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-brand-blue/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[10%] w-[30%] aspect-square bg-brand-orange/10 rounded-full blur-[80px]"
        />
      </div>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <ProblemSection />
        <StrategicVision />
        <GrowthSystemOffer />
        <Services />
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
      </main>
      <Footer />
      <AIChatbot />
      <StickyCTA />
    </div>
  );
}
