"use client";

import { whyChooseUs } from "@/data/company";
import { SectionHeading } from "@/components/shared/section-heading";
import { TiltCard } from "@/components/shared/tilt-card";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Why Choose Us"
          title="Hyderabad's Most Trusted Approval Consultants"
          description="Combining regulatory expertise, technology-driven processes, and personalized client support."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <TiltCard key={item.title}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all hover:border-emerald-200 hover:shadow-xl">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-royal-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
