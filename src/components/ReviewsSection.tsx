import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex R.",
    rating: 5,
    text: "The RTX 4090 in a laptop is insane. I'm hitting 120+ fps at QHD on every AAA title. Best purchase I've ever made.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Cooling is phenomenal — I've never heard the fans ramp up during heavy gaming sessions. Build quality is top-notch.",
  },
  {
    name: "Marcus T.",
    rating: 4,
    text: "Display is absolutely gorgeous. The 240Hz panel is buttery smooth. Only wish it were a bit lighter for travel.",
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-2">What Gamers Say</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Player <span className="gradient-neon-text">Reviews</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < r.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
            <p className="font-heading text-sm font-bold text-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
