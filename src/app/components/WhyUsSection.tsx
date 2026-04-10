import { DollarSign, Zap, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "No Upfront Fees",
    description: "We only get paid when you do. Zero risk, maximum results.",
  },
  {
    icon: Zap,
    title: "Fast Emergency Response",
    description: "24/7 availability for urgent claims. We act immediately.",
  },
  {
    icon: Shield,
    title: "We Represent You",
    description: "Your advocate, not the insurer's. We work solely for homeowners.",
  },
  {
    icon: Award,
    title: "Licensed Florida Experts",
    description: "State-certified adjusters with deep local expertise.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 xl:px-16 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 lg:mb-20">
          <h2 className="text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] mb-4 lg:mb-6 tracking-tight text-foreground">Why Choose Us</h2>
          <p className="text-muted-foreground lg:text-lg">Your advocates, your results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 xl:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[2rem] lg:rounded-[2rem] p-7 lg:p-10 shadow-xl shadow-black/6 hover:shadow-2xl hover:shadow-black/8 transition-all duration-300 border border-border/30"
              >
                <div className="flex items-start gap-5 lg:gap-6">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-[1.25rem] lg:rounded-[1.25rem] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-accent" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-xl xl:text-2xl mb-3 lg:mb-3 tracking-tight text-foreground">{benefit.title}</h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}