export const services = [
  {
    title: "Garden-Bed Cleanup",
    href: "/garden-bed-cleanup",
    summary: "Clear weeds, leaves, dead growth, small debris, and tired edges so planting beds look maintained and are ready for mulch."
  },
  {
    title: "Mulching",
    href: "/mulching",
    summary: "Prepare garden beds and install an even mulch layer for a cleaner appearance, moisture retention, and easier maintenance."
  },
  {
    title: "Junk Removal",
    href: "/junk-removal",
    summary: "Remove unwanted household, garage, yard, and property clutter with clear estimates and responsible disposal."
  },
  {
    title: "Gravel Driveway Repair",
    href: "/gravel-driveway-repair",
    summary: "Repair potholes, ruts, washouts, soft spots, rough entrances, loose gravel migration, and worn driveway surfaces across western Ohio."
  },
  {
    title: "Gravel Driveway Grading",
    href: "/gravel-driveway-grading",
    summary: "Restore crown, smooth washboards, improve water shedding, and reshape gravel lanes before small problems become expensive."
  },
  {
    title: "Pothole & Washout Repair",
    href: "/pothole-repair",
    summary: "Fix recurring driveway potholes, low spots, washouts, and rough entrances with grading that addresses the cause."
  },
  {
    title: "Gravel Redistribution",
    href: "/gravel-redistribution",
    summary: "Pull displaced stone back into the travel path, clean up shoulders, reduce ridges, and improve existing gravel coverage."
  },
  {
    title: "Gravel Spreading",
    href: "/gravel-spreading",
    summary: "Spread new gravel or blend existing stone for cleaner, safer, easier-to-maintain driveways, lanes, and pads."
  },
  {
    title: "Gravel Delivery Planning",
    href: "/gravel-delivery",
    summary: "Plan gravel quantity, prepare the surface before delivery, and spread or shape material after it arrives."
  },
  {
    title: "Culvert & Drainage Repair",
    href: "/culvert-repair",
    summary: "Improve driveway drainage around culverts, ditch lines, low crossings, and washed-out approaches."
  },
  {
    title: "Finish Grading",
    href: "/finish-grading",
    summary: "Fine grade gravel pads, lanes, small work areas, and property surfaces so they drain and finish cleanly."
  },
  {
    title: "Light Tractor & Box Blade Services",
    href: "/light-tractor-services",
    summary: "Light tractor work, box blade grading, driveway touch-ups, gravel movement, and practical small-property projects."
  },
  {
    title: "Property Maintenance Plans",
    href: "/property-maintenance-plans",
    summary: "Plan seasonal grading, pothole prevention, culvert checks, gravel upkeep, and small property maintenance visits."
  }
];

export const brandPillars = [
  {
    title: "Property Services",
    href: "/services",
    summary:
      "Garden-bed cleanup, mulching, junk removal, gravel driveway work, light tractor services, and small property improvement projects."
  },
  {
    title: "Digital Products",
    href: "/digital-products",
    summary:
      "Downloadable DIY plans, deck plans, patio plans, driveway guides, property maintenance templates, and future planning tools."
  },
  {
    title: "Curated Goods",
    href: "/curated-goods",
    summary:
      "Vintage finds, resale pieces, restored or cleaned-up items, and practical home, shop, and property goods."
  },
  {
    title: "Custom Goods",
    href: "/custom-goods",
    summary:
      "Leather patch hats, apparel, laser-made goods, and custom branded products with a rugged Found & Forged standard."
  }
];

export const digitalProducts = [
  "Downloadable DIY plans",
  "Deck plans",
  "Patio plans",
  "Driveway guides",
  "Property maintenance templates",
  "Future calculators and planning tools"
];

export const curatedGoods = [
  "Vintage finds",
  "Resale pieces",
  "Restored or cleaned-up items",
  "Practical home goods",
  "Shop goods",
  "Property goods"
];

export const customGoods = [
  "Leather patch hats",
  "Apparel",
  "Laser-made goods",
  "Custom branded products"
];

export const learningHubs = [
  {
    title: "Gravel Driveway Academy",
    summary: "Surface repair, drainage, gravel sizing, pothole prevention, and maintenance planning."
  },
  {
    title: "DIY Property Academy",
    summary: "Practical projects for decks, fencing, drainage, storage, outdoor utility, and home upkeep."
  },
  {
    title: "Equipment Academy",
    summary: "Tractor, box blade, loader, and attachment guidance for smarter small-property work."
  },
  {
    title: "Digital Plans & Guides",
    summary: "Future-ready templates, checklists, and downloadable plans from the Found & Forged shop."
  }
];

export const calculators = [
  {
    id: "gravel",
    title: "Gravel Calculator",
    unit: "Cubic yards",
    fields: ["length", "width", "depth"],
    formula: "length * width * depth / 324",
    explanation: "Estimate loose gravel by entering length and width in feet and depth in inches."
  },
  {
    id: "driveway-gravel",
    title: "Driveway Gravel Estimator",
    unit: "Tons",
    fields: ["length", "width", "depth"],
    formula: "length * width * depth / 324 * 1.4",
    explanation: "Plan driveway aggregate needs using a common 1.4 tons per cubic yard conversion."
  },
  {
    id: "deck-material",
    title: "Deck Material Calculator",
    unit: "Deck boards",
    fields: ["length", "width", "boardWidth"],
    formula: "Math.ceil((length * 12) / boardWidth) * Math.ceil(width)",
    explanation: "Estimate board count from deck dimensions and board face width in inches."
  },
  {
    id: "concrete",
    title: "Concrete Calculator",
    unit: "Cubic yards",
    fields: ["length", "width", "depth"],
    formula: "length * width * depth / 324",
    explanation: "Estimate concrete volume using feet for length and width and inches for slab depth."
  },
  {
    id: "mulch",
    title: "Mulch Calculator",
    unit: "Cubic yards",
    fields: ["length", "width", "depth"],
    formula: "length * width * depth / 324",
    explanation: "Estimate mulch quantity for beds, paths, and property cleanup work."
  },
  {
    id: "topsoil",
    title: "Topsoil Calculator",
    unit: "Cubic yards",
    fields: ["length", "width", "depth"],
    formula: "length * width * depth / 324",
    explanation: "Estimate topsoil volume for leveling, lawn repair, and planting areas."
  },
  {
    id: "fence-material",
    title: "Fence Material Calculator",
    unit: "Posts",
    fields: ["length", "spacing"],
    formula: "Math.ceil(length / spacing) + 1",
    explanation: "Estimate fence posts from total fence length and desired spacing in feet."
  },
  {
    id: "paver",
    title: "Paver Calculator",
    unit: "Pavers",
    fields: ["length", "width", "paverArea"],
    formula: "Math.ceil((length * width) / paverArea * 1.08)",
    explanation: "Estimate paver count with an 8% allowance for cuts and breakage."
  },
  {
    id: "retaining-wall",
    title: "Retaining Wall Block Calculator",
    unit: "Blocks",
    fields: ["length", "height", "blockLength", "blockHeight"],
    formula: "Math.ceil((length * 12 / blockLength) * (height * 12 / blockHeight))",
    explanation: "Estimate wall blocks from wall dimensions and block face dimensions in inches."
  }
];

export const categories = [
  "Gravel Driveways",
  "Property Maintenance",
  "DIY Projects",
  "Deck Building",
  "Home Improvement",
  "Tractor Tips",
  "Equipment Reviews",
  "Digital Plans & Guides",
  "Behind Found & Forged"
];
