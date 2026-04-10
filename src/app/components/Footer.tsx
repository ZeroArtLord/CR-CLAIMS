import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoVertical from "../../assets/logo-vertical.svg";

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-white border-t border-border/40">
      <div className="max-w-md lg:max-w-[1600px] mx-auto">
        {/* Final CTA */}
        <div className="text-center mb-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-[2.5rem] p-10 border border-accent/10 shadow-lg shadow-black/5">
          <h2 className="text-[2rem] mb-4 tracking-tight text-foreground">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
            Don't settle for less than you deserve. Get your free inspection today.
          </p>
          <button className="w-full lg:w-auto bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-[1.5rem] transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-[0_20px_60px_-15px] hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] text-base font-medium">
            Contact Us Now
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 lg:mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <img 
              src={logoVertical} 
              alt="CR Claims Resolution" 
              className="h-20 w-auto mb-6 mx-auto lg:mx-0"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Florida's trusted public adjusters fighting for homeowners since 2004.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4 lg:mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Water Damage</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Storm & Hurricane</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fire Damage</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Flood Claims</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Emergency Response</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4 lg:mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">(888) 555-CLAIMS</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@crclaimsresolution.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Serving all of Florida</span>
              </div>

              {/* Social Links */}
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

        {/* Copyright */}
        <div className="text-center lg:text-left pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © 2026 CR Claims Resolution. Licensed Public Adjusters in Florida. All rights reserved. License #PA12345
          </p>
        </div>
      </div>
    </footer>
  );
}