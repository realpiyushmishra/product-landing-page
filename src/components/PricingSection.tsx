import { Zap } from "lucide-react";

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-surface-dark relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-secondary mb-2">Invest in Victory</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Get the <span className="gradient-neon-text">Nexus Pro X</span>
        </h2>
      </div>

      <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-500 box-glow-cyan">
        <p className="font-heading text-sm text-muted-foreground uppercase tracking-wider mb-1">Starting at</p>
        <p className="font-display text-5xl font-black text-foreground mb-1">
          $3,499
        </p>
        <p className="text-muted-foreground text-sm mb-6">or $291/mo for 12 months at 0% APR</p>

        <button className="w-full gradient-neon px-8 py-4 rounded-xl font-heading text-lg uppercase tracking-wider text-primary-foreground font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" />
          Pre-Order Now
        </button>

        <p className="text-xs text-muted-foreground mt-4">Free shipping · 2-year warranty · 30-day returns</p>
      </div>
    </div>
  </section>
);

export default PricingSection;
