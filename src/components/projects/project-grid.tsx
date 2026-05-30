"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const counts = {
    total: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    residential: projects.filter((p) => p.category === "residential").length,
    commercial: projects.filter((p) => p.category === "commercial").length,
  };

  return (
    <>
      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Total Projects", value: counts.total },
          { label: "Completed", value: counts.completed },
          { label: "Residential", value: counts.residential },
          { label: "Commercial", value: counts.commercial },
        ].map((c) => (
          <div
            key={c.label}
            className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-lg"
          >
            <p className="text-3xl font-bold text-royal-600">
              <AnimatedCounter value={c.value} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-slate-600">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              filter === cat.id
                ? "bg-royal-600 text-white shadow-lg shadow-royal-600/30"
                : "bg-white text-slate-600 border border-slate-200 hover:border-royal-300 hover:text-royal-600"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="mb-6 break-inside-avoid"
            >
              <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-royal-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="emerald" className="capitalize">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="default"
                        className={
                          project.status === "ongoing"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : ""
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-white/70">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-royal-600">
                    Completed {project.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
