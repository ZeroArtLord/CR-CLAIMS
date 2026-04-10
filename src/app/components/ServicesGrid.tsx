import { Droplets, Wind, Flame, Waves } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Water",
    description: "Damage Claims Resolved",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Wind,
    title: "Storm/Hurricane",
    description: "Full Recovery Support",
    color: "bg-slate-50",
    iconColor: "text-slate-600",
  },
  {
    icon: Flame,
    title: "Fire",
    description: "Rapid Claim Processing",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Waves,
    title: "Flood",
    description: "Maximum Compensation Secured",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] mb-3 tracking-tight">Our Expertise</h2>
          <p className="text-muted-foreground">Comprehensive claim assistance</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer border border-border/50"
              >
                <div className={`w-14 h-14 ${service.color} rounded-[1.25rem] flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg mb-1 tracking-tight">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
