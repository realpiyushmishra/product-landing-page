import heroLaptop from "@/assets/hero-laptop.jpg";
import galleryKeyboard from "@/assets/gallery-keyboard.jpg";
import gallerySide from "@/assets/gallery-side.jpg";
import galleryScreen from "@/assets/gallery-screen.jpg";

const images = [
  { src: heroLaptop, alt: "Nexus Pro X front view" },
  { src: galleryKeyboard, alt: "RGB mechanical keyboard close-up" },
  { src: gallerySide, alt: "Side profile and ports" },
  { src: galleryScreen, alt: "Display in action" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-2">Every Angle</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Product <span className="gradient-neon-text">Gallery</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img) => (
          <div
            key={img.alt}
            className="overflow-hidden rounded-xl border border-border group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
