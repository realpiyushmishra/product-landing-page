const specs = [
  ["Processor", "Intel Core i9-14900HX (24C/32T)"],
  ["Graphics", "NVIDIA RTX 4090 16 GB GDDR6X"],
  ["Display", '16" QHD+ 240 Hz, 3ms, 100% DCI-P3'],
  ["Memory", "64 GB DDR5-5600 MHz (2x32 GB)"],
  ["Storage", "2 TB PCIe Gen 4 NVMe SSD (×2 slots)"],
  ["Battery", "99.9 Wh, 330 W adapter, USB-C PD"],
  ["Keyboard", "Per-key RGB mechanical, 1.8mm travel"],
  ["Connectivity", "Wi-Fi 7, Bluetooth 5.4, Thunderbolt 4"],
  ["Audio", "6-speaker Dolby Atmos array"],
  ["Weight", "2.6 kg / 5.73 lbs"],
];

const SpecsSection = () => (
  <section id="specs" className="py-24 bg-surface-dark relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-secondary mb-2">Under the Hood</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Technical <span className="gradient-neon-text">Specifications</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl overflow-hidden">
        {specs.map(([label, value], i) => (
          <div
            key={label}
            className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 ${
              i !== specs.length - 1 ? "border-b border-border" : ""
            } hover:bg-muted/30 transition-colors`}
          >
            <span className="font-heading text-sm uppercase tracking-wider text-muted-foreground">{label}</span>
            <span className="text-foreground font-medium text-sm">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecsSection;
