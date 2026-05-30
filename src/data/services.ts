export type ServiceIconName =
  | "map-pin"
  | "building2"
  | "flame"
  | "ruler"
  | "clipboard-check"
  | "file-check"
  | "hard-hat"
  | "home";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: ServiceIconName;
  benefits: string[];
  timeline: string[];
  documents: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "hmda",
    slug: "hmda-permissions",
    title: "HMDA Permissions",
    shortDescription:
      "Complete HMDA layout, land use, and development permission consultancy across Hyderabad Metropolitan Region.",
    description:
      "Zaheer Global Associates provides end-to-end HMDA permission services including layout approvals, land use conversions, building plan sanctions, and compliance certificates. Our Hyderabad-based team ensures accurate documentation and expedited processing with HMDA authorities.",
    icon: "map-pin",
    benefits: [
      "Expert HMDA regulation interpretation",
      "Layout and sub-division approvals",
      "Land use conversion assistance",
      "Expedited liaison with HMDA officials",
      "Complete compliance documentation",
    ],
    timeline: [
      "Day 1-3: Site assessment & document audit",
      "Day 4-10: Application preparation & submission",
      "Day 11-30: Authority review & follow-up",
      "Day 31+: Approval receipt & handover",
    ],
    documents: [
      "Sale deed / Title documents",
      "Survey sketch & FMB",
      "Layout plan (if applicable)",
      "Identity & address proof",
      "NOC from relevant authorities",
      "Passport-size photographs",
    ],
    keywords: ["HMDA permission consultant Hyderabad", "HMDA layout approval"],
  },
  {
    id: "ghmc",
    slug: "ghmc-building-approvals",
    title: "GHMC Building Approvals",
    shortDescription:
      "Professional GHMC building plan approval, occupancy certificates, and municipal clearance services.",
    description:
      "Navigate GHMC building regulations with confidence. We handle building plan submissions, revisions, occupancy certificates, and all municipal approvals required for residential and commercial construction within GHMC limits.",
    icon: "building2",
    benefits: [
      "GHMC building plan sanction",
      "Occupancy certificate (OC) processing",
      "Deviation regularization support",
      "Municipal tax clearance assistance",
      "Revision and amendment filings",
    ],
    timeline: [
      "Week 1: Plan review & compliance check",
      "Week 2: Application filing with GHMC",
      "Week 3-6: Scrutiny & query resolution",
      "Week 7+: Sanction & certificate delivery",
    ],
    documents: [
      "Architectural & structural drawings",
      "Soil test report",
      "Title deed copy",
      "Property tax receipts",
      "NOC from neighbours (if required)",
      "Fire NOC (for applicable buildings)",
    ],
    keywords: ["GHMC approval services Hyderabad", "GHMC building permission"],
  },
  {
    id: "fire-noc",
    slug: "fire-noc",
    title: "Fire NOC Services",
    shortDescription:
      "Fire safety NOC consultancy for residential, commercial, and industrial buildings across Hyderabad.",
    description:
      "Obtain Fire NOC certificates efficiently with our specialized fire safety consultancy. We coordinate with Telangana State Disaster Response and Fire Services Department for compliance assessments, plan approvals, and certificate issuance.",
    icon: "flame",
    benefits: [
      "Fire safety plan preparation",
      "Equipment compliance guidance",
      "Department liaison & inspections",
      "Renewal and amendment support",
      "Multi-storey building expertise",
    ],
    timeline: [
      "Day 1-5: Fire safety audit & plan prep",
      "Day 6-15: Application & fee submission",
      "Day 16-25: Inspection scheduling",
      "Day 26+: NOC certificate issuance",
    ],
    documents: [
      "Building plan with fire exits marked",
      "Occupancy details & floor area statement",
      "Fire fighting equipment layout",
      "Electrical clearance certificate",
      "Building completion certificate",
    ],
    keywords: ["Fire NOC consultant Hyderabad", "fire safety NOC Telangana"],
  },
  {
    id: "land-survey",
    slug: "land-surveying",
    title: "Land Surveying",
    shortDescription:
      "Precision land surveying, boundary demarcation, and cadastral mapping services in Hyderabad.",
    description:
      "Licensed land surveyors providing accurate boundary surveys, topographic mapping, sub-division surveys, and FMB preparation for property transactions, litigation, and development projects across Hyderabad and Telangana.",
    icon: "ruler",
    benefits: [
      "DGPS & total station surveys",
      "Boundary demarcation & marking",
      "FMB & survey sketch preparation",
      "Sub-division survey reports",
      "Court-admissible documentation",
    ],
    timeline: [
      "Day 1: Site visit & boundary identification",
      "Day 2-4: Field survey & measurements",
      "Day 5-7: Report preparation & certification",
    ],
    documents: [
      "Title deed / Pattadar passbook",
      "Previous survey records (if any)",
      "Identity proof of owner",
      "Adjacent property details",
    ],
    keywords: ["land surveyor Hyderabad", "boundary survey Telangana"],
  },
  {
    id: "plot-verification",
    slug: "plot-verification",
    title: "Plot Verification",
    shortDescription:
      "Comprehensive plot verification, title scrutiny, and encumbrance checks before property purchase.",
    description:
      "Protect your investment with thorough plot verification services. We verify land records, check encumbrances, validate HMDA/GHMC approvals, and provide detailed due diligence reports for informed property decisions.",
    icon: "clipboard-check",
    benefits: [
      "Title & encumbrance verification",
      "HMDA/GHMC approval validation",
      "Litigation & dispute checks",
      "Market value assessment support",
      "Detailed verification report",
    ],
    timeline: [
      "Day 1-2: Document collection & review",
      "Day 3-5: Authority & record verification",
      "Day 6-7: Report delivery with recommendations",
    ],
    documents: [
      "Sale deed / Agreement copy",
      "Encumbrance certificate",
      "Revenue records / Pahani",
      "Layout approval copy",
      "Previous chain of title documents",
    ],
    keywords: ["plot verification Hyderabad", "land due diligence Telangana"],
  },
  {
    id: "building-permission",
    slug: "building-permission-consultancy",
    title: "Building Permission Consultancy",
    shortDescription:
      "Strategic building permission consultancy for residential, commercial, and mixed-use developments.",
    description:
      "Expert guidance on building permissions across all Hyderabad authorities. We analyze your project scope, recommend the optimal approval pathway, and manage the complete permission acquisition process.",
    icon: "file-check",
    benefits: [
      "Multi-authority permission strategy",
      "Regulatory compliance advisory",
      "Cost & timeline optimization",
      "Risk assessment & mitigation",
      "Single-window coordination",
    ],
    timeline: [
      "Week 1: Project assessment & strategy",
      "Week 2-4: Parallel application processing",
      "Week 5-8: Approvals & clearances",
    ],
    documents: [
      "Project brief & site plan",
      "Architectural drawings",
      "Structural drawings",
      "All property documents",
      "Soil investigation report",
    ],
    keywords: ["building permission consultancy", "construction approval services"],
  },
  {
    id: "construction",
    slug: "construction-approval-guidance",
    title: "Construction Approval Guidance",
    shortDescription:
      "End-to-end construction approval guidance from planning to occupancy for all project types.",
    description:
      "Comprehensive construction consultancy covering all approval stages — from pre-construction clearances to completion certificates. Ideal for builders, developers, and individual homeowners undertaking construction in Hyderabad.",
    icon: "hard-hat",
    benefits: [
      "Pre-construction clearance planning",
      "Stage-wise approval management",
      "Quality & compliance monitoring",
      "Completion certificate processing",
      "Post-approval compliance support",
    ],
    timeline: [
      "Phase 1: Pre-construction approvals (2-4 weeks)",
      "Phase 2: Construction-stage clearances (ongoing)",
      "Phase 3: Completion & occupancy (2-3 weeks)",
    ],
    documents: [
      "Approved building plans",
      "Contractor agreements",
      "Material test certificates",
      "Progress photographs",
      "Structural stability certificates",
    ],
    keywords: ["construction approval services", "building clearance Hyderabad"],
  },
  {
    id: "real-estate",
    slug: "real-estate-documentation",
    title: "Real Estate Documentation",
    shortDescription:
      "Professional real estate documentation, approval consultancy, and transaction support services.",
    description:
      "Complete real estate approval and documentation services including sale deed verification, registration support, stamp duty guidance, and regulatory compliance for property transactions in Hyderabad.",
    icon: "home",
    benefits: [
      "Sale deed & agreement drafting support",
      "Registration & stamp duty guidance",
      "RERA compliance advisory",
      "Joint venture documentation",
      "Investor due diligence reports",
    ],
    timeline: [
      "Day 1-3: Document review & gap analysis",
      "Day 4-10: Preparation & corrections",
      "Day 11+: Registration & filing support",
    ],
    documents: [
      "Property title documents",
      "Identity proofs of parties",
      "PAN cards",
      "Previous agreements",
      "Approval copies (HMDA/GHMC)",
    ],
    keywords: ["real estate approval consultant", "property documentation Hyderabad"],
  },
];
