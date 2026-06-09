"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_URL, COMPANY } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-royal-950">
      <div className="absolute inset-0 bg-gradient-mesh animate-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggIGQ9Ik0zNiAzNGg0djJoLTR6bTAtNGg0djJoLTR6bTAtNGg0djJoLTR6bTAtNGg0djJoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

      <motion.div
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-royal-600/20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <Badge variant="glass" className="mb-6">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI-Powered Consultancy Platform
          </Badge> */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {COMPANY.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-3xl text-xl font-medium text-emerald-400 sm:text-2xl"
        >
          {COMPANY.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Expert HMDA permissions, GHMC building approvals, Fire NOC, land
          surveying, plot verification, and construction consultancy — serving
          Hyderabad with 18+ years of regulatory excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button variant="emerald" size="lg" asChild className="glow-emerald">
            <Link href="/contact">
              Book Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Contact on WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            { icon: Shield, label: "98% Approval Success" },
            { icon: Award, label: "520+ Projects Completed" },
            { icon: Clock, label: "Fast-Track Processing" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md"
            >
              <Icon className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
