export const services = [
  {
    title: "Gravel Driveway Rehabilitation",
    href: "/gravel-driveway-rehabilitation",
    summary: "Reclaim rutted, washed-out, pothole-heavy drives with grading, reshaping, and fresh aggregate planning."
  },
  {
    title: "Driveway Grading",
    href: "/services",
    summary: "Cut washboards, restore crown, improve drainage, and create a cleaner driving surface."
  },
  {
    title: "Gravel Spreading",
    href: "/services",
    summary: "Efficient spreading for driveways, pads, lanes, and practical property projects."
  },
  {
    title: "Box Blade Work",
    href: "/services",
    summary: "Rugged grading and surface work for small properties, lanes, and rough utility areas."
  },
  {
    title: "Small Property Improvement Projects",
    href: "/services",
    summary: "Focused improvements that make a property cleaner, more usable, and easier to maintain."
  }
];

export const brandPillars = [
  {
    title: "Property Services",
    href: "/services",
    summary:
      "Gravel driveway rehabilitation, grading, gravel spreading, box blade work, and small property improvement projects."
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
