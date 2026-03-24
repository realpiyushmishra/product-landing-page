import heroLaptop from "@/assets/hero-laptop.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Background glow */}
    <div className="absolute inset-0 bg-surface-dark" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
      {/* Text */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary animate-pulse-glow">
          Next-Gen Gaming Performance
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
          <span className="text-foreground">NEXUS</span>{" "}
          <span className="gradient-neon-text">PRO X</span>
        </h1>
        <p className="font-heading text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
          Unleash raw power with RTX 4090, Intel i9-14900HX, and a 240Hz QHD display. 
          Dominate every frame.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#pricing"
            className="gradient-neon px-8 py-3 rounded-lg font-heading text-base uppercase tracking-wider text-primary-foreground font-bold hover:opacity-90 transition-all box-glow-cyan"
          >
            Pre-Order Now
          </a>
          <a
            href="#features"
            className="border border-primary/40 px-8 py-3 rounded-lg font-heading text-base uppercase tracking-wider text-primary hover:bg-primary/10 transition-all"
          >
            Explore Features
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroLaptop}
          alt="Nexus Pro X Gaming Laptop"
          width={1024}
          height={768}
          className="w-full max-w-lg lg:max-w-xl animate-float drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
