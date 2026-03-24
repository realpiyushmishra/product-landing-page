import { Gamepad2 } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-surface-dark border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold tracking-wider mb-3">
            <Gamepad2 className="w-5 h-5 text-primary" />
            <span className="gradient-neon-text">NEXUS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Next-generation gaming laptops engineered for champions.
          </p>
        </div>
        {[
          { title: "Product", links: ["Overview", "Specs", "Gallery", "Reviews"] },
          { title: "Support", links: ["FAQ", "Warranty", "Contact", "Returns"] },
          { title: "Company", links: ["About", "Careers", "Press", "Partners"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nexus Gaming. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
