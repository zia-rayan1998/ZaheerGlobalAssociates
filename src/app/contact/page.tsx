import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { COMPANY, WHATSAPP_URL } from "@/lib/utils";
import { PageHero } from "@/components/shared/page-hero";
import { ConsultationForm } from "@/components/shared/consultation-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMetadata(
  "Contact Us — Book a Free Consultation",
  "Contact Zaheer Global Associates in Hyderabad. Book a free consultation for HMDA, GHMC, Fire NOC, land surveying & plot verification services.",
  "/contact"
);

const contactInfo = [
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Office", value: COMPANY.address, href: null },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM", href: null },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact" },
            ])
          ),
        }}
      />
      <PageHero
        badge="Contact Us"
        title="Book Your Free Consultation"
        description="Reach out for expert guidance on HMDA permissions, GHMC approvals, Fire NOC, and all building permission services in Hyderabad."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-royal-900">Get in Touch</h2>
                <p className="mt-2 text-slate-600">
                  Our team responds within 24 hours. For urgent inquiries, contact us
                  directly on WhatsApp.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <Card key={label} className="transition-all hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal-50">
                        <Icon className="h-5 w-5 text-royal-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="mt-1 text-sm font-medium text-royal-900 hover:text-royal-600 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-medium text-royal-900">{value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-64 sm:h-80">
                <iframe
                  src={COMPANY.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zaheer Global Associates Office Location"
                />
              </div>
            </div>

            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Book a Consultation</CardTitle>
                <p className="text-slate-600 text-sm">
                  Fill in your details and our experts will contact you with a customized
                  permission roadmap for your project.
                </p>
              </CardHeader>
              <CardContent>
                <ConsultationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
