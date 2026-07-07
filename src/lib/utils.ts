import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "919704045937";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Zaheer Global Associates, I would like to inquire about your permission and approval services in Hyderabad."
)}`;

export const COMPANY = {
  name: "Zaheer Global Associates",
  tagline: "Trusted Permission & Approval Consultancy in Hyderabad",
  email: "zaheerrayan@gmail.com",
  phone: "+91 9704045937",
  address: "King Colony, Shahstipuram, Hyderabad , India.",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4091613580813!2d78.45194857493313!3d17.32187748355423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd590b8ac30b%3A0xaa5d4922d8b9a2c6!2sMaster%20Minds%20High%20School!5e1!3m2!1sen!2sin!4v1783462420570!5m2!1sen!2sin",
} as const;
