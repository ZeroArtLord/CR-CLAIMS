import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoVertical from "../../assets/logo-vertical.svg";

export function HeroSection() {
  return (
    <section className="pt-24 lg:pt-28 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left: Text Content */}
          <div className="lg:order-1 mb-10 lg:mb-0">
            {/* Subtle Logo - Desktop only */}
            <div className="hidden lg:block mb-6 lg:mb-8">
              <img 
                src={logoVertical} 
                alt="CR Claims Resolution Shield" 
                className="h-14 lg:h-16 w-auto opacity-80"
              />
            </div>

            {/* Hero Text */}
            <div className="space-y-5 lg:space-y-6 mb-10 lg:mb-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight text-foreground">
                Get the Insurance Claim You Deserve with{" "}
                <span className="text-accent font-normal">Fast Action</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Florida's trusted public adjusters maximizing your settlement. We fight for homeowners, not insurance companies.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] text-base font-light">
                Schedule Free Inspection
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-background text-foreground px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-border/30 hover:scale-[1.02] active:scale-[0.98] text-base">
                Call Now
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:order-2 mt-12 lg:mt-0">
            <div className="relative w-full h-[360px] lg:h-[500px] xl:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647845500173-bd9aed7d8fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYW5vcmFtaWMlMjBsaXZpbmclMjByb29tJTIwcmVzdG9yZWQlMjB3aWRlfGVufDF8fHx8MTc3NTY3OTQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beautifully restored luxury home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}