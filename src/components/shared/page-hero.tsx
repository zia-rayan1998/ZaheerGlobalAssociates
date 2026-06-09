"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-royal-950 pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggIGQ9Ik0zNiAzNGg0djJoLTR6bTAtNGg0djJoLTR6bTAtNGg0djJoLTR6bTAtNGg0djJoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {badge && (
            <Badge variant="glass" className="mb-6">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
            {description}
          </p>
        </motion.div>
      </div>

    </section>
  );
}
