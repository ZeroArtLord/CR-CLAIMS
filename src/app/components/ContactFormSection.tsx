import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] mb-4 tracking-tight leading-tight text-foreground">
            Get Your Free Consultation
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Tell us about your claim and we'll get back to you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Card 1: Full Name */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-lg shadow-black/5 border border-border/30">
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-foreground mb-3 tracking-tight"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-accent">
                <User className="w-5 h-5" strokeWidth={2} />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-none pl-8 pr-0 py-2 text-base text-foreground focus:outline-none placeholder:text-muted-foreground/50"
                placeholder="John Smith"
                required
              />
            </div>
          </div>

          {/* Card 2: Email Address */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-lg shadow-black/5 border border-border/30">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-foreground mb-3 tracking-tight"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-accent">
                <Mail className="w-5 h-5" strokeWidth={2} />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-none pl-8 pr-0 py-2 text-base text-foreground focus:outline-none placeholder:text-muted-foreground/50"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          {/* Card 3: Phone Number */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-lg shadow-black/5 border border-border/30">
            <label 
              htmlFor="phone" 
              className="block text-sm font-medium text-foreground mb-3 tracking-tight"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-accent">
                <Phone className="w-5 h-5" strokeWidth={2} />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-none pl-8 pr-0 py-2 text-base text-foreground focus:outline-none placeholder:text-muted-foreground/50"
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>

          {/* Call Now Button - Between Phone and Message */}
          <div className="py-2">
            <a 
              href="tel:8885552524467" 
              className="flex items-center justify-center gap-3 w-full bg-accent hover:bg-accent/90 text-white px-6 py-5 rounded-[1.5rem] transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-[0_20px_60px_-15px] hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              <span className="text-base font-medium">Call now: (888) 555-CLAIMS</span>
            </a>
          </div>

          {/* Card 4: Tell Us About Your Claim */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-lg shadow-black/5 border border-border/30">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-foreground mb-3 tracking-tight"
            >
              Tell Us About Your Claim
            </label>
            <div className="relative">
              <div className="absolute left-0 top-0 text-accent">
                <MessageSquare className="w-5 h-5" strokeWidth={2} />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-transparent border-none pl-8 pr-0 py-2 text-base text-foreground focus:outline-none placeholder:text-muted-foreground/50 resize-none"
                placeholder="Describe the damage to your property..."
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-foreground hover:bg-foreground/90 text-white px-8 py-6 rounded-[1.5rem] transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mt-8 text-base font-medium"
          >
            <span>Submit Request</span>
            <Send className="w-5 h-5" />
          </button>

          {/* Privacy note */}
          <p className="text-xs text-center text-muted-foreground/70 leading-relaxed mt-6 px-4">
            Your information is secure and confidential. We'll never share your details with third parties.
          </p>
        </form>
      </div>
    </section>
  );
}