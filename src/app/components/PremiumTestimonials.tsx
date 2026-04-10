import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Miami, FL",
    role: "Homeowner",
    quote: "CR Claims got us 3x more than the initial offer. They handled everything professionally and kept us informed every step of the way. Truly exceptional service.",
    rating: 5,
  },
  {
    name: "James Peterson",
    location: "Tampa, FL",
    role: "Property Owner",
    quote: "After Hurricane Ian, we were overwhelmed. Their team took charge and secured a settlement that covered all our repairs. Peace of mind when we needed it most.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    location: "Orlando, FL",
    role: "Business Owner",
    quote: "No upfront fees and exceptional service. They truly work for you, not the insurance company. The difference in our settlement was life-changing.",
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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2.25rem] mb-4 tracking-tight leading-tight text-foreground">
            Client Testimonials
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Stories of success and recovery
          </p>
        </div>

        {/* Testimonial Card - Distinct with gradient background */}
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
          </div>
        </div>

        {/* Navigation */}
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

        {/* Learn More Link */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium transition-colors gap-1"
          >
            Read More Success Stories
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}