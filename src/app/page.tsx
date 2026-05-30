import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ProcessSection } from "@/components/home/process-section";
import { Testimonials } from "@/components/home/testimonials";
import { ProjectsHighlight } from "@/components/home/projects-highlight";
import { FAQSection } from "@/components/home/faq-section";
import { SEOContent } from "@/components/home/seo-content";
import { CTASection } from "@/components/shared/cta-section";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <ProjectsHighlight />
      <FAQSection />
      <SEOContent />
      <CTASection />
    </>
  );
}
