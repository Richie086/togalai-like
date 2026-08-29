import './style.css';
// Preconstruction Software Hub - main.js

// 1. Data Store
const PRODUCTS = [
  {
    id: 'rsmeans',
    name: 'RSMeans Data Online',
    category: 'end-to-end',
    categoryLabel: 'Industry Benchmark & AI Estimating',
    tagline: 'North America\'s premier construction cost database with Flash AI Estimating',
    description: 'RSMeans Data by Gordian provides over 92,000 unit line items, 970+ localized market indices, and 30,000+ annual research hours. Flash AI Estimating powered by RSMeans Data maps drawing quantities directly to MasterFormat line items and localized material, labor, and equipment pricing.',
    url: 'https://www.rsmeans.com/',
    logoText: 'RS',
    specs: {
      speed: 'High (~75% reduction with Flash AI)',
      deployment: 'Cloud (Gordian Platform)',
      pricingModel: 'Tiered Subscription (Core / Complete / Plus)',
      target: 'Estimators, GCs, Subcontractors & Owners'
    },
    pros: [
      'North America\'s most trusted 92,000+ line item cost database',
      '970+ location factors (City Cost Index) for precision regional pricing',
      'Flash AI Estimating maps automated takeoff counts to MasterFormat assemblies'
    ],
    cons: [
      'Full database tier subscriptions require enterprise licensing',
      'Requires standard alignment with CSI MasterFormat / Uniformat taxonomy'
    ],
    pricing: 'Core / Complete / Plus Tiers',
    radarScores: { speed: 44, database: 50, assemblies: 48, bid: 40, report: 48 }
  },
  {
    id: 'togal',
    name: 'Togal.AI',
    category: 'ai-first',
    categoryLabel: 'AI-First Takeoff Engine',
    tagline: 'Deep learning & computer vision pioneer for drawing takeoffs',
    description: 'Togal.AI leverages advanced machine learning algorithms to automate the digital takeoff process. Estimators can upload 2D PDF blueprints and let the computer vision engine measure areas, trace linear partitions, and count objects in seconds.',
    url: 'https://www.togal.ai',
    logoText: 'TG',
    specs: {
      speed: 'Highest (~80% reduction)',
      deployment: 'Cloud (Web browser)',
      pricingModel: 'Per User Seat',
      target: 'Mid-to-Large Contractors'
    },
    pros: [
      'Extremely fast automated space and wall tracing',
      'Learns and adapts to customized estimator styles',
      'Automatic drawing revision overlay & comparison comparison'
    ],
    cons: [
      'No built-in regional material/labor unit cost database',
      'AI predictions require human review on complex custom drawings'
    ],
    pricing: '$250 - $300 / mo',
    radarScores: { speed: 50, database: 12, assemblies: 25, bid: 15, report: 38 }
  },
  {
    id: 'kreo',
    name: 'Kreo Takeoff',
    category: 'ai-first',
    categoryLabel: 'AI-First Takeoff Engine',
    tagline: 'Geometry-driven AI takeoff integrated with cloud spreadsheets',
    description: 'Kreo uses semantic analysis and deep learning to identify rooms, dimensions, and building parts. Its unique workflow binds automatic takeoff calculations to a cloud-based Excel-like environment, allowing estimators to run formulas inline.',
    url: 'https://www.kreo.net',
    logoText: 'KR',
    specs: {
      speed: 'High (~70% reduction)',
      deployment: 'Cloud (Web browser)',
      pricingModel: 'Per User Seat',
      target: 'Quantity Surveyors & Cost Consultants'
    },
    pros: [
      'Seamless link between CAD geometry and Excel-style spreadsheets',
      'Auto-measures complex structural elements and counts fixtures',
      'Clean, developer-friendly interface and API exports'
    ],
    cons: [
      'Limited pre-built regional price libraries',
      'Takes time to configure spreadsheet templates for estimating'
    ],
    pricing: '$110 - $160 / mo',
    radarScores: { speed: 45, database: 18, assemblies: 38, bid: 22, report: 40 }
  },
  {
    id: 'beam',
    name: 'Beam AI',
    category: 'ai-first',
    categoryLabel: 'AI-First Takeoff Engine',
    tagline: 'Rapid cloud takeoff engine optimized for subcontractor workflows',
    description: 'Beam AI focuses on speed and simplicity. It allows specialty subcontractors (concrete, drywall, painting) to run automatic plans analysis and quickly generate linear, count, and square-footage quantities for easy exporting to Excel.',
    url: 'https://www.ibeam.ai',
    logoText: 'BM',
    specs: {
      speed: 'High (~75% reduction)',
      deployment: 'Cloud (Web browser)',
      pricingModel: 'Usage or Seat-based',
      target: 'Specialty Subcontractors'
    },
    pros: [
      'Simple, lightweight interface with very quick setup',
      'Excellent for site plans, structural slabs, and finishes',
      'Cost-effective for smaller estimating teams'
    ],
    cons: [
      'Lacks broader bid management or subcontractor invitation tools',
      'No multi-user collaborative database synchronization'
    ],
    pricing: 'Usage-based tiers',
    radarScores: { speed: 42, database: 10, assemblies: 22, bid: 12, report: 30 }
  },
  {
    id: 'quotr',
    name: 'Quotr.ai',
    category: 'end-to-end',
    categoryLabel: 'End-to-End Estimating Suite',
    tagline: 'AI takeoff mapped directly to national material cost databases',
    description: 'Quotr.ai is built for contractors who want to go from plans to client proposals in one tool. It parses 2D plans with AI, extracts quantities, and instantly maps them to a customizable material, labor, and local pricing database.',
    url: 'https://quotr.ai',
    logoText: 'QT',
    specs: {
      speed: 'Moderate-High (~65% reduction)',
      deployment: 'Cloud (Web browser)',
      pricingModel: 'All-inclusive Tiers',
      target: 'General & Specialty Contractors'
    },
    pros: [
      'Converts takeoff counts automatically into priced estimates',
      'Integrated regional material & labor cost libraries',
      'Beautiful built-in client proposal generator'
    ],
    cons: [
      'AI geometry tracing is less customizable than pure-play engines',
      'Relatively new platform with fewer third-party integrations'
    ],
    pricing: 'Starts at $199 / mo',
    radarScores: { speed: 35, database: 45, assemblies: 35, bid: 28, report: 45 }
  },
  {
    id: 'stack',
    name: 'STACK',
    category: 'end-to-end',
    categoryLabel: 'End-to-End Estimating Suite',
    tagline: 'Cloud-based industry standard for takeoff and item assemblies',
    description: 'STACK is a widely adopted cloud platform that bridges takeoff and detailed estimating. Estimators build custom item assemblies (e.g. wall assemblies with drywall, studs, screw counts) that compute automatically from plan takeoffs.',
    url: 'https://www.stackct.com',
    logoText: 'ST',
    specs: {
      speed: 'Assisted (~50% reduction)',
      deployment: 'Cloud (Web browser)',
      pricingModel: 'Annual Contract',
      target: 'Mid-Market GCs & Subs'
    },
    pros: [
      'Robust custom assembly builder and pricing calculations',
      'Excellent multi-user collaboration and file folders',
      'Large ecosystem of integrations and contractor networks'
    ],
    cons: [
      'AI features (AI Takeoff) are secondary add-ons, less automated',
      'Steep learning curve to build and manage assembly databases'
    ],
    pricing: '$1,500 - $3,000 / yr',
    radarScores: { speed: 25, database: 48, assemblies: 50, bid: 42, report: 44 }
  },
  {
    id: 'ost',
    name: 'On-Screen Takeoff (OST)',
    category: 'legacy-assisted',
    categoryLabel: 'Assisted AI & Desktop Standard',
    tagline: 'Enterprise desktop powerhouse with AI Takeoff Boost',
    description: 'On-Screen Takeoff is a legendary desktop application used by the largest estimators worldwide. Combined with "Takeoff Boost" (its cloud AI processing engine), it automates initial counts and areas while preserving enterprise offline databases.',
    url: 'https://www.oncenter.com',
    logoText: 'OS',
    specs: {
      speed: 'Assisted (~60% reduction)',
      deployment: 'Desktop (Windows only)',
      pricingModel: 'Enterprise License',
      target: 'Enterprise GCs & Multi-Branch'
    },
    pros: [
      'Extremely stable, powerful, and custom-tailored for large screens',
      'Binds directly with Quick Bid for enterprise estimating workflows',
      'Excellent sheet organization and multi-monitor setups'
    ],
    cons: [
      'Requires desktop installation (Windows OS only)',
      'Legacy, dated visual interface with a high licensing cost'
    ],
    pricing: 'Custom Enterprise Quotes',
    radarScores: { speed: 28, database: 46, assemblies: 48, bid: 45, report: 38 }
  },
  {
    id: 'bluebeam',
    name: 'Bluebeam Revu',
    category: 'legacy-assisted',
    categoryLabel: 'Assisted AI & Desktop Standard',
    tagline: 'The construction industry standard for PDF markup & collaboration',
    description: 'While not a fully automated AI takeoff engine, Bluebeam is the baseline communication system for preconstruction. It uses semi-assisted tools (visual search counts, area tools, calibration scales) to help teams execute and review takeoffs.',
    url: 'https://www.bluebeam.com',
    logoText: 'BB',
    specs: {
      speed: 'Manual/Assisted (~25% reduction)',
      deployment: 'Desktop / Cloud Web hybrid',
      pricingModel: 'Per Seat Subscription',
      target: 'All construction professionals'
    },
    pros: [
      'The industry standard; almost all subs and GCs use it',
      'Unmatched PDF editing, sheet markup, and layer controls',
      'Studio Sessions allow real-time collaborative document markup'
    ],
    cons: [
      'No fully automated AI space or wall footprint detection',
      'Takeoff remains largely manual, clicking point-by-point'
    ],
    pricing: '$240 / user / yr',
    radarScores: { speed: 12, database: 15, assemblies: 32, bid: 25, report: 42 }
  }
];

// Blueprints configuration for Simulator
const BLUEPRINTS = {
  office: {
    title: 'Commercial Office Space',
    totalArea: 800,
    linearWalls: 240,
    doors: 6,
    windows: 8,
    rooms: [
      { id: 'off1', name: 'Executive Office 101', area: 210, path: 'M 30,30 L 290,30 L 290,200 L 30,200 Z', color: 'rgba(99, 102, 241, 0.25)', border: '#6366f1', textX: 160, textY: 110, material: 'Carpet: 24 sq yds | Wall studs: 42 pcs' },
      { id: 'off2', name: 'Open Office 102', area: 290, path: 'M 290,30 L 590,30 L 590,200 L 290,200 Z', color: 'rgba(6, 182, 212, 0.25)', border: '#06b6d4', textX: 440, textY: 110, material: 'Carpet Tiles: 33 sq yds | Drywall: 58 sheets' },
      { id: 'conf', name: 'Conference Room', area: 200, path: 'M 30,260 L 390,260 L 390,470 L 30,470 Z', color: 'rgba(16, 185, 129, 0.25)', border: '#10b981', textX: 210, textY: 375, material: 'Hardwood: 23 sq yds | Acoustic panels: 12 pcs' },
      { id: 'break', name: 'Pantry / Breakroom', area: 100, path: 'M 390,260 L 590,260 L 590,470 L 390,470 Z', color: 'rgba(245, 158, 11, 0.25)', border: '#f59e0b', textX: 490, textY: 375, material: 'Tile: 12 sq yds | Plumbing fixtures: 2 sets' }
    ],
    walls: [
      'M 20,20 L 780,20 L 780,480 L 20,480 Z', // perimeter
      'M 290,20 L 290,200', // office divider
      'M 30,200 L 590,200', // upper corridor wall
      'M 30,260 L 590,260', // lower corridor wall
      'M 390,260 L 390,480' // pantry divider
    ],
    fixtures: [
      { type: 'door', label: 'Door D1', x: 250, y: 200, r: 15 },
      { type: 'door', label: 'Door D2', x: 320, y: 200, r: 15 },
      { type: 'door', label: 'Door D3', x: 180, y: 260, r: 15 },
      { type: 'door', label: 'Door D4', x: 420, y: 260, r: 15 },
      { type: 'door', label: 'Door D5', x: 740, y: 240, r: 15 },
      { type: 'door', label: 'Door D6', x: 50, y: 200, r: 15 },
      { type: 'window', label: 'Window W1', x: 100, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W2', x: 400, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W3', x: 100, y: 480, w: 40, h: 4 },
      { type: 'window', label: 'Window W4', x: 480, y: 480, w: 40, h: 4 },
      { type: 'window', label: 'Window W5', x: 20, y: 100, w: 4, h: 40 },
      { type: 'window', label: 'Window W6', x: 20, y: 350, w: 4, h: 40 },
      { type: 'window', label: 'Window W7', x: 780, y: 100, w: 4, h: 40 },
      { type: 'window', label: 'Window W8', x: 780, y: 350, w: 4, h: 40 }
    ],
    materials: [
      { name: 'Broadloom Carpet Finish', qty: '57 Sq Yds' },
      { name: 'Wood Vinyl Plank Flooring', qty: '35 Sq Yds' },
      { name: 'Type X 5/8" Drywall (4x10)', qty: '120 Sheets' },
      { name: '20ga 3-5/8" Metal Studs (10\')', qty: '185 Pcs' },
      { name: 'Interior Wood Doors (3-0 x 7-0)', qty: '6 Sets' },
      { name: 'Double Hung Exterior Windows', qty: '8 Sets' }
    ]
  },
  apartment: {
    title: 'Modern 2-Bedroom Apartment',
    totalArea: 1200,
    linearWalls: 360,
    doors: 8,
    windows: 10,
    rooms: [
      { id: 'master', name: 'Master Bedroom', area: 380, path: 'M 30,30 L 350,30 L 350,260 L 30,260 Z', color: 'rgba(99, 102, 241, 0.25)', border: '#6366f1', textX: 190, textY: 150, material: 'Carpet: 42 sq yds | Baseboard: 80 LF' },
      { id: 'bed2', name: 'Bedroom 2', area: 280, path: 'M 350,30 L 610,30 L 610,210 L 350,210 Z', color: 'rgba(6, 182, 212, 0.25)', border: '#06b6d4', textX: 480, textY: 120, material: 'Carpet: 31 sq yds | Baseboard: 65 LF' },
      { id: 'bath', name: 'Bathroom Suite', area: 140, path: 'M 610,30 L 770,30 L 770,210 L 610,210 Z', color: 'rgba(244, 63, 94, 0.25)', border: '#f43f5e', textX: 690, textY: 120, material: 'Hex Tile: 16 sq yds | Wetwall: 8 sheets' },
      { id: 'living', name: 'Living Room & Kitchen', area: 400, path: 'M 30,260 L 770,260 L 770,470 L 30,470 Z', color: 'rgba(16, 185, 129, 0.25)', border: '#10b981', textX: 400, textY: 370, material: 'Engineered Oak: 45 sq yds | Cabinets: 18 LF' }
    ],
    walls: [
      'M 20,20 L 780,20 L 780,480 L 20,480 Z', // perimeter
      'M 350,20 L 350,260', // master bedroom divider
      'M 610,20 L 610,210', // bed2 / bath divider
      'M 350,210 L 780,210', // bedroom upper boundary
      'M 30,260 L 350,260' // master lower boundary
    ],
    fixtures: [
      { type: 'door', label: 'Master Door', x: 260, y: 260, r: 15 },
      { type: 'door', label: 'Bed 2 Door', x: 380, y: 210, r: 15 },
      { type: 'door', label: 'Bath Door', x: 630, y: 210, r: 15 },
      { type: 'door', label: 'Closet D1', x: 100, y: 30, r: 15 },
      { type: 'door', label: 'Closet D2', x: 500, y: 30, r: 15 },
      { type: 'door', label: 'Main Entry', x: 50, y: 470, r: 15 },
      { type: 'door', label: 'Balcony Slide', x: 700, y: 470, r: 25 },
      { type: 'door', label: 'Pantry Door', x: 420, y: 260, r: 15 },
      { type: 'window', label: 'Window W1', x: 180, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W2', x: 450, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W3', x: 680, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W4', x: 300, y: 480, w: 50, h: 4 },
      { type: 'window', label: 'Window W5', x: 500, y: 480, w: 50, h: 4 },
      { type: 'window', label: 'Window W6', x: 20, y: 150, w: 4, h: 40 },
      { type: 'window', label: 'Window W7', x: 20, y: 350, w: 4, h: 40 },
      { type: 'window', label: 'Window W8', x: 780, y: 150, w: 4, h: 40 },
      { type: 'window', label: 'Window W9', x: 780, y: 350, w: 4, h: 40 },
      { type: 'window', label: 'Window W10', x: 780, y: 220, w: 4, h: 20 }
    ],
    materials: [
      { name: 'Luxury Bedroom Carpet', qty: '73 Sq Yds' },
      { name: 'Bathroom Mosaic Tile', qty: '16 Sq Yds' },
      { name: 'Pre-finished Oak Flooring', qty: '45 Sq Yds' },
      { name: 'Water-resistant GWB Drywall', qty: '32 Sheets' },
      { name: 'Standard 1/2" Drywall (4x12)', qty: '180 Sheets' },
      { name: '2x4 Spruce Lumber Studs (8\')', qty: '310 Pcs' },
      { name: 'Pre-hung Solid Core Doors', qty: '8 Sets' },
      { name: 'Vinyl Casement Windows', qty: '10 Sets' }
    ]
  },
  retail: {
    title: 'Retail Boutique Shop',
    totalArea: 650,
    linearWalls: 150,
    doors: 3,
    windows: 5,
    rooms: [
      { id: 'sales', name: 'Main Sales Floor', area: 450, path: 'M 30,30 L 550,30 L 550,470 L 30,470 Z', color: 'rgba(6, 182, 212, 0.25)', border: '#06b6d4', textX: 280, textY: 250, material: 'Polished Concrete | LED spots: 30 sets' },
      { id: 'fitting', name: 'Fitting Room', area: 100, path: 'M 550,30 L 770,30 L 770,220 L 550,220 Z', color: 'rgba(99, 102, 241, 0.25)', border: '#6366f1', textX: 660, textY: 120, material: 'Carpet: 11 sq yds | Mirrored walls: 2 pcs' },
      { id: 'storage', name: 'Back Stock Room', area: 100, path: 'M 550,220 L 770,220 L 770,470 L 550,470 Z', color: 'rgba(245, 158, 11, 0.25)', border: '#f59e0b', textX: 660, textY: 340, material: 'Rubber Tile: 11 sq yds | Metal shelving: 8 sets' }
    ],
    walls: [
      'M 20,20 L 780,20 L 780,480 L 20,480 Z', // perimeter
      'M 550,20 L 550,480', // fitting & stock partition
      'M 550,220 L 780,220' // fitting / stock horizontal divider
    ],
    fixtures: [
      { type: 'door', label: 'Boutique Entry', x: 30, y: 250, r: 25 },
      { type: 'door', label: 'Fitting Door', x: 550, y: 120, r: 15 },
      { type: 'door', label: 'Stock Door', x: 550, y: 350, r: 15 },
      { type: 'window', label: 'Display Window 1', x: 20, y: 80, w: 4, h: 80 },
      { type: 'window', label: 'Display Window 2', x: 20, y: 340, w: 4, h: 80 },
      { type: 'window', label: 'Side Window 1', x: 200, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Side Window 2', x: 400, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Back Window', x: 780, y: 250, w: 4, h: 30 }
    ],
    materials: [
      { name: 'Polished Concrete Sealer', qty: '450 SF' },
      { name: 'High-pile Velvet Carpet', qty: '11 Sq Yds' },
      { name: 'Storage Rubber Flooring', qty: '11 Sq Yds' },
      { name: '1/2" Gypsum Board (4x8)', qty: '75 Sheets' },
      { name: '25ga 3-5/8" Metal Studs (10\')', qty: '95 Pcs' },
      { name: 'Single Leaf Glass Entrances', qty: '1 Set' },
      { name: 'Flush Wood Passage Doors', qty: '2 Sets' },
      { name: 'Heavy Commercial Storefront Glass', qty: '5 Units' }
    ]
  },
  duplex: {
    title: 'Duplex Residential Home (Plan D-577)',
    imageUrl: './d-577-page-4.png',
    totalArea: 2349,
    linearWalls: 820,
    doors: 12,
    windows: 16,
    rooms: [
      { id: 'livingA', name: 'Unit A - Living Room', area: 320, path: 'M 100,80 L 220,80 L 220,240 L 100,240 Z', color: 'rgba(99, 102, 241, 0.25)', border: '#6366f1', textX: 160, textY: 160, material: 'Hardwood: 35 sq yds | Baseboard: 64 LF' },
      { id: 'bedA', name: 'Unit A - Bedroom 1', area: 210, path: 'M 220,80 L 340,80 L 340,240 L 220,240 Z', color: 'rgba(6, 182, 212, 0.25)', border: '#06b6d4', textX: 280, textY: 160, material: 'Carpet: 23 sq yds | Baseboard: 55 LF' },
      { id: 'kitchenA', name: 'Unit A - Kitchen', area: 180, path: 'M 100,240 L 220,240 L 220,380 L 100,380 Z', color: 'rgba(16, 185, 129, 0.25)', border: '#10b981', textX: 160, textY: 310, material: 'Vinyl plank: 20 sq yds | Cabinets: 12 LF' },
      { id: 'diningA', name: 'Unit A - Dining', area: 150, path: 'M 220,240 L 340,240 L 340,380 L 220,380 Z', color: 'rgba(245, 158, 11, 0.25)', border: '#f59e0b', textX: 280, textY: 310, material: 'Hardwood: 16 sq yds | Crown molding: 48 LF' },
      { id: 'livingB', name: 'Unit B - Living Room', area: 320, path: 'M 580,80 L 700,80 L 700,240 L 580,240 Z', color: 'rgba(99, 102, 241, 0.25)', border: '#6366f1', textX: 640, textY: 160, material: 'Hardwood: 35 sq yds | Baseboard: 64 LF' },
      { id: 'bedB', name: 'Unit B - Bedroom 1', area: 210, path: 'M 460,80 L 580,80 L 580,240 L 460,240 Z', color: 'rgba(6, 182, 212, 0.25)', border: '#06b6d4', textX: 520, textY: 160, material: 'Carpet: 23 sq yds | Baseboard: 55 LF' },
      { id: 'kitchenB', name: 'Unit B - Kitchen', area: 180, path: 'M 580,240 L 700,240 L 700,380 L 580,380 Z', color: 'rgba(16, 185, 129, 0.25)', border: '#10b981', textX: 640, textY: 310, material: 'Vinyl plank: 20 sq yds | Cabinets: 12 LF' },
      { id: 'diningB', name: 'Unit B - Dining', area: 150, path: 'M 460,240 L 580,240 L 580,380 L 460,380 Z', color: 'rgba(245, 158, 11, 0.25)', border: '#f59e0b', textX: 520, textY: 310, material: 'Hardwood: 16 sq yds | Crown molding: 48 LF' }
    ],
    walls: [
      'M 90,70 L 350,70 L 350,380 L 90,380 Z',
      'M 450,70 L 710,70 L 710,380 L 450,380 Z',
      'M 220,70 L 220,380',
      'M 90,240 L 350,240',
      'M 580,70 L 580,380',
      'M 450,240 L 710,240'
    ],
    fixtures: [
      { type: 'door', label: 'Unit A Entry', x: 90, y: 160, r: 15 },
      { type: 'door', label: 'Unit A Bed 1', x: 220, y: 120, r: 15 },
      { type: 'door', label: 'Unit A Kitchen', x: 160, y: 240, r: 15 },
      { type: 'door', label: 'Unit A Deck', x: 280, y: 380, r: 15 },
      { type: 'door', label: 'Unit B Entry', x: 710, y: 160, r: 15 },
      { type: 'door', label: 'Unit B Bed 1', x: 580, y: 120, r: 15 },
      { type: 'door', label: 'Unit B Kitchen', x: 640, y: 240, r: 15 },
      { type: 'door', label: 'Unit B Deck', x: 520, y: 380, r: 15 },
      { type: 'window', label: 'Unit A Window 1', x: 150, y: 70, w: 40, h: 4 },
      { type: 'window', label: 'Unit A Window 2', x: 280, y: 70, w: 40, h: 4 },
      { type: 'window', label: 'Unit A Window 3', x: 90, y: 300, w: 4, h: 40 },
      { type: 'window', label: 'Unit B Window 1', x: 610, y: 70, w: 40, h: 4 },
      { type: 'window', label: 'Unit B Window 2', x: 480, y: 70, w: 40, h: 4 },
      { type: 'window', label: 'Unit B Window 3', x: 710, y: 300, w: 4, h: 40 }
    ],
    materials: [
      { name: 'Hardwood Flooring Finish', qty: '100 Sq Yds' },
      { name: 'Plush Bedroom Carpeting', qty: '46 Sq Yds' },
      { name: 'Vinyl Plank Flooring Finish', qty: '40 Sq Yds' },
      { name: 'Composition Asphalt Shingles', qty: '28 Sqs' },
      { name: 'Fiber Cement Lap Siding', qty: '34 Sqs' },
      { name: 'Type X 5/8" Drywall (4x12)', qty: '480 Sheets' },
      { name: '2x6 Timber Studs (8\' framing)', qty: '620 Pcs' },
      { name: 'Double Pane Insulated Windows', qty: '16 Sets' },
      { name: 'Solid Core Timber Passage Doors', qty: '12 Sets' }
    ]
  }
};

// 2. Global State Variables
let currentBlueprint = BLUEPRINTS.office;
let currentEngine = 'togal';
let currentLayer = 'all';
let scanAnimationActive = false;
let canvasZoom = 1;
let currentStepIndex = 0;
const quizAnswers = {};
let radarActiveId = 'togal';
let radarCompareId = 'stack';
let customBlueprintDataUrl = null;

// Enhancements state variables
let currentScenario = 'A';
const scenarioStates = {
  A: {
    metalStuds: 8.50,
    drywall: 16.50,
    flooring: 4.50,
    labor: 65.00,
    region: 'national',
    csi: 'division',
    floorCount: 1,
    ceilingHeight: 10.0,
    studSpacing: 16
  },
  B: {
    metalStuds: 12.00,
    drywall: 22.00,
    flooring: 7.50,
    labor: 85.00,
    region: 'chicago',
    csi: 'detailed',
    floorCount: 1,
    ceilingHeight: 10.0,
    studSpacing: 16
  }
};

let activeMarkupMode = 'select'; // default tool mode: 'select', 'area', 'point'
let currentPolygonPoints = [];
const manualMarkups = []; // array of custom manual markup records

// Selection & Dragging state (Bluebeam-style)
let selectedMarkup = null;      // { type: 'room'|'manual-area'|'manual-point'|'fixture', id, element }
let activeDragHandle = null;    // index of handle being dragged (number)
let isDraggingShape = false;    // boolean indicating if we are moving the entire shape
let shapeDragStartOffset = null; // offset between mouse and shape centroid / position



// 3. Document Selectors & Events
document.addEventListener('DOMContentLoaded', () => {
  initDirectory();
  initSimulator();
  initQuiz();
  initROI();
  initMatrix();
  initAssemblyConsole();
  initRadarChart();
  setupSmoothScrolling();
  initPropertiesCardListeners();
});

// 4. Smooth Scroll & Navigation State
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetId === '#hero' ? 0 : targetElement.offsetTop - 70,
          behavior: 'smooth'
        });

        // Set active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const navItem = document.getElementById(`nav-item-${targetId.substring(1)}`);
        if (navItem) navItem.classList.add('active');
      }
    });
  });

  // Track scroll position to update active nav link
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    const sections = ['simulator', 'directory', 'matcher', 'roi-calculator', 'matrix'];
    
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop - 80;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          const navItem = document.getElementById(`nav-item-${sectionId === 'roi-calculator' ? 'roi' : sectionId}`);
          if (navItem) navItem.classList.add('active');
          break;
        }
      }
    }
  });

  // Handle footer filter links redirecting to product directory
  document.querySelectorAll('.app-footer ul a').forEach(link => {
    link.addEventListener('click', (e) => {
      const filterCat = link.getAttribute('data-filter');
      if (filterCat) {
        const filterBtn = document.querySelector(`.filter-btn[data-category="${filterCat}"]`);
        if (filterBtn) filterBtn.click();
      }
    });
  });
}

// 5. Product Directory Engine
function initDirectory() {
  const container = document.getElementById('product-cards-container');
  const searchInput = document.getElementById('directory-search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderCards(filteredProducts) {
    if (!container) return;
    container.innerHTML = '';
    
    if (filteredProducts.length === 0) {
      container.innerHTML = `
        <div class="empty-search-message" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
          <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">No platforms matched your criteria</h4>
          <p style="color: var(--text-muted);">Try adjusting your search terms or filters.</p>
        </div>
      `;
      return;
    }

    filteredProducts.forEach(prod => {
      const card = document.createElement('article');
      card.className = 'product-card glass-card';
      card.setAttribute('data-category', prod.category);
      card.id = `prod-card-${prod.id}`;

      // Build pros
      const prosHTML = prod.pros.map(pro => `
        <div class="list-item">
          <svg class="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${pro}</span>
        </div>
      `).join('');

      // Build cons
      const consHTML = prod.cons.map(con => `
        <div class="list-item">
          <svg class="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          <span>${con}</span>
        </div>
      `).join('');

      card.innerHTML = `
        <div class="card-header-top">
          <div class="product-logo-container">
            <div class="product-logo-fallback">${prod.logoText}</div>
            <span class="workflow-badge">${prod.categoryLabel}</span>
          </div>
        </div>
        <h3 class="product-name">${prod.name}</h3>
        <p class="product-desc">${prod.description}</p>
        
        <div class="product-specs">
          <div class="spec-item">
            <span class="spec-label">AI Takeoff Speed</span>
            <span class="spec-val">${prod.specs.speed}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Deployment</span>
            <span class="spec-val">${prod.specs.deployment}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Pricing Model</span>
            <span class="spec-val">${prod.specs.pricingModel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Target Audience</span>
            <span class="spec-val">${prod.specs.target}</span>
          </div>
        </div>

        <div class="pros-cons">
          <div class="pro-list">
            <span class="list-header">Pros / Workflow Strengths</span>
            ${prosHTML}
          </div>
          <div class="con-list">
            <span class="list-header">Trade-offs / Limitations</span>
            ${consHTML}
          </div>
        </div>

        <div class="card-footer">
          <div class="price-box">
            <span class="price-label">Pricing Level</span>
            <span class="price-value">${prod.pricing}</span>
          </div>
          <a href="${prod.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" id="btn-visit-${prod.id}">Visit Website</a>
        </div>
      `;

      container.appendChild(card);
    });
  }

  function filterProducts() {
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-category');
    const query = searchInput.value.toLowerCase().trim();

    const filtered = PRODUCTS.filter(prod => {
      const matchesCategory = activeFilter === 'all' || prod.category === activeFilter;
      const matchesSearch = prod.name.toLowerCase().includes(query) || 
                            prod.tagline.toLowerCase().includes(query) || 
                            prod.description.toLowerCase().includes(query) || 
                            prod.specs.target.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    renderCards(filtered);
  }

  // Bind filter events
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts();
    });
  });

  // Bind search event
  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }

  // Initial render
  renderCards(PRODUCTS);
}

// 6. Interactive Takeoff Simulator Core
function initSimulator() {
  const selectBlueprint = document.getElementById('select-blueprint');
  const selectEngine = document.getElementById('select-engine');
  const btnRun = document.getElementById('btn-run-takeoff');
  const overlay = document.getElementById('canvas-prompt-overlay');
  const indicator = document.getElementById('simulator-status-indicator');
  const engineText = document.getElementById('canvas-blueprint-engine');
  const titleText = document.getElementById('canvas-blueprint-title');
  const statsPanel = document.getElementById('simulator-stats-panel');
  
  // Stats readouts
  const statArea = document.getElementById('stat-total-area');
  const statWalls = document.getElementById('stat-linear-walls');
  const statDoors = document.getElementById('stat-doors-count');
  const statWindows = document.getElementById('stat-windows-count');
  const materialsList = document.getElementById('material-estimates-list');

  // Zoom controls
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnReset = document.getElementById('btn-reset-canvas');
  const svgEl = document.getElementById('blueprint-svg');

  if (!btnRun) return;

  // Initialize Blueprint view inside canvas
  drawBlueprintStatic();

  // Listeners
  selectBlueprint.addEventListener('change', (e) => {
    if (e.target.value === 'custom') {
      const container = document.getElementById('custom-file-container');
      if (container) container.style.display = 'block';
      if (customBlueprintDataUrl) {
        currentBlueprint = BLUEPRINTS.custom;
        titleText.textContent = currentBlueprint.title;
        resetSimulatorState();
        drawBlueprintStatic();
      } else {
        titleText.textContent = "Upload Custom Blueprint";
        currentBlueprint = null;
        resetSimulatorState();
        drawCustomBlueprintPlaceholder();
      }
    } else {
      const container = document.getElementById('custom-file-container');
      if (container) container.style.display = 'none';
      currentBlueprint = BLUEPRINTS[e.target.value];
      titleText.textContent = currentBlueprint.title;
      resetSimulatorState();
      drawBlueprintStatic();
    }
    updateCostEstimates();
  });

  selectEngine.addEventListener('change', (e) => {
    currentEngine = e.target.value;
  });

  // Radios layer selector
  document.querySelectorAll('input[name="takeoff-layer"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.querySelectorAll('.layer-radio-card').forEach(card => card.classList.remove('active'));
      e.target.closest('.layer-radio-card').classList.add('active');
      currentLayer = e.target.value;
      
      // If takeoff is completed, update overlay display immediately
      const isCompleted = indicator.classList.contains('completed');
      if (isCompleted) {
        applyLayerFilter();
      }
    });
  });

  // Zoom handlers
  btnZoomIn.addEventListener('click', () => {
    canvasZoom = Math.min(canvasZoom + 0.15, 2.5);
    svgEl.style.transform = `scale(${canvasZoom})`;
  });

  btnZoomOut.addEventListener('click', () => {
    canvasZoom = Math.max(canvasZoom - 0.15, 0.7);
    svgEl.style.transform = `scale(${canvasZoom})`;
  });

  btnReset.addEventListener('click', () => {
    canvasZoom = 1;
    svgEl.style.transform = 'scale(1)';
  });

  // Vector Markup Toolset Buttons & Interactions
  const btnMarkupSelect = document.getElementById('btn-markup-select');
  const btnMarkupArea = document.getElementById('btn-markup-area');
  const btnMarkupPoint = document.getElementById('btn-markup-point');
  const btnMarkupClear = document.getElementById('btn-markup-clear');

  function updateMarkupButtonStates() {
    const container = document.getElementById('blueprint-canvas-container');
    [btnMarkupSelect, btnMarkupArea, btnMarkupPoint].forEach(btn => {
      if (!btn) return;
      btn.classList.remove('active');
      btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      btn.style.boxShadow = 'none';
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-muted)';
    });

    if (container) {
      container.classList.remove('tool-select');
    }

    if (activeMarkupMode === 'select' && btnMarkupSelect) {
      btnMarkupSelect.classList.add('active');
      btnMarkupSelect.style.borderColor = 'var(--cyan)';
      btnMarkupSelect.style.boxShadow = '0 0 10px rgba(6, 182, 212, 0.3)';
      btnMarkupSelect.style.background = 'rgba(6, 182, 212, 0.1)';
      btnMarkupSelect.style.color = '#ffffff';
      if (container) container.classList.add('tool-select');
    } else if (activeMarkupMode === 'area' && btnMarkupArea) {
      btnMarkupArea.classList.add('active');
      btnMarkupArea.style.borderColor = 'var(--emerald)';
      btnMarkupArea.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.3)';
      btnMarkupArea.style.background = 'rgba(16, 185, 129, 0.1)';
      btnMarkupArea.style.color = '#ffffff';
    } else if (activeMarkupMode === 'point' && btnMarkupPoint) {
      btnMarkupPoint.classList.add('active');
      btnMarkupPoint.style.borderColor = 'var(--emerald)';
      btnMarkupPoint.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.3)';
      btnMarkupPoint.style.background = 'rgba(16, 185, 129, 0.1)';
      btnMarkupPoint.style.color = '#ffffff';
    }

    if (activeMarkupMode && activeMarkupMode !== 'select') {
      svgEl.classList.add('drawing-mode-active');
      svgEl.style.cursor = 'crosshair';
      deselectMarkup(); // Clear selection when drawing
    } else if (activeMarkupMode === 'select') {
      svgEl.classList.remove('drawing-mode-active');
      svgEl.style.cursor = 'default';
    } else {
      svgEl.classList.remove('drawing-mode-active');
      svgEl.style.cursor = 'default';
      deselectMarkup();
    }
    
    // Cleanup temporary drawing elements
    document.querySelectorAll('.temp-markup-node').forEach(el => el.remove());
    const tempPoly = document.getElementById('temp-markup-poly');
    if (tempPoly) tempPoly.remove();
    currentPolygonPoints = [];
  }

  // Call it initially to set up correct defaults
  setTimeout(updateMarkupButtonStates, 100);

  if (btnMarkupSelect) {
    btnMarkupSelect.addEventListener('click', () => {
      activeMarkupMode = (activeMarkupMode === 'select') ? null : 'select';
      updateMarkupButtonStates();
    });
  }

  if (btnMarkupArea) {
    btnMarkupArea.addEventListener('click', () => {
      activeMarkupMode = (activeMarkupMode === 'area') ? null : 'area';
      updateMarkupButtonStates();
    });
  }

  if (btnMarkupPoint) {
    btnMarkupPoint.addEventListener('click', () => {
      activeMarkupMode = (activeMarkupMode === 'point') ? null : 'point';
      updateMarkupButtonStates();
    });
  }

  if (btnMarkupClear) {
    btnMarkupClear.addEventListener('click', () => {
      activeMarkupMode = 'select'; // revert to select
      updateMarkupButtonStates();
      
      // Clear manual markup SVG nodes
      document.querySelectorAll('.manual-markup-item').forEach(el => el.remove());
      manualMarkups.length = 0; // Clear array
      
      // Hide manual legend item
      const manualLegend = document.getElementById('legend-manual-item');
      if (manualLegend) manualLegend.style.display = 'none';

      deselectMarkup();
      updateCostEstimates();
    });
  }

  // SVG Drawing Click Handler
  svgEl.addEventListener('click', (e) => {
    if (!activeMarkupMode || activeMarkupMode === 'select') return;

    // Translate coordinates to SVG space
    const coords = getSvgCoords(e, svgEl);

    if (activeMarkupMode === 'point') {
      const newMarkup = {
        id: 'markup-' + Date.now(),
        type: 'point',
        x: coords.x,
        y: coords.y,
        name: 'Manual Fixture Count'
      };
      manualMarkups.push(newMarkup);

      // Draw point circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', coords.x);
      circle.setAttribute('cy', coords.y);
      circle.setAttribute('r', '8');
      circle.setAttribute('fill', 'var(--emerald)');
      circle.setAttribute('stroke', '#ffffff');
      circle.setAttribute('stroke-width', '2');
      circle.setAttribute('class', 'manual-markup-item manual-markup-point active-takeoff-layer');
      circle.setAttribute('data-layer', 'manual');
      circle.setAttribute('id', newMarkup.id);

      // Pulse animation effect
      const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      animate.setAttribute('attributeName', 'r');
      animate.setAttribute('values', '8;14;8');
      animate.setAttribute('dur', '1.5s');
      animate.setAttribute('repeatCount', 'indefinite');
      circle.appendChild(animate);

      // Dynamic tooltip hover details
      const tooltip = document.getElementById('canvas-html-tooltip');
      circle.addEventListener('mousemove', (ev) => {
        const containerRect = document.getElementById('blueprint-canvas-container').getBoundingClientRect();
        const mouseX = ev.clientX - containerRect.left + 15;
        const mouseY = ev.clientY - containerRect.top + 15;
        tooltip.style.left = `${mouseX}px`;
        tooltip.style.top = `${mouseY}px`;
        tooltip.style.opacity = '1';
        
        const currentMarkup = manualMarkups.find(m => m.id === newMarkup.id);
        const name = (currentMarkup && currentMarkup.name) ? currentMarkup.name : 'Manual Fixture Count';
        
        tooltip.innerHTML = `
          <h5>${name}</h5>
          <p><span class="label">Location:</span> <strong>X:${Math.round(circle.getAttribute('cx'))}, Y:${Math.round(circle.getAttribute('cy'))}</strong></p>
        `;
      });
      circle.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });

      document.getElementById('ai-highlights-group').appendChild(circle);

      // Show manual markup legend item
      const manualLegend = document.getElementById('legend-manual-item');
      if (manualLegend) manualLegend.style.display = 'flex';

      updateCostEstimates();
    } else if (activeMarkupMode === 'area') {
      // Check closing first
      if (currentPolygonPoints.length > 2) {
        const firstPt = currentPolygonPoints[0];
        const dist = Math.sqrt((coords.x - firstPt.x) ** 2 + (coords.y - firstPt.y) ** 2);
        if (dist < 15) {
          closePolygonMarkup();
          return;
        }
      }

      currentPolygonPoints.push(coords);

      // Draw temporary node marker
      const tempCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      tempCircle.setAttribute('cx', coords.x);
      tempCircle.setAttribute('cy', coords.y);
      tempCircle.setAttribute('r', '5');
      tempCircle.setAttribute('fill', 'var(--emerald)');
      tempCircle.setAttribute('stroke', '#ffffff');
      tempCircle.setAttribute('stroke-width', '1.5');
      tempCircle.setAttribute('class', 'temp-markup-node');
      document.getElementById('ai-highlights-group').appendChild(tempCircle);

      // Draw temporary line connection
      let tempPoly = document.getElementById('temp-markup-poly');
      if (!tempPoly) {
        tempPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        tempPoly.setAttribute('id', 'temp-markup-poly');
        tempPoly.setAttribute('stroke', 'var(--emerald)');
        tempPoly.setAttribute('stroke-width', '2.5');
        tempPoly.setAttribute('fill', 'none');
        document.getElementById('ai-highlights-group').appendChild(tempPoly);
      }
      const pointsStr = currentPolygonPoints.map(p => `${p.x},${p.y}`).join(' ');
      tempPoly.setAttribute('points', pointsStr);
    }
  });

  // SVG Mouse Down Delegation for Selecting and Dragging (Bluebeam Style)
  svgEl.addEventListener('mousedown', (e) => {
    if (activeMarkupMode !== 'select') return;

    const target = e.target;
    let isSelectable = false;
    let type = '';
    let id = '';
    
    if (target.classList.contains('blueprint-room')) {
      isSelectable = true;
      type = 'room';
      id = target.getAttribute('data-id');
    } else if (target.classList.contains('manual-markup-polygon')) {
      isSelectable = true;
      type = 'manual-area';
      id = target.getAttribute('id');
    } else if (target.classList.contains('manual-markup-point')) {
      isSelectable = true;
      type = 'manual-point';
      id = target.getAttribute('id');
    } else if (target.classList.contains('blueprint-fixture')) {
      isSelectable = true;
      type = 'fixture';
      id = target.getAttribute('id') || 'fixture-' + Date.now();
      if (!target.getAttribute('id')) target.setAttribute('id', id);
    }
    
    if (isSelectable) {
      e.stopPropagation();
      selectMarkup(type, id, target);
      
      const mouseCoords = getSvgCoords(e, svgEl);
      if (type === 'room') {
        const room = currentBlueprint.rooms.find(r => r.id === id);
        if (room) {
          const points = parseSvgPathPoints(room.path);
          isDraggingShape = true;
          shapeDragStartOffset = points.map(p => ({ x: p.x - mouseCoords.x, y: p.y - mouseCoords.y }));
        }
      } else if (type === 'manual-area') {
        const markup = manualMarkups.find(m => m.id === id);
        if (markup) {
          isDraggingShape = true;
          shapeDragStartOffset = markup.points.map(p => ({ x: p.x - mouseCoords.x, y: p.y - mouseCoords.y }));
        }
      } else if (type === 'manual-point' || type === 'fixture') {
        const cx = parseFloat(target.getAttribute('cx'));
        const cy = parseFloat(target.getAttribute('cy'));
        isDraggingShape = true;
        shapeDragStartOffset = { x: cx - mouseCoords.x, y: cy - mouseCoords.y };
      }
    } else {
      if (!target.classList.contains('markup-drag-handle') && !target.closest('#canvas-properties-card')) {
        deselectMarkup();
      }
    }
  });

  // Window-level mouse movements for resizing/resizing active dragged markup
  window.addEventListener('mousemove', (e) => {
    if (activeDragHandle === null && !isDraggingShape) return;
    if (!selectedMarkup) return;

    const mouseCoords = getSvgCoords(e, svgEl);
    const newX = Math.max(10, Math.min(790, mouseCoords.x));
    const newY = Math.max(10, Math.min(490, mouseCoords.y));

    const { type, id, element } = selectedMarkup;
    let activeGuideLines = [];

    if (activeDragHandle !== null) {
      // Dragging a vertex handle
      if (type === 'room') {
        const room = currentBlueprint.rooms.find(r => r.id === id);
        if (room) {
          const points = parseSvgPathPoints(room.path);
          const snap = getSnapCoordinates(mouseCoords.x, mouseCoords.y, points, activeDragHandle, e.shiftKey);
          const newX = Math.max(10, Math.min(790, snap.x));
          const newY = Math.max(10, Math.min(490, snap.y));
          activeGuideLines = snap.guideLines;

          points[activeDragHandle] = { x: newX, y: newY };
          room.path = generateSvgPathFromPoints(points);
          element.setAttribute('d', room.path);
          
          const centroid = getPolygonCentroid(points);
          const labelEl = document.getElementById(`room-label-${room.id}`);
          if (labelEl) {
            labelEl.setAttribute('x', centroid.x);
            labelEl.setAttribute('y', centroid.y);
          }
          
          const newPixelArea = getPolygonArea(points);
          room.area = Math.round(room.originalSF * (newPixelArea / room.originalPixelArea));
          updatePresetWallsAndTotals();
        }
      } else if (type === 'manual-area') {
        const markup = manualMarkups.find(m => m.id === id);
        if (markup) {
          const snap = getSnapCoordinates(mouseCoords.x, mouseCoords.y, markup.points, activeDragHandle, e.shiftKey);
          const newX = Math.max(10, Math.min(790, snap.x));
          const newY = Math.max(10, Math.min(490, snap.y));
          activeGuideLines = snap.guideLines;

          markup.points[activeDragHandle] = { x: newX, y: newY };
          const pointsStr = markup.points.map(p => `${p.x},${p.y}`).join(' ');
          element.setAttribute('points', pointsStr);
          
          const areaVal = getPolygonArea(markup.points);
          const perimeterVal = getPolygonPerimeter(markup.points);
          markup.area = Math.round(areaVal * 0.36);
          markup.perimeter = Math.round(perimeterVal * 0.6);
        }
      }
    } else if (isDraggingShape) {
      // Moving/translating the entire object
      if (type === 'room') {
        const room = currentBlueprint.rooms.find(r => r.id === id);
        if (room) {
          const points = parseSvgPathPoints(room.path);
          const rawRefX = mouseCoords.x + shapeDragStartOffset[0].x;
          const rawRefY = mouseCoords.y + shapeDragStartOffset[0].y;
          const snap = getSnapCoordinates(rawRefX, rawRefY, points, null, e.shiftKey);
          activeGuideLines = snap.guideLines;
          const deltaX = snap.x - rawRefX;
          const deltaY = snap.y - rawRefY;

          const shiftedPoints = points.map((p, idx) => ({
            x: Math.max(10, Math.min(790, mouseCoords.x + shapeDragStartOffset[idx].x + deltaX)),
            y: Math.max(10, Math.min(490, mouseCoords.y + shapeDragStartOffset[idx].y + deltaY))
          }));
          room.path = generateSvgPathFromPoints(shiftedPoints);
          element.setAttribute('d', room.path);
          
          const centroid = getPolygonCentroid(shiftedPoints);
          const labelEl = document.getElementById(`room-label-${room.id}`);
          if (labelEl) {
            labelEl.setAttribute('x', centroid.x);
            labelEl.setAttribute('y', centroid.y);
          }

          const newPixelArea = getPolygonArea(shiftedPoints);
          room.area = Math.round(room.originalSF * (newPixelArea / room.originalPixelArea));
          updatePresetWallsAndTotals();
        }
      } else if (type === 'manual-area') {
        const markup = manualMarkups.find(m => m.id === id);
        if (markup) {
          const rawRefX = mouseCoords.x + shapeDragStartOffset[0].x;
          const rawRefY = mouseCoords.y + shapeDragStartOffset[0].y;
          const snap = getSnapCoordinates(rawRefX, rawRefY, markup.points, null, e.shiftKey);
          activeGuideLines = snap.guideLines;
          const deltaX = snap.x - rawRefX;
          const deltaY = snap.y - rawRefY;

          const shiftedPoints = markup.points.map((p, idx) => ({
            x: Math.max(10, Math.min(790, mouseCoords.x + shapeDragStartOffset[idx].x + deltaX)),
            y: Math.max(10, Math.min(490, mouseCoords.y + shapeDragStartOffset[idx].y + deltaY))
          }));
          markup.points = shiftedPoints;
          const pointsStr = shiftedPoints.map(p => `${p.x},${p.y}`).join(' ');
          element.setAttribute('points', pointsStr);
        }
      } else if (type === 'manual-point') {
        const markup = manualMarkups.find(m => m.id === id);
        if (markup) {
          const rawX = mouseCoords.x + shapeDragStartOffset.x;
          const rawY = mouseCoords.y + shapeDragStartOffset.y;
          const snap = getSnapCoordinates(rawX, rawY, [], null, e.shiftKey);
          activeGuideLines = snap.guideLines;

          const finalX = Math.max(10, Math.min(790, snap.x));
          const finalY = Math.max(10, Math.min(490, snap.y));
          markup.x = finalX;
          markup.y = finalY;
          element.setAttribute('cx', finalX);
          element.setAttribute('cy', finalY);
        }
      } else if (type === 'fixture') {
        const rawX = mouseCoords.x + shapeDragStartOffset.x;
        const rawY = mouseCoords.y + shapeDragStartOffset.y;
        const snap = getSnapCoordinates(rawX, rawY, [], null, e.shiftKey);
        activeGuideLines = snap.guideLines;

        const finalX = Math.max(10, Math.min(790, snap.x));
        const finalY = Math.max(10, Math.min(490, snap.y));
        element.setAttribute('cx', finalX);
        element.setAttribute('cy', finalY);
        
        const matchingFix = findClosestBlueprintFixture(finalX, finalY);
        if (matchingFix) {
          matchingFix.x = finalX;
          matchingFix.y = finalY;
        }
      }
    }

    drawSelectionHandles(activeGuideLines);
    updatePropertiesCardValues();
    updateCostEstimates();
  });

  window.addEventListener('mouseup', () => {
    activeDragHandle = null;
    isDraggingShape = false;
    shapeDragStartOffset = null;
    drawSelectionHandles([]); // clear snap guide lines on mouseup
  });

  // Key bindings helper to finish area with Enter or cancel with Escape
  window.addEventListener('keydown', (e) => {
    if (activeMarkupMode === 'area' && currentPolygonPoints.length > 2) {
      if (e.key === 'Enter') {
        closePolygonMarkup();
      } else if (e.key === 'Escape') {
        activeMarkupMode = null;
        updateMarkupButtonStates();
      }
    }
  });

  function getSvgCoords(e, svgElement) {
    const pt = svgElement.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svgElement.getScreenCTM().inverse());
    return { x: svgP.x, y: svgP.y };
  }


  function closePolygonMarkup() {
    if (currentPolygonPoints.length < 3) return;

    const areaVal = getPolygonArea(currentPolygonPoints);
    const perimeterVal = getPolygonPerimeter(currentPolygonPoints);

    // Physical units scale: 1 px linear = ~0.6 LF, 1 px sq = ~0.36 SF
    const scaledArea = Math.round(areaVal * 0.36);
    const scaledPerimeter = Math.round(perimeterVal * 0.6);

    const newMarkup = {
      id: 'markup-' + Date.now(),
      type: 'area',
      points: [...currentPolygonPoints],
      area: scaledArea,
      perimeter: scaledPerimeter
    };
    manualMarkups.push(newMarkup);

    // Draw solid poly
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    const pointsStr = currentPolygonPoints.map(p => `${p.x},${p.y}`).join(' ');
    poly.setAttribute('points', pointsStr);
    poly.setAttribute('fill', 'rgba(16, 185, 129, 0.25)');
    poly.setAttribute('stroke', 'var(--emerald)');
    poly.setAttribute('stroke-width', '2.5');
    poly.setAttribute('class', 'manual-markup-item manual-markup-polygon active-takeoff-layer');
    poly.setAttribute('data-layer', 'manual');
    poly.setAttribute('id', newMarkup.id);

    // Interactive tooltip hover details
    const tooltip = document.getElementById('canvas-html-tooltip');
    poly.addEventListener('mousemove', (e) => {
      const containerRect = document.getElementById('blueprint-canvas-container').getBoundingClientRect();
      const x = e.clientX - containerRect.left + 15;
      const y = e.clientY - containerRect.top + 15;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
      tooltip.style.opacity = '1';

      const currentMarkup = manualMarkups.find(m => m.id === newMarkup.id);
      const name = (currentMarkup && currentMarkup.name) ? currentMarkup.name : 'Manual Takeoff Area';
      const currentArea = currentMarkup ? currentMarkup.area : scaledArea;
      const currentPerim = currentMarkup ? currentMarkup.perimeter : scaledPerimeter;

      tooltip.innerHTML = `
        <h5>${name}</h5>
        <p><span class="label">Calculated Area:</span> <strong>${currentArea} SF</strong></p>
        <p><span class="label">Perimeter (Wall):</span> <strong>${currentPerim} LF</strong></p>
      `;
    });
    poly.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });

    document.getElementById('ai-highlights-group').appendChild(poly);

    // Cleanup temp elements
    document.querySelectorAll('.temp-markup-node').forEach(el => el.remove());
    const tempPoly = document.getElementById('temp-markup-poly');
    if (tempPoly) tempPoly.remove();

    currentPolygonPoints = [];

    // Show manual markup legend item
    const manualLegend = document.getElementById('legend-manual-item');
    if (manualLegend) manualLegend.style.display = 'flex';

    updateCostEstimates();
  }

  // Legend Hover Isolation Bindings
  const legendItems = document.querySelectorAll('.legend-item');
  legendItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const layerKey = item.getAttribute('data-target-layer');
      isolateCanvasLayer(layerKey);
      item.classList.add('active');
    });
    item.addEventListener('mouseleave', () => {
      resetCanvasIsolation();
      item.classList.remove('active');
    });
  });

  function isolateCanvasLayer(layerKey) {
    const rooms = document.querySelectorAll('.blueprint-room');
    const baseWalls = document.querySelectorAll('.blueprint-wall-base');
    const baseFixtures = document.querySelectorAll('.blueprint-fixture-base, .blueprint-fixture');
    const manualItems = document.querySelectorAll('.manual-markup-item');

    // Dim everything first
    rooms.forEach(el => el.style.opacity = '0.05');
    baseWalls.forEach(el => el.style.opacity = '0.05');
    baseFixtures.forEach(el => el.style.opacity = '0.05');
    manualItems.forEach(el => el.style.opacity = '0.05');

    if (layerKey === 'areas') {
      rooms.forEach(el => {
        el.style.opacity = '1';
        el.style.stroke = 'var(--cyan)';
        el.style.strokeWidth = '3px';
      });
    } else if (layerKey === 'walls') {
      baseWalls.forEach(el => {
        el.style.opacity = '1';
        el.style.stroke = '#3b82f6';
        el.style.strokeWidth = '6px';
      });
    } else if (layerKey === 'counts') {
      baseFixtures.forEach(el => {
        el.style.opacity = '1';
        if (el.tagName.toLowerCase() === 'circle') {
          el.style.r = '12';
          el.style.stroke = '#ffffff';
          el.style.strokeWidth = '2.5px';
        } else {
          el.style.stroke = 'var(--cyan)';
          el.style.strokeWidth = '3px';
        }
      });
    } else if (layerKey === 'manual') {
      manualItems.forEach(el => {
        el.style.opacity = '1';
        el.style.strokeWidth = '3.5px';
      });
    }
  }

  function resetCanvasIsolation() {
    const rooms = document.querySelectorAll('.blueprint-room');
    const baseWalls = document.querySelectorAll('.blueprint-wall-base');
    const baseFixtures = document.querySelectorAll('.blueprint-fixture-base, .blueprint-fixture');
    const manualItems = document.querySelectorAll('.manual-markup-item');

    rooms.forEach(el => {
      el.style.opacity = '';
      el.style.stroke = '';
      el.style.strokeWidth = '';
    });
    baseWalls.forEach(el => {
      el.style.opacity = '';
      el.style.stroke = '';
      el.style.strokeWidth = '';
    });
    baseFixtures.forEach(el => {
      el.style.opacity = '';
      if (el.tagName.toLowerCase() === 'circle') {
        el.style.r = '8';
        el.style.strokeWidth = '';
        el.style.stroke = '';
      } else {
        el.style.stroke = '';
        el.style.strokeWidth = '';
      }
    });
    manualItems.forEach(el => {
      el.style.opacity = '';
      el.style.strokeWidth = '';
    });
  }


  // Run button handler
  btnRun.addEventListener('click', () => {
    if (scanAnimationActive) return;
    
    // Hide startup overlay
    if (overlay) overlay.style.opacity = '0';
    setTimeout(() => { if (overlay) overlay.style.display = 'none'; }, 300);

    runAIAnalysis();
  });

  function resetSimulatorState() {
    indicator.textContent = 'Ready';
    indicator.className = 'status-indicator idle';
    engineText.textContent = 'Engine: Idle';
    statArea.innerHTML = `0 <span class="stat-unit">SF</span>`;
    statWalls.innerHTML = `0 <span class="stat-unit">LF</span>`;
    statDoors.textContent = '0';
    statWindows.textContent = '0';
    materialsList.innerHTML = `<li class="empty-list-msg">Run AI takeoff to generate estimates</li>`;
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
    }
    const scanner = document.getElementById('scanner-line');
    if (scanner) scanner.style.display = 'none';
    
    // Reset schedules tables
    const schedDoorBadge = document.getElementById('sched-door-count-badge');
    const schedWindowBadge = document.getElementById('sched-window-count-badge');
    const doorRows = document.getElementById('sched-door-rows');
    const windowRows = document.getElementById('sched-window-rows');
    const wallRows = document.getElementById('sched-wall-rows');
    if (schedDoorBadge) schedDoorBadge.textContent = '0 items';
    if (schedWindowBadge) schedWindowBadge.textContent = '0 items';
    if (doorRows) doorRows.innerHTML = `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">Run takeoff to populate door schedule</td></tr>`;
    if (windowRows) windowRows.innerHTML = `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">Run takeoff to populate window schedule</td></tr>`;
    if (wallRows) wallRows.innerHTML = `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">Run takeoff to populate partition schedule</td></tr>`;
    
    // Reset enhancements states
    const legend = document.getElementById('canvas-legend');
    if (legend) legend.style.display = 'none';
    const manualLegend = document.getElementById('legend-manual-item');
    if (manualLegend) manualLegend.style.display = 'none';
    
    activeMarkupMode = 'select';
    updateMarkupButtonStates();
    document.querySelectorAll('.manual-markup-item').forEach(el => el.remove());
    manualMarkups.length = 0;
    deselectMarkup();
  }

  function drawBlueprintStatic() {
    const drawingsGroup = document.getElementById('blueprint-drawings-group');
    const highlightsGroup = document.getElementById('ai-highlights-group');
    const tooltipsGroup = document.getElementById('canvas-tooltips-group');
    
    drawingsGroup.innerHTML = '';
    highlightsGroup.innerHTML = '';
    tooltipsGroup.innerHTML = '';

    if (!currentBlueprint) return;

    // Initialize metrics
    initBlueprintOriginalMetrics();

    // If it's a custom blueprint and we have an image data URL, or if the current blueprint has a predefined imageUrl, draw the image
    let bgUrl = null;
    if (selectBlueprint.value === 'custom' && customBlueprintDataUrl) {
      bgUrl = customBlueprintDataUrl;
    } else if (currentBlueprint && currentBlueprint.imageUrl) {
      bgUrl = currentBlueprint.imageUrl;
    }

    if (bgUrl) {
      const imgEl = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      imgEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', bgUrl);
      imgEl.setAttribute('x', '10');
      imgEl.setAttribute('y', '10');
      imgEl.setAttribute('width', '780');
      imgEl.setAttribute('height', '460');
      imgEl.setAttribute('opacity', '0.35'); // Cleaner layout visibility
      drawingsGroup.appendChild(imgEl);
    }

    // Draw walls (in traditional vector grey blueprint style)
    currentBlueprint.walls.forEach(wallPath => {
      const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathEl.setAttribute('d', wallPath);
      pathEl.setAttribute('stroke', '#1e293b');
      pathEl.setAttribute('stroke-width', '4');
      pathEl.setAttribute('fill', 'none');
      pathEl.setAttribute('class', 'blueprint-wall-base');
      drawingsGroup.appendChild(pathEl);
    });

    // Draw raw doors
    currentBlueprint.fixtures.forEach(fix => {
      if (fix.type === 'door') {
        const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        // Simple door swing representation
        const d = `M ${fix.x},${fix.y} A ${fix.r},${fix.r} 0 0 1 ${fix.x + fix.r},${fix.y - fix.r}`;
        pathEl.setAttribute('d', d);
        pathEl.setAttribute('stroke', '#334155');
        pathEl.setAttribute('stroke-width', '1.5');
        pathEl.setAttribute('fill', 'none');
        pathEl.setAttribute('class', 'blueprint-fixture-base');
        drawingsGroup.appendChild(pathEl);

        const lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        lineEl.setAttribute('x1', fix.x);
        lineEl.setAttribute('y1', fix.y);
        lineEl.setAttribute('x2', fix.x);
        lineEl.setAttribute('y2', fix.y - fix.r);
        lineEl.setAttribute('stroke', '#334155');
        lineEl.setAttribute('stroke-width', '1.5');
        drawingsGroup.appendChild(lineEl);
      } else if (fix.type === 'window') {
        const rectEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectEl.setAttribute('x', fix.x);
        rectEl.setAttribute('y', fix.y);
        rectEl.setAttribute('width', fix.w);
        rectEl.setAttribute('height', fix.h);
        rectEl.setAttribute('stroke', '#334155');
        rectEl.setAttribute('stroke-width', '1');
        rectEl.setAttribute('fill', '#090e1a');
        rectEl.setAttribute('class', 'blueprint-fixture-base');
        drawingsGroup.appendChild(rectEl);
      }
    });

    // Add room text placeholders (pre-analysis)
    currentBlueprint.rooms.forEach(room => {
      const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textEl.setAttribute('id', `room-label-${room.id}`);
      textEl.setAttribute('x', room.textX);
      textEl.setAttribute('y', room.textY);
      textEl.setAttribute('text-anchor', 'middle');
      textEl.setAttribute('fill', '#475569');
      textEl.setAttribute('font-size', '11px');
      textEl.setAttribute('font-weight', '500');
      textEl.setAttribute('letter-spacing', '0.02em');
      textEl.textContent = room.name;
      drawingsGroup.appendChild(textEl);
    });
  }

  function runAIAnalysis() {
    if (!currentBlueprint) {
      alert("Please upload a custom blueprint image first!");
      scanAnimationActive = false;
      indicator.textContent = 'Ready';
      indicator.className = 'status-indicator idle';
      if (overlay) {
        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
      }
      return;
    }

    scanAnimationActive = true;
    indicator.textContent = 'Analysing...';
    indicator.className = 'status-indicator scanning';
    engineText.textContent = `Engine: ${selectEngine.options[selectEngine.selectedIndex].text.split(' ')[0]}`;

    // Reset ticks
    statArea.innerHTML = `0 <span class="stat-unit">SF</span>`;
    statWalls.innerHTML = `0 <span class="stat-unit">LF</span>`;
    statDoors.textContent = '0';
    statWindows.textContent = '0';
    materialsList.innerHTML = `<li class="empty-list-msg">Analyzing blueprint layers...</li>`;

    const scanner = document.getElementById('scanner-line');
    scanner.style.display = 'block';
    
    // Clear highlights during analysis
    const highlightsGroup = document.getElementById('ai-highlights-group');
    highlightsGroup.innerHTML = '';

    // Animate scanner line from top (y=10) to bottom (y=490)
    let yPos = 10;
    const speed = 4;
    const targetY = 490;
    
    // Tracks which rooms have been processed during scanner descent
    const activatedRooms = new Set();
    const activatedFixtures = new Set();

    function scanStep() {
      yPos += speed;
      scanner.setAttribute('y1', yPos);
      scanner.setAttribute('y2', yPos);

      // Check room activations
      currentBlueprint.rooms.forEach(room => {
        if (!activatedRooms.has(room.id)) {
          // Approximate room top-boundary check
          const bbox = getApproxBBox(room.path);
          if (yPos >= bbox.yMin) {
            activatedRooms.add(room.id);
            highlightRoom(room);
          }
        }
      });

      // Check fixture activations
      currentBlueprint.fixtures.forEach((fix, index) => {
        if (!activatedFixtures.has(index)) {
          if (yPos >= fix.y) {
            activatedFixtures.add(index);
            highlightFixture(fix);
          }
        }
      });

      if (yPos < targetY) {
        requestAnimationFrame(scanStep);
      } else {
        // Scan complete
        scanner.style.display = 'none';
        scanAnimationActive = false;
        indicator.textContent = 'Takeoff Completed';
        indicator.className = 'status-indicator completed';
        
        // Finalize counts scaled by floors
        const floors = parseInt(document.getElementById('input-floor-count').value) || 1;
        tickValue(statArea, currentBlueprint.totalArea * floors, ' SF');
        tickValue(statWalls, currentBlueprint.linearWalls * floors, ' LF');
        tickValue(statDoors, currentBlueprint.doors * floors, '');
        tickValue(statWindows, currentBlueprint.windows * floors, '');

        renderMaterialsList();
        applyLayerFilter();
        
        const legend = document.getElementById('canvas-legend');
        if (legend) legend.style.display = 'flex';

        // Update regional cost estimates
        updateCostEstimates();
      }
    }

    requestAnimationFrame(scanStep);
  }

  function getApproxBBox(pathStr) {
    // Parse paths simply for coordinates
    const coords = pathStr.match(/[0-9]+/g).map(Number);
    const ys = coords.filter((c, idx) => idx % 2 === 1);
    return {
      yMin: Math.min(...ys),
      yMax: Math.max(...ys)
    };
  }

  function highlightRoom(room) {
    const highlightsGroup = document.getElementById('ai-highlights-group');
    
    // Add filled polygon with fade animation
    const roomPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    roomPath.setAttribute('d', room.path);
    roomPath.setAttribute('fill', room.color);
    roomPath.setAttribute('fill-opacity', '0.25');
    roomPath.setAttribute('stroke', room.border);
    roomPath.setAttribute('stroke-width', '2.5');
    roomPath.setAttribute('class', 'blueprint-room active-takeoff-layer');
    roomPath.setAttribute('data-layer', 'areas');
    roomPath.setAttribute('data-id', room.id);
    roomPath.setAttribute('data-type', 'room');
    roomPath.style.opacity = '0';
    roomPath.style.transition = 'opacity 0.6s ease';
    
    highlightsGroup.appendChild(roomPath);
    
    // Trigger paint layout reflow
    setTimeout(() => { roomPath.style.opacity = '1'; }, 20);

    // Setup interactive tooltip hover triggers
    const tooltip = document.getElementById('canvas-html-tooltip');
    
    roomPath.addEventListener('mousemove', (e) => {
      const containerRect = document.getElementById('blueprint-canvas-container').getBoundingClientRect();
      const x = e.clientX - containerRect.left + 15;
      const y = e.clientY - containerRect.top + 15;
      
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
      tooltip.style.opacity = '1';
      tooltip.innerHTML = `
        <h5>${room.name}</h5>
        <p><span class="label">Measured Area:</span> <strong>${room.area} SF</strong></p>
        <p><span class="label">Primary Materials:</span></p>
        <p style="font-size:0.75rem; color:var(--text-muted);">${room.material}</p>
      `;
    });

    roomPath.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });
  }

  function highlightFixture(fix) {
    const highlightsGroup = document.getElementById('ai-highlights-group');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    
    circle.setAttribute('cx', fix.type === 'door' ? fix.x : fix.x + (fix.w/2));
    circle.setAttribute('cy', fix.type === 'door' ? fix.y : fix.y + (fix.h/2));
    circle.setAttribute('r', '8');
    circle.setAttribute('class', 'blueprint-fixture active-takeoff-layer');
    circle.setAttribute('data-layer', 'counts');
    circle.setAttribute('fill', fix.type === 'door' ? 'var(--cyan)' : 'var(--amber)');
    circle.setAttribute('fill-opacity', '0.8');
    circle.setAttribute('stroke', '#ffffff');
    circle.setAttribute('stroke-width', '1.5');
    circle.style.opacity = '0';
    circle.style.transform = 'scale(0)';
    circle.style.transformOrigin = `${circle.getAttribute('cx')}px ${circle.getAttribute('cy')}px`;
    circle.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    highlightsGroup.appendChild(circle);

    setTimeout(() => {
      circle.style.opacity = '1';
      circle.style.transform = 'scale(1)';
    }, 20);
  }

  function tickValue(element, targetVal, suffix) {
    let startVal = 0;
    const duration = 1200;
    const startTime = performance.now();

    function updateTick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Quadratic out easing
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * targetVal);
      
      element.innerHTML = `${current}<span class="stat-unit">${suffix}</span>`;

      if (progress < 1) {
        requestAnimationFrame(updateTick);
      } else {
        element.innerHTML = `${targetVal}<span class="stat-unit">${suffix}</span>`;
      }
    }
    requestAnimationFrame(updateTick);
  }

  function renderMaterialsList() {
    materialsList.innerHTML = '';
    currentBlueprint.materials.forEach(mat => {
      const li = document.createElement('li');
      li.className = 'material-item';
      const formattedName = formatMaterialName(mat.name, mat.name);
      li.innerHTML = `
        <span class="material-name">${formattedName}</span>
        <span class="material-quantity">${mat.qty}</span>
      `;
      materialsList.appendChild(li);
    });
  }

  function applyLayerFilter() {
    const allHighlights = document.querySelectorAll('.active-takeoff-layer');
    const wallBases = document.querySelectorAll('.blueprint-wall-base');
    const fixtureBases = document.querySelectorAll('.blueprint-fixture-base');

    allHighlights.forEach(el => {
      const layer = el.getAttribute('data-layer');
      if (currentLayer === 'all' || layer === currentLayer) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });

    // Handle traditional plan bases based on layers selected
    wallBases.forEach(el => {
      if (currentLayer === 'all' || currentLayer === 'walls') {
        el.setAttribute('stroke', '#1e293b');
      } else {
        el.setAttribute('stroke', '#0d1527');
      }
    });

    fixtureBases.forEach(el => {
      if (currentLayer === 'all' || currentLayer === 'counts') {
        el.setAttribute('stroke', '#334155');
      } else {
        el.setAttribute('stroke', '#0d1527');
      }
    });
  }

  // Handle custom blueprint file input
  const inputCustomBlueprint = document.getElementById('input-custom-blueprint');
  if (inputCustomBlueprint) {
    inputCustomBlueprint.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleCustomFile(e.target.files[0]);
      }
    });
  }

  // Handle drag and drop on canvas
  const canvasContainer = document.getElementById('blueprint-canvas-container');
  if (canvasContainer) {
    canvasContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (selectBlueprint.value === 'custom') {
        canvasContainer.classList.add('drag-over');
      }
    });

    canvasContainer.addEventListener('dragleave', () => {
      canvasContainer.classList.remove('drag-over');
    });

    canvasContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      canvasContainer.classList.remove('drag-over');
      if (selectBlueprint.value === 'custom' && e.dataTransfer.files.length > 0) {
        handleCustomFile(e.dataTransfer.files[0]);
      }
    });
  }
}

// 7. Workflow Matcher Assessment Quiz
function initQuiz() {
  const steps = document.querySelectorAll('.quiz-step');
  const progressFill = document.getElementById('quiz-progress-fill');
  const btnPrev = document.getElementById('btn-quiz-prev');
  const btnNext = document.getElementById('btn-quiz-next');
  const restartBtn = document.getElementById('btn-quiz-restart');
  const resultsCard = document.getElementById('quiz-recommendation-card');
  const exportBtn = document.getElementById('btn-quiz-export-report');

  if (steps.length === 0) return;

  if (exportBtn) {
    exportBtn.addEventListener('click', handlePdfExport);
  }

  // Bind option clicks
  document.querySelectorAll('.quiz-option-card').forEach(option => {
    option.addEventListener('click', function() {
      const parentStep = this.closest('.quiz-step');
      const questionKey = parentStep.getAttribute('data-question');
      const answerValue = this.getAttribute('data-value');

      // Toggle active states
      parentStep.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');

      // Save answer
      quizAnswers[questionKey] = answerValue;
      
      // Enable next button
      btnNext.disabled = false;
    });
  });

  // Nav buttons
  btnNext.addEventListener('click', () => {
    if (currentStepIndex < steps.length - 2) {
      goToStep(currentStepIndex + 1);
    } else if (currentStepIndex === steps.length - 2) {
      // Calculate and display recommendation
      calculateRecommendation();
      goToStep(steps.length - 1);
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    }
  });

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      // Reset variables
      for (const prop in quizAnswers) {
        if (quizAnswers.hasOwnProperty(prop)) {
          delete quizAnswers[prop];
        }
      }
      document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
      goToStep(0);
    });
  }

  function goToStep(index) {
    steps[currentStepIndex].classList.remove('active');
    currentStepIndex = index;
    steps[currentStepIndex].classList.add('active');

    // Update progress bar
    const progressPct = ((currentStepIndex + 1) / (steps.length - 1)) * 100;
    progressFill.style.width = `${Math.min(progressPct, 100)}%`;

    // Handle button disabled states
    btnPrev.disabled = currentStepIndex === 0;

    // Show/hide bottom bar on results step
    const isResults = currentStepIndex === steps.length - 1;
    document.getElementById('quiz-nav-buttons').style.display = isResults ? 'none' : 'flex';

    if (!isResults) {
      const currentQuestion = steps[currentStepIndex].getAttribute('data-question');
      btnNext.disabled = !quizAnswers[currentQuestion];
    }
  }

  function calculateRecommendation() {
    let recoProduct = PRODUCTS[0]; // default Togal.AI

    const bottleneck = quizAnswers.bottleneck; // takeoff-speed, pricing-estimates, bid-management, drawings-annotations
    const deployment = quizAnswers.deployment; // cloud, desktop
    const database = quizAnswers.database; // integrated-database, takeoff-only
    const scale = quizAnswers.scale; // small-medium, enterprise

    // Logic trees based on choices
    if (bottleneck === 'drawings-annotations') {
      recoProduct = PRODUCTS.find(p => p.id === 'bluebeam') || PRODUCTS[6];
    } else if (deployment === 'desktop') {
      recoProduct = PRODUCTS.find(p => p.id === 'ost') || PRODUCTS[5];
    } else if (bottleneck === 'pricing-estimates' || database === 'integrated-database') {
      if (scale === 'enterprise' || database === 'integrated-database') {
        recoProduct = PRODUCTS.find(p => p.id === 'rsmeans') || PRODUCTS.find(p => p.id === 'stack') || PRODUCTS[0];
      } else {
        recoProduct = PRODUCTS.find(p => p.id === 'quotr') || PRODUCTS[3];
      }
    } else {
      // AI first speed focus
      if (scale === 'small-medium') {
        recoProduct = PRODUCTS.find(p => p.id === 'kreo') || PRODUCTS.find(p => p.id === 'beam') || PRODUCTS[1];
      } else {
        recoProduct = PRODUCTS.find(p => p.id === 'togal') || PRODUCTS[0];
      }
    }

    // Render recommendation panel
    if (!resultsCard) return;

    // Build features grid
    const featuresHTML = recoProduct.pros.map(pro => `
      <div class="reco-feat">
        <svg class="reco-feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${pro}</span>
      </div>
    `).join('');

    resultsCard.innerHTML = `
      <span class="reco-badge">Primary Recommended Match</span>
      <div class="reco-title-row">
        <h4 class="reco-name">${recoProduct.name}</h4>
        <span class="reco-price">${recoProduct.pricing}</span>
      </div>
      <p class="reco-reason">${recoProduct.tagline}. ${recoProduct.description}</p>
      
      <span class="reco-features-title">Why it fits your workflow:</span>
      <div class="reco-features-grid">
        ${featuresHTML}
      </div>

      <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem;">
        <a href="${recoProduct.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" id="btn-reco-visit">Visit Official Website</a>
        <a href="#prod-card-${recoProduct.id}" class="btn btn-secondary btn-sm" id="btn-reco-details">Read Details</a>
      </div>
    `;

    // Bind event for details link
    const detailsLink = document.getElementById('btn-reco-details');
    if (detailsLink) {
      detailsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const targetCard = document.getElementById(`prod-card-${recoProduct.id}`);
        if (targetCard) {
          window.scrollTo({
            top: targetCard.offsetTop - 100,
            behavior: 'smooth'
          });
          targetCard.style.boxShadow = 'var(--shadow-primary)';
          setTimeout(() => { targetCard.style.boxShadow = ''; }, 2000);
        }
      });
    }
  }
}

// 8. ROI Savings & Efficiency Calculator
function initROI() {
  const teamSlider = document.getElementById('input-team-size');
  const takeoffsSlider = document.getElementById('input-takeoffs');
  const manualTimeSlider = document.getElementById('input-manual-time');
  const rateSlider = document.getElementById('input-hourly-rate');

  const valTeam = document.getElementById('val-team-size');
  const valTakeoffs = document.getElementById('val-takeoffs');
  const valManualTime = document.getElementById('val-manual-time');
  const valRate = document.getElementById('val-hourly-rate');

  const outSavedMoney = document.getElementById('roi-saved-money');
  const outSavedHours = document.getElementById('roi-saved-hours');
  const outSavedAnnual = document.getElementById('roi-saved-annual');

  if (!teamSlider) return;

  function calculateROI() {
    const teamSize = Number(teamSlider.value);
    const takeoffsPerMonth = Number(takeoffsSlider.value);
    const hoursPerTakeoff = Number(manualTimeSlider.value);
    const hourlyRate = Number(rateSlider.value);

    // AI averages 80% time reduction
    const aiReductionFactor = 0.8;

    // Totals
    const totalManualHoursMonth = teamSize * takeoffsPerMonth * hoursPerTakeoff;
    const hoursSavedMonth = Math.floor(totalManualHoursMonth * aiReductionFactor);
    const dollarsSavedMonth = Math.floor(hoursSavedMonth * hourlyRate);
    const dollarsSavedAnnual = dollarsSavedMonth * 12;

    // Update Slider readouts
    valTeam.textContent = teamSize;
    valTakeoffs.textContent = takeoffsPerMonth;
    valManualTime.textContent = `${hoursPerTakeoff} hrs`;
    valRate.textContent = `$${hourlyRate}`;

    // Update Output Readouts (with smooth numerical increments on text change)
    outSavedMoney.textContent = `$${dollarsSavedMonth.toLocaleString()}`;
    outSavedHours.innerHTML = `${hoursSavedMonth} <span class="metric-unit">hrs</span>`;
    outSavedAnnual.textContent = `$${dollarsSavedAnnual.toLocaleString()}`;
  }

  // Bind inputs
  [teamSlider, takeoffsSlider, manualTimeSlider, rateSlider].forEach(slider => {
    slider.addEventListener('input', calculateROI);
  });

  // Run initial calc
  calculateROI();
}

// 9. Granular Comparison Matrix table
function initMatrix() {
  const tableBody = document.getElementById('comparison-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = '';
  
  PRODUCTS.forEach(prod => {
    const row = document.createElement('tr');
    
    // Map AI level to badge styles
    let aiBadgeClass = 'level-low';
    let aiAutomationLevel = 'Assisted / Search';
    
    if (prod.category === 'ai-first') {
      aiBadgeClass = 'level-high';
      aiAutomationLevel = 'Fully Automated AI';
    } else if (prod.category === 'end-to-end') {
      aiBadgeClass = 'level-med';
      aiAutomationLevel = 'Assisted + Templates';
    }

    // Has database or pricing?
    const hasPricingDB = prod.id === 'quotr' || prod.id === 'stack' || prod.id === 'ost';
    const isCloud = prod.specs.deployment.includes('Cloud') || prod.specs.deployment.includes('Web');

    row.innerHTML = `
      <td class="td-product-name">${prod.name}</td>
      <td><span class="matrix-badge ${aiBadgeClass}">${aiAutomationLevel}</span></td>
      <td style="font-family:var(--font-sans); font-weight:500;">${prod.pricing}</td>
      <td style="color:var(--text-muted);">${prod.tagline}</td>
      <td style="font-weight:600;">${isCloud ? 'Cloud (SaaS)' : 'Desktop App'}</td>
      <td style="text-align:center;">
        ${hasPricingDB 
          ? `<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>` 
          : `<svg class="icon-cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        }
      </td>
      <td style="text-align:center;">
        ${prod.id !== 'beam'
          ? `<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>` 
          : `<svg class="icon-cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        }
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// 10. Assembly Cost Estimator & Regional Escalator Logic
function initAssemblyConsole() {
  const metalStudsInput = document.getElementById('rate-metal-studs');
  const drywallInput = document.getElementById('rate-drywall');
  const flooringInput = document.getElementById('rate-flooring');
  const laborInput = document.getElementById('rate-labor');
  const providerSelect = document.getElementById('select-cost-provider');
  const regionSelect = document.getElementById('select-mortenson-region');
  const csiSelect = document.getElementById('select-csi-catalog');
  
  const floorCountInput = document.getElementById('input-floor-count');
  const ceilingHeightInput = document.getElementById('input-ceiling-height');
  const studSpacingSelect = document.getElementById('select-stud-spacing');
  
  if (!metalStudsInput) return;
  
  [
    metalStudsInput, drywallInput, flooringInput, laborInput, providerSelect, regionSelect, csiSelect,
    floorCountInput, ceilingHeightInput, studSpacingSelect
  ].forEach(input => {
    if (input) {
      input.addEventListener('change', updateCostEstimates);
      input.addEventListener('input', updateCostEstimates);
    }
  });

  // Quantities vs Schedules & Specs Sidebar Tab Listeners
  const btnTabQty = document.getElementById('btn-tab-qty');
  const btnTabSchedule = document.getElementById('btn-tab-schedule');
  const tabContentQty = document.getElementById('tab-content-qty');
  const tabContentSchedule = document.getElementById('tab-content-schedule');

  if (btnTabQty && btnTabSchedule && tabContentQty && tabContentSchedule) {
    btnTabQty.addEventListener('click', () => {
      btnTabQty.classList.add('active');
      btnTabQty.style.background = 'var(--cyan)';
      btnTabQty.style.color = '#0f172a';
      btnTabSchedule.classList.remove('active');
      btnTabSchedule.style.background = 'transparent';
      btnTabSchedule.style.color = 'var(--text-muted)';
      
      tabContentQty.style.display = 'block';
      tabContentSchedule.style.display = 'none';
    });

    btnTabSchedule.addEventListener('click', () => {
      btnTabSchedule.classList.add('active');
      btnTabSchedule.style.background = 'var(--cyan)';
      btnTabSchedule.style.color = '#0f172a';
      btnTabQty.classList.remove('active');
      btnTabQty.style.background = 'transparent';
      btnTabQty.style.color = 'var(--text-muted)';
      
      tabContentQty.style.display = 'none';
      tabContentSchedule.style.display = 'block';
    });
  }

  // Scenario Tab Listeners
  const btnA = document.getElementById('btn-scenario-a');
  const btnB = document.getElementById('btn-scenario-b');
  if (btnA && btnB) {
    btnA.addEventListener('click', () => {
      if (currentScenario === 'A') return;
      saveScenarioState('B');
      btnA.classList.add('active');
      btnA.style.background = 'var(--cyan)';
      btnA.style.color = '#0f172a';
      btnB.classList.remove('active');
      btnB.style.background = 'transparent';
      btnB.style.color = 'var(--text-muted)';
      currentScenario = 'A';
      loadScenarioState('A');
      updateCostEstimates();
    });

    btnB.addEventListener('click', () => {
      if (currentScenario === 'B') return;
      saveScenarioState('A');
      btnB.classList.add('active');
      btnB.style.background = 'var(--cyan)';
      btnB.style.color = '#0f172a';
      btnA.classList.remove('active');
      btnA.style.background = 'transparent';
      btnA.style.color = 'var(--text-muted)';
      currentScenario = 'B';
      loadScenarioState('B');
      updateCostEstimates();
    });
  }
  
  updateCostEstimates();
}

const csiMappings = {
  // Procurement and General Requirements
  'procurement': { division: 'Division 00 (Procurement and Contracting Requirements)', detailed: '00 11 00 Procurement' },
  'contracting': { division: 'Division 00 (Procurement and Contracting Requirements)', detailed: '00 21 00 Contracting' },
  'general requirements': { division: 'Division 01 (General Requirements)', detailed: '01 10 00 Summary' },
  
  // Facility Construction
  'existing conditions': { division: 'Division 02 (Existing Conditions)', detailed: '02 41 19 Demolition' },
  'concrete': { division: 'Division 03 (Concrete)', detailed: '03 30 00 Cast-in-Place Concrete' },
  'masonry': { division: 'Division 04 (Masonry)', detailed: '04 20 00 Unit Masonry' },
  'metal': { division: 'Division 05 (Metals)', detailed: '05 12 00 Structural Steel Framing' },
  'wood': { division: 'Division 06 (Wood, Plastics, and Composites)', detailed: '06 10 00 Rough Carpentry' },
  'plastics': { division: 'Division 06 (Wood, Plastics, and Composites)', detailed: '06 50 00 Structural Plastics' },
  'composites': { division: 'Division 06 (Wood, Plastics, and Composites)', detailed: '06 60 00 Plastic Composites' },
  'lumber': { division: 'Division 06 (Wood, Plastics, and Composites)', detailed: '06 11 00 Wood Framing' },
  
  'thermal': { division: 'Division 07 (Thermal and Moisture Protection)', detailed: '07 21 00 Thermal Insulation' },
  'moisture': { division: 'Division 07 (Thermal and Moisture Protection)', detailed: '07 10 00 Dampproofing' },
  'insulation': { division: 'Division 07 (Thermal and Moisture Protection)', detailed: '07 21 00 Thermal Insulation' },
  'roofing': { division: 'Division 07 (Thermal and Moisture Protection)', detailed: '07 50 00 Membrane Roofing' },
  
  'door': { division: 'Division 08 (Openings)', detailed: '08 12 00 Door Frames' },
  'window': { division: 'Division 08 (Openings)', detailed: '08 51 00 Metal Windows' },
  'openings': { division: 'Division 08 (Openings)', detailed: '08 10 00 Doors and Frames' },
  'fixtures': { division: 'Division 08 (Openings)', detailed: '08 12 00 Door Frames' },
  
  'finishes': { division: 'Division 09 (Finishes)', detailed: '09 00 00 Finishes' },
  'drywall': { division: 'Division 09 (Finishes)', detailed: '09 29 00 Gypsum Board' },
  'gyp': { division: 'Division 09 (Finishes)', detailed: '09 29 00 Gypsum Board' },
  'gwb': { division: 'Division 09 (Finishes)', detailed: '09 29 00 Gypsum Board' },
  'stud': { division: 'Division 09 (Finishes)', detailed: '09 22 16 Non-Structural Metal Framing' },
  'flooring': { division: 'Division 09 (Finishes)', detailed: '09 60 00 Flooring' },
  'carpet': { division: 'Division 09 (Finishes)', detailed: '09 68 13 Tile Carpeting' },
  'tile': { division: 'Division 09 (Finishes)', detailed: '09 30 00 Tiling' },
  'finish': { division: 'Division 09 (Finishes)', detailed: '09 60 00 Flooring' },
  
  'specialties': { division: 'Division 10 (Specialties)', detailed: '10 00 00 Specialties' },
  'equipment': { division: 'Division 11 (Equipment)', detailed: '11 00 00 Equipment' },
  'furnishings': { division: 'Division 12 (Furnishings)', detailed: '12 00 00 Furnishings' },
  'cabinet': { division: 'Division 12 (Furnishings)', detailed: '12 30 00 Casework' },
  'special construction': { division: 'Division 13 (Special Construction)', detailed: '13 00 00 Special Construction' },
  'conveying': { division: 'Division 14 (Conveying Equipment)', detailed: '14 20 00 Elevators' },
  'elevator': { division: 'Division 14 (Conveying Equipment)', detailed: '14 20 00 Elevators' },
  'escalator': { division: 'Division 14 (Conveying Equipment)', detailed: '14 30 00 Escalators' },
  
  // Facility Services
  'fire suppression': { division: 'Division 21 (Fire Suppression)', detailed: '21 10 00 Water-Based Fire-Suppression' },
  'sprinkler': { division: 'Division 21 (Fire Suppression)', detailed: '21 13 00 Wet-Pipe Sprinkler Systems' },
  'plumbing': { division: 'Division 22 (Plumbing)', detailed: '22 10 00 Plumbing Piping' },
  'wetwall': { division: 'Division 22 (Plumbing)', detailed: '22 40 00 Plumbing Fixtures' },
  'hvac': { division: 'Division 23 (HVAC)', detailed: '23 00 00 Heating, Ventilating, and Air Conditioning' },
  'heating': { division: 'Division 23 (HVAC)', detailed: '23 20 00 HVAC Piping and Pumps' },
  'ventilating': { division: 'Division 23 (HVAC)', detailed: '23 30 00 HVAC Air Distribution' },
  'air conditioning': { division: 'Division 23 (HVAC)', detailed: '23 80 00 Decentralized HVAC Equipment' },
  'automation': { division: 'Division 25 (Integrated Automation)', detailed: '25 50 00 Integrated Automation Control' },
  'electrical': { division: 'Division 26 (Electrical)', detailed: '26 00 00 Electrical' },
  'lighting': { division: 'Division 26 (Electrical)', detailed: '26 51 00 Interior Lighting' },
  'led': { division: 'Division 26 (Electrical)', detailed: '26 51 00 Interior Lighting' },
  'communications': { division: 'Division 27 (Communications)', detailed: '27 00 00 Communications' },
  'security': { division: 'Division 28 (Electronic Safety and Security)', detailed: '28 10 00 Access Control' },
  
  // Site and Infrastructure
  'earthwork': { division: 'Division 31 (Earthwork)', detailed: '31 20 00 Earth Moving' },
  'exterior': { division: 'Division 32 (Exterior Improvements)', detailed: '32 10 00 Bases, Ballasts, and Paving' },
  'utilities': { division: 'Division 33 (Utilities)', detailed: '33 10 00 Water Utility Distribution' },
  'transportation': { division: 'Division 34 (Transportation)', detailed: '34 00 00 Transportation' },
  'waterway': { division: 'Division 35 (Waterway and Marine Construction)', detailed: '35 00 00 Waterway and Marine' },
  
  // Process Equipment
  'process integration': { division: 'Division 40 (Process Integration)', detailed: '40 90 00 Instrumentation' },
  'material processing': { division: 'Division 41 (Material Processing and Handling Equipment)', detailed: '41 20 00 material Processing' },
  'process heating': { division: 'Division 42 (Process Heating, Cooling, and Drying Equipment)', detailed: '42 10 00 Process Heating' },
  'gas and liquid': { division: 'Division 43 (Process Gas and Liquid Handling Equipment)', detailed: '43 10 00 Gas Handling' },
  'pollution': { division: 'Division 44 (Pollution and Waste Control Equipment)', detailed: '44 10 00 Air Pollution Control' },
  'manufacturing': { division: 'Division 45 (Industry-Specific Manufacturing Equipment)', detailed: '45 00 00 Manufacturing Equipment' },
  'wastewater': { division: 'Division 46 (Water and Wastewater Equipment)', detailed: '46 00 00 Water and Wastewater' },
  'power generation': { division: 'Division 48 (Electrical Power Generation)', detailed: '48 10 00 Power Generation' }
};

function formatMaterialName(baseName, typeOrKeyword) {
  const csiSelect = document.getElementById('select-csi-catalog');
  const csiMode = csiSelect ? csiSelect.value : 'division';
  
  if (csiMode === 'none') return baseName;

  const text = (typeOrKeyword || baseName || '').toLowerCase();
  
  // Search for matching keyword in csiMappings
  let match = null;
  for (const key in csiMappings) {
    if (text.includes(key)) {
      match = csiMappings[key];
      break;
    }
  }
  
  // Default match fallback based on standard types if no direct match found
  if (!match) {
    if (text.includes('drywall') || text.includes('gyp') || text.includes('gwb') || text.includes('stud')) {
      match = csiMappings.drywall;
    } else if (text.includes('floor') || text.includes('carpet') || text.includes('tile')) {
      match = csiMappings.flooring;
    } else if (text.includes('door') || text.includes('window') || text.includes('fixture') || text.includes('frame')) {
      match = csiMappings.opening;
    }
  }

  if (match) {
    const prefix = csiMode === 'division' ? match.division : match.detailed;
    return `${prefix} - ${baseName}`;
  }

  return baseName;
}

function saveScenarioState(scen) {
  const metalStudsInput = document.getElementById('rate-metal-studs');
  if (!metalStudsInput) return;
  scenarioStates[scen] = {
    metalStuds: parseFloat(metalStudsInput.value) || 0,
    drywall: parseFloat(document.getElementById('rate-drywall').value) || 0,
    flooring: parseFloat(document.getElementById('rate-flooring').value) || 0,
    labor: parseFloat(document.getElementById('rate-labor').value) || 0,
    region: document.getElementById('select-mortenson-region').value,
    csi: document.getElementById('select-csi-catalog').value,
    floorCount: parseInt(document.getElementById('input-floor-count').value) || 1,
    ceilingHeight: parseFloat(document.getElementById('input-ceiling-height').value) || 10.0,
    studSpacing: parseInt(document.getElementById('select-stud-spacing').value) || 16
  };
}

function loadScenarioState(scen) {
  const state = scenarioStates[scen];
  document.getElementById('rate-metal-studs').value = state.metalStuds.toFixed(2);
  document.getElementById('rate-drywall').value = state.drywall.toFixed(2);
  document.getElementById('rate-flooring').value = state.flooring.toFixed(2);
  document.getElementById('rate-labor').value = state.labor.toFixed(2);
  document.getElementById('select-mortenson-region').value = state.region;
  document.getElementById('select-csi-catalog').value = state.csi;
  document.getElementById('input-floor-count').value = state.floorCount || 1;
  document.getElementById('input-ceiling-height').value = (state.ceilingHeight || 10.0).toFixed(1);
  document.getElementById('select-stud-spacing').value = state.studSpacing || 16;
}

function calculateScenarioCost(scen) {
  const state = scenarioStates[scen];
  if (!state) return 0;

  const rateMetalStuds = state.metalStuds;
  const rateDrywall = state.drywall;
  const rateFlooring = state.flooring;
  const rateLabor = state.labor;
  
  const floors = state.floorCount || 1;
  const ceiling = state.ceilingHeight || 10.0;
  const spacing = state.studSpacing || 16;
  
  const regionSelect = document.getElementById('select-mortenson-region');
  let factor = 1.0;
  if (regionSelect) {
    const opt = Array.from(regionSelect.options).find(o => o.value === state.region);
    if (opt) {
      factor = parseFloat(opt.getAttribute('data-factor')) || 1.0;
    }
  }

  // Aggregate stats (Base + Manual Markups) scaled by floor count
  const manualArea = manualMarkups.reduce((sum, m) => m.type === 'area' ? sum + m.area : sum, 0);
  const manualWalls = manualMarkups.reduce((sum, m) => m.type === 'area' ? sum + m.perimeter : sum, 0);
  const manualDoors = manualMarkups.reduce((sum, m) => m.type === 'point' ? sum + 1 : sum, 0);

  const area = ((currentBlueprint ? currentBlueprint.totalArea : 0) + manualArea) * floors;
  const walls = ((currentBlueprint ? currentBlueprint.linearWalls : 0) + manualWalls) * floors;
  const doors = ((currentBlueprint ? currentBlueprint.doors : 0) + manualDoors) * floors;
  const windows = (currentBlueprint ? currentBlueprint.windows : 0) * floors;

  if (area === 0) return 0;

  // Drywall Assembly calculation:
  const studsCount = Math.ceil((walls * 12) / spacing);
  const drywallSheets = Math.ceil((walls * 2 * ceiling) / 40); // 40 SF per sheet (4' x 10')
  const drywallLaborHours = (walls * 0.12) + (drywallSheets * 0.22);
  const drywallCost = (studsCount * rateMetalStuds) + (drywallSheets * rateDrywall) + (drywallLaborHours * rateLabor);

  // Flooring Assembly calculation:
  const flooringMaterialCost = area * rateFlooring;
  const flooringLaborHours = area * 0.045;
  const flooringCost = flooringMaterialCost + (flooringLaborHours * rateLabor);

  // Fixtures installation calculation:
  const doorCostUnit = 280;
  const windowCostUnit = 380;
  const fixturesMaterial = (doors * doorCostUnit) + (windows * windowCostUnit);
  const fixturesLaborHours = (doors * 2.2) + (windows * 1.6);
  const fixturesCost = fixturesMaterial + (fixturesLaborHours * rateLabor);

  const subtotal = drywallCost + flooringCost + fixturesCost;
  return subtotal * factor;
}

function updateCostEstimates() {
  const rateMetalStuds = parseFloat(document.getElementById('rate-metal-studs').value) || 0;
  const rateDrywall = parseFloat(document.getElementById('rate-drywall').value) || 0;
  const rateFlooring = parseFloat(document.getElementById('rate-flooring').value) || 0;
  const rateLabor = parseFloat(document.getElementById('rate-labor').value) || 0;
  
  const providerSelect = document.getElementById('select-cost-provider');
  const isRSMeans = providerSelect ? providerSelect.value === 'rsmeans' : true;

  const regionSelect = document.getElementById('select-mortenson-region');
  if (!regionSelect) return;
  
  const selectedOption = regionSelect.options[regionSelect.selectedIndex];
  const factor = parseFloat(selectedOption.getAttribute('data-factor')) || 1.0;

  const labelAdjustment = document.getElementById('label-cost-adjustment');
  if (labelAdjustment) {
    labelAdjustment.textContent = isRSMeans ? 'RSMeans Location Factor (CCI):' : 'Mortenson Escalator Multiplier:';
  }

  // Fetch structural spec console variables
  const floors = parseInt(document.getElementById('input-floor-count').value) || 1;
  const ceiling = parseFloat(document.getElementById('input-ceiling-height').value) || 10.0;
  const spacing = parseInt(document.getElementById('select-stud-spacing').value) || 16;

  // Aggregate stats (Base + Manual Markups)
  const manualArea = manualMarkups.reduce((sum, m) => m.type === 'area' ? sum + m.area : sum, 0);
  const manualWalls = manualMarkups.reduce((sum, m) => m.type === 'area' ? sum + m.perimeter : sum, 0);
  const manualDoors = manualMarkups.reduce((sum, m) => m.type === 'point' ? sum + 1 : sum, 0);

  const baseArea = (currentBlueprint ? currentBlueprint.totalArea : 0) + manualArea;
  const baseWalls = (currentBlueprint ? currentBlueprint.linearWalls : 0) + manualWalls;
  const baseDoors = (currentBlueprint ? currentBlueprint.doors : 0) + manualDoors;
  const baseWindows = currentBlueprint ? currentBlueprint.windows : 0;

  const area = baseArea * floors;
  const walls = baseWalls * floors;
  const doors = baseDoors * floors;
  const windows = baseWindows * floors;

  // Update Live Stats Panels if takeoff was completed
  const indicator = document.getElementById('simulator-status-indicator');
  const isCompleted = indicator && indicator.classList.contains('completed');
  if (isCompleted) {
    const statArea = document.getElementById('stat-total-area');
    const statWalls = document.getElementById('stat-linear-walls');
    const statDoors = document.getElementById('stat-doors-count');
    const statWindows = document.getElementById('stat-windows-count');
    if (statArea) statArea.innerHTML = `${area}<span class="stat-unit"> SF</span>`;
    if (statWalls) statWalls.innerHTML = `${walls}<span class="stat-unit"> LF</span>`;
    if (statDoors) statDoors.textContent = doors;
    if (statWindows) statWindows.textContent = windows;
  }

  // Update Specs values feedback
  const schedMultiplier = document.getElementById('sched-multiplier');
  const schedCeiling = document.getElementById('sched-ceiling');
  const schedStudSpacing = document.getElementById('sched-stud-spacing');
  if (schedMultiplier) schedMultiplier.textContent = floors === 1 ? '1 Floor' : `${floors} Floors`;
  if (schedCeiling) schedCeiling.textContent = `${ceiling.toFixed(1)} ft`;
  if (schedStudSpacing) schedStudSpacing.textContent = `${spacing} inches O.C.`;

  // Populate Schedules & Specs
  const schedDoorBadge = document.getElementById('sched-door-count-badge');
  const schedWindowBadge = document.getElementById('sched-window-count-badge');
  const doorRows = document.getElementById('sched-door-rows');
  const windowRows = document.getElementById('sched-window-rows');
  const wallRows = document.getElementById('sched-wall-rows');

  if (isCompleted && area > 0) {
    if (schedDoorBadge) schedDoorBadge.textContent = `${doors} items`;
    if (schedWindowBadge) schedWindowBadge.textContent = `${windows} items`;

    // Doors rows
    const d01Qty = Math.round(doors * 0.7);
    const d02Qty = Math.round(doors * 0.2);
    const d03Qty = Math.max(0, doors - d01Qty - d02Qty);
    let doorHtml = '';
    if (d01Qty > 0) doorHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">D01</td><td style="padding: 0.4rem 0.5rem;">Single Flush Wood Door 3'0"x7'0"</td><td style="padding: 0.4rem 0.5rem; color: var(--text-muted);">Non-Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${d01Qty}</td></tr>`;
    if (d02Qty > 0) doorHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">D02</td><td style="padding: 0.4rem 0.5rem;">Storefront Glass Door 3'0"x7'0"</td><td style="padding: 0.4rem 0.5rem; color: var(--text-muted);">Non-Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${d02Qty}</td></tr>`;
    if (d03Qty > 0) doorHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">D03</td><td style="padding: 0.4rem 0.5rem;">Hollow Metal Door 3'0"x7'0"</td><td style="padding: 0.4rem 0.5rem; color: var(--orange);">90-Min Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${d03Qty}</td></tr>`;
    if (doorRows) doorRows.innerHTML = doorHtml || `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">No doors found</td></tr>`;

    // Windows rows
    const w01Qty = Math.round(windows * 0.8);
    const w02Qty = Math.max(0, windows - w01Qty);
    let windowHtml = '';
    if (w01Qty > 0) windowHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">W01</td><td style="padding: 0.4rem 0.5rem;">Fixed Commercial Window 4'0"x5'0"</td><td style="padding: 0.4rem 0.5rem; color: var(--text-muted);">Non-Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${w01Qty}</td></tr>`;
    if (w02Qty > 0) windowHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">W02</td><td style="padding: 0.4rem 0.5rem;">Clerestory Transom Window 3'0"x2'0"</td><td style="padding: 0.4rem 0.5rem; color: var(--orange);">45-Min Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${w02Qty}</td></tr>`;
    if (windowRows) windowRows.innerHTML = windowHtml || `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">No windows found</td></tr>`;

    // Wall types rows
    const wallA1 = Math.round(walls * 0.6);
    const wallA2 = Math.round(walls * 0.3);
    const wallB1 = Math.max(0, walls - wallA1 - wallA2);
    let wallHtml = '';
    if (wallA1 > 0) wallHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">Type A1</td><td style="padding: 0.4rem 0.5rem;">3-5/8" Studs @ 16" O.C., 1 Layer 5/8" Gyp ea. side</td><td style="padding: 0.4rem 0.5rem; color: var(--emerald);">1-Hour Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${wallA1}</td></tr>`;
    if (wallA2 > 0) wallHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">Type A2</td><td style="padding: 0.4rem 0.5rem;">3-5/8" Studs @ ${spacing}" O.C., 2 Layers 5/8" Gyp ea. side</td><td style="padding: 0.4rem 0.5rem; color: var(--orange);">2-Hour Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${wallA2}</td></tr>`;
    if (wallB1 > 0) wallHtml += `<tr><td style="padding: 0.4rem 0.5rem; color: var(--cyan); font-weight:600;">Type B1</td><td style="padding: 0.4rem 0.5rem;">Double Stud Chase Wall, Sound Attenuation, 2 Layers Gyp</td><td style="padding: 0.4rem 0.5rem; color: var(--orange);">2-Hour Rated</td><td style="padding: 0.4rem 0.5rem; text-align: right; font-weight:600;">${wallB1}</td></tr>`;
    if (wallRows) wallRows.innerHTML = wallHtml || `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">No partition walls</td></tr>`;
  } else {
    if (schedDoorBadge) schedDoorBadge.textContent = '0 items';
    if (schedWindowBadge) schedWindowBadge.textContent = '0 items';
    if (doorRows) doorRows.innerHTML = `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">Run takeoff to populate door schedule</td></tr>`;
    if (windowRows) windowRows.innerHTML = `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">Run takeoff to populate window schedule</td></tr>`;
    if (wallRows) wallRows.innerHTML = `<tr><td colspan="4" style="padding: 0.75rem; text-align: center; color: var(--text-muted);">Run takeoff to populate partition schedule</td></tr>`;
  }

  // Update materials list if takeoff is completed
  if (isCompleted && currentBlueprint) {
    const listEl = document.getElementById('material-estimates-list');
    if (listEl) {
      listEl.innerHTML = '';
      currentBlueprint.materials.forEach(mat => {
        let ratio = 1.0;
        const nameLower = mat.name.toLowerCase();
        
        if (nameLower.includes('stud') || nameLower.includes('drywall') || nameLower.includes('board') || nameLower.includes('wall')) {
          const originalWalls = currentBlueprint.originalLinearWalls || currentBlueprint.linearWalls || 1;
          ratio = walls / (originalWalls * floors);
        } else if (nameLower.includes('carpet') || nameLower.includes('flooring') || nameLower.includes('tile') || nameLower.includes('vinyl') || nameLower.includes('oak') || nameLower.includes('concrete')) {
          const originalArea = currentBlueprint.originalTotalArea || currentBlueprint.totalArea || 1;
          ratio = area / (originalArea * floors);
        } else if (nameLower.includes('door') || nameLower.includes('frame')) {
          const originalDoors = currentBlueprint.originalDoors || currentBlueprint.doors || 1;
          ratio = doors / (originalDoors * floors);
        } else if (nameLower.includes('window') || nameLower.includes('glazing')) {
          const originalWindows = currentBlueprint.originalWindows || currentBlueprint.windows || 1;
          ratio = windows / (originalWindows * floors);
        }

        // Extrapolate multi-floor factor directly since ratio is relative to single floor
        ratio = ratio * floors;

        // Parse number from original qty (e.g. "120 Sheets" -> 120)
        const match = mat.qty.match(/^([\d\.]+)(\s*\D.*)$/);
        let displayQty = mat.qty;
        if (match) {
          const origVal = parseFloat(match[1]);
          const unit = match[2];
          const newVal = Math.max(1, Math.round(origVal * ratio));
          displayQty = `${newVal}${unit}`;
        }

        const li = document.createElement('li');
        li.className = 'material-item';
        const formattedName = formatMaterialName(mat.name, mat.name);
        li.innerHTML = `
          <span class="material-name">${formattedName}</span>
          <span class="material-quantity">${displayQty}</span>
        `;
        listEl.appendChild(li);
      });
    }
  }

  const drywallVal = document.getElementById('calc-cost-drywall');
  const flooringVal = document.getElementById('calc-cost-flooring');
  const fixturesVal = document.getElementById('calc-cost-fixtures');
  const subtotalVal = document.getElementById('calc-cost-subtotal');
  const adjustmentVal = document.getElementById('calc-cost-adjustment');
  const totalVal = document.getElementById('calc-cost-total');

  // Format label text headers with CSI codes
  if (drywallVal && drywallVal.previousElementSibling) {
    drywallVal.previousElementSibling.textContent = formatMaterialName('Drywall Wall Partition Assembly', 'drywall') + ':';
  }
  if (flooringVal && flooringVal.previousElementSibling) {
    flooringVal.previousElementSibling.textContent = formatMaterialName('Flooring Floor Finish Assembly', 'flooring') + ':';
  }
  if (fixturesVal && fixturesVal.previousElementSibling) {
    fixturesVal.previousElementSibling.textContent = formatMaterialName('Fixtures & Frames Installation', 'fixtures') + ':';
  }

  if (area === 0) {
    if (drywallVal) drywallVal.textContent = '$0.00';
    if (flooringVal) flooringVal.textContent = '$0.00';
    if (fixturesVal) fixturesVal.textContent = '$0.00';
    if (subtotalVal) subtotalVal.textContent = '$0.00';
    if (adjustmentVal) adjustmentVal.textContent = '+$0.00';
    if (totalVal) totalVal.textContent = '$0.00';
    
    // Reset comparison bars
    const barA = document.getElementById('bar-scenario-a');
    const barB = document.getElementById('bar-scenario-b');
    const labelA = document.getElementById('label-bar-scenario-a');
    const labelB = document.getElementById('label-bar-scenario-b');
    if (barA) barA.style.width = '0%';
    if (barB) barB.style.width = '0%';
    if (labelA) labelA.textContent = '$0';
    if (labelB) labelB.textContent = '$0';
    return;
  }

  // Drywall Assembly calculation:
  const studsCount = Math.ceil((walls * 12) / spacing);
  const drywallSheets = Math.ceil((walls * 2 * ceiling) / 40); // 40 SF per sheet (4' x 10')
  const drywallLaborHours = (walls * 0.12) + (drywallSheets * 0.22);
  const drywallMaterialCost = (studsCount * rateMetalStuds) + (drywallSheets * rateDrywall);
  const drywallLaborCost = drywallLaborHours * rateLabor;
  const drywallCost = drywallMaterialCost + drywallLaborCost;

  // Flooring Assembly calculation:
  const flooringMaterialCost = area * rateFlooring;
  const flooringLaborHours = area * 0.045;
  const flooringLaborCost = flooringLaborHours * rateLabor;
  const flooringCost = flooringMaterialCost + flooringLaborCost;

  // Fixtures installation calculation:
  const doorCostUnit = 280;
  const windowCostUnit = 380;
  const fixturesMaterial = (doors * doorCostUnit) + (windows * windowCostUnit);
  const fixturesLaborHours = (doors * 2.2) + (windows * 1.6);
  const fixturesLaborCost = fixturesLaborHours * rateLabor;
  const fixturesCost = fixturesMaterial + fixturesLaborCost;

  const matSubtotal = drywallMaterialCost + flooringMaterialCost + fixturesMaterial;
  const laborSubtotal = drywallLaborCost + flooringLaborCost + fixturesLaborCost;
  const equipSubtotal = isRSMeans ? Math.round((matSubtotal + laborSubtotal) * 0.05) : 0;

  const subtotal = matSubtotal + laborSubtotal + equipSubtotal;
  const grandTotal = subtotal * factor;
  const regionalAdjustment = grandTotal - subtotal;

  // Update RSMeans Component Pill Breakdown
  const rsMeansMatVal = document.getElementById('rsmeans-mat-val');
  const rsMeansLaborVal = document.getElementById('rsmeans-labor-val');
  const rsMeansEquipVal = document.getElementById('rsmeans-equip-val');
  const rsMeansBreakdownPill = document.getElementById('rsmeans-cost-breakdown');

  if (rsMeansBreakdownPill) {
    rsMeansBreakdownPill.style.display = isRSMeans ? 'block' : 'none';
  }
  if (rsMeansMatVal) rsMeansMatVal.textContent = `$${Math.round(matSubtotal * factor).toLocaleString()}`;
  if (rsMeansLaborVal) rsMeansLaborVal.textContent = `$${Math.round(laborSubtotal * factor).toLocaleString()}`;
  if (rsMeansEquipVal) rsMeansEquipVal.textContent = `$${Math.round(equipSubtotal * factor).toLocaleString()}`;

  if (drywallVal) drywallVal.textContent = `$${drywallCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  if (flooringVal) flooringVal.textContent = `$${flooringCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  if (fixturesVal) fixturesVal.textContent = `$${fixturesCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  if (subtotalVal) subtotalVal.textContent = `$${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  if (adjustmentVal) adjustmentVal.textContent = `+$${regionalAdjustment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  if (totalVal) totalVal.textContent = `$${grandTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  // Update Scenario Comparison
  saveScenarioState(currentScenario);
  const costA = calculateScenarioCost('A');
  const costB = calculateScenarioCost('B');

  const maxCost = Math.max(costA, costB, 1);
  const pctA = costA > 0 ? (costA / maxCost) * 100 : 0;
  const pctB = costB > 0 ? (costB / maxCost) * 100 : 0;

  const barA = document.getElementById('bar-scenario-a');
  const barB = document.getElementById('bar-scenario-b');
  const labelA = document.getElementById('label-bar-scenario-a');
  const labelB = document.getElementById('label-bar-scenario-b');
  const deltaText = document.getElementById('scenario-delta-text');

  if (barA) barA.style.width = `${pctA}%`;
  if (barB) barB.style.width = `${pctB}%`;
  if (labelA) labelA.textContent = `$${costA.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
  if (labelB) labelB.textContent = `$${costB.toLocaleString(undefined, {maximumFractionDigits: 0})}`;

  if (deltaText) {
    if (costA === 0 && costB === 0) {
      deltaText.textContent = 'A = B';
      deltaText.style.color = 'var(--text-muted)';
    } else if (costA === costB) {
      deltaText.textContent = 'A = B';
      deltaText.style.color = 'var(--cyan)';
    } else if (costA > costB) {
      const diff = costA - costB;
      const savingsPct = Math.round((diff / costA) * 100);
      deltaText.textContent = `B saves ${savingsPct}% (-$${diff.toLocaleString(undefined, {maximumFractionDigits: 0})})`;
      deltaText.style.color = 'var(--emerald)';
    } else {
      const diff = costB - costA;
      const savingsPct = Math.round((diff / costB) * 100);
      deltaText.textContent = `A saves ${savingsPct}% (-$${diff.toLocaleString(undefined, {maximumFractionDigits: 0})})`;
      deltaText.style.color = 'var(--cyan)';
    }
  }
}

// 11. Capabilities Radar Chart Engine
function initRadarChart() {
  const selectorsContainer = document.getElementById('radar-platform-selectors');
  if (!selectorsContainer) return;
  
  selectorsContainer.innerHTML = '';
  
  PRODUCTS.forEach(prod => {
    const btn = document.createElement('button');
    btn.className = `radar-selector-btn ${prod.id === radarActiveId ? 'active' : ''}`;
    btn.textContent = prod.name;
    btn.setAttribute('data-id', prod.id);
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.radar-selector-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      radarActiveId = prod.id;
      drawRadarChart();
    });
    
    selectorsContainer.appendChild(btn);
  });
  
  // Bind hover actions on product cards to temporarily update radar
  PRODUCTS.forEach(prod => {
    const card = document.getElementById(`prod-card-${prod.id}`);
    if (card) {
      card.addEventListener('mouseenter', () => {
        radarActiveId = prod.id;
        drawRadarChart();
        document.querySelectorAll('.radar-selector-btn').forEach(b => {
          if (b.getAttribute('data-id') === prod.id) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      });
      
      card.addEventListener('mouseleave', () => {
        const activeBtn = document.querySelector('.radar-selector-btn.active');
        if (activeBtn) {
          radarActiveId = activeBtn.getAttribute('data-id');
          drawRadarChart();
        } else {
          document.querySelectorAll('.radar-selector-btn').forEach(b => b.classList.remove('active'));
        }
      });
    }
  });
  
  drawRadarChart();
}

function drawRadarChart() {
  const svg = document.getElementById('capabilities-radar-svg');
  if (!svg) return;

  const cx = 200;
  const cy = 200;
  const rMax = 135;
  const numAxes = 5;
  const metrics = [
    { key: 'speed', label: 'Takeoff Speed' },
    { key: 'database', label: 'Cost Database' },
    { key: 'assemblies', label: 'Custom Assemblies' },
    { key: 'bid', label: 'Bid Management' },
    { key: 'report', label: 'Client Reporting' }
  ];

  svg.innerHTML = '';

  // 1. Draw Concentric Grid Rings
  const numRings = 5;
  for (let ring = 1; ring <= numRings; ring++) {
    const r = (ring / numRings) * rMax;
    const ringCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ringCircle.setAttribute('cx', cx);
    ringCircle.setAttribute('cy', cy);
    ringCircle.setAttribute('r', r);
    ringCircle.setAttribute('fill', 'none');
    ringCircle.setAttribute('stroke', 'rgba(255, 255, 255, 0.05)');
    ringCircle.setAttribute('stroke-width', '1');
    svg.appendChild(ringCircle);

    // Ring scale tick label
    const scaleText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    scaleText.setAttribute('x', cx + 5);
    scaleText.setAttribute('y', cy - r + 3);
    scaleText.setAttribute('fill', 'rgba(255, 255, 255, 0.18)');
    scaleText.setAttribute('font-size', '8px');
    scaleText.setAttribute('font-family', 'var(--font-mono)');
    scaleText.textContent = ring * 10;
    svg.appendChild(scaleText);
  }

  // Calculate angles
  const angles = [];
  for (let i = 0; i < numAxes; i++) {
    angles.push(-Math.PI / 2 + i * (2 * Math.PI / numAxes));
  }

  // 2. Draw Axis Lines & Text Labels
  metrics.forEach((m, i) => {
    const angle = angles[i];
    const xEnd = cx + rMax * Math.cos(angle);
    const yEnd = cy + rMax * Math.sin(angle);

    // Draw grid axis line
    const axisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisLine.setAttribute('x1', cx);
    axisLine.setAttribute('y1', cy);
    axisLine.setAttribute('x2', xEnd);
    axisLine.setAttribute('y2', yEnd);
    axisLine.setAttribute('stroke', 'rgba(255, 255, 255, 0.08)');
    axisLine.setAttribute('stroke-width', '1');
    svg.appendChild(axisLine);

    // Draw axis text label
    const labelOffset = 22;
    const xLabel = cx + (rMax + labelOffset) * Math.cos(angle);
    const yLabel = cy + (rMax + labelOffset) * Math.sin(angle);

    const labelText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelText.setAttribute('x', xLabel);
    labelText.setAttribute('y', yLabel + 3);
    labelText.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');
    labelText.setAttribute('font-size', '9px');
    labelText.setAttribute('font-weight', '500');
    labelText.setAttribute('font-family', 'var(--font-sans)');
    
    if (Math.cos(angle) > 0.15) {
      labelText.setAttribute('text-anchor', 'start');
    } else if (Math.cos(angle) < -0.15) {
      labelText.setAttribute('text-anchor', 'end');
    } else {
      labelText.setAttribute('text-anchor', 'middle');
    }
    
    labelText.textContent = m.label;
    svg.appendChild(labelText);
  });

  const active = PRODUCTS.find(p => p.id === radarActiveId) || PRODUCTS[0];
  const compare = PRODUCTS.find(p => p.id === radarCompareId) || PRODUCTS[4];

  // Update metrics list values
  metrics.forEach(m => {
    const scoreVal = active.radarScores[m.key];
    const scoreEl = document.getElementById(`val-r-${m.key}`);
    if (scoreEl) {
      scoreEl.textContent = `${scoreVal}/50`;
    }
  });

  // 3. Draw Compare Polygon (STACK as reference, or chosen compare)
  if (compare && compare.id !== active.id) {
    const comparePoints = metrics.map((m, i) => {
      const score = compare.radarScores[m.key];
      const angle = angles[i];
      const x = cx + (score / 50) * rMax * Math.cos(angle);
      const y = cy + (score / 50) * rMax * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    const comparePolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    comparePolygon.setAttribute('points', comparePoints);
    comparePolygon.setAttribute('fill', 'rgba(99, 102, 241, 0.08)');
    comparePolygon.setAttribute('stroke', 'rgba(99, 102, 241, 0.45)');
    comparePolygon.setAttribute('stroke-width', '1.5');
    comparePolygon.setAttribute('stroke-dasharray', '3,3');
    svg.appendChild(comparePolygon);
  }

  // 4. Draw Active Polygon
  const activePoints = metrics.map((m, i) => {
    const score = active.radarScores[m.key];
    const angle = angles[i];
    const x = cx + (score / 50) * rMax * Math.cos(angle);
    const y = cy + (score / 50) * rMax * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const activePolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  activePolygon.setAttribute('points', activePoints);
  activePolygon.setAttribute('fill', 'rgba(6, 182, 212, 0.25)');
  activePolygon.setAttribute('stroke', '#06b6d4');
  activePolygon.setAttribute('stroke-width', '2');
  activePolygon.style.filter = 'url(#neon-glow)';
  svg.appendChild(activePolygon);

  // 5. Draw Active Points (Circles)
  metrics.forEach((m, i) => {
    const score = active.radarScores[m.key];
    const angle = angles[i];
    const x = cx + (score / 50) * rMax * Math.cos(angle);
    const y = cy + (score / 50) * rMax * Math.sin(angle);

    const pointCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    pointCircle.setAttribute('cx', x);
    pointCircle.setAttribute('cy', y);
    pointCircle.setAttribute('r', '4');
    pointCircle.setAttribute('fill', '#ffffff');
    pointCircle.setAttribute('stroke', '#06b6d4');
    pointCircle.setAttribute('stroke-width', '1.5');
    svg.appendChild(pointCircle);
  });
}

// 12. Dynamic PDF Export Engine
function handlePdfExport() {
  const printHeader = document.createElement('div');
  printHeader.className = 'print-report-header';
  printHeader.style.display = 'none';

  const recoCard = document.getElementById('quiz-recommendation-card');
  const recommendedHtml = recoCard ? recoCard.innerHTML : '<p>No recommendation selected.</p>';

  const savedHours = document.getElementById('roi-saved-hours') ? document.getElementById('roi-saved-hours').innerText.trim() : '0 hrs';
  const savedMoney = document.getElementById('roi-saved-money') ? document.getElementById('roi-saved-money').innerText.trim() : '$0';
  const savedAnnual = document.getElementById('roi-saved-annual') ? document.getElementById('roi-saved-annual').innerText.trim() : '$0';

  const drywallCost = document.getElementById('calc-cost-drywall') ? document.getElementById('calc-cost-drywall').textContent : '$0.00';
  const flooringCost = document.getElementById('calc-cost-flooring') ? document.getElementById('calc-cost-flooring').textContent : '$0.00';
  const fixturesCost = document.getElementById('calc-cost-fixtures') ? document.getElementById('calc-cost-fixtures').textContent : '$0.00';
  const subtotal = document.getElementById('calc-cost-subtotal') ? document.getElementById('calc-cost-subtotal').textContent : '$0.00';
  const regionalAdjustment = document.getElementById('calc-cost-adjustment') ? document.getElementById('calc-cost-adjustment').textContent : '+$0.00';
  const totalCost = document.getElementById('calc-cost-total') ? document.getElementById('calc-cost-total').textContent : '$0.00';
  
  const regionSelect = document.getElementById('select-mortenson-region');
  const selectedRegion = regionSelect ? regionSelect.options[regionSelect.selectedIndex].text : 'National Average';

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  printHeader.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 1.5rem; margin-bottom: 2rem;">
      <div>
        <h1 style="font-size: 2rem; margin: 0; color: #0f172a; font-weight: 800;">TakeoffCompass Proposal</h1>
        <p style="font-size: 0.875rem; margin: 0.25rem 0 0; color: #64748b;">Preconstruction Software Evaluation & Cost Estimate Report</p>
      </div>
      <div style="text-align: right;">
        <p style="font-size: 0.875rem; font-weight: 600; margin: 0; color: #0f172a;">Date: ${currentDate}</p>
        <p style="font-size: 0.75rem; margin: 0.25rem 0 0; color: #64748b;">ID: TC-${Math.floor(100000 + Math.random() * 900000)}</p>
      </div>
    </div>
    
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; margin-bottom: 1rem;">1. Workflow Assessment Result</h2>
      <div style="border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px; background: #f8fafc;">
        ${recommendedHtml}
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; margin-bottom: 1rem;">2. Estimated AI Platform ROI Savings</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
        <thead>
          <tr style="background: #f1f5f9;">
            <th style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: left; font-size: 0.875rem;">Metric Description</th>
            <th style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-size: 0.875rem; width: 180px;">Estimated Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem;">Monthly Takeoff Labor Hours Saved</td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-weight: 700; font-size: 0.875rem;">${savedHours}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem;">Monthly Cost Reduction</td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-weight: 700; font-size: 0.875rem; color: #10b981;">${savedMoney}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem; font-weight: 600;">Annualized Labor Savings</td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-weight: 800; font-size: 1rem; color: #10b981;">${savedAnnual}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-bottom: 2rem; page-break-inside: avoid;">
      <h2 style="font-size: 1.5rem; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; margin-bottom: 1rem;">3. Regional Cost Assembly Breakdown</h2>
      <p style="font-size: 0.875rem; color: #64748b; margin-top: 0; margin-bottom: 0.75rem;">
        Baseline material rates sourced from <strong>Procore Material Price Tracker</strong>. Regional adjustment factor based on <strong>Mortenson Cost Index Q1 2026</strong>.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
        <thead>
          <tr style="background: #f1f5f9;">
            <th style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: left; font-size: 0.875rem;">Takeoff Assembly Category</th>
            <th style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-size: 0.875rem; width: 180px;">Assembly Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem;">
              <strong>Drywall Partition Assembly</strong><br>
              <span style="font-size: 0.75rem; color: #64748b;">Steel studs framing (16" O.C.), 5/8" Type X drywall sheeting, wall installation labor</span>
            </td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-size: 0.875rem; font-weight: 600;">${drywallCost}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem;">
              <strong>Flooring & Floor Finishes</strong><br>
              <span style="font-size: 0.75rem; color: #64748b;">Floor finishes materials (carpet/hardwood/tile), floor layering installation labor</span>
            </td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-size: 0.875rem; font-weight: 600;">${flooringCost}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem;">
              <strong>Fixtures & Frames Installation</strong><br>
              <span style="font-size: 0.75rem; color: #64748b;">Interior wood doors, exterior double hung windows, installation labor hours</span>
            </td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-size: 0.875rem; font-weight: 600;">${fixturesCost}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem; font-weight: 600;">Base Assembly Subtotal</td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-weight: 600; font-size: 0.875rem;">${subtotal}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem;">
              <strong>Mortenson Regional Multiplier Index Adjustment</strong><br>
              <span style="font-size: 0.75rem; color: #64748b;">Region Selected: ${selectedRegion}</span>
            </td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-size: 0.875rem; font-weight: 600; color: #b45309;">${regionalAdjustment}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; color: #0f172a;">Grand Total Estimate (Adjusted Cost)</td>
            <td style="border: 1px solid #e2e8f0; padding: 0.75rem; text-align: right; font-weight: 800; font-size: 1.1rem; color: #047857;">${totalCost}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 3rem; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 1rem; font-size: 0.75rem; color: #94a3b8;">
      This proposal is an automated preconstruction assessment generated by TakeoffCompass. All pricing baselines, crew rates, and local city indexes represent estimates for budgeting purposes and should be verified against regional subcontractor bids.
    </div>
  `;
  
  // Add to body
  document.body.insertBefore(printHeader, document.body.firstChild);
  
  // Toggle matcher section print active class
  const matcherSection = document.getElementById('matcher');
  if (matcherSection) {
    matcherSection.classList.add('printing-active');
  }
  
  // Trigger print
  window.print();
  
  // Clean up
  if (matcherSection) {
    matcherSection.classList.remove('printing-active');
  }
  document.body.removeChild(printHeader);
}

// 13. Custom Uploader Blueprint Simulator Generation
function createCustomBlueprint(fileName) {
  return {
    title: `Custom Plan: ${fileName}`,
    totalArea: 1450,
    linearWalls: 310,
    doors: 7,
    windows: 9,
    rooms: [
      { id: 'cust1', name: 'Office Area (Zone 1)', area: 360, path: 'M 50,50 L 300,50 L 300,230 L 50,230 Z', color: 'rgba(99, 102, 241, 0.25)', border: '#6366f1', textX: 175, textY: 140, material: 'Carpet Tiles: 40 sq yds | Baseboard: 70 LF' },
      { id: 'cust2', name: 'Conference Hub (Zone 2)', area: 420, path: 'M 320,50 L 620,50 L 620,230 L 320,230 Z', color: 'rgba(6, 182, 212, 0.25)', border: '#06b6d4', textX: 470, textY: 140, material: 'Broadloom Carpet: 47 sq yds | Metal studs: 60 pcs' },
      { id: 'cust3', name: 'Storage / Utility (Zone 3)', area: 180, path: 'M 50,260 L 220,260 L 220,450 L 50,450 Z', color: 'rgba(244, 63, 94, 0.25)', border: '#f43f5e', textX: 135, textY: 360, material: 'Rubber Tile: 20 sq yds | Drywall: 25 sheets' },
      { id: 'cust4', name: 'Breakroom / Pantry (Zone 4)', area: 240, path: 'M 240,260 L 500,260 L 500,450 L 240,450 Z', color: 'rgba(245, 158, 11, 0.25)', border: '#f59e0b', textX: 370, textY: 360, material: 'Ceramic Tile: 27 sq yds | Plumbed sinks: 2 sets' },
      { id: 'cust5', name: 'Reception Lobby (Zone 5)', area: 250, path: 'M 640,50 L 770,50 L 770,450 L 640,450 Z', color: 'rgba(16, 185, 129, 0.25)', border: '#10b981', textX: 705, textY: 250, material: 'Polished Concrete: 250 SF | Glass entry: 1 set' }
    ],
    walls: [
      'M 20,20 L 780,20 L 780,480 L 20,480 Z',
      'M 300,20 L 300,230',
      'M 320,20 L 320,230',
      'M 220,260 L 220,480',
      'M 500,260 L 500,480',
      'M 620,20 L 620,480',
      'M 30,240 L 620,240'
    ],
    fixtures: [
      { type: 'door', label: 'Main Entry Door', x: 640, y: 250, r: 25 },
      { type: 'door', label: 'Office Door', x: 280, y: 230, r: 15 },
      { type: 'door', label: 'Conference Door', x: 340, y: 230, r: 15 },
      { type: 'door', label: 'Storage Door', x: 200, y: 260, r: 15 },
      { type: 'door', label: 'Breakroom Door', x: 260, y: 260, r: 15 },
      { type: 'door', label: 'Back Exit Door', x: 740, y: 480, r: 15 },
      { type: 'door', label: 'Closet Door', x: 100, y: 50, r: 15 },
      { type: 'window', label: 'Window W1', x: 100, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W2', x: 450, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W3', x: 700, y: 20, w: 40, h: 4 },
      { type: 'window', label: 'Window W4', x: 100, y: 480, w: 40, h: 4 },
      { type: 'window', label: 'Window W5', x: 380, y: 480, w: 40, h: 4 },
      { type: 'window', label: 'Window W6', x: 20, y: 120, w: 4, h: 40 },
      { type: 'window', label: 'Window W7', x: 20, y: 350, w: 4, h: 40 },
      { type: 'window', label: 'Window W8', x: 780, y: 150, w: 4, h: 40 },
      { type: 'window', label: 'Window W9', x: 780, y: 320, w: 4, h: 40 }
    ],
    materials: [
      { name: 'Commercial Carpet Tile', qty: '87 Sq Yds' },
      { name: 'Slip-resistant Ceramic Tile', qty: '27 Sq Yds' },
      { name: 'Utility Rubber Flooring', qty: '20 Sq Yds' },
      { name: 'Heavy-duty 5/8" Drywall (4x10)', qty: '145 Sheets' },
      { name: 'Light-gauge Steel Studs (10\')', qty: '210 Pcs' },
      { name: 'Solid Core Wood Doors', qty: '6 Sets' },
      { name: 'Double Glazed Storefront Entry', qty: '1 Set' },
      { name: 'Thermal Pane Storefront Windows', qty: '9 Units' }
    ]
  };
}

function handleCustomFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    alert('Please upload an image file (PNG, JPG, SVG, WebP).');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    customBlueprintDataUrl = e.target.result;
    
    const fileNameLabel = document.getElementById('custom-file-name');
    if (fileNameLabel) {
      fileNameLabel.textContent = file.name;
    }
    
    BLUEPRINTS.custom = createCustomBlueprint(file.name);
    currentBlueprint = BLUEPRINTS.custom;
    
    const titleText = document.getElementById('canvas-blueprint-title');
    if (titleText) titleText.textContent = currentBlueprint.title;
    
    // Reset status fields safely
    const overlay = document.getElementById('canvas-prompt-overlay');
    const indicator = document.getElementById('simulator-status-indicator');
    const engineText = document.getElementById('canvas-blueprint-engine');
    const statArea = document.getElementById('stat-total-area');
    const statWalls = document.getElementById('stat-linear-walls');
    const statDoors = document.getElementById('stat-doors-count');
    const statWindows = document.getElementById('stat-windows-count');
    const materialsList = document.getElementById('material-estimates-list');
    
    if (indicator) {
      indicator.textContent = 'Ready';
      indicator.className = 'status-indicator idle';
    }
    if (engineText) engineText.textContent = 'Engine: Idle';
    if (statArea) statArea.innerHTML = `0 <span class="stat-unit">SF</span>`;
    if (statWalls) statWalls.innerHTML = `0 <span class="stat-unit">LF</span>`;
    if (statDoors) statDoors.textContent = '0';
    if (statWindows) statWindows.textContent = '0';
    if (materialsList) materialsList.innerHTML = `<li class="empty-list-msg">Run AI takeoff to generate estimates</li>`;
    
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
    }
    
    const scanner = document.getElementById('scanner-line');
    if (scanner) scanner.style.display = 'none';
    
    drawBlueprintStatic();
    updateCostEstimates();
  };
  reader.readAsDataURL(file);
}

function drawCustomBlueprintPlaceholder() {
  const drawingsGroup = document.getElementById('blueprint-drawings-group');
  if (!drawingsGroup) return;
  drawingsGroup.innerHTML = '';
  
  const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textEl.setAttribute('x', '400');
  textEl.setAttribute('y', '250');
  textEl.setAttribute('text-anchor', 'middle');
  textEl.setAttribute('fill', 'rgba(255, 255, 255, 0.3)');
  textEl.setAttribute('font-size', '14px');
  textEl.setAttribute('font-weight', '500');
  textEl.textContent = 'Drag and drop or select your blueprint image to begin simulation';
  drawingsGroup.appendChild(textEl);
}

// -------------------------------------------------------------
// Interactive Blueprint Editor Functions (Bluebeam-style)
// -------------------------------------------------------------

function parseSvgPathPoints(pathStr) {
  const points = [];
  const regex = /(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)/g;
  let match;
  while ((match = regex.exec(pathStr)) !== null) {
    points.push({ x: parseFloat(match[1]), y: parseFloat(match[2]) });
  }
  return points;
}

function generateSvgPathFromPoints(points) {
  if (!points || points.length === 0) return '';
  let pathStr = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    pathStr += ` L ${points[i].x},${points[i].y}`;
  }
  pathStr += ' Z';
  return pathStr;
}

function getPolygonArea(pts) {
  let area = 0;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += pts[i].x * pts[j].y;
    area -= pts[j].x * pts[i].y;
  }
  return Math.abs(area) / 2;
}

function getPolygonPerimeter(pts) {
  let perimeter = 0;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    perimeter += Math.sqrt((pts[i].x - pts[j].x) ** 2 + (pts[i].y - pts[j].y) ** 2);
  }
  return perimeter;
}

function getPolygonCentroid(pts) {
  let cx = 0, cy = 0;
  let area = 0;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const factor = (pts[i].x * pts[j].y - pts[j].x * pts[i].y);
    area += factor;
    cx += (pts[i].x + pts[j].x) * factor;
    cy += (pts[i].y + pts[j].y) * factor;
  }
  area = area / 2;
  if (Math.abs(area) < 0.0001) {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    pts.forEach(p => {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);
    });
    return { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
  }
  cx = cx / (6 * area);
  cy = cy / (6 * area);
  return { x: Math.abs(cx), y: Math.abs(cy) };
}

function initBlueprintOriginalMetrics() {
  if (!currentBlueprint) return;
  
  currentBlueprint.rooms.forEach(room => {
    if (!room.originalSF) {
      room.originalSF = room.area;
      const pts = parseSvgPathPoints(room.path);
      room.originalPixelArea = getPolygonArea(pts) || 1;
      room.originalPixelPerimeter = getPolygonPerimeter(pts) || 1;
    }
  });

  if (!currentBlueprint.originalLinearWalls) {
    currentBlueprint.originalLinearWalls = currentBlueprint.linearWalls;
    let totalOrigPerim = 0;
    currentBlueprint.rooms.forEach(r => {
      totalOrigPerim += r.originalPixelPerimeter || 1;
    });
    currentBlueprint.originalTotalPixelPerimeter = totalOrigPerim || 1;
  }

  if (!currentBlueprint.originalTotalArea) {
    currentBlueprint.originalTotalArea = currentBlueprint.totalArea;
  }
  if (!currentBlueprint.originalDoors) {
    currentBlueprint.originalDoors = currentBlueprint.doors;
  }
  if (!currentBlueprint.originalWindows) {
    currentBlueprint.originalWindows = currentBlueprint.windows;
  }
}

function updatePresetWallsAndTotals() {
  if (!currentBlueprint) return;
  let totalNewPerim = 0;
  currentBlueprint.rooms.forEach(r => {
    const pts = parseSvgPathPoints(r.path);
    totalNewPerim += getPolygonPerimeter(pts);
  });
  const perimRatio = totalNewPerim / currentBlueprint.originalTotalPixelPerimeter;
  currentBlueprint.linearWalls = Math.round(currentBlueprint.originalLinearWalls * perimRatio);
  currentBlueprint.totalArea = currentBlueprint.rooms.reduce((sum, r) => sum + r.area, 0);
}

function findClosestBlueprintFixture(x, y) {
  if (!currentBlueprint || !currentBlueprint.fixtures) return null;
  let closest = null;
  let minDist = Infinity;
  currentBlueprint.fixtures.forEach(fix => {
    const dist = Math.sqrt((fix.x - x) ** 2 + (fix.y - y) ** 2);
    if (dist < minDist) {
      minDist = dist;
      closest = fix;
    }
  });
  return minDist < 50 ? closest : null;
}

function selectMarkup(type, id, element) {
  if (selectedMarkup && selectedMarkup.element) {
    selectedMarkup.element.classList.remove('editable-selected-glow');
  }

  selectedMarkup = { type, id, element };
  element.classList.add('editable-selected-glow');

  drawSelectionHandles();
  updatePropertiesCardValues();
  
  const card = document.getElementById('canvas-properties-card');
  if (card) card.style.display = 'flex';
}

function deselectMarkup() {
  if (selectedMarkup && selectedMarkup.element) {
    selectedMarkup.element.classList.remove('editable-selected-glow');
  }
  selectedMarkup = null;

  const selectionGroup = document.getElementById('markup-selection-group');
  if (selectionGroup) selectionGroup.innerHTML = '';

  const card = document.getElementById('canvas-properties-card');
  if (card) card.style.display = 'none';
}

function getSnapCoordinates(rawX, rawY, currentPoints = [], activeIndex = null, isShiftPressed = false) {
  let snappedX = rawX;
  let snappedY = rawY;
  const guideLines = [];

  const targetXCoords = new Set();
  const targetYCoords = new Set();

  // 1. Collect points from current blueprint rooms
  if (currentBlueprint && currentBlueprint.rooms) {
    currentBlueprint.rooms.forEach(r => {
      const pts = parseSvgPathPoints(r.path);
      pts.forEach(p => {
        targetXCoords.add(p.x);
        targetYCoords.add(p.y);
      });
    });
  }

  // 2. Collect points from manual markups
  if (manualMarkups) {
    manualMarkups.forEach(m => {
      if (m.points) {
        m.points.forEach(p => {
          targetXCoords.add(p.x);
          targetYCoords.add(p.y);
        });
      } else if (m.x !== undefined && m.y !== undefined) {
        targetXCoords.add(m.x);
        targetYCoords.add(m.y);
      }
    });
  }

  // 3. Grid lines (20px grid intervals)
  for (let gx = 20; gx < 800; gx += 20) targetXCoords.add(gx);
  for (let gy = 20; gy < 500; gy += 20) targetYCoords.add(gy);

  // 4. Shift key snapping: Snap to same edge / orthogonal line of other points in current polygon or floorplan
  if (isShiftPressed && currentPoints && currentPoints.length > 0) {
    if (activeIndex !== null && activeIndex !== undefined && activeIndex >= 0) {
      const n = currentPoints.length;
      const prevPt = currentPoints[(activeIndex - 1 + n) % n];
      const nextPt = currentPoints[(activeIndex + 1) % n];

      // Check orthogonal alignment with adjacent points
      if (Math.abs(rawX - prevPt.x) <= Math.abs(rawY - prevPt.y)) {
        snappedX = prevPt.x;
        guideLines.push({ type: 'v', x: prevPt.x });
      } else {
        snappedY = prevPt.y;
        guideLines.push({ type: 'h', y: prevPt.y });
      }

      if (Math.abs(rawX - nextPt.x) < 20) {
        snappedX = nextPt.x;
        if (!guideLines.some(g => g.type === 'v' && g.x === nextPt.x)) {
          guideLines.push({ type: 'v', x: nextPt.x });
        }
      }
      if (Math.abs(rawY - nextPt.y) < 20) {
        snappedY = nextPt.y;
        if (!guideLines.some(g => g.type === 'h' && g.y === nextPt.y)) {
          guideLines.push({ type: 'h', y: nextPt.y });
        }
      }
    } else {
      // Shift key when translating or moving point
      targetXCoords.forEach(tx => {
        if (Math.abs(rawX - tx) < 20) {
          snappedX = tx;
          guideLines.push({ type: 'v', x: tx });
        }
      });
      targetYCoords.forEach(ty => {
        if (Math.abs(rawY - ty) < 20) {
          snappedY = ty;
          guideLines.push({ type: 'h', y: ty });
        }
      });
    }
  }

  // 5. Automatic threshold snapping (when within 10px threshold)
  const threshold = isShiftPressed ? 20 : 10;

  if (snappedX === rawX) {
    let minDx = threshold;
    let closestX = null;
    targetXCoords.forEach(tx => {
      const dx = Math.abs(rawX - tx);
      if (dx < minDx) {
        minDx = dx;
        closestX = tx;
      }
    });
    if (closestX !== null) {
      snappedX = closestX;
      guideLines.push({ type: 'v', x: closestX });
    }
  }

  if (snappedY === rawY) {
    let minDy = threshold;
    let closestY = null;
    targetYCoords.forEach(ty => {
      const dy = Math.abs(rawY - ty);
      if (dy < minDy) {
        minDy = dy;
        closestY = ty;
      }
    });
    if (closestY !== null) {
      snappedY = closestY;
      guideLines.push({ type: 'h', y: closestY });
    }
  }

  return { x: snappedX, y: snappedY, guideLines };
}

function drawSelectionHandles(guideLines = []) {
  const selectionGroup = document.getElementById('markup-selection-group');
  if (!selectionGroup) return;
  selectionGroup.innerHTML = '';

  if (guideLines && guideLines.length > 0) {
    guideLines.forEach(g => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', 'snap-guide-line');
      if (g.type === 'v') {
        line.setAttribute('x1', g.x);
        line.setAttribute('y1', 0);
        line.setAttribute('x2', g.x);
        line.setAttribute('y2', 500);
      } else {
        line.setAttribute('x1', 0);
        line.setAttribute('y1', g.y);
        line.setAttribute('x2', 800);
        line.setAttribute('y2', g.y);
      }
      selectionGroup.appendChild(line);
    });
  }

  if (!selectedMarkup) return;

  const { type, id, element } = selectedMarkup;

  let points = [];
  let isPolygon = false;
  let centerX = 0;
  let centerY = 0;

  if (type === 'room') {
    const room = currentBlueprint.rooms.find(r => r.id === id);
    if (!room) return;
    points = parseSvgPathPoints(room.path);
    isPolygon = true;
  } else if (type === 'manual-area') {
    const markup = manualMarkups.find(m => m.id === id);
    if (!markup) return;
    points = [...markup.points];
    isPolygon = true;
  } else if (type === 'manual-point') {
    const markup = manualMarkups.find(m => m.id === id);
    if (!markup) return;
    centerX = markup.x;
    centerY = markup.y;
    isPolygon = false;
  } else if (type === 'fixture') {
    const cx = parseFloat(element.getAttribute('cx'));
    const cy = parseFloat(element.getAttribute('cy'));
    centerX = cx;
    centerY = cy;
    isPolygon = false;
  }

  if (isPolygon && points.length > 0) {
    const outline = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    const pointsStr = points.map(p => `${p.x},${p.y}`).join(' ');
    outline.setAttribute('points', pointsStr);
    outline.setAttribute('class', 'markup-selection-outline');
    
    outline.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      isDraggingShape = true;
      const svgEl = document.getElementById('blueprint-svg');
      const startMouseCoords = getSvgCoords(e, svgEl);
      shapeDragStartOffset = points.map(p => ({ x: p.x - startMouseCoords.x, y: p.y - startMouseCoords.y }));
    });
    
    selectionGroup.appendChild(outline);

    points.forEach((pt, index) => {
      const handle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      handle.setAttribute('cx', pt.x);
      handle.setAttribute('cy', pt.y);
      handle.setAttribute('r', '6');
      handle.setAttribute('class', 'markup-drag-handle');
      handle.setAttribute('title', `Drag to reshape vertex ${index + 1}`);

      handle.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        activeDragHandle = index;
      });

      selectionGroup.appendChild(handle);
    });
  } else {
    const handle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    handle.setAttribute('cx', centerX);
    handle.setAttribute('cy', centerY);
    handle.setAttribute('r', '7');
    handle.setAttribute('class', 'markup-drag-handle');
    handle.setAttribute('title', 'Drag to move fixture');
    handle.style.cursor = 'move';

    handle.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      isDraggingShape = true;
      const svgEl = document.getElementById('blueprint-svg');
      const startMouseCoords = getSvgCoords(e, svgEl);
      shapeDragStartOffset = { x: centerX - startMouseCoords.x, y: centerY - startMouseCoords.y };
    });

    selectionGroup.appendChild(handle);
  }
}

function updatePropertiesCardValues() {
  const card = document.getElementById('canvas-properties-card');
  const nameInput = document.getElementById('prop-markup-name');
  const fillInput = document.getElementById('prop-markup-fill');
  const borderInput = document.getElementById('prop-markup-border');
  const areaReadout = document.getElementById('prop-markup-area');
  const perimeterReadout = document.getElementById('prop-markup-perimeter');
  
  if (!selectedMarkup || !card) return;

  const { type, id, element } = selectedMarkup;

  if (type === 'room') {
    const room = currentBlueprint.rooms.find(r => r.id === id);
    if (room) {
      if (document.activeElement !== nameInput) nameInput.value = room.name;
      fillInput.value = rgbToHex(room.color) || '#6366f1';
      borderInput.value = room.border || '#6366f1';
      areaReadout.textContent = `${room.area} SF`;
      
      const pts = parseSvgPathPoints(room.path);
      const perimVal = Math.round(getPolygonPerimeter(pts) * 0.6);
      perimeterReadout.textContent = `${perimVal} LF`;
    }
  } else if (type === 'manual-area') {
    const markup = manualMarkups.find(m => m.id === id);
    if (markup) {
      if (document.activeElement !== nameInput) nameInput.value = markup.name || 'Manual Takeoff Area';
      fillInput.value = rgbToHex(element.getAttribute('fill')) || '#10b981';
      borderInput.value = element.getAttribute('stroke') || '#10b981';
      areaReadout.textContent = `${markup.area} SF`;
      perimeterReadout.textContent = `${markup.perimeter} LF`;
    }
  } else if (type === 'manual-point' || type === 'fixture') {
    const currentMarkup = type === 'manual-point' ? manualMarkups.find(m => m.id === id) : null;
    const name = type === 'manual-point' 
      ? (currentMarkup && currentMarkup.name ? currentMarkup.name : 'Manual Fixture Count')
      : 'AI Fixture Count';
    if (document.activeElement !== nameInput) nameInput.value = name;
    fillInput.value = rgbToHex(element.getAttribute('fill')) || '#06b6d4';
    borderInput.value = rgbToHex(element.getAttribute('stroke')) || '#ffffff';
    areaReadout.textContent = '--';
    perimeterReadout.textContent = '--';
  }
}

function rgbToHex(rgbaStr) {
  if (!rgbaStr) return '#06b6d4';
  if (rgbaStr.startsWith('#')) return rgbaStr;
  const match = rgbaStr.match(/\d+/g);
  if (!match || match.length < 3) return '#06b6d4';
  const r = parseInt(match[0]);
  const g = parseInt(match[1]);
  const b = parseInt(match[2]);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function initPropertiesCardListeners() {
  const nameInput = document.getElementById('prop-markup-name');
  const fillInput = document.getElementById('prop-markup-fill');
  const borderInput = document.getElementById('prop-markup-border');
  const btnCloseProperties = document.getElementById('btn-close-properties');
  const btnDeleteMarkup = document.getElementById('btn-delete-markup');

  if (!nameInput) return;

  nameInput.addEventListener('input', (e) => {
    if (!selectedMarkup) return;
    const { type, id } = selectedMarkup;
    const newName = e.target.value;
    
    if (type === 'room') {
      const room = currentBlueprint.rooms.find(r => r.id === id);
      if (room) {
        room.name = newName;
        const labelEl = document.getElementById(`room-label-${room.id}`);
        if (labelEl) labelEl.textContent = newName;
      }
    } else if (type === 'manual-area') {
      const markup = manualMarkups.find(m => m.id === id);
      if (markup) markup.name = newName;
    } else if (type === 'manual-point') {
      const markup = manualMarkups.find(m => m.id === id);
      if (markup) markup.name = newName;
    }
  });

  function updateColorFill(newHex) {
    if (!selectedMarkup) return;
    const { type, id, element } = selectedMarkup;
    if (type === 'room') {
      const room = currentBlueprint.rooms.find(r => r.id === id);
      if (room) {
        room.color = hexToRgba(newHex, 0.25);
        element.setAttribute('fill', room.color);
      }
    } else if (type === 'manual-area') {
      const markup = manualMarkups.find(m => m.id === id);
      if (markup) {
        element.setAttribute('fill', hexToRgba(newHex, 0.25));
      }
    } else {
      element.setAttribute('fill', newHex);
    }
  }

  function updateColorBorder(newHex) {
    if (!selectedMarkup) return;
    const { type, id, element } = selectedMarkup;
    if (type === 'room') {
      const room = currentBlueprint.rooms.find(r => r.id === id);
      if (room) {
        room.border = newHex;
        element.setAttribute('stroke', newHex);
      }
    } else if (type === 'manual-area') {
      element.setAttribute('stroke', newHex);
    } else {
      element.setAttribute('stroke', newHex);
    }
  }

  fillInput.addEventListener('input', (e) => updateColorFill(e.target.value));
  borderInput.addEventListener('input', (e) => updateColorBorder(e.target.value));

  btnCloseProperties.addEventListener('click', () => {
    deselectMarkup();
  });

  btnDeleteMarkup.addEventListener('click', () => {
    if (!selectedMarkup) return;
    const { type, id, element } = selectedMarkup;

    if (type === 'room') {
      const idx = currentBlueprint.rooms.findIndex(r => r.id === id);
      if (idx !== -1) {
        currentBlueprint.rooms.splice(idx, 1);
      }
      element.remove();
      const label = document.getElementById(`room-label-${id}`);
      if (label) label.remove();
      updatePresetWallsAndTotals();
    } else if (type === 'manual-area') {
      const idx = manualMarkups.findIndex(m => m.id === id);
      if (idx !== -1) {
        manualMarkups.splice(idx, 1);
      }
      element.remove();
    } else if (type === 'manual-point') {
      const idx = manualMarkups.findIndex(m => m.id === id);
      if (idx !== -1) {
        manualMarkups.splice(idx, 1);
      }
      element.remove();
    } else if (type === 'fixture') {
      element.remove();
      const fixIndex = currentBlueprint.fixtures.findIndex(f => {
        const cx = parseFloat(element.getAttribute('cx'));
        const cy = parseFloat(element.getAttribute('cy'));
        return Math.sqrt((f.x - cx)**2 + (f.y - cy)**2) < 5;
      });
      if (fixIndex !== -1) {
        currentBlueprint.fixtures.splice(fixIndex, 1);
        currentBlueprint.doors = currentBlueprint.fixtures.filter(f => f.type === 'door').length;
        currentBlueprint.windows = currentBlueprint.fixtures.filter(f => f.type === 'window').length;
      }
    }

    deselectMarkup();
    updateCostEstimates();
  });
}
