import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { values, timeline, stats } from "@/data/company";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { TiltCard } from "@/components/shared/tilt-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { CTASection } from "@/components/shared/cta-section";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Eye } from "lucide-react";

export const metadata: Metadata = pageMetadata(
  "About Us — Hyderabad Approval Experts",
  "Learn about Zaheer Global Associates — 15+ years of HMDA, GHMC, Fire NOC expertise. Mission, vision, and Hyderabad-focused regulatory consultancy.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />
      <PageHero
        badge="About Us"
        title="Building Hyderabad's Trust Since 2010"
        description="Zaheer Global Associates has grown from a boutique surveying firm to one of Hyderabad's most respected permission and approval consultancies."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="A Legacy of Regulatory Excellence"
                align="left"
              />
              <div className="space-y-4 text-slate-600 leading-relaxed -mt-6">
                <p>
                  Founded in Hyderabad in 2010, Zaheer Global Associates began with a
                  simple mission: make building permissions accessible, transparent, and
                  stress-free for property owners across Telangana.
                </p>
                <p>
                  Over 15 years, we&apos;ve evolved into a full-service consultancy
                  handling HMDA permissions, GHMC building approvals, Fire NOC, land
                  surveying, plot verification, and construction approval guidance for
                  850+ projects.
                </p>
                <p>
                  Our deep relationships with HMDA, GHMC, and Fire Department officials —
                  combined with technology-driven processes and AI-assisted client
                  support — set us apart in Hyderabad&apos;s competitive consultancy
                  landscape.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Hyderabad skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="Leadership"
                title="Meet Our Founder"
                align="left"
              />
              <div className="space-y-4 text-slate-600 leading-relaxed -mt-6">
                <p>
                  <strong className="text-royal-900">Mohammed Zaheer</strong> founded
                  Zaheer Global Associates with over two decades of experience in land
                  surveying, municipal regulations, and property documentation across
                  Hyderabad and Telangana.
                </p>
                <p>
                  His vision — combining traditional regulatory expertise with modern
                  technology — has guided the firm&apos;s growth into a trusted name
                  among builders, developers, architects, and property investors.
                </p>
                <Badge variant="emerald">15+ Years Industry Experience</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Achievements"
            title="Milestones That Define Us"
          />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-lg"
              >
                <p className="text-4xl font-bold text-royal-600">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal-950">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Mission & Vision"
            title="What Drives Us Forward"
            light
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To simplify building permissions and regulatory compliance for every property owner in Hyderabad through expert consultancy, transparency, and technology.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To become India's most trusted AI-powered approval consultancy platform, setting the standard for regulatory excellence and client satisfaction.",
              },
              {
                icon: Award,
                title: "Our Promise",
                text: "Every client receives dedicated support, honest timelines, transparent pricing, and the highest standard of regulatory compliance — guaranteed.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <Icon className="mb-4 h-10 w-10 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="Principles We Stand By"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <TiltCard key={value.title}>
                <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg h-full">
                  <h3 className="text-lg font-bold text-royal-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Journey"
            title="Experience Timeline"
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-royal-200" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex gap-8 pl-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-royal-600 text-sm font-bold text-white shadow-lg z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
                    <h3 className="font-bold text-royal-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
