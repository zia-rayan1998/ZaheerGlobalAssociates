import Link from "next/link";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { COMPANY } from "@/lib/utils";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-royal-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal-600">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold">Zaheer Global</p>
                <p className="text-sm text-white/60">Associates</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Hyderabad&apos;s trusted permission and approval consultancy. Expert
              HMDA, GHMC, Fire NOC, land surveying, and construction consultancy
              services since 2010.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-emerald-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-emerald-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-emerald-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                {COMPANY.address}
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-emerald-400" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-emerald-400" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            HMDA • GHMC • Fire NOC • Land Survey • Hyderabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}
