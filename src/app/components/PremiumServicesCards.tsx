import { Droplets, Wind, Flame, Waves } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Water Damage",
    description: "Burst pipes, leaks, and flooding—we handle every water-related claim with precision.",
    gradient: "from-blue-50/80 to-cyan-50/40",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Wind,
    title: "Storm & Hurricane Damage",
    description: "Florida's severe weather demands expert handling. We secure full compensation for all storm damage.",
    gradient: "from-slate-50/80 to-gray-50/40",
    iconBg: "bg-gradient-to-br from-slate-100 to-slate-50",
    iconColor: "text-slate-600",
  },
  {
    icon: Flame,
    title: "Fire Damage",
    description: "Complex fire and smoke claims require specialized expertise. We fight for every dollar.",
    gradient: "from-orange-50/80 to-amber-50/40",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Waves,
    title: "Flood Damage",
    description: "Navigate flood insurance complexities with confidence and maximize your settlement.",
    gradient: "from-cyan-50/80 to-teal-50/40",
    iconBg: "bg-gradient-to-br from-cyan-100 to-cyan-50",
    iconColor: "text-cyan-600",
  },
];

export function PremiumServicesCards() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] mb-5 lg:mb-6 tracking-tight leading-tight text-foreground">
            Specialized Claim Services
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Expert representation across all property damage types
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-[2.25rem] lg:rounded-[2.5rem] p-8 lg:p-10 shadow-xl shadow-black/8 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-white/60`}
              >
                {/* Soft lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent rounded-[2.25rem] lg:rounded-[2.5rem] pointer-events-none"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-20 h-20 lg:w-24 lg:h-24 ${service.iconBg} rounded-[1.75rem] lg:rounded-[2rem] flex items-center justify-center mb-7 lg:mb-8 shadow-md shadow-black/5`}>
                    <Icon className={`w-10 h-10 lg:w-12 lg:h-12 ${service.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <div className="mb-4 lg:mb-5">
                    <h3 className="text-[1.85rem] lg:text-[2rem] mb-4 lg:mb-4 tracking-tight leading-tight text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-foreground/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium transition-colors gap-1"
                  >
                    Learn More
                    <span className="text-base">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}