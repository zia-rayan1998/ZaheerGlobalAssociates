import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectGrid } from "@/components/projects/project-grid";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = pageMetadata(
  "Our Projects & Success Stories",
  "Explore completed HMDA permissions, GHMC approvals, residential & commercial projects, and site surveys across Hyderabad.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Projects", url: "/projects" },
            ])
          ),
        }}
      />
      <PageHero
        badge="Portfolio"
        title="Projects & Success Stories"
        description="A curated showcase of completed permission approvals, residential developments, commercial projects, and precision site surveys across Hyderabad."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProjectGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
