import { Menu } from "lucide-react";
import logoHorizontal from "../../assets/logo-horizontal.svg";
import logoVertical from "../../assets/logo-vertical.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm shadow-black/5">
      <div className="px-6 lg:px-12 xl:px-16 py-5 lg:py-6 flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo - Vertical on mobile, Horizontal on desktop */}
        <div className="flex items-center lg:hidden">
          <img 
            src={logoVertical} 
            alt="CR Claims Resolution" 
            className="h-12 w-auto"
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
          />
        </div>
        
        <div className="hidden lg:flex items-center">
          <img 
            src={logoHorizontal} 
            alt="CR Claims Resolution" 
            className="h-14 w-auto"
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm xl:text-base text-foreground/70 hover:text-foreground transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="bg-accent hover:bg-accent/90 text-white px-6 xl:px-8 py-3 xl:py-3.5 rounded-[1rem] transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] text-sm xl:text-base">
            Schedule Free Inspection
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-11 h-11 rounded-[1rem] bg-white flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-md shadow-black/5 border border-border/30"
          aria-label="Menu"
        >
          <Menu className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}