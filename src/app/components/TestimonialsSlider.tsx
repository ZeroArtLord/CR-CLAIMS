import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Miami, FL",
    quote: "CR Claims got us 3x more than the initial offer. They handled everything professionally and kept us informed every step.",
    rating: 5,
  },
  {
    name: "James Peterson",
    location: "Tampa, FL",
    quote: "After Hurricane Ian, we were overwhelmed. Their team took charge and secured a settlement that covered all our repairs.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    location: "Orlando, FL",
    quote: "No upfront fees and exceptional service. They truly work for you, not the insurance company. Highly recommend!",
    rating: 5,
  },
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] mb-3 tracking-tight">Client Stories</h2>
          <p className="text-muted-foreground">Real results, real people</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-card rounded-[2rem] p-8 shadow-lg border border-border/50 mb-8">
          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-lg text-center leading-relaxed mb-8 text-foreground">
            "{testimonials[currentIndex].quote}"
          </blockquote>

          {/* Author */}
          <div className="text-center">
            <p className="font-medium tracking-tight">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-accent" : "w-2 bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
