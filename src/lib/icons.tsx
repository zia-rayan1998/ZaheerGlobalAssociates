import {
  Building2,
  Flame,
  MapPin,
  FileCheck,
  Ruler,
  HardHat,
  ClipboardCheck,
  Home,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  "map-pin": MapPin,
  building2: Building2,
  flame: Flame,
  ruler: Ruler,
  "clipboard-check": ClipboardCheck,
  "file-check": FileCheck,
  "hard-hat": HardHat,
  home: Home,
};

export function getServiceIcon(name: ServiceIconName): LucideIcon {
  return iconMap[name];
}
