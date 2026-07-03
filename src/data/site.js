// Central content/config for the PRAGNA NEXGEN website.

export const company = {
  name: 'PRAGNA NEXGEN TECHNOLOGIES',
  legalName: 'PRAGNA NEXGEN TECHNOLOGIES PRIVATE LIMITED',
  shortName: 'Pragna Nexgen',
  tagline: 'Wisdom in Every Byte',
  industry: 'Technology, Information and Internet',
  founded: 'Chennai, Tamil Nadu, India',
  size: '2–10 employees',
  email: 'director@pragnanexgen.com',
  phone: '+91 7339491001',
  phoneRaw: '917339491001',
  website: 'www.pragnanexgen.com',
  address: {
    city: 'Chennai',
    region: 'Tamil Nadu',
    country: 'India',
    full: 'Chennai, Tamil Nadu, India',
  },
  overview:
    'We are a Next Generation Technology Consulting Company and provider of Next Generation Technology Products. AI-based platforms and solutions are our portfolio. We have built international collaborations to source advanced technology products — including wireless temperature sensors, wireless ambient sensors, thermal imaging cameras, data collectors and AI platforms.',
  social: {
    linkedin: 'https://www.linkedin.com/company/pragna-nexgen-technologies',
    website: 'https://www.pragnanexgen.com',
  },
}

export const specialties = [
  'Wireless Temperature Sensor',
  'Wireless Ambient Sensor',
  'Thermal Imaging Camera',
  'AI Platform',
  'Data Collector',
  'AI Thermal Camera Box',
  'AI BOX — Automatic Fire & Smoke Detection & Alert',
  'Technology Consulting',
  'Smart P&ID Systems',
]

export const stats = [
  { value: '24/7', label: 'Automated Monitoring & Alerts' },
  { value: '50k+', label: 'Faces Recognised (AI Access Control)' },
  { value: '9+', label: 'Technology Specialties' },
  { value: 'Global', label: 'International Collaborations' },
]

// Product categories used for filtering on the Products page
export const productCategories = [
  { id: 'sensors', name: 'Wireless Sensors' },
  { id: 'thermal', name: 'Thermal Imaging' },
  { id: 'ai', name: 'AI Platforms' },
  { id: 'gateway', name: 'Data Collectors' },
  { id: 'safety', name: 'Safety & Detection' },
]

export const products = [
  {
    slug: 'wireless-temperature-sensor',
    name: 'Wireless Temperature Sensor',
    category: 'sensors',
    icon: 'Thermometer',
    tagline: 'Continuous, battery-efficient temperature monitoring',
    summary:
      'Compact wireless sensors that continuously track temperature at critical points inside electrical cabinets, busbars and joints — helping you prevent overheating before it becomes failure.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    features: [
      'High-accuracy contact and non-contact temperature sensing',
      'Industry-leading battery life for maintenance-free operation',
      '2.4GHz wireless transmission to the data collector',
      'Ideal for medium and high-voltage switchgear and busbars',
    ],
    specs: [
      ['Measurement Range', '-40°C to +125°C'],
      ['Accuracy', '±0.5°C'],
      ['Wireless', '2.4GHz ISM band'],
      ['Power', 'Long-life industrial battery'],
    ],
  },
  {
    slug: 'wireless-ambient-sensor',
    name: 'Wireless Ambient Sensor',
    category: 'sensors',
    icon: 'Wind',
    tagline: 'Temperature & humidity for the surrounding environment',
    summary:
      'Environmental monitoring sensor designed for electrical cabinets and enclosed rooms, reporting temperature and humidity so you can act on condensation and thermal risk early.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Combined temperature and humidity measurement',
      'Designed for electrical cabinet and cold-room applications',
      'High accuracy with low power consumption',
      'Seamless integration with the AI monitoring platform',
    ],
    specs: [
      ['Temperature', '-20°C to +60°C'],
      ['Humidity', '0–100% RH'],
      ['Accuracy', '±2% RH'],
      ['Wireless', '2.4GHz ISM band'],
    ],
  },
  {
    slug: 'thermal-imaging-camera',
    name: 'Thermal Imaging Camera',
    category: 'thermal',
    icon: 'Camera',
    tagline: 'See heat before it becomes a hazard',
    summary:
      'Smart thermal imaging equipment that captures and processes thermal image data across equipment surfaces, revealing hotspots invisible to the naked eye.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    features: [
      'High-resolution radiometric thermal imaging',
      'Automatic hotspot detection and temperature mapping',
      'Continuous, unattended surveillance of critical assets',
      'Data streamed to the AI platform for trend analysis',
    ],
    specs: [
      ['Detector', 'Uncooled microbolometer'],
      ['Thermal Sensitivity', '< 50 mK'],
      ['Output', 'Radiometric + visual'],
      ['Integration', 'AI Thermal Camera Box'],
    ],
  },
  {
    slug: 'ai-thermal-camera-box',
    name: 'AI Thermal Camera Box',
    category: 'thermal',
    icon: 'Cpu',
    tagline: 'Edge AI for thermal image collection & processing',
    summary:
      'An advanced edge solution for collecting and processing thermal image data. On-device AI turns raw thermal streams into actionable alerts without overloading your network.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    features: [
      'On-edge AI processing of thermal image data',
      'Real-time hotspot classification and alerting',
      'Reduces bandwidth by processing at the source',
      'Integrates with SCADA and central monitoring',
    ],
    specs: [
      ['Processing', 'Edge AI inference'],
      ['Inputs', 'Multiple thermal camera streams'],
      ['Alerts', 'Real-time push + SCADA'],
      ['Deployment', 'DIN-rail / cabinet mount'],
    ],
  },
  {
    slug: 'ai-fire-smoke-detection-box',
    name: 'AI BOX — Fire & Smoke Detection',
    category: 'safety',
    icon: 'Flame',
    tagline: 'Automatic fire & smoke detection and alert',
    summary:
      'AI BOX automatically detects smoke and flame within camera range and raises instant alerts. It also flags intrusions into power-line safety corridors — protecting people and assets around the clock.',
    image:
      'https://images.unsplash.com/photo-1574870111867-089730e5a72b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Automatic detection of smoke and flame in the camera field',
      'Instant multi-channel alerts (mobile, email, SCADA)',
      'Power-line corridor intrusion detection',
      'Runs continuously with no manual monitoring',
    ],
    specs: [
      ['Detection', 'Smoke, flame, intrusion'],
      ['Response', 'Real-time alerting'],
      ['Inputs', 'IP / thermal cameras'],
      ['Use cases', 'Substations, plants, warehouses'],
    ],
  },
  {
    slug: 'data-collector-gateway',
    name: 'Data Collector / Gateway',
    category: 'gateway',
    icon: 'Router',
    tagline: 'The bridge between your sensors and the cloud',
    summary:
      'A rugged data collector that gathers readings from wireless sensors over 2.4GHz and forwards them securely to the AI monitoring platform for storage, analysis and alerting.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Aggregates data from many wireless sensors',
      '2.4GHz wireless collection with robust link quality',
      'Secure uplink to the AI platform',
      'Compact design for cabinet and panel installation',
    ],
    specs: [
      ['Wireless', '2.4GHz ISM band'],
      ['Capacity', 'Multiple sensors per gateway'],
      ['Uplink', 'Ethernet / cellular'],
      ['Mounting', 'DIN-rail / panel'],
    ],
  },
  {
    slug: 'ai-monitoring-platform',
    name: 'AI Monitoring Platform',
    category: 'ai',
    icon: 'BrainCircuit',
    tagline: 'One platform for centralised, intelligent monitoring',
    summary:
      'A software platform integrating AI algorithms for centralised monitoring of assets and grids. It unifies data from sensors and cameras, delivers 24/7 alerts and visualises everything in one place.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    features: [
      '24/7 automated alerts with customisable thresholds',
      'SCADA integration and mobile push notifications',
      '3D / BIM visualisation of monitored assets',
      'Flexible sampling rates and multi-system integration',
    ],
    specs: [
      ['Alerts', 'Threshold + AI anomaly'],
      ['Integration', 'SCADA, mobile, email'],
      ['Visualisation', '3D / BIM dashboards'],
      ['Deployment', 'Cloud or on-premise'],
    ],
  },
  {
    slug: 'smart-pid-systems',
    name: 'Smart P&ID Systems',
    category: 'ai',
    icon: 'Workflow',
    tagline: 'Intelligent piping & instrumentation diagrams',
    summary:
      'Smart P&ID systems that digitise piping and instrumentation diagrams and connect them to live data — bringing your process documentation to life with real-time context.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Digital, data-linked P&ID diagrams',
      'Live overlay of sensor and process data',
      'Faster troubleshooting and change management',
      'Integrates with the AI monitoring platform',
    ],
    specs: [
      ['Format', 'Digital, interactive P&ID'],
      ['Data', 'Live sensor overlay'],
      ['Users', 'Engineering & operations'],
      ['Integration', 'AI platform'],
    ],
  },
]

export const solutions = [
  {
    slug: 'substation-monitoring',
    name: 'Comprehensive Substation Monitoring',
    icon: 'Zap',
    summary:
      'Full oversight of transformer stations — temperature, humidity and thermal condition of every critical device — to prevent unplanned outages.',
    points: [
      'Wireless temperature & ambient sensing across the substation',
      'Thermal imaging on transformers, busbars and connections',
      'Centralised alerting through the AI platform',
    ],
  },
  {
    slug: 'power-plant-monitoring',
    name: 'Power Plant Equipment Monitoring',
    icon: 'Factory',
    summary:
      'Supervise temperature and humidity levels for devices within electrical generation facilities and extend equipment lifespan.',
    points: [
      'Continuous condition monitoring of rotating & static equipment',
      'Early hotspot detection to prevent failures',
      'Lower operational and maintenance costs',
    ],
  },
  {
    slug: 'cold-chain-monitoring',
    name: 'Cold Chain Monitoring',
    icon: 'Snowflake',
    summary:
      'Track temperature and humidity throughout refrigerated supply chains — protecting pharmaceuticals, food and sensitive goods.',
    points: [
      'End-to-end temperature & humidity traceability',
      'Instant alerts on excursions outside safe limits',
      'Compliance-ready reporting and audit trails',
    ],
  },
  {
    slug: 'mv-cabinet-monitoring',
    name: 'Medium-Voltage Cabinet Monitoring',
    icon: 'Server',
    summary:
      'Track thermal conditions inside medium-voltage equipment cabinets where hidden hotspots often go unnoticed until failure.',
    points: [
      'Sensors placed at connection and contact points',
      'Real-time trend analysis and threshold alerts',
      'Safe, contactless installation in energised cabinets',
    ],
  },
  {
    slug: 'fire-smoke-detection',
    name: 'Fire & Smoke Detection',
    icon: 'Flame',
    summary:
      'AI-driven automatic detection of fire and smoke across your facility, with instant alerts to the right people.',
    points: [
      'Camera-based smoke and flame detection with AI',
      'Multi-channel instant alerting',
      'Protects substations, plants and warehouses',
    ],
  },
  {
    slug: 'energy-performance',
    name: 'Energy Performance Management',
    icon: 'Gauge',
    summary:
      'Monitor, measure and manage energy performance to improve efficiency and meet international energy-management standards.',
    points: [
      'Continuous energy and condition data capture',
      'Analytics to identify efficiency opportunities',
      'Operational management aligned to best practice',
    ],
  },
]

export const industries = [
  {
    name: 'Energy & Power',
    icon: 'Zap',
    description:
      'Generation, transmission and distribution infrastructure — from power plants and substations to transmission-line corridors.',
  },
  {
    name: 'Healthcare & Cold Chain',
    icon: 'HeartPulse',
    description:
      'Temperature-sensitive environments such as hospitals, laboratories and pharmaceutical cold chains that demand continuous assurance.',
  },
  {
    name: 'Industrial & Manufacturing',
    icon: 'Factory',
    description:
      'Plants and facilities that rely on early fault detection, predictive maintenance and process safety to stay productive.',
  },
]

export const whyChoose = [
  {
    icon: 'Layers',
    title: 'End-to-End Solutions',
    description:
      'From wireless sensors and thermal cameras to data collectors and the AI platform — one integrated, comprehensive system.',
  },
  {
    icon: 'GraduationCap',
    title: 'Deep Expertise',
    description:
      'A next-generation technology consulting team that understands both the hardware and the AI that makes it intelligent.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Reliable Operation',
    description:
      '24/7 automated monitoring and alerting engineered for continuous, dependable performance in demanding environments.',
  },
  {
    icon: 'Globe2',
    title: 'Global Collaborations',
    description:
      'International partnerships let us source advanced, proven technology products and bring them to your operations.',
  },
]

export const news = [
  {
    slug: 'ai-fire-smoke-detection-launch',
    title: 'How AI BOX brings automatic fire & smoke detection to substations',
    category: 'AI & Safety',
    date: '2026-05-18',
    readTime: '4 min read',
    excerpt:
      'Camera-based AI is transforming fire safety — detecting smoke and flame in seconds and alerting teams before a small event becomes a major incident.',
    image:
      'https://images.unsplash.com/photo-1574870111867-089730e5a72b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'wireless-temperature-sensors-guide',
    title: 'Why wireless temperature sensors are the future of switchgear monitoring',
    category: 'Sensors',
    date: '2026-04-02',
    readTime: '5 min read',
    excerpt:
      'Contactless, battery-efficient wireless sensors let you monitor busbars and joints continuously — no shutdowns, no manual inspections.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'thermal-imaging-predictive-maintenance',
    title: 'Thermal imaging and predictive maintenance: seeing failures before they happen',
    category: 'Thermal Imaging',
    date: '2026-03-11',
    readTime: '6 min read',
    excerpt:
      'Radiometric thermal cameras reveal hotspots invisible to the eye. Combined with AI, they turn raw heat maps into a maintenance schedule.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'ai-monitoring-platform-scada',
    title: 'Bringing sensors, cameras and SCADA together on one AI platform',
    category: 'AI Platform',
    date: '2026-02-20',
    readTime: '5 min read',
    excerpt:
      'A single pane of glass for every monitored asset — with 24/7 alerts, 3D visualisation and flexible integration into your existing systems.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'iot-energy-efficiency',
    title: 'IoT monitoring as the foundation of energy efficiency',
    category: 'Energy',
    date: '2026-01-15',
    readTime: '4 min read',
    excerpt:
      'You cannot manage what you do not measure. Continuous IoT monitoring is the first step towards a measurable, improvable energy strategy.',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'cold-chain-compliance',
    title: 'Protecting the cold chain: continuous temperature assurance end to end',
    category: 'Cold Chain',
    date: '2025-12-08',
    readTime: '5 min read',
    excerpt:
      'From warehouse to last mile, wireless temperature and humidity monitoring keeps sensitive goods within safe limits — and keeps you compliant.',
    image:
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
  },
]

export const resources = [
  {
    title: 'Company Brochure',
    description: 'An overview of Pragna Nexgen products, solutions and capabilities.',
    type: 'PDF',
    icon: 'FileText',
  },
  {
    title: 'Wireless Sensor Datasheet',
    description: 'Technical specifications for our wireless temperature and ambient sensors.',
    type: 'PDF',
    icon: 'FileSpreadsheet',
  },
  {
    title: 'AI Platform Overview',
    description: 'How the AI monitoring platform unifies data, alerts and visualisation.',
    type: 'PDF',
    icon: 'Presentation',
  },
  {
    title: 'AI BOX Fire & Smoke Guide',
    description: 'Deployment guide for automatic fire and smoke detection & alerting.',
    type: 'PDF',
    icon: 'BookOpen',
  },
]

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'News & Resources', path: '/news' },
  { name: 'Contact', path: '/contact' },
]
