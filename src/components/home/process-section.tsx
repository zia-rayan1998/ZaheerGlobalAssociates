"use client";

import { processSteps } from "@/data/company";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProcessSection() {
  return (
    <section className="py-24 bg-royal-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          badge="Our Process"
          title="Simple, Transparent Approval Workflow"
          description="From consultation to final approval — we manage every step so you can focus on your project."
          light
        />

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-royal-400 to-transparent hidden md:block" />
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative flex gap-8 md:gap-12">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-500/30 z-10">
                  {step.step}
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
