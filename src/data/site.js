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
  phoneRaw: '914442132613', // E.164 without '+': +91 44 4213 2613
  whatsapp: '+91 7339491001',
  whatsappRaw: '917339491001',
  website: 'www.pragnanexgen.com',
  distributorText:
    'All the Products marketed by Pragna NexGen Technologies Pvt Ltd are manufactured by VIET TECHNOLOGY AND INVESTMENT CORPORATION (Vietnam)',
  address: {
    city: 'Chennai',
    region: 'Tamil Nadu',
    country: 'India',
    full: '17, Lady Madhavan Rd, Mahalingapuram, Nungambakkam, Chennai, Tamil Nadu 600034',
    street: '17, Lady Madhavan Rd, Mahalingapuram, Nungambakkam',
    postalCode: '600034',
    countryCode: 'IN',
  },
  overview:
    'We are a Next Generation Technology Consulting Company and provider of Next Generation Technology Products. AI-based platforms and solutions are our portfolio. We are the authorised distributors of wireless sensor VTI Corporation (Vietnam) in India — bringing advanced wireless temperature sensors, environmental sensors, data collectors and AI platforms to your operations.',
  social: {
    linkedin: 'https://www.linkedin.com/company/pragna-nexgen-technologies-private-limited/',
    website: 'https://www.pragnanexgen.com',
  },
  // Canonical origin used for SEO tags, sitemap and structured data
  siteUrl: 'https://www.pragnanexgen.com',
  // Name variants people search for; used in structured data
  alternateNames: ['Pragna NexGen', 'Pragna Nexgen Technologies', 'PragnaNexgen', 'Pragna NexGen Technologies Pvt Ltd'],
  // Bing Webmaster Tools "msvalidate.01" code — only needed if the site is not imported
  // from Google Search Console. Leave empty to omit the tag.
  bingSiteVerification: '',
  vti: {
    label: 'Authorised distributor of VTI Corporation (Vietnam)',
    url: 'https://vti-sensors.com',
    standardsUrl: 'https://vti-sensors.com/standards-compliance/',
  },
}

export const specialties = [
  'VTI-GL-100C Distributed Temperature Sensing',
  'VTI-TS-26 Transmission-Line Sensor',
  'TBR22 Temperature Sensor',
  'Environmental Sensor TBR22-BE',
  'Data Collectors',
  'AI Monitoring Platform',
]

export const stats = [
  { value: '24/7', label: 'Automated Monitoring & Alerts' },
  { value: '500kV', label: 'Surge Voltage Capability' },
  { value: '10 Yrs', label: 'Sensor Battery Life' },
  { value: 'Global', label: 'International Collaborations' },
]

// Product categories used for filtering on the Products page
export const productCategories = [
  { id: 'dts', name: 'Fibre-Optic DTS' },
  { id: 'sensors', name: 'Wireless Sensors' },
  { id: 'gateway', name: 'Data Collectors' },
  { id: 'ai', name: 'AI Platforms' },
]

// Default brochure, used by any product without its own `brochure` entry.
export const defaultBrochure = {
  href: '/Pragna_NexGen_Wireless_Sensors_Brochure.pdf',
  label: 'Download Brochure PDF',
}

// Installation wording required by VTI for every clamp-on sensor.
const clampOnSafetyNote =
  'All VTI clamp-on sensors are installed with the circuit isolated, earthed and proved dead, consistent with IEEE Std 2969-2025.'

// Product schema — required: slug, name, category, icon, tagline, summary, image, features.
// Optional rich sections (rendered only when present on the product page):
//   modelName, imageAlt, seoTitle, seoDescription, highlights, overview, principle,
//   comparison, applications, installationPoints, specs | specGroups, callouts,
//   compliance, standards, safetyNote, brochure (null = no brochure), enquirySubject.
export const products = [
  {
    slug: 'dts-vti-gl-100c',
    name: 'VTI-GL-100C Distributed Temperature Sensing (DTS)',
    shortName: 'VTI-GL-100C DTS',
    modelName: 'VTI-GL-100C',
    category: 'dts',
    icon: 'Cable',
    tagline: 'Fibre-optic distributed temperature sensing',
    summary:
      'One armoured fibre gives a continuous temperature profile every 0.5 m over kilometres, with no electrical power and no electronics in the field.',
    image: '/images/products/vti-gl-100c-dts.jpg',
    imageAlt: 'VTI-GL-100C distributed temperature sensing (DTS) controller',
    seoTitle: 'VTI-GL-100C Distributed Temperature Sensing | Pragna NexGen',
    seoDescription:
      'VTI-GL-100C fibre-optic DTS: 4 optical channels × 5 km = up to 20 km total, ±1 °C, 0.5 m resolution. For busways, oil & gas, mining and cable tunnels.',
    enquirySubject: 'DTS quotation request – VTI-GL-100C',
    highlights: [
      { value: '4 × 5 km', label: 'Up to 20 km total — 4 optical channels' },
      { value: '0.5 m', label: 'Spatial resolution' },
      { value: '±1 °C', label: 'Temperature accuracy' },
      { value: '0 W', label: 'Field power along the route' },
    ],
    overview: [
      'The VTI-GL-100C solution transforms the entire length of an armoured optical fibre into a continuous thermal sensor. It monitors in real time over 4 optical channels × 5 km = up to 20 km total, with ±1 °C accuracy and 0.5 m spatial resolution.',
      'DTS is not only a cable-tunnel product. One armoured fibre gives a continuous temperature profile every 0.5 m over kilometres, with no electrical power and no electronics in the field — a strong fit for busways, process plants, tank farms, pipelines and conveyors across Indian industry.',
    ],
    features: [
      'Continuous temperature profile along the whole fibre — no blind spots between sensor points',
      'Locates overheating, insulation breakdown or fire along the route within 0.5 m',
      'Passive sensing fibre — no electrical power and no electronics in the field',
      'Immune to electromagnetic interference in substations and high-voltage corridors',
      'Stainless-steel armoured cable with flame-retardant, low smoke zero halogen (LSZH) sheath',
      '16 programmable relay outputs for fire-alarm, fire-suppression or shutdown interlocks',
      'RJ45 Ethernet, RS485 (Modbus RTU) and RS232 with a 10.4-inch industrial touchscreen',
    ],
    principle: {
      title: 'Raman OTDR — how the fibre measures temperature',
      paragraphs: [
        'High-frequency laser pulses are launched into the optical fibre core. As photons interact with silica molecules, backscattered light is generated containing Rayleigh, Brillouin and Raman spectral bands.',
        'By calculating the ratio between the Anti-Stokes and Stokes intensities, absolute temperature is accurately determined regardless of fibre bending or attenuation. Optical Time-Domain Reflectometry (OTDR) places each reading at its position along the fibre.',
      ],
      bands: [
        {
          name: 'Stokes band',
          text: 'Intensity depends predominantly on fibre transmission characteristics and laser power.',
        },
        { name: 'Anti-Stokes band', text: 'Intensity is strongly temperature-dependent.' },
      ],
    },
    comparison: {
      title: 'DTS vs. discrete point sensors',
      columns: ['Parameter', 'VTI-GL-100C (DTS)', 'Point Sensors (RTD)'],
      rows: [
        ['Coverage', '100% continuous line', 'Only at installed points'],
        ['Blind spots', 'Zero blind spots', 'Blind spots between sensors'],
        ['Field Power', '0 W (passive glass)', 'Requires wiring / batteries'],
        ['EMI Immunity', '100% immune', 'Susceptible to EMI noise'],
      ],
    },
    applications: [
      {
        id: 'busway',
        title: 'Busway / busduct monitoring',
        icon: 'Building2',
        audience:
          'Data centres, high-rise commercial buildings, hospitals, metro systems and large factories',
        text: 'The sensing fibre runs along the full length of the busway, including every joint and tap-off. Loose or oxidised joints show up as a local temperature rise against the neighbouring sections, long before insulation damage or a busway fire. One controller covers up to 4 busway risers or runs.',
        note: {
          title: 'Engineering note',
          text: 'A busway joint hotspot is short. With 0.5 m spatial resolution, DTS will show it, but it will read lower than the true contact temperature. Alarms should therefore be set on temperature rise against adjacent sections and on rate of rise, not on absolute value alone. For the most critical joints and tap-off units we recommend combining DTS with VTI point sensors.',
          emphasis: 'Recommended for busway: DTS for the route + point sensors for the critical joints.',
          link: { label: 'View TBR22 point sensors', to: '/products/tbr22-temperature-sensor' },
        },
      },
      {
        id: 'oil-gas',
        title: 'Oil & gas — pipelines and storage tanks',
        icon: 'Fuel',
        audience: 'Refineries, terminals, tank farms, LPG bottling plants, pipeline operators',
        text: 'Continuous temperature profiling along pipelines, on storage tank shells, floating-roof rim seals and LPG spheres. Abnormal heating or cooling points are located to within metres, for early fire detection and leak indication where the product temperature differs from ambient (heated crude, steam, LPG/LNG). The sensing fibre is passive – no electrical energy in the hazardous area – and the optical source is certified Ex op is (inherently safe optical radiation) to IEC 60079-28. 16 relay outputs can trigger fire-suppression or shutdown interlocks.',
      },
      {
        id: 'chemical-petrochemical',
        title: 'Chemical and petrochemical plants',
        icon: 'FlaskConical',
        text: 'Monitoring of reactors, process piping, tank farms and cable trays in process areas, with zone-based alarms on a plant GIS map and direct interlock to fire-protection systems.',
      },
      {
        id: 'mining',
        title: 'Mining and heavy industry',
        icon: 'Pickaxe',
        audience:
          'Coal and mineral mines, steel plants, cement, ports, power plant coal handling',
        text: 'Kilometres of conveyor belt monitored with one fibre: idler and roller bearing overheating, belt friction and spontaneous coal ignition are detected and located before they become a fire. Armoured cable rated ≤ 5000 N/10 cm crush, for harsh environments and underground tunnels.',
      },
      {
        id: 'cable-tunnels',
        title: 'Power cable tunnels, trenches and trays',
        icon: 'Zap',
        audience: 'HV cable overheating, insulation breakdown and fire detection',
        text: 'Detect overheating, insulation breakdown and fire hazards in underground high-voltage transmission cable tunnels and substation trenches with metre-level accuracy.',
      },
    ],
    compliance: {
      title: 'Hazardous areas',
      text: 'Optical source certified Ex op is (IEC 60079-28) – intrinsically safe optical radiation; passive sensing fibre, no electrical power in the field. Certificate available on request.',
      note: 'The DTS controller itself is installed in a safe area (control room or non-hazardous zone).',
      ctaLabel: 'Request certificate',
      ctaSubject: 'Ex op is certificate request – VTI-GL-100C',
    },
    specGroups: [
      {
        title: 'VTI-GL-100C Controller',
        rows: [
          ['Optical Channels', '4 optical channels (FC/APC standard)'],
          ['Maximum Distance per Channel', '5 km per channel · Total 20 km continuous monitoring'],
          ['Spatial Resolution', '0.5 meters'],
          ['Temperature Accuracy', '±1 °C (Temperature resolution: 0.1 °C)'],
          ['Measurement Range', '−40 to +120 °C (cable-dependent up to +300 °C)'],
          ['Sampling Frequency', '3 samples / second / channel'],
          ['Relay Outputs', '16 programmable relays (250 VAC / 3A) for fire alarms / tripping'],
          ['Communication Interfaces', '1x RJ45 Ethernet, 1x RS485 (Modbus RTU), 1x RS232'],
          ['Display & Local HMI', '10.4-inch industrial touchscreen integrated into chassis'],
          [
            'Power Supply / Dimensions',
            'DC 24V, 50W · 420 × 182 × 580 mm · Operating temp: −10 to +50 °C',
          ],
        ],
      },
      {
        title: 'Armoured Sensing Cable',
        rows: [
          [
            'Optical Fiber Core',
            'Core 62.5 μm / Cladding 125 μm · Graded-index multi-mode / single-mode',
          ],
          ['Cable Outer Diameter', 'Φ3.0 mm armored with stainless-steel spiral & braided mesh'],
          [
            'Outer Sheath Material',
            'Flame-retardant low smoke zero halogen (LSZH), anti-static, UV-resistant',
          ],
          [
            'Tensile & Crush Resistance',
            'Installation tension ≤500 N, operating ≤300 N · Crush resistance ≤5000 N/10cm',
          ],
          ['Minimum Bending Radius', '≥60 mm (dynamic), ≥30 mm (static)'],
        ],
      },
    ],
    brochure: {
      href: '/brochures/VTI-GL-100C-DTS-Brochure.pdf',
      label: 'Download DTS Brochure (PDF, 3.1 MB)',
    },
  },
  {
    slug: 'vti-ts-26',
    name: 'VTI-TS-26 Wireless Temperature Sensor for Transmission Lines',
    shortName: 'VTI-TS-26',
    modelName: 'VTI-TS-26',
    category: 'sensors',
    icon: 'UtilityPole',
    tagline: 'Conductor-connection monitoring · DLR input',
    summary:
      'Battery-free, self-powered wireless temperature sensor for conductor connections on 110–500 kV overhead lines and outdoor switchyards — hot-spot detection and a measured input to the utility’s dynamic line rating (DLR).',
    image: '/images/products/vti-ts-26.jpg',
    imageAlt: 'VTI-TS-26 self-powered wireless temperature sensor',
    seoTitle: 'VTI-TS-26 Line Temperature Sensor, DLR Input | Pragna NexGen',
    seoDescription:
      'Self-powered VTI-TS-26 sensor for splices, dead-ends and jumpers on 110–500 kV lines: hot-spot detection and DLR input. LoRa IN865, up to 3 km.',
    enquirySubject: 'Enquiry – VTI-TS-26 transmission-line sensor',
    highlights: [
      { value: 'LoRa sub-GHz', label: 'IN865 band for India' },
      { value: 'Up to 3 km', label: 'Line-of-sight range' },
      { value: '≥ 1 A', label: 'Self-powered from line current, no battery' },
      { value: '110–500 kV', label: 'Overhead lines & switchyards' },
    ],
    overview: [
      'The VTI-TS-26 is a long-range, battery-free, self-powered wireless contact temperature sensor for outdoor substation switchyards (110 kV to 500 kV), transformer bushings and overhead transmission lines. It harvests operating energy from the conductor current from ≥ 1 A upward and transmits over LoRa sub-GHz — IN865 band for India — up to 3 km line-of-sight.',
      'VTI-TS-26 provides measured temperature of conductor connections (splices, dead-ends, jumpers), for hot-spot detection and as a real-time input to the utility’s DLR / ampacity calculation (IEEE 738, CIGRE TB 601). The rating calculation also needs weather data and the utility’s own rating engine.',
    ],
    features: [
      'Measured temperature of conductor connections — splices, dead-ends and jumpers',
      'Hot-spot detection and a real-time input to the utility’s DLR / ampacity calculation',
      'Self-powered from line current ≥ 1 A by current-transformer energy harvesting — no battery',
      'LoRa sub-GHz radio, IN865 band for India, range up to 3 km line-of-sight',
      'Type-tested to 500 kV; partial discharge 8.7 pC at 500 kV (acceptance criterion < 10 pC)',
      'Clamp-on mounting with stainless-steel locking ties; IP68 outdoor construction',
    ],
    installationPoints: {
      title: 'Installation points on 110–500 kV lines',
      items: [
        { title: 'Mid-span tension splices', text: 'Overhead transmission line mid-span tension splices.' },
        { title: 'Dead-end clamps', text: 'Dead-end tension clamps at the line terminations.' },
        { title: 'Jumper loops', text: 'Jumper loop clamps and gantry down-leads.' },
      ],
      alsoTitle: 'Also used in outdoor switchyards',
      also: [
        'Transformer high-voltage bushing palms (110 kV, 220 kV, 500 kV)',
        'Outdoor disconnect switch (isolator) moving jaws and blades',
        'Surge arrester and instrument transformer header terminal clamps',
      ],
    },
    callouts: [
      {
        title: 'What “supports DLR” means',
        text: 'VTI-TS-26 supplies the measured connection temperature. The DLR / ampacity rating itself is calculated by the utility’s own rating engine, which also needs weather data.',
      },
    ],
    specGroups: [
      {
        title: 'Key specifications',
        rows: [
          [
            'Model Name',
            'VTI-TS-26 (VTI-TS series, previously catalogued as TBR22 / TBR22-STE / TBR22-BTE)',
          ],
          ['Power Supply', 'Current-transformer induction energy harvesting, 100% battery-free'],
          ['Minimum Start Current', '≥ 1 A primary alternating current on monitored conductor'],
          ['Measuring Temperature Range', '−40 °C to +125 °C'],
          ['Measurement Accuracy', '±0.2 °C within −10 to +65 °C; ±0.5 °C across rest of range'],
          ['Operating Ambient Temperature', '−40 °C to +85 °C; humidity 0–100% (IP68)'],
          ['Type-Tested System Voltage', 'Type-tested to 500 kV (EHV / UHV qualified)'],
          ['Partial Discharge at 500 kV', '8.7 pC (acceptance criterion < 10 pC)'],
          ['Lightning Impulse Withstand', '−1500 kV standard full wave impulse'],
          ['Wireless Protocol', 'LoRa sub-GHz (AS923, IN865, EU868 configurable per country)'],
          ['Transmission Range', 'Up to 3 km line of sight in unobstructed substation switchyards'],
          ['Radio Compliance', 'Duty cycle < 1%, Listen-Before-Talk (LBT), regional EIRP limits'],
          [
            'Reporting Interval',
            'Adaptive, 5 to 30 minutes (dynamic acceleration during thermal surges)',
          ],
          [
            'Mounting Method',
            'Clamp-on with stainless-steel locking ties and high-field magnetic grip',
          ],
          [
            'Installation Safety Requirement',
            'Installed strictly with the circuit isolated, earthed, and proved dead during planned outages',
          ],
          [
            'International Standards',
            'CIGRE Technical Brochure 999 Table 2.8-1, IEEE Std 2969-2025, NFPA 70B',
          ],
          [
            'Host Gateway',
            'VTI Gateway GW22-D dual-band (Modbus TCP, MQTT over TLS, IEC 60870-5-104)',
          ],
        ],
      },
    ],
    standards: [
      {
        name: 'IEEE 738 · CIGRE TB 601',
        text: 'Thermal rating methods for overhead conductors, used in the utility’s DLR / ampacity calculation. VTI-TS-26 provides the measured connection-temperature input.',
      },
      {
        name: 'IEEE Std 2969-2025',
        text: 'Guide for continuous thermal monitoring. VTI clamp-on sensors are installed with the circuit isolated, earthed and proved dead, consistent with IEEE Std 2969-2025.',
      },
      {
        name: 'CIGRE TB 999',
        text: 'Lifelong Supervision and Management of Substations by Use of Sensors — Table 2.8-1 references the energy-harvesting thermal sensor.',
      },
    ],
    safetyNote: clampOnSafetyNote,
    // VTI-TS-26 datasheets and type-test reports are not public — the page offers a
    // request (routed to Pragna, which obtains them from VTI) instead of a download.
    brochure: null,
    documentRequest: {
      label: 'Request Datasheet & Type-Test Reports',
      subject: 'Datasheet & type-test report request – VTI-TS-26',
      note: 'Datasheets and type-test reports for VTI-TS-26 are not public and are available on request.',
    },
  },
  {
    slug: 'tbr22-temperature-sensor',
    seoDescription:
      'TBR22 wireless temperature sensor for busbars, cable terminations and contact points: ±1 °C, IP67, up to 500 kV, self-powered or 10-year battery.',
    name: 'TBR22 Temperature Sensor',
    category: 'sensors',
    icon: 'Thermometer',
    tagline: 'Continuous, battery-efficient temperature monitoring',
    summary:
      'Compact wireless sensors that continuously track temperature at critical points inside electrical cabinets, busbars and joints — helping you prevent overheating before it becomes failure.',
    image: '/tbr22-sensor.jpg',
    safetyNote: clampOnSafetyNote,
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
    image: '/OIP.jpg',
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
    seoDescription:
      'GWC-24-IB-TH data collector: 2.4 GHz wireless sensor gateway with Modbus TCP/RTU, IEC 60870-5-104, Ethernet, Wi-Fi, 4G LTE and RS485.',
    name: 'Data Collectors',
    category: 'gateway',
    icon: 'Router',
    tagline: 'Wireless Sensor Gateway & Multi-Protocol Controller (GWC-24-IB-TH)',
    summary:
      'Collects data from wireless sensors utilizing 2.4GHz wireless technology with 16 channels, forwarding readings to central monitoring or SCADA via RJ45 Ethernet, Wi-Fi, 4G LTE, or RS485.',
    image: '/gwc-3g-16-tt-1.png',
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
    seoDescription:
      'Centralised AI monitoring platform to visualise, analyse and diagnose electrical equipment condition across substations and plants, with alerts.',
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

const DTS_PAGE = '/products/dts-vti-gl-100c'

// Solutions grouped by technology. Each item renders with id={slug} so other pages
// can deep-link to it (e.g. /solutions#transmission-line-dlr).
export const solutionGroups = [
  {
    id: 'electrical-asset-monitoring',
    eyebrow: 'Wireless Point Sensing',
    title: 'Electrical asset monitoring',
    description:
      'Wireless temperature and environmental sensors, data collectors and the AI platform for substations, power plants and switchgear.',
    items: [
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
          'Installed during a planned outage; no wiring and no change to the switchgear. After installation, monitoring is continuous and non-intrusive.',
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
    ],
  },
  {
    id: 'distributed-temperature-sensing',
    eyebrow: 'Fibre-Optic DTS · VTI-GL-100C',
    title: 'Distributed Temperature Sensing (DTS)',
    description:
      'Fibre-optic DTS for buried and long-run cables — a continuous thermal profile alongside point sensors. One armoured fibre gives a continuous temperature profile every 0.5 m over kilometres, with no electrical power and no electronics in the field.',
    items: [
      {
        slug: 'dts-busway',
        name: 'Busway Monitoring',
        icon: 'Building2',
        audience:
          'Data centres, high-rise commercial buildings, hospitals, metro systems and large factories',
        summary:
          'The sensing fibre runs along the full length of the busway, including every joint and tap-off. Loose or oxidised joints show up as a local temperature rise against the neighbouring sections, long before insulation damage or a busway fire. One controller covers up to 4 busway risers or runs.',
        points: [
          'Alarms on temperature rise against adjacent sections and on rate of rise',
          'DTS for the route + VTI point sensors for the critical joints',
        ],
        link: { to: `${DTS_PAGE}#busway`, label: 'View VTI-GL-100C' },
      },
      {
        slug: 'dts-oil-gas',
        name: 'Oil & Gas Pipelines and Tanks',
        icon: 'Fuel',
        audience: 'Refineries, terminals, tank farms, LPG bottling plants, pipeline operators',
        summary:
          'Continuous temperature profiling along pipelines, on storage tank shells, floating-roof rim seals and LPG spheres. Abnormal heating or cooling points are located to within metres, for early fire detection and leak indication where the product temperature differs from ambient (heated crude, steam, LPG/LNG). The sensing fibre is passive – no electrical energy in the hazardous area – and the optical source is certified Ex op is (inherently safe optical radiation) to IEC 60079-28. 16 relay outputs can trigger fire-suppression or shutdown interlocks.',
        link: { to: `${DTS_PAGE}#oil-gas`, label: 'View VTI-GL-100C' },
      },
      {
        slug: 'dts-chemical-petrochemical',
        name: 'Chemical & Petrochemical Plants',
        icon: 'FlaskConical',
        summary:
          'Monitoring of reactors, process piping, tank farms and cable trays in process areas, with zone-based alarms on a plant GIS map and direct interlock to fire-protection systems.',
        link: { to: `${DTS_PAGE}#chemical-petrochemical`, label: 'View VTI-GL-100C' },
      },
      {
        slug: 'dts-mining',
        name: 'Mining & Conveyors',
        icon: 'Pickaxe',
        audience: 'Coal and mineral mines, steel plants, cement, ports, power plant coal handling',
        summary:
          'Kilometres of conveyor belt monitored with one fibre: idler and roller bearing overheating, belt friction and spontaneous coal ignition are detected and located before they become a fire. Armoured cable rated ≤ 5000 N/10 cm crush, for harsh environments and underground tunnels.',
        link: { to: `${DTS_PAGE}#mining`, label: 'View VTI-GL-100C' },
      },
      {
        slug: 'dts-cable-tunnels',
        name: 'Cable Tunnels',
        icon: 'Zap',
        audience: 'Power cable tunnels, trenches and trays',
        summary:
          'HV cable overheating, insulation breakdown and fire detection — in underground high-voltage transmission cable tunnels and substation trenches, with metre-level accuracy.',
        link: { to: `${DTS_PAGE}#cable-tunnels`, label: 'View VTI-GL-100C' },
      },
    ],
  },
  {
    id: 'transmission-lines',
    eyebrow: 'Overhead Lines · VTI-TS-26',
    title: 'Transmission lines & DLR',
    description:
      'Splices, dead-ends and lug landings on 110–500 kV lines — hot-spot detection and inputs for dynamic line rating.',
    items: [
      {
        slug: 'transmission-line-dlr',
        name: 'Transmission-Line Connection Monitoring and DLR Input',
        icon: 'UtilityPole',
        summary:
          'VTI-TS-26 provides measured temperature of conductor connections (splices, dead-ends, jumpers), for hot-spot detection and as a real-time input to the utility’s DLR / ampacity calculation (IEEE 738, CIGRE TB 601). The rating calculation also needs weather data and the utility’s own rating engine.',
        points: [
          'Mid-span tension splices, dead-end clamps and jumper loops on 110–500 kV lines',
          'LoRa sub-GHz, IN865 band for India — range up to 3 km line-of-sight',
          'Self-powered from line current ≥ 1 A, no battery',
        ],
        link: { to: '/products/vti-ts-26', label: 'View VTI-TS-26' },
      },
    ],
  },
]

// `link.text` must appear verbatim in `description`; that phrase is rendered as a link.
export const industries = [
  {
    name: 'Energy & Power',
    icon: 'Zap',
    description:
      'Generation, transmission and distribution infrastructure — from power plants and substations to transmission-line corridors.',
    link: { text: 'transmission-line corridors', to: '/solutions#transmission-line-dlr' },
  },
  {
    name: 'Oil, Gas & Chemicals',
    icon: 'Fuel',
    description:
      'Refineries, terminals, tank farms, LPG bottling plants, pipelines and chemical plants — continuous fibre-optic temperature profiling for early fire detection and leak indication.',
    link: {
      text: 'continuous fibre-optic temperature profiling',
      to: '/solutions#dts-oil-gas',
    },
  },
  {
    name: 'Mining & Heavy Industry',
    icon: 'Pickaxe',
    description:
      'Coal and mineral mines, steel plants, cement, ports and power plant coal handling — kilometres of conveyor belt monitored with one fibre.',
    link: { text: 'kilometres of conveyor belt monitored with one fibre', to: '/solutions#dts-mining' },
  },
  {
    name: 'Industrial & Manufacturing',
    icon: 'Factory',
    description:
      'Plants and facilities that rely on early fault detection, predictive maintenance and process safety to stay productive.',
  },
  {
    name: 'Building Electrical Distribution System',
    icon: 'Building2',
    description:
      'Electrical distribution systems in multi-story apartments & commercial malls, ensuring continuous thermal monitoring and safety across switchgears, busways / busducts, busbars and panels.',
    link: { text: 'busways / busducts', to: '/solutions#dts-busway' },
  },
  {
    name: 'Healthcare & Cold Chain',
    icon: 'HeartPulse',
    description:
      'Temperature-sensitive environments such as hospitals, laboratories and pharmaceutical cold chains that demand continuous assurance.',
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
      'A next-generation technology consulting team with deep expertise in hardware.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Reliable Operation',
    description:
      '24/7 automated monitoring and alerting engineered for continuous, dependable performance in demanding environments.',
  },
  {
    icon: 'Globe2',
    title: 'Authorised VTI Corporation (Vietnam) Distributor',
    description:
      'We are the authorised distributors of wireless sensor VTI Corporation (Vietnam) in India, delivering certified, high-grade hardware.',
  },
]

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Contact', path: '/contact' },
]
