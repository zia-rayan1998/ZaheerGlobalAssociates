"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("newsletter-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("newsletter-dismissed", "true");
    setVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(dismiss, 2000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[55] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={dismiss}
              className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-100 mb-4">
              <Mail className="h-6 w-6 text-royal-600" />
            </div>

            {submitted ? (
              <div className="text-center py-4">
                <p className="text-xl font-bold text-royal-900">You&apos;re subscribed!</p>
                <p className="mt-2 text-slate-600">Thank you for joining our newsletter.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-royal-900">
                  Get Permission Updates & Tips
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Subscribe for Hyderabad regulatory updates, approval tips, and exclusive
                  consultancy offers.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <Input placeholder="Your email address" type="email" required />
                  <Input placeholder="Phone number (optional)" type="tel" />
                  <Button type="submit" className="w-full" variant="default">
                    Subscribe Now
                  </Button>
                </form>
                <button
                  onClick={dismiss}
                  className="mt-3 w-full text-center text-xs text-slate-400 hover:text-slate-600"
                >
                  No thanks, maybe later
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
