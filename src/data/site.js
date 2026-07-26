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
  phone: '+91(044)42132613',
  phoneRaw: '9104442132613',
  whatsapp: '+91 7339491001',
  whatsappRaw: '917339491001',
  website: 'www.pragnanexgen.com',
  distributorText: 'We are the authorised distributors of wireless sensor VTI corporation in India',
  address: {
    city: 'Chennai',
    region: 'Tamil Nadu',
    country: 'India',
    full: '17, Lady Madhavan Rd, Mahalingapuram, Nungambakkam, Chennai, Tamil Nadu 600034',
  },
  overview:
    'We are a Next Generation Technology Consulting Company and provider of Next Generation Technology Products. AI-based platforms and solutions are our portfolio. We are the authorised distributors of wireless sensor VTI corporation in India — bringing advanced wireless temperature sensors, environmental sensors, data collectors and AI platforms to your operations.',
  social: {
    linkedin: 'https://www.linkedin.com/company/pragna-nexgen-technologies',
    website: 'https://www.pragnanexgen.com',
  },
}

export const specialties = [
  'TBR22 Wireless Temperature Sensor',
  'Environmental Sensor TBR22-BE',
  'Data Collectors & Gateways',
  'AI Monitoring Platform',
  'Substation & Switchgear Monitoring',
  'Technology Consulting',
]

export const stats = [
  { value: '24/7', label: 'Automated Monitoring & Alerts' },
  { value: '500kV', label: 'Surge Voltage Capability' },
  { value: '10 Yrs', label: 'Sensor Battery Life' },
  { value: 'Global', label: 'International Collaborations' },
]

// Product categories used for filtering on the Products page
export const productCategories = [
  { id: 'sensors', name: 'Wireless Sensors' },
  { id: 'thermal', name: 'Thermal Imaging' },
  { id: 'ai', name: 'AI Platforms' },
  { id: 'gateway', name: 'Data Collectors' },
  { id: 'ai', name: 'AI Platforms' },
]

export const products = [
  {
    slug: 'tbr22-temperature-sensor',
    name: 'TBR22 Temperature Sensor',
    category: 'sensors',
    icon: 'Thermometer',
    tagline: 'Continuous, battery-efficient temperature monitoring',
    summary:
      'Compact wireless sensors that continuously track temperature at critical points inside electrical cabinets, busbars and joints — helping you prevent overheating before it becomes failure.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Direct installation on busbars, cable terminations & contact points',
      'Powered by self-powered energy harvesting or battery supply (up to 10 years battery life)',
      'Withstands lightning impulse & switching surge voltages up to 500kV',
      '2.4GHz wireless communication up to 100 meters in open space',
      'IP67 protection level, suitable for both indoor & outdoor applications',
      'Tested to IEC 60060-1, IEC 60529, IEC 60270 & RoHS 2 standards',
    ],
    specs: [
      ['Communication', '2.4GHz bands'],
      ['Transmission Range', '100 meters in open space'],
      ['Sampling Frequency', '5s (self-powered); 60s (battery-powered)'],
      ['Power Supply', 'Self-powered (primary current ≥ 1 A) or Battery (10 yrs)'],
      ['Operating Voltage Rating', 'Up to 500kV'],
      ['Temperature Range', '-10°C ~ 120°C'],
      ['Accuracy', '± 1°C'],
      ['Transmission Power', '08 dBm'],
      ['Working Temperature', '-20°C to 80°C'],
      ['Partial Discharge Level', '< 10pC'],
      ['Protection Level', 'IP67'],
      ['Size', 'H: ~14.4 mm; W: ~31.5 mm; D: ~32.5 mm'],
      ['Weight', '~ 35 gram'],
    ],
  },
  {
    slug: 'environmental-sensor-tbr22-be',
    name: 'Environmental Sensor TBR22-BE',
    category: 'sensors',
    icon: 'Wind',
    tagline: 'High-Accuracy Wireless Temperature & Humidity Sensor',
    summary:
      'Temperature and humidity monitoring sensor with high accuracy, applicable in high electromagnetic field environments up to 500 kV.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Combined temperature and humidity monitoring for indoor assets',
      'Utilizes ultra-low-power technology ensuring service life up to 10 years',
      'High-voltage electromagnetic field tolerance up to 500 kV',
      'High precision measurement: ±0.2°C temperature & ±2% RH humidity',
      'Real-time display, trend charts (up to 10 years) & custom threshold alerts',
      'IP50 protection level, RoHS 2 compliant',
    ],
    specs: [
      ['Communication', '2.4GHz bands'],
      ['Transmission Range', '100 meters in open space'],
      ['Sampling Frequency', '140s'],
      ['Environmental Temp Range', '-40°C to 125°C'],
      ['Humidity Range', '0–100% RH'],
      ['Accuracy', 'Temp: ±0.2°C / Humidity: ±2% RH'],
      ['Transmission Power', '08 dBm'],
      ['Power Supply', 'Battery-powered (up to 10 years)'],
      ['Operating Voltage Rating', 'Up to 500 kV'],
      ['Working Temp & Humidity', 'Temp: -10°C to 80°C / Humidity: ≤ 100% RH'],
      ['Partial Discharge Level', '< 10pC'],
      ['Protection Level', 'IP50'],
      ['Size', 'H: ~13.3 mm; W: ~34 mm; D: ~37 mm'],
      ['Weight', '~ 45 gram'],
    ],
  },
  {
    slug: 'data-collectors',
    name: 'Data Collectors',
    category: 'gateway',
    icon: 'Router',
    tagline: 'Wireless Sensor Gateway & Multi-Protocol Controller (GWC-24-IB-TH)',
    summary:
      'Collects data from wireless sensors utilizing 2.4GHz wireless technology with 16 channels, forwarding readings to central monitoring or SCADA via RJ45 Ethernet, Wi-Fi, 4G LTE, or RS485.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    features: [
      '2.4GHz wireless technology with 16 channels for optimal transmission',
      'License-free ISM band usage with user-friendly web GUI integrated',
      'Supports Modbus TCP / Modbus RTU / SCADA IEC 60870-5-104 Master',
      'Multiple connectivity options: RJ45 Ethernet, Wi-Fi 2.4GHz, 4G LTE, RS485',
      'Supports Partial Discharge (PD), DGA & Dielectric Loss (TD) monitoring integration',
      'No hardware sensor limitation (Defaulted for 32 sensors license)',
    ],
    specs: [
      ['Function', 'IEC 60870-5-104 master, SCADA & PD/DGA integration'],
      ['Ethernet Interface', 'RJ45 - Web GUI configuration & center transmission'],
      ['Wifi Interface', '2.4GHz 20dBm for Web GUI & data transmission'],
      ['4G Interface', 'Micro SIM card 4G LTE Network'],
      ['RS485 Interface', '(Optional) Modbus RTU with HMI integration'],
      ['Connected Sensors', 'Default 32 sensors (no hardware limit)'],
      ['Size', 'H: 93mm × W: 84mm × T: 24mm'],
      ['Weight', '200 gram'],
    ],
  },
  {
    slug: 'ai-monitoring-platform',
    name: 'AI Monitoring Platform',
    category: 'ai',
    icon: 'BrainCircuit',
    tagline: 'Centralized Equipment Condition Monitoring & Analysis Platform',
    summary:
      'Centralized software and AI monitoring platform for visualization, analysis, diagnosis, and assessment of electrical equipment condition across substations and plants.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Real-time display of temperature values & equipment warning status',
      'Instantaneous measurement points tracking & 10-year trend charts',
      'Abnormal temperature warnings for busbars, cable heads & contact points',
      'Location positioning on maps & custom report generation',
      'One-way encrypted sensor-to-gateway communication with VTI protocol',
      'Multi-protocol destination push (MQTT, HTTP, HTTPS, FTP) & Mobile Apps (iOS/Android)',
    ],
    specs: [
      ['Security', 'No OS on sensor/gateway; tamper-proof data protection'],
      ['Encryption', 'One-way VTI proprietary protocol'],
      ['Uplink Protocols', 'MQTT, HTTP, HTTPS, FTP with username/password & .pem key'],
      ['Applications', 'Web Dashboard, iOS App, Android App'],
      ['Alerting', 'Configurable thresholds & multi-channel warnings'],
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
      'Thermal & environmental condition monitoring on busbars and connections',
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
      'From wireless sensors and environmental sensors to data collectors and the AI platform — one integrated, comprehensive system.',
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
    title: 'Authorised VTI Distributor',
    description:
      'We are the authorised distributors of wireless sensor VTI corporation in India, delivering certified, high-grade hardware.',
  },
]

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Contact', path: '/contact' },
]
