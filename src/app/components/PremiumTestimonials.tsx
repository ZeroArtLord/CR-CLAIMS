import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Maria L.",
    location: "Orlando, FL",
    role: "Homeowner",
    quote:
      "After a water loss, I felt completely overwhelmed dealing with the insurance company. CR Claims Resolution took over the process, explained everything clearly, and made sure no damage was missed. The final settlement was much higher than the initial offer.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Kissimmee, FL",
    role: "Homeowner",
    quote:
      "Our storm damage claim was moving slowly and we weren't getting answers. Once CR Claims Resolution got involved, communication improved immediately. They handled the documentation and negotiations professionally and kept us informed every step of the way.",
    rating: 5,
  },
  {
    name: "Peter P.",
    location: "Winter Park, FL",
    role: "Homeowner",
    quote:
      "CR Claims Resolution truly works for the homeowner. They found damages we didn't even know to look for and helped us understand our policy. The process was smooth and stress-free, with no upfront costs.",
    rating: 5,
  },
  {
    name: "Carla M.",
    location: "Davenport, FL",
    role: "Homeowner",
    quote:
      "After a fire loss, the insurance process was confusing and frustrating. CR Claims Resolution guided us from inspection to settlement and made sure the claim was handled correctly. Their experience and attention to detail made a real difference.",
    rating: 5,
  },
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="scroll-mt-24 py-20 px-6 bg-background">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-[2.25rem] mb-4 tracking-tight leading-tight text-foreground">Customer Reviews</h2>
            <p className="text-base text-muted-foreground leading-relaxed">They have already used our services</p>
          </Reveal>
        </div>

        {/* Testimonial Card - Distinct with gradient background */}
        <Reveal delay={80}>
          <div className="relative bg-gradient-to-br from-accent/8 via-white to-white rounded-[2.5rem] p-10 shadow-xl shadow-black/8 mb-10 border border-accent/10">
            {/* Soft lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-[2.5rem] pointer-events-none"></div>

            <div className="relative text-center">
              {/* Stars */}
              <div className="flex gap-1.5 mb-8 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <div key={i} className="relative">
                    <Star className="w-5 h-5 fill-accent text-accent drop-shadow-sm" strokeWidth={0} />
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[1.15rem] leading-[1.75] mb-10 text-foreground/90 tracking-tight">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author info */}
              <div>
                <p className="text-lg font-medium tracking-tight mb-1 text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground mb-0.5">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-muted-foreground/70">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Navigation */}
        <Reveal delay={120}>
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* Previous button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-accent hover:text-white rounded-[1rem] flex items-center justify-center shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 active:scale-95 border border-border/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2.5">
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

            {/* Next button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white hover:bg-accent hover:text-white rounded-[1rem] flex items-center justify-center shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 active:scale-95 border border-border/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </Reveal>

        {/* Learn More Link */}
        <Reveal delay={140}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium transition-colors gap-1"
            >
              Read More Success Stories
              <span className="text-lg">-&gt;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}