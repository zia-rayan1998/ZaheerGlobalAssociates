export interface District {
  id: string;
  name: string;
  position: [number, number];
  description: string;
  projects: number;
  image: string;
  scrollSection: number;
}

export const districts: District[] = [
  {
    id: "financial-district",
    name: "Financial District",
    position: [4.5, -2],
    description: "Grade-A commercial towers and premium office spaces in Nanakramguda's financial corridor.",
    projects: 12,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    scrollSection: 1,
  },
  {
    id: "gachibowli",
    name: "Gachibowli",
    position: [-3, 1],
    description: "Elite residential enclave with golf-course views and world-class amenities.",
    projects: 18,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    scrollSection: 2,
  },
  {
    id: "kokapet",
    name: "Kokapet",
    position: [-5.5, 3.5],
    description: "Emerging luxury corridor with expansive villas and lakefront developments.",
    projects: 9,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    scrollSection: 3,
  },
  {
    id: "neopolis",
    name: "Neopolis",
    position: [-4, 5],
    description: "Master-planned township with ultra-premium high-rise living.",
    projects: 7,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    scrollSection: 4,
  },
  {
    id: "jubilee-hills",
    name: "Jubilee Hills",
    position: [2, 4],
    description: "Hyderabad's most prestigious address — old-world charm meets modern luxury.",
    projects: 14,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    scrollSection: 5,
  },
  {
    id: "banjara-hills",
    name: "Banjara Hills",
    position: [1, 2.5],
    description: "Iconic hilltop residences with panoramic city views and boutique retail.",
    projects: 11,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    scrollSection: 6,
  },
  {
    id: "madhapur",
    name: "Madhapur",
    position: [-1.5, -0.5],
    description: "Vibrant urban hub connecting tech corridors with premium living.",
    projects: 15,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    scrollSection: 7,
  },
  {
    id: "hitec-city",
    name: "HITEC City",
    position: [-2.5, -2],
    description: "The Silicon Valley of India — smart homes for global professionals.",
    projects: 22,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    scrollSection: 8,
  },
  {
    id: "narsingi",
    name: "Narsingi",
    position: [-6, 0],
    description: "Scenic hillside plots and gated communities with ORR connectivity.",
    projects: 8,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    scrollSection: 9,
  },
  {
    id: "kondapur",
    name: "Kondapur",
    position: [-1, 1.5],
    description: "Family-friendly luxury apartments in the heart of the western corridor.",
    projects: 16,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    scrollSection: 10,
  },
  {
    id: "tellapur",
    name: "Tellapur",
    position: [-7, 1.5],
    description: "Serene lakeside living with premium villa communities.",
    projects: 6,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    scrollSection: 11,
  },
  {
    id: "nanakramguda",
    name: "Nanakramguda",
    position: [5, -3.5],
    description: "Corporate luxury living adjacent to the Financial District.",
    projects: 10,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    scrollSection: 12,
  },
];

export const scrollWaypoints = [
  {
    position: [0, 16, 20] as [number, number, number],
    target: [0, 0, 0] as [number, number, number],
    label: "Hyderabad Overview",
  },
  ...districts.map((district) => ({
    position: [district.position[0] * 0.6 + 2, 10, district.position[1] * 0.6 + 12] as [number, number, number],
    target: [district.position[0], 0, district.position[1]] as [number, number, number],
    label: district.name,
  })),
];