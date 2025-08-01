
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import TechStartupCaseStudy from "./pages/case-studies/TechStartup";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import KeywordResearch from "./pages/KeywordResearch";
import OnPageSEO from "./pages/OnPageSEO";
import TechnicalSEO from "./pages/TechnicalSEO";
import LinkBuilding from "./pages/LinkBuilding";
import LocalSEO from "./pages/LocalSEO";
import ContentStrategy from "./pages/ContentStrategy";
import NotFound from "./pages/NotFound";

// Individual Service Landing Pages
import KeywordResearchStrategy from "./pages/services/KeywordResearchStrategy";
import OnPageSEOService from "./pages/services/OnPageSEOService";
import TechnicalSEOService from "./pages/services/TechnicalSEOService";
import LinkBuildingService from "./pages/services/LinkBuildingService";
import LocalSEOService from "./pages/services/LocalSEOService";
import AnalyticsReportingService from "./pages/services/AnalyticsReportingService";
import ContentStrategyService from "./pages/services/ContentStrategyService";
import SEOConsultation from "./pages/services/SEOConsultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/tech-startup" element={<TechStartupCaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/keyword-research" element={<KeywordResearch />} />
          <Route path="/on-page-seo" element={<OnPageSEO />} />
          <Route path="/technical-seo" element={<TechnicalSEO />} />
          <Route path="/link-building" element={<LinkBuilding />} />
          <Route path="/local-seo" element={<LocalSEO />} />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          
          {/* Individual Service Landing Pages */}
          <Route path="/services/keyword-research-strategy" element={<KeywordResearchStrategy />} />
          <Route path="/services/on-page-seo" element={<OnPageSEOService />} />
          <Route path="/services/technical-seo" element={<TechnicalSEOService />} />
          <Route path="/services/link-building" element={<LinkBuildingService />} />
          <Route path="/services/local-seo" element={<LocalSEOService />} />
          <Route path="/services/analytics-reporting" element={<AnalyticsReportingService />} />
          <Route path="/services/content-strategy" element={<ContentStrategyService />} />
          <Route path="/services/seo-consultation" element={<SEOConsultation />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
