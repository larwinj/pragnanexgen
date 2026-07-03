// Explicit icon registry so Vite can tree-shake lucide-react.
// Add any new icon name used in data/site.js here.
import {
  Thermometer,
  Wind,
  Camera,
  Cpu,
  Flame,
  Router,
  BrainCircuit,
  Workflow,
  Zap,
  Factory,
  Snowflake,
  Server,
  Gauge,
  HeartPulse,
  Layers,
  GraduationCap,
  ShieldCheck,
  Globe2,
  Lightbulb,
  Users,
  Gem,
  FileText,
  FileSpreadsheet,
  Presentation,
  BookOpen,
  Circle,
} from 'lucide-react'

const registry = {
  Thermometer,
  Wind,
  Camera,
  Cpu,
  Flame,
  Router,
  BrainCircuit,
  Workflow,
  Zap,
  Factory,
  Snowflake,
  Server,
  Gauge,
  HeartPulse,
  Layers,
  GraduationCap,
  ShieldCheck,
  Globe2,
  Lightbulb,
  Users,
  Gem,
  FileText,
  FileSpreadsheet,
  Presentation,
  BookOpen,
}

// Renders a lucide-react icon by name, e.g. <Icon name="Zap" className="h-6 w-6" />
export default function Icon({ name, ...props }) {
  const LucideIcon = registry[name] || Circle
  return <LucideIcon {...props} />
}
