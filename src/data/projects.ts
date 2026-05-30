export type ProjectCategory =
  | "all"
  | "residential"
  | "commercial"
  | "permissions"
  | "surveys";

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  location: string;
  description: string;
  status: "completed" | "ongoing";
  year: string;
  image: string;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "permissions", label: "Permissions" },
  { id: "surveys", label: "Site Surveys" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Gachibowli Villa Complex — GHMC Approval",
    category: "permissions",
    location: "Gachibowli, Hyderabad",
    description: "Complete GHMC building plan approval for a 12-unit luxury villa complex with Fire NOC clearance.",
    status: "completed",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "2",
    title: "HITEC City Commercial Tower",
    category: "commercial",
    location: "HITEC City, Hyderabad",
    description: "Multi-floor commercial building with integrated HMDA, GHMC, and Fire NOC approvals.",
    status: "completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "3",
    title: "Kondapur Residential Apartments",
    category: "residential",
    location: "Kondapur, Hyderabad",
    description: "GHMC approval and occupancy certificate for a 48-unit residential apartment project.",
    status: "completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: "4",
    title: "Shamshabad Plot Survey — 5 Acres",
    category: "surveys",
    location: "Shamshabad, Hyderabad",
    description: "Precision land surveying and FMB preparation for a 5-acre industrial plot acquisition.",
    status: "completed",
    year: "2025",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    id: "5",
    title: "Banjara Hills Premium Residence",
    category: "residential",
    location: "Banjara Hills, Hyderabad",
    description: "End-to-end permission consultancy including building approval and Fire NOC for a premium home.",
    status: "completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: "6",
    title: "Uppal HMDA Layout Permission",
    category: "permissions",
    location: "Uppal, Hyderabad",
    description: "HMDA layout approval and land use conversion for a 2-acre residential layout development.",
    status: "completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: "7",
    title: "Miyapur Shopping Complex",
    category: "commercial",
    location: "Miyapur, Hyderabad",
    description: "Commercial building permission with Fire NOC and occupancy certificate for retail complex.",
    status: "completed",
    year: "2025",
    image: "https://images.unsplash.com/photo-1577495508327-19f1d8d0a0e0?w=800&q=80",
  },
  {
    id: "8",
    title: "Medchal Plot Verification",
    category: "surveys",
    location: "Medchal, Hyderabad",
    description: "Comprehensive plot verification and title scrutiny for a 3-acre agricultural-to-residential conversion.",
    status: "completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89ce11?w=800&q=80",
  },
  {
    id: "9",
    title: "Financial District Office Block",
    category: "commercial",
    location: "Nanakramguda, Hyderabad",
    description: "GHMC and Fire NOC approvals for a Grade-A commercial office building in Financial District.",
    status: "ongoing",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];
