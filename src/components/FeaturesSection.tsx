import { Cpu, MonitorPlay, Wind, BatteryCharging } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Intel i9-14900HX",
    desc: "24 cores of desktop-class performance. Turbo up to 5.8 GHz for unmatched multitasking.",
    color: "text-primary",
  },
  {
    icon: MonitorPlay,
    title: "RTX 4090 16GB",
    desc: "Ray tracing, DLSS 3, and Ada Lovelace architecture deliver photorealistic gaming.",
    color: "text-secondary",
  },
  {
    icon: Wind,
    title: "Vapor Chamber Cooling",
    desc: "Liquid metal thermal compound with dual-fan system keeps temps under control.",
    color: "text-neon-red",
  },
  {
    icon: BatteryCharging,
    title: "99.9 Wh Battery",
    desc: "All-day productivity with rapid charge — 50% in just 30 minutes.",
    color: "text-primary",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-2">Engineered to Win</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Powerhouse <span className="gradient-neon-text">Features</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
          >
            <f.icon className={`w-10 h-10 ${f.color} mb-4 group-hover:scale-110 transition-transform`} />
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
