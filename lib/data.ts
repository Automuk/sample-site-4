export type Property = {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: "house" | "condo" | "townhouse" | "land";
  status: "for-sale" | "for-rent" | "sold";
  description: string;
  features: string[];
  images: string[];
  agentId: string;
  yearBuilt: number;
  parking: number;
  lotSize?: string;
};

export type Agent = {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  bio: string;
  photo: string;
  listings: number;
  sold: number;
  experience: number;
  specialties: string[];
  languages: string[];
};

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Ananya Krishnamurthy",
    title: "Senior Real Estate Advisor",
    phone: "+91 98200 55182",
    email: "a.krishnamurthy@summitrealty.in",
    bio: "With over 14 years of experience in Mumbai and Pune luxury real estate, Ananya has closed transactions exceeding ₹1,200 Cr. Her deep market knowledge and client-first approach have earned her consistent recognition as a top producer across Maharashtra.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    listings: 24,
    sold: 187,
    experience: 14,
    specialties: ["Luxury Villas", "Sea-Facing Properties", "Investment"],
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    id: "agent-2",
    name: "Rohan Mehta",
    title: "Residential Sales Specialist",
    phone: "+91 98300 55247",
    email: "r.mehta@summitrealty.in",
    bio: "Rohan brings a sharp analytical mindset and an extensive network across Bengaluru's most sought-after neighbourhoods. He specialises in helping first-time buyers navigate the city's dynamic micro-markets with confidence.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    listings: 18,
    sold: 143,
    experience: 9,
    specialties: ["First-Time Buyers", "Apartments", "Relocation"],
    languages: ["English", "Hindi", "Kannada"],
  },
  {
    id: "agent-3",
    name: "Priya Nair",
    title: "Luxury Property Consultant",
    phone: "+91 94400 55391",
    email: "p.nair@summitrealty.in",
    bio: "Priya's background in architecture gives her a unique edge when evaluating properties. She has a talent for matching discerning clients with homes that perfectly align with their lifestyle and investment goals across Kerala and Goa.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    listings: 31,
    sold: 210,
    experience: 16,
    specialties: ["New Construction", "Architectural Homes", "Estates"],
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: "agent-4",
    name: "Vikram Singhania",
    title: "Investment & Commercial Advisor",
    phone: "+91 99100 55418",
    email: "v.singhania@summitrealty.in",
    bio: "Vikram focuses on income-generating properties and portfolio growth strategies. His clients range from HNI investors to family offices looking to capitalise on India's fast-growing real estate sector.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    listings: 12,
    sold: 98,
    experience: 11,
    specialties: ["Investment Properties", "Commercial", "NRI Advisory"],
    languages: ["English", "Hindi", "Punjabi"],
  },
];

export const properties: Property[] = [
  {
    id: "prop-1",
    title: "Contemporary Sea-View Villa",
    address: "14 Bandstand Promenade, Bandra West",
    city: "Mumbai",
    state: "MH",
    price: 125000000,
    beds: 5,
    baths: 4,
    sqft: 4800,
    type: "house",
    status: "for-sale",
    description:
      "A breathtaking contemporary villa nestled in Bandra West with floor-to-ceiling windows framing unobstructed Arabian Sea views. This architectural masterpiece features an open-plan living area, chef's kitchen with premium appliances, and a master suite with a private terrace. The outdoor entertaining area includes an infinity pool and landscaped garden — the pinnacle of Mumbai coastal living.",
    features: [
      "Infinity Pool",
      "Sea Views",
      "Smart Home System",
      "Home Theater",
      "Wine Room",
      "3-Car Parking",
      "Private Terrace",
      "Generator Backup",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    agentId: "agent-1",
    yearBuilt: 2021,
    parking: 3,
    lotSize: "4,200 sq ft plot",
  },
  {
    id: "prop-2",
    title: "Sky Penthouse, Worli",
    address: "One Avighna Park, Tower B, PH3, Worli",
    city: "Mumbai",
    state: "MH",
    price: 87500000,
    beds: 3,
    baths: 3,
    sqft: 3200,
    type: "condo",
    status: "for-sale",
    description:
      "Perched atop one of Worli's most iconic towers, this full-floor penthouse offers unobstructed 360-degree views of the Mumbai skyline, Bandra–Worli Sea Link and the Arabian Sea. Designed by a renowned studio, the space blends luxury hospitality aesthetics with the comfort of a private residence. The wraparound terrace is an entertainer's dream.",
    features: [
      "360° City & Sea Views",
      "Wraparound Terrace",
      "Concierge Service",
      "Private Lift Lobby",
      "Modular Kitchen",
      "Home Office",
      "2 Car Parks",
      "Clubhouse Access",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    ],
    agentId: "agent-2",
    yearBuilt: 2018,
    parking: 2,
  },
  {
    id: "prop-3",
    title: "Whitefield Luxury Estate",
    address: "Plot 22, Prestige Estates, Whitefield",
    city: "Bengaluru",
    state: "KA",
    price: 220000000,
    beds: 6,
    baths: 6,
    sqft: 7200,
    type: "house",
    status: "for-sale",
    description:
      "An exceptional new-build estate in Bengaluru's most coveted gated community. Every detail has been meticulously crafted, from the hand-selected Italian marble to the bespoke joinery throughout. The lower level features a resort-style entertainment suite with a bar, media room, and fully equipped gym.",
    features: [
      "Italian Marble Flooring",
      "Resort-Style Pool",
      "Home Gym",
      "Media Room",
      "Guest Suite",
      "Lift",
      "4-Car Parking",
      "Smart Home",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    agentId: "agent-3",
    yearBuilt: 2023,
    parking: 4,
    lotSize: "6,500 sq ft plot",
  },
  {
    id: "prop-4",
    title: "Goa Beachfront Villa",
    address: "7 Calangute Beach Road, Calangute",
    city: "Panaji",
    state: "GA",
    price: 350000000,
    beds: 6,
    baths: 7,
    sqft: 6500,
    type: "house",
    status: "for-sale",
    description:
      "A rare beachfront property with direct access to one of Goa's most pristine stretches of sand. This magnificent villa combines Portuguese-inspired architecture with five-star modern amenities. The great room's double-height ceiling anchors a dramatic living space, while the infinity pool appears to merge with the ocean beyond.",
    features: [
      "Beachfront Access",
      "Infinity Pool",
      "Outdoor Shower",
      "Tropical Garden",
      "Staff Quarters",
      "Sauna",
      "Gourmet Kitchen",
      "Vaulted Ceilings",
    ],
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80",
    ],
    agentId: "agent-1",
    yearBuilt: 2015,
    parking: 3,
    lotSize: "8,200 sq ft plot",
  },
  {
    id: "prop-5",
    title: "Koregaon Park Townhouse",
    address: "12B, Lane 7, Koregaon Park",
    city: "Pune",
    state: "MH",
    price: 32000000,
    beds: 3,
    baths: 3,
    sqft: 2400,
    type: "townhouse",
    status: "for-sale",
    description:
      "A beautifully finished townhouse in Pune's most vibrant and upscale neighbourhood. The open-plan main level flows to a private courtyard, while the master suite features a spa-style en-suite and walk-in wardrobe. Minutes from premier cafés, schools and the Aga Khan Palace.",
    features: [
      "Private Courtyard",
      "Modular Kitchen",
      "Master Suite",
      "2-Car Parking",
      "Community Pool",
      "Walk to Cafés",
      "24/7 Security",
    ],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&q=80",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1200&q=80",
    ],
    agentId: "agent-2",
    yearBuilt: 2010,
    parking: 2,
  },
  {
    id: "prop-6",
    title: "Heritage Bungalow, Lutyens' Delhi",
    address: "3 Prithviraj Road, New Delhi",
    city: "New Delhi",
    state: "DL",
    price: 480000000,
    beds: 4,
    baths: 3,
    sqft: 5800,
    type: "house",
    status: "for-sale",
    description:
      "A meticulously preserved colonial-era bungalow in the heart of Lutyens' Delhi. Original hardwood floors, ornate cornices and stained-glass fanlights honour the home's heritage, while a tasteful contemporary addition introduces a gourmet kitchen, spa bathroom and a sun-drenched family pavilion opening onto a mature half-acre garden.",
    features: [
      "Colonial Architecture",
      "Half-Acre Garden",
      "Gourmet Kitchen",
      "Spa Bathroom",
      "Original Hardwood Floors",
      "Staff Quarters",
      "Covered Verandah",
    ],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&q=80",
    ],
    agentId: "agent-3",
    yearBuilt: 1935,
    parking: 3,
    lotSize: "Half-acre (2,023 sq m)",
  },
  {
    id: "prop-7",
    title: "Indiranagar Studio Apartment",
    address: "Flat 402, The Urban, 12th Main, Indiranagar",
    city: "Bengaluru",
    state: "KA",
    price: 85000,
    beds: 2,
    baths: 2,
    sqft: 1100,
    type: "condo",
    status: "for-rent",
    description:
      "Immerse yourself in Bengaluru's most cosmopolitan neighbourhood from this chic designer apartment. 12-foot ceilings, polished concrete floors and oversized windows create a gallery-like atmosphere. Steps from the city's best restaurants, craft breweries and boutique stores along 100 Feet Road.",
    features: [
      "12-ft Ceilings",
      "Polished Concrete",
      "Rooftop Lounge",
      "Concierge",
      "Cycle Storage",
      "In-Unit Laundry",
      "Pet-Friendly",
    ],
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80",
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    ],
    agentId: "agent-2",
    yearBuilt: 2019,
    parking: 1,
  },
  {
    id: "prop-8",
    title: "HITECH City Smart Home",
    address: "Plot 44, Jayabheri Silicon County, HITECH City",
    city: "Hyderabad",
    state: "TG",
    price: 55000000,
    beds: 4,
    baths: 4,
    sqft: 3100,
    type: "house",
    status: "for-sale",
    description:
      "A brand-new smart home in Hyderabad's thriving HITECH City corridor. This thoughtfully designed residence features an open main level perfect for entertaining, a spacious utility area, and a rooftop terrace with skyline views. Solar panels and high-efficiency systems make this a truly future-ready investment.",
    features: [
      "Solar Panels",
      "Rooftop Terrace",
      "City Skyline Views",
      "5-Star Rated Systems",
      "Open Plan Living",
      "Utility Room",
      "2-Car Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    ],
    agentId: "agent-4",
    yearBuilt: 2024,
    parking: 2,
    lotSize: "2,400 sq ft plot",
  },
];

export const stats = [
  { label: "Properties Sold", value: "2,400+" },
  { label: "Years of Experience", value: "20+" },
  { label: "Happy Clients", value: "1,800+" },
  { label: "In Transactions", value: "₹8,500 Cr+" },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}

export function getAgentProperties(agentId: string): Property[] {
  return properties.filter((p) => p.agentId === agentId);
}

export function formatPrice(price: number, status: string): string {
  if (status === "for-rent") {
    return `₹${price.toLocaleString("en-IN")}/mo`;
  }
  // Crores
  if (price >= 10000000) {
    const cr = price / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  // Lakhs
  if (price >= 100000) {
    const lakh = price / 100000;
    return `₹${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(2)} L`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}
