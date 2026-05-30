"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, FileText, CheckCircle } from "lucide-react";
import type { Service } from "@/data/services";
import { getServiceIcon } from "@/lib/icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConsultationForm } from "@/components/shared/consultation-form";
import { TiltCard } from "@/components/shared/tilt-card";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const Icon = getServiceIcon(service.icon);

  return (
    <TiltCard>
      <Card
        id={service.slug}
        className="overflow-hidden transition-all hover:shadow-2xl hover:shadow-royal-900/10"
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-royal-700 text-white shadow-lg shadow-royal-600/30">
              <Icon className="h-7 w-7" />
            </div>
            <Badge variant="emerald">Hyderabad</Badge>
          </div>
          <CardTitle className="mt-4 text-2xl">{service.title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-royal-900">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Key Benefits
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex w-full items-center justify-between rounded-xl border border-royal-100 bg-royal-50/50 px-4 py-3 text-sm font-semibold text-royal-700 transition-colors hover:bg-royal-50"
          >
            View Process & Documents
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-6"
              >
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-royal-900">
                    <Clock className="h-4 w-4 text-royal-500" />
                    Process Timeline
                  </h4>
                  <ol className="space-y-2">
                    {service.timeline.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-lg bg-slate-50 px-4 py-2.5 text-sm text-slate-600"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-100 text-xs font-bold text-royal-600">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-royal-900">
                    <FileText className="h-4 w-4 text-royal-500" />
                    Required Documents
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {service.documents.map((doc) => (
                      <li
                        key={doc}
                        className="rounded-lg border border-slate-100 bg-white px-3 py-2 text-sm text-slate-600"
                      >
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full rounded-xl bg-royal-600 py-3 text-sm font-semibold text-white transition-all hover:bg-royal-700 hover:shadow-lg hover:shadow-royal-600/30"
          >
            {showForm ? "Hide Inquiry Form" : "Request a Quote"}
          </button>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
              >
                <ConsultationForm compact serviceName={service.title} />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </TiltCard>
  );
}
