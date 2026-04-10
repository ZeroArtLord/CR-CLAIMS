import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoHorizontal from "../../assets/logo-horizontal.png";
import logoVertical from "../../assets/logo-vertical.png";
import { useLanguage } from "../LanguageContext";

export function Header() {
  const { content, lang, setLang } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border/20 shadow-soft">
      <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="lg:hidden">
            <img 
              src={logoVertical} 
              alt="CR Claims Resolution" 
              className="h-10 w-auto sm:h-12"
              style={{ 
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                WebkitFilter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
              }}
            />
          </div>
          
          <div className="hidden lg:block">
            <img 
              src={logoHorizontal} 
              alt="CR Claims Resolution" 
              className="h-12 w-auto lg:h-14"
              style={{ 
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                WebkitFilter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
              }}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {content.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm xl:text-base text-foreground/70 hover:text-foreground transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle - Desktop */}
        <div className="hidden lg:block">
          <div className="relative group">
            <button
              className="flex items-center gap-2 rounded-full border border-border/30 bg-white/80 px-3 py-2 text-xs font-medium text-foreground/80 shadow-sm hover:text-foreground transition-colors"
              aria-label="Language menu"
            >
              <span className="inline-flex items-center gap-2">
                {lang === "en" ? "🇺🇸" : "🇪🇸"}
                {lang === "en" ? "EN" : "ES"}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
            <div className="absolute right-0 mt-2 w-40 rounded-xl border border-border/40 bg-white/95 backdrop-blur-lg shadow-xl opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
              <button
                onClick={() => setLang("en")}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-accent/10 ${
                  lang === "en" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => setLang("es")}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-accent/10 ${
                  lang === "es" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                🇪🇸 Español
              </button>
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent/90 text-white px-6 xl:px-8 py-3 xl:py-3.5 rounded-[1rem] transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] text-sm xl:text-base inline-flex items-center justify-center"
          >
            {content.headerCta}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-11 h-11 rounded-[1rem] bg-white flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-md shadow-black/5 border border-border/30"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileOpen ? "max-h-[520px]" : "max-h-0"}`}
      >
        <div className="px-6 pb-6 pt-2 bg-white/95 backdrop-blur-lg border-t border-border/20 shadow-soft">
          <nav className="flex flex-col gap-4">
            {content.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 rounded-2xl border border-border/30 bg-white/70 px-4 py-3">
            <p className="text-xs text-muted-foreground mb-2">Language</p>
            <div className="flex gap-2">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  lang === "en" ? "bg-accent text-white" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  lang === "es" ? "bg-accent text-white" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                🇪🇸 Español
              </button>
            </div>
          </div>

          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-6 inline-flex w-full items-center justify-center bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-[1rem] transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
          >
            {content.headerCta}
          </a>
        </div>
      </div>
    </header>
  );
}
