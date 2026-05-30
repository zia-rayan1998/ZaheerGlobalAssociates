"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Client Testimonials"
          title="What Our Clients Say"
          description="Trusted by property developers, homeowners, architects, and investors across Hyderabad."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-white bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Quote className="mb-4 h-8 w-8 text-emerald-400 opacity-60" />
              <p className="text-sm leading-relaxed text-slate-600">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-bold text-royal-900">{t.name}</p>
                <p className="text-sm text-slate-500">
                  {t.role} • {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
