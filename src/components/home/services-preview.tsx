"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { getServiceIcon } from "@/lib/icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { TiltCard } from "@/components/shared/tilt-card";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-[#05070A]">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Approval & Consultancy Services"
          description="End-to-end permission services for residential, commercial, and industrial projects across Hyderabad."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <TiltCard key={service.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group h-full rounded-2xl border border-[#D4AF37]/20 bg-[#0B1118] p-6 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-royal-700 text-white shadow-lg shadow-royal-600/30 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F5E6B3]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#F5E6B3] line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal-600 hover:text-emerald-600 transition-colors"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
