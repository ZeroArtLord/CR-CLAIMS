import { Search, FileText, ClipboardCheck, Send, Handshake, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

const iconMap = [Search, FileText, ClipboardCheck, Send, Handshake, CheckCircle2];

export function ProcessTimeline() {
  const { content } = useLanguage();

  return (
    <section id="process" className="scroll-mt-24 py-20 lg:py-24 px-6 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 lg:mb-20">
          <Reveal>
            <h2 className="text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] mb-4 lg:mb-6 tracking-tight text-foreground">
              {content.process.title}
            </h2>
            <p className="text-muted-foreground lg:text-lg max-w-3xl mx-auto">
              {content.process.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-[1.875rem] left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent/50 to-accent/20"></div>

            <div className="grid grid-cols-6 gap-4">
              {content.process.steps.map((step, index) => {
                const Icon = iconMap[index] ?? Search;
                return (
                  <Reveal key={index} delay={index * 90}>
                    <div className="relative text-center">
                      <div className="relative z-10 w-[3.75rem] h-[3.75rem] xl:w-16 xl:h-16 bg-accent rounded-[1.25rem] xl:rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20">
                        <Icon className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
                      </div>

                      <div>
                        <h3 className="text-lg xl:text-xl mb-2 xl:mb-3 tracking-tight">{step.title}</h3>
                        <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-7 top-8 bottom-8 w-[2px] bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

          <div className="space-y-10">
            {content.process.steps.map((step, index) => {
              const Icon = iconMap[index] ?? Search;
              return (
                <Reveal key={index} delay={index * 80}>
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 w-14 h-14 bg-accent rounded-[1.25rem] flex items-center justify-center flex-shrink-0 shadow-xl shadow-accent/25">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    <div className="flex-1 pt-1">
                      <h3 className="text-xl mb-3 tracking-tight text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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