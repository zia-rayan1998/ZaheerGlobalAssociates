"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";
import Link from "next/link";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Welcome to Zaheer Global Associates! I'm your AI consultation assistant. I can help you identify required permissions (HMDA, GHMC, Fire NOC), answer FAQs, and guide you to book a consultation. How can I assist you today?",
};

function getAIResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("hmda") || q.includes("layout")) {
    return "For HMDA permissions in Hyderabad, you'll typically need title documents, survey sketch/FMB, layout plan, and identity proof. Our HMDA specialists handle layout approvals, land use conversions, and building sanctions. Would you like to book a free consultation?";
  }
  if (q.includes("ghmc") || q.includes("building")) {
    return "GHMC building approval requires architectural drawings, structural plans, soil test report, title deed, and property tax receipts. Processing usually takes 4-8 weeks. We offer expedited GHMC approval services across all Hyderabad zones.";
  }
  if (q.includes("fire") || q.includes("noc")) {
    return "Fire NOC is required for multi-storey buildings, commercial properties, and structures exceeding certain floor area thresholds in Telangana. We handle fire safety plans, inspections, and NOC issuance. Share your building details for a customized assessment.";
  }
  if (q.includes("survey") || q.includes("land")) {
    return "Our licensed land surveyors provide boundary surveys, FMB preparation, and sub-division surveys across Hyderabad and Telangana. Court-admissible documentation is included. Contact us for a site visit quote.";
  }
  if (q.includes("plot") || q.includes("verif")) {
    return "Plot verification includes title scrutiny, encumbrance checks, HMDA/GHMC approval validation, and litigation searches. This is essential before purchasing property in Hyderabad. We deliver detailed due diligence reports within 7 days.";
  }
  if (q.includes("book") || q.includes("consult") || q.includes("appointment")) {
    return "You can book a free consultation through our Contact page or WhatsApp us directly. Our team responds within 24 hours with a customized permission roadmap for your project.";
  }
  if (q.includes("cost") || q.includes("fee") || q.includes("price")) {
    return "Our fees depend on project type, location, and scope. We provide transparent quotations after a free initial consultation — no hidden costs. Share your project details and we'll prepare a detailed estimate.";
  }
  if (q.includes("document") || q.includes("paper")) {
    return "Required documents vary by service. Generally: title deed, survey sketch, architectural drawings, identity proof, and NOCs. Tell me your project type (residential/commercial/plot) and I'll suggest the exact checklist.";
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Hello! I'm here to help with HMDA permissions, GHMC approvals, Fire NOC, land surveying, and plot verification in Hyderabad. What type of project are you working on?";
  }

  const matchedFaq = faqs.find(
    (f) =>
      q.split(" ").some((word) => word.length > 4 && f.question.toLowerCase().includes(word))
  );
  if (matchedFaq) return matchedFaq.answer;

  const matchedService = services.find(
    (s) =>
      q.split(" ").some((word) => word.length > 3 && s.title.toLowerCase().includes(word))
  );
  if (matchedService) return matchedService.shortDescription + " Visit our Services page or book a consultation for detailed guidance.";

  return "Thank you for your inquiry! For specialized guidance on permissions and approvals in Hyderabad, I recommend booking a free consultation with our experts. You can also reach us instantly on WhatsApp. Would you like me to help identify which permissions your project needs?";
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadStep, setLeadStep] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", phone: "" });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 700));
    const reply = getAIResponse(text);
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setTyping(false);

    if (messages.length > 4 && !leadStep) setLeadStep(true);
  };

  const submitLead = () => {
    if (!leadData.name || !leadData.phone) return;
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `Thank you, ${leadData.name}! We've noted your contact (${leadData.phone}). Our team will reach out within 24 hours. You can also book directly on our Contact page.`,
      },
    ]);
    setLeadStep(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-royal-600 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-royal-600/40 hover:bg-royal-700 sm:bottom-8 sm:left-8"
        aria-label="Open AI Assistant"
      >
        <Sparkles className="h-5 w-5" />
        <span className="hidden sm:inline">AI Assistant</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative flex h-[min(600px,85vh)] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between bg-gradient-to-r from-royal-600 to-royal-800 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">ZGA AI Assistant</p>
                    <p className="text-xs text-white/70">Permission Expert • Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-royal-600 text-white rounded-br-md"
                          : "bg-slate-100 text-slate-700 rounded-bl-md"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex gap-1 rounded-2xl bg-slate-100 px-4 py-3 w-fit">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-royal-400 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-royal-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-royal-400 [animation-delay:300ms]" />
                  </div>
                )}
                {leadStep && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 space-y-3">
                    <p className="text-sm font-medium text-royal-900">
                      Share your details for a callback:
                    </p>
                    <Input
                      placeholder="Your Name"
                      value={leadData.name}
                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                    />
                    <Input
                      placeholder="Phone Number"
                      value={leadData.phone}
                      onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                    />
                    <Button onClick={submitLead} variant="emerald" size="sm" className="w-full">
                      Request Callback
                    </Button>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              <div className="border-t border-slate-100 p-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["HMDA Permission", "GHMC Approval", "Fire NOC", "Book Consultation"].map(
                    (chip) => (
                      <button
                        key={chip}
                        onClick={() => sendMessage(chip)}
                        className="rounded-full border border-royal-200 bg-royal-50 px-3 py-1 text-xs font-medium text-royal-700 hover:bg-royal-100 transition-colors"
                      >
                        {chip}
                      </button>
                    )
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about permissions..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  />
                  <Button size="icon" onClick={() => sendMessage(input)}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <Link
                  href="/contact"
                  className="block text-center text-xs text-royal-600 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  Or book a full consultation →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
