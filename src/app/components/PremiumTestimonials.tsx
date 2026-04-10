import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function PremiumTestimonials() {
  const { content } = useLanguage();
  const testimonials = content.reviews.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="scroll-mt-24 py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground shadow-sm border border-border/30 mb-5">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
              {content.reviews.badge}
            </div>
            <h2 className="text-[2.25rem] sm:text-[2.75rem] mb-4 tracking-tight leading-tight text-foreground">
              {content.reviews.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {content.reviews.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 lg:gap-12 items-stretch">
          <Reveal>
            <div className="bg-white sm:bg-white/90 sm:backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 shadow-elegant border border-border/20 sm:border-accent/10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{content.reviews.averageLabel}</p>
                <div className="flex items-center gap-3">
                  <p className="text-4xl font-medium text-foreground">5.0</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{content.reviews.basedOn}</p>
              </div>

              <div className="mt-8 space-y-4">
                {content.reviews.metrics.map((label) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{label}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="relative bg-white sm:bg-gradient-to-br sm:from-accent/8 sm:via-white sm:to-white rounded-[2.5rem] p-10 lg:p-12 shadow-elegant border border-border/20 sm:border-accent/10 h-full flex flex-col">
              <div className="absolute inset-0 sm:bg-gradient-to-br sm:from-white/40 sm:via-transparent sm:to-transparent rounded-[2.5rem] pointer-events-none"></div>

              <div className="relative">
                <div className="flex gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent drop-shadow-sm" strokeWidth={0} />
                  ))}
                </div>

                <blockquote className="text-[1.15rem] leading-[1.8] mb-10 text-foreground/90 tracking-tight">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-lg font-medium tracking-tight mb-1 text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground mb-0.5">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="w-11 h-11 bg-white hover:bg-accent hover:text-white rounded-[1rem] flex items-center justify-center shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 active:scale-95 border border-border/30"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-11 h-11 bg-white hover:bg-accent hover:text-white rounded-[1rem] flex items-center justify-center shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 active:scale-95 border border-border/30"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2.5 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentIndex
                          ? "w-10 bg-accent shadow-md shadow-accent/30"
                          : "w-2 bg-muted hover:bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium transition-colors gap-1"
            >
              {content.reviews.readMore}
              <span className="text-lg">-&gt;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}