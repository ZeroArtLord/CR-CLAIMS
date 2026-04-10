import { TrendingUp, Users, Clock, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Response",
  },
  {
    icon: TrendingUp,
    value: "Maximized",
    label: "Insurance Settlement",
  },
  {
    icon: Users,
    value: "No Fees",
    label: "Unless You Get Paid",
  },
  {
    icon: Award,
    value: "Licensed",
    label: "Public Adjusters (Florida)",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-12 xl:px-16 bg-gradient-to-b from-white to-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-accent/5 via-white to-accent/5 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-16 border border-accent/10 shadow-xl shadow-black/5 relative overflow-hidden">
          {/* Soft lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={index} delay={index * 90}>
                  <div className="text-center">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-[1.25rem] lg:rounded-[1.5rem] flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-sm">
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
                    </div>
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-medium text-foreground mb-1 lg:mb-2 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
