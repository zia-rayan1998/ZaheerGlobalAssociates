"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ConsultationFormProps {
  compact?: boolean;
  serviceName?: string;
}

export function ConsultationForm({
  compact = false,
  serviceName,
}: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <CheckCircle className="mb-4 h-12 w-12 text-emerald-500" />
        <h3 className="text-xl font-bold text-royal-900">Thank You!</h3>
        <p className="mt-2 text-slate-600">
          We&apos;ve received your inquiry. Our team will contact you within 24
          hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Input placeholder="Full Name *" required name="name" />
        <Input placeholder="Phone Number *" required name="phone" type="tel" />
        {!compact && <Input placeholder="Email Address" name="email" type="email" className="sm:col-span-2" />}
        {!compact && (
          <Input
            placeholder="Project Location in Hyderabad"
            name="location"
            className="sm:col-span-2"
          />
        )}
        {serviceName && (
          <Input
            value={serviceName}
            readOnly
            name="service"
            className="sm:col-span-2 bg-royal-50"
          />
        )}
        <Textarea
          placeholder="Describe your project requirements..."
          name="message"
          className={compact ? "" : "sm:col-span-2"}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading} variant="default">
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Submitting...
          </span>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Inquiry
          </>
        )}
      </Button>
    </form>
  );
}
