import { Droplets, Wind, Flame, Waves } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Droplets,
    title: "Water Damage",
    description:
      "Water damage doesn't wait -- and neither should you. From burst pipes and appliance leaks to roof failures, water can cause serious damage fast and lead to mold or structural issues if not addressed correctly. Whether your claim is new or already in progress, CR Claims Resolution specializes in water damage insurance claims across Florida, ensuring nothing is overlooked and your compensation reflects the true cost of repairs.",
    gradient: "sm:from-blue-50/70 sm:to-blue-50/20",
    iconBg: "bg-gradient-to-br from-blue-100/90 to-blue-50/80",
    iconColor: "text-blue-600",
  },
  {
    icon: Wind,
    title: "Storm & Hurricane Damage",
    description:
      "Florida storms can be relentless. Hurricanes, tropical storms, high winds, and heavy rain often cause roof damage, interior leaks, and hidden structural problems that insurance companies may downplay. Our certified public adjusters have extensive experience handling storm and hurricane insurance claims in Florida, making sure every detail is documented and properly claimed. Don't settle for less after the storm passes.",
    gradient: "sm:from-slate-50/70 sm:to-slate-50/20",
    iconBg: "bg-gradient-to-br from-slate-100/90 to-slate-50/80",
    iconColor: "text-slate-600",
  },
  {
    icon: Flame,
    title: "Fire Damage",
    description:
      "A fire can turn your life upside down in a matter of minutes. Beyond the visible destruction, fire damage often includes smoke, soot, and structural issues that insurance companies tend to undervalue. At CR Claims Resolution, our licensed public adjusters handle your fire insurance claim from start to finish, protecting your rights and fighting to maximize your settlement. You focus on rebuilding -- we handle the claim.",
    gradient: "sm:from-orange-50/70 sm:to-orange-50/20",
    iconBg: "bg-gradient-to-br from-orange-100/90 to-orange-50/80",
    iconColor: "text-orange-600",
  },
  {
    icon: Waves,
    title: "Flood Damage",
    description:
      "Flooding is one of the most destructive and stressful losses a property owner can face in Florida. Whether caused by heavy rain, storm surge, or rising water levels, flood damage can impact foundations, electrical systems, and personal property. CR Claims Resolution helps you navigate complex flood insurance claims, working diligently to secure the compensation you need to recover and rebuild with confidence.",
    gradient: "sm:from-cyan-50/70 sm:to-cyan-50/20",
    iconBg: "bg-gradient-to-br from-cyan-100/90 to-cyan-50/80",
    iconColor: "text-cyan-600",
  },
];

export function PremiumServicesCards() {
  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-24 px-6 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-5 lg:mb-6 tracking-tight leading-tight text-foreground font-light">
              Claims We Handle
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive property insurance claim support across Florida
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 90}>
                <div
                  className={`relative bg-white sm:bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-[2.25rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/8 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-border/20 sm:border-white/60 flex flex-col`}
                >
                  {/* Soft lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent rounded-[2.25rem] lg:rounded-[2.5rem] pointer-events-none"></div>

                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${service.iconBg} rounded-[1.5rem] sm:rounded-[1.75rem] lg:rounded-[2rem] flex items-center justify-center mb-6 sm:mb-7 lg:mb-8 shadow-md shadow-black/5`}>
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <div className="mb-4 lg:mb-5">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 lg:mb-4 tracking-tight leading-tight text-foreground font-medium">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[0.9rem] sm:text-sm lg:text-base text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <a
                      href="#contact"
                      className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium transition-colors gap-1 mt-auto"
                    >
                      Learn More
                      <span className="text-base">-&gt;</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
