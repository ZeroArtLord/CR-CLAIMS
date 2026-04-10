import { TrendingUp, Users, Clock, Award } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

const iconMap = [Clock, TrendingUp, Users, Award];

export function TrustSection() {
  const { content } = useLanguage();

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-12 xl:px-16 bg-white sm:bg-gradient-to-b sm:from-white sm:to-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white sm:bg-gradient-to-br sm:from-accent/5 sm:via-white sm:to-accent/5 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-16 border border-border/20 sm:border-accent/10 shadow-xl shadow-black/5 relative overflow-hidden">
          {/* Soft lighting overlay */}
          <div className="absolute inset-0 sm:bg-gradient-to-br sm:from-white/60 sm:via-transparent sm:to-transparent pointer-events-none"></div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {content.trust.stats.map((stat, index) => {
              const Icon = iconMap[index] ?? TrendingUp;
              return (
                <Reveal key={index} delay={index * 90}>
                  <div className="text-center group">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-[1.25rem] lg:rounded-[1.5rem] flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-sm transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-105">
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-accent transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-medium text-foreground mb-1 lg:mb-2 tracking-tight transition-all duration-300 group-hover:text-accent">
                      {stat.value}
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground/80">
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