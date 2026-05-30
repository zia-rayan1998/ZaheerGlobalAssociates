"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, WHATSAPP_URL, COMPANY } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 shadow-lg shadow-royal-900/5 backdrop-blur-xl border-b border-white/20"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-18 items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal-600 shadow-lg shadow-royal-600/30 transition-transform group-hover:scale-105">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <p
              className={cn(
                "text-sm font-bold leading-tight transition-colors",
                scrolled ? "text-royal-900" : "text-white"
              )}
            >
              Zaheer Global
            </p>
            <p
              className={cn(
                "text-xs transition-colors",
                scrolled ? "text-slate-500" : "text-white/70"
              )}
            >
              Associates
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? scrolled
                    ? "text-royal-600"
                    : "text-white"
                  : scrolled
                    ? "text-slate-600 hover:text-royal-600"
                    : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-emerald-400"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="whatsapp"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          <button
            className={cn(
              "rounded-lg p-2 lg:hidden transition-colors",
              scrolled ? "text-royal-900 hover:bg-royal-50" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-royal-50 text-royal-600"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="whatsapp" className="mt-2 w-full" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Contact on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
