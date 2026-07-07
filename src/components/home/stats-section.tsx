"use client";

import { stats } from "@/data/company";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { SectionHeading } from "@/components/shared/section-heading";

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-white/50 bg-blue p-8 shadow-2xl shadow-royal-900/10 sm:p-12">
          <SectionHeading
            badge="Our Track Record"
            title="Numbers That Speak for Themselves"
            description="Trusted by hundreds of property owners, builders, and developers across Hyderabad."
          />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-royal-600 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
