import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoVertical from "../../assets/logo-vertical.png";
import { useLanguage } from "../LanguageContext";

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="py-16 px-6 bg-white border-t border-border/40">
      <div className="max-w-md lg:max-w-[1600px] mx-auto">
        <div className="text-center mb-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-[2.5rem] p-10 border border-accent/10 shadow-lg shadow-black/5">
          <h2 className="text-[2rem] mb-4 tracking-tight text-foreground">{content.footer.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">{content.footer.ctaBody}</p>
          <a
            href="#contact"
            className="w-full lg:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-[1.5rem] transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-[0_20px_60px_-15px] hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] text-base font-medium"
          >
            {content.footer.ctaButton}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 lg:mb-12">
          <div className="lg:col-span-1 text-center lg:text-left">
            <img
              src={logoVertical}
              alt="CR Claims Resolution"
              className="h-20 w-auto mb-6 mx-auto lg:mx-0"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                WebkitFilter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
              }}
            />
            <p className="text-sm text-muted-foreground leading-relaxed">{content.footer.about}</p>
          </div>

          <div>
            <h4 className="font-medium mb-4 lg:mb-6">{content.footer.claims}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {content.footer.startClaim}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">{content.footer.servingState}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 lg:mb-6">{content.footer.services}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {content.services.items[0].title}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {content.services.items[1].title}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {content.services.items[2].title}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {content.services.items[3].title}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 lg:mb-6">{content.footer.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (407) 358-4589</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@crclaimsflorida.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Orlando, FL 32837</span>
              </div>
              <p className="text-xs text-muted-foreground">{content.footer.servingLocal}</p>

              <div className="flex gap-3 pt-4">
                <a href="#" className="w-9 h-9 bg-accent/10 rounded-[0.75rem] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-accent/10 rounded-[0.75rem] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-accent/10 rounded-[0.75rem] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-accent/10 rounded-[0.75rem] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left pt-8 border-t border-border/50 space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <p className="text-xs text-muted-foreground">{content.footer.copyright}</p>
            <div className="flex items-center justify-center lg:justify-end gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">{content.footer.privacy}</a>
              <a href="#" className="hover:text-foreground transition-colors">{content.footer.terms}</a>
            </div>
          </div>
          <p className="text-[0.7rem] text-muted-foreground/80 leading-relaxed max-w-3xl lg:max-w-[900px] lg:mx-0 mx-auto">
            {content.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}