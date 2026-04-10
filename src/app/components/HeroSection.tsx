import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoVertical from "../../assets/logo-vertical.svg";

export function HeroSection() {
  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-12 xl:px-16 bg-background">
      <div className="max-w-[1600px] mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:items-center">
          {/* Left: Text Content */}
          <div className="lg:order-1 mb-12 lg:mb-0">
            {/* Subtle Logo - Desktop only */}
            <div className="hidden lg:block mb-8 lg:mb-10">
              <img 
                src={logoVertical} 
                alt="CR Claims Resolution Shield" 
                className="h-16 lg:h-20 w-auto opacity-90"
              />
            </div>

            {/* Hero Text */}
            <div className="space-y-6 lg:space-y-8 mb-12 lg:mb-12 text-center lg:text-left">
              <h1 className="text-[2.75rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.1] tracking-tight text-foreground">
                Get the Insurance Claim You Deserve with{" "}
                <span className="text-accent">Fast Action</span>
              </h1>
              <p className="text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Florida's trusted public adjusters maximizing your settlement. We fight for homeowners, not insurance companies.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="w-full lg:w-auto bg-accent hover:bg-accent/90 text-white px-10 lg:px-10 py-6 lg:py-6 rounded-[1.5rem] transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-[0_20px_60px_-15px] hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] text-base lg:text-lg font-medium">
                Schedule Free Inspection
              </button>
              <button className="w-full lg:w-auto bg-white hover:bg-secondary text-foreground px-10 lg:px-10 py-6 lg:py-6 rounded-[1.5rem] transition-all duration-300 shadow-lg hover:shadow-xl border border-border/40 hover:scale-[1.02] active:scale-[0.98] text-base lg:text-lg">
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