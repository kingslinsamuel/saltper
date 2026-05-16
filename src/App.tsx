/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <ProblemSection />
        <GrowthSystemOffer />
        <Services />
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
