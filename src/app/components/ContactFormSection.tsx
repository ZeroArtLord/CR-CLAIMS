import { User, Mail, Phone, MessageSquare, Send, Calendar, Home } from "lucide-react";
import { useState } from "react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    claimType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const claimTypes = [
    "Water Damage",
    "Storm & Hurricane",
    "Fire Damage", 
    "Flood Claims",
    "Mold Remediation",
    "Roof Damage",
    "Other"
  ];

  const propertyTypes = [
    "Single Family Home",
    "Apartment/Condo",
    "Commercial Property",
    "Rental Property",
    "Vacation Home"
  ];

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-4xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-accent/10 mb-6">
            <MessageSquare className="w-8 h-8 lg:w-10 lg:h-10 text-accent" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
            Premium Consultation
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Experience our white-glove service. Share your details and our claims specialists will craft a personalized strategy for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-border/20 shadow-soft">
              <h3 className="text-xl font-light text-foreground mb-6">Direct Contact</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:8885552524467" 
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/10 hover:border-accent/30 transition-all duration-300 hover:shadow-gentle"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Emergency Line</p>
                    <p className="text-lg font-medium text-foreground">(888) 555-CLAIMS</p>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white border border-border/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Email Response</p>
                      <p className="text-lg font-medium text-foreground">Within 2 hours</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-border/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Free Inspection</p>
                      <p className="text-lg font-medium text-foreground">Scheduled in 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border border-accent/10">
              <h4 className="text-lg font-light text-foreground mb-4">Why Choose Premium Service</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Dedicated claims specialist
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  24/7 emergency response
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Maximum settlement guarantee
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  No recovery, no fee policy
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border/20 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Property Type */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Property Type</label>
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all appearance-none"
                      required
                    >
                      <option value="">Select type</option>
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Claim Type */}
              <div className="space-y-3">
                <label className="block text-sm font-light text-foreground">Type of Claim</label>
                <select
                  name="claimType"
                  value={formData.claimType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  required
                >
                  <option value="">Select claim type</option>
                  {claimTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="block text-sm font-light text-foreground">Message Details</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground/60" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40 resize-none"
                    placeholder="Please provide details about your claim, including date of loss, type of damage, and any immediate concerns..."
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mt-4 text-base font-light"
              >
                <span>Request Premium Consultation</span>
                <Send className="w-4 h-4" strokeWidth={2} />
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-center text-muted-foreground/60 leading-relaxed mt-4 px-2">
                Your information is protected with enterprise-grade encryption. We adhere to strict confidentiality standards and never share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}