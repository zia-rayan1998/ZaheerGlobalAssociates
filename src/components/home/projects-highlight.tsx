"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsHighlight() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Project Highlights"
          title="Recent Success Stories"
          description="A showcase of completed permission approvals, surveys, and consultancy projects across Hyderabad."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 to-transparent" />
                <Badge
                  variant="emerald"
                  className="absolute top-4 left-4 capitalize"
                >
                  {project.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-royal-900 line-clamp-2">
                  {project.title}
                </h3>
                <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-emerald-500" />
                  {project.location}
                </p>
                <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
