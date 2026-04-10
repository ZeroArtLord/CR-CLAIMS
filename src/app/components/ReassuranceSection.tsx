import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const processItems = [
  "Damage evaluation",
  "Policy review",
  "Claim documentation",
  "Claim submission",
  "Negotiation with the insurance company",
];

export function ReassuranceSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-24 px-6 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">
          {/* Image */}
          <Reveal>
            <div className="relative w-full h-[280px] lg:h-[400px] xl:h-[480px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden mb-10 lg:mb-0 shadow-xl shadow-black/5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765862835282-cd3d9190d246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlbGVnYW50JTIwaG9tZSUyMGludGVyaW9yJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzc1Njc4OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Peaceful restored home interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent"></div>
            </div>
          </Reveal>

          <div>
            {/* Text */}
            <Reveal delay={80}>
              <div className="mb-10 lg:mb-12">
                <h2 className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] mb-4 lg:mb-6 tracking-tight leading-tight">
                  What a Public Adjuster Does -- and How We Help You
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                  A licensed public adjuster represents only the property owner during the insurance claim process.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  While the insurance company works to protect its own interests, we work to protect yours. Our role is to
                  ensure your claim is accurately documented, properly presented, and fairly negotiated.
                </p>
              </div>
            </Reveal>

            {/* Process list */}
            <div className="space-y-4">
              {processItems.map((item, index) => (
                <Reveal key={index} delay={index * 80}>
                  <div
                    className="flex items-center gap-4 bg-gradient-to-r from-accent/5 to-transparent rounded-[1.25rem] lg:rounded-[1.5rem] p-4 lg:p-5 border border-accent/10 transition-all duration-300 hover:from-accent/10 hover:border-accent/20 hover:shadow-md group"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent rounded-[0.875rem] lg:rounded-[1rem] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-white transition-all duration-300 group-hover:scale-110" strokeWidth={2.5} />
                    </div>
                    <p className="text-base lg:text-lg text-foreground tracking-tight transition-all duration-300 group-hover:text-accent">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}