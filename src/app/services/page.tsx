import type { Metadata } from "next";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/services/service-card";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = pageMetadata(
  "HMDA, GHMC & Fire NOC Services",
  "Expert HMDA permissions, GHMC building approvals, Fire NOC, land surveying, plot verification & construction consultancy in Hyderabad.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
            ])
          ),
        }}
      />
      <PageHero
        badge="Our Services"
        title="Complete Permission & Approval Services"
        description="From HMDA permissions to GHMC building approvals, Fire NOC, land surveying, and plot verification — comprehensive consultancy for every project in Hyderabad."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
