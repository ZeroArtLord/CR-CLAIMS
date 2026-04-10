import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoHorizontal from "../../assets/logo-horizontal.png";
import logoVertical from "../../assets/logo-vertical.png";
import { useLanguage } from "../LanguageContext";

export function Header() {
  const { content, lang, setLang } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const closeMobileMenu = () => setIsMobileOpen(false);

  // Cerrar menú de idioma si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        languageButtonRef.current &&
        !languageMenuRef.current.contains(event.target as Node) &&
        !languageButtonRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Manejar timer para cerrar automáticamente
  const startCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setIsLanguageMenuOpen(false);
    }, 2000); // Cerrar después de 2 segundos de inactividad
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleLanguageButtonMouseEnter = () => {
    clearCloseTimer();
    setIsLanguageMenuOpen(true);
  };

  const handleLanguageMenuMouseEnter = () => {
    clearCloseTimer();
  };

  const handleLanguageMenuMouseLeave = () => {
    startCloseTimer();
  };

  const handleLanguageSelect = (selectedLang: "en" | "es") => {
    setLang(selectedLang);
    setIsLanguageMenuOpen(false);
    clearCloseTimer();
  };

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

        {/* Desktop Right Section: Language + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle - Premium Flags Only */}
          <div className="relative">
            <button
              ref={languageButtonRef}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border/30 bg-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/90"
              aria-label="Language menu"
              onMouseEnter={handleLanguageButtonMouseEnter}
              onMouseLeave={startCloseTimer}
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <span className="text-lg">
                {lang === "en" ? "🇺🇸" : "🇪🇸"}
              </span>
            </button>
            
            {/* Language Menu */}
            {isLanguageMenuOpen && (
              <div
                ref={languageMenuRef}
                className="absolute right-0 mt-2 w-32 rounded-xl border border-border/40 bg-white/95 backdrop-blur-lg shadow-xl z-50"
                onMouseEnter={handleLanguageMenuMouseEnter}
                onMouseLeave={handleLanguageMenuMouseLeave}
              >
                <button
                  onClick={() => handleLanguageSelect("en")}
                  className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 hover:bg-accent/10 transition-colors rounded-t-xl ${
                    lang === "en" ? "text-foreground bg-accent/5" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-base">🇺🇸</span>
                  <span>English</span>
                </button>
                <button
                  onClick={() => handleLanguageSelect("es")}
                  className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 hover:bg-accent/10 transition-colors rounded-b-xl ${
                    lang === "es" ? "text-foreground bg-accent/5" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-base">🇪🇸</span>
                  <span>Español</span>
                </button>
              </div>
            )}
          </div>

          {/* Desktop CTA */}
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
            <p className="text-xs text-muted-foreground mb-2">Language / Idioma</p>
            <div className="flex gap-2">
              <button
                onClick={() => setLang("en")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                  lang === "en" 
                    ? "bg-accent text-white shadow-md shadow-accent/30" 
                    : "text-foreground/70 hover:text-foreground hover:bg-white/90 border border-border/30"
                }`}
              >
                <span className="text-base">🇺🇸</span>
                <span>English</span>
              </button>
              <button
                onClick={() => setLang("es")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                  lang === "es" 
                    ? "bg-accent text-white shadow-md shadow-accent/30" 
                    : "text-foreground/70 hover:text-foreground hover:bg-white/90 border border-border/30"
                }`}
              >
                <span className="text-base">🇪🇸</span>
                <span>Español</span>
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
