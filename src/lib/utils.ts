import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Zaheer Global Associates, I would like to inquire about your permission and approval services in Hyderabad."
)}`;

export const COMPANY = {
  name: "Zaheer Global Associates",
  tagline: "Trusted Permission & Approval Consultancy in Hyderabad",
  email: "info@zaheerglobalassociates.com",
  phone: "+91 98765 43210",
  address: "Hyderabad, Telangana, India",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487107.5615032347!2d78.267614!3d17.387140!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b7838b436a9!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;
