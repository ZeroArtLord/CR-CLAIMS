import { User, Mail, Phone, MessageSquare, Send, Home, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    propertyType: "",
    damageType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void submitForm();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async () => {
    if (status === "sending") return;
    setStatus("sending");

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
    const payload = {
      ...formData,
      source: "cr-claims-landing",
      submittedAt: new Date().toISOString(),
    };

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }
      } else {
        const subject = encodeURIComponent("Free Inspection Request");
        const body = encodeURIComponent(
          `Name: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProperty Type: ${formData.propertyType}\nDamage Type: ${formData.damageType}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:info@crclaimsflorida.com?subject=${subject}&body=${body}`;
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        propertyType: "",
        damageType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-4xl mx-auto">
        {/* Intro Copy */}
        <div className="text-center mb-12 lg:mb-16">
          <Reveal>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Recovering after a property loss doesn't have to be overwhelming. CR Claims Resolution helps Florida property owners
              navigate insurance claims after fire, storm, water, or flood damage. Our licensed public adjusters handle inspections,
              documentation, and negotiations -- working only for you -- to secure a fair and timely settlement so you can rebuild
              with confidence.
            </p>
          </Reveal>
        </div>

        {/* Premium Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Reveal delay={80}>
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-accent/10 mb-6">
              <MessageSquare className="w-8 h-8 lg:w-10 lg:h-10 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
              Schedule Your Free Property Inspection
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Speak directly with a licensed public adjuster. We'll review your situation and explain your options clearly.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Info */}
          <Reveal>
            <div className="space-y-8">
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-border/20 shadow-soft">
                <h3 className="text-xl font-light text-foreground mb-6">Direct Contact</h3>

                <div className="space-y-6">
                  <a
                    href="tel:+14073584589"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/10 hover:border-accent/30 transition-all duration-300 hover:shadow-gentle"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Call free now</p>
                      <p className="text-lg font-medium text-foreground">+1 (407) 358-4589</p>
                    </div>
                  </a>

                  <div className="p-4 rounded-2xl bg-white border border-border/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-lg font-medium text-foreground">info@crclaimsflorida.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-border/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">Serving Orlando & Central Florida</p>
                        <p className="text-lg font-medium text-foreground">By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border border-accent/10">
                <h4 className="text-lg font-light text-foreground mb-4">Why Choose CR Claims Resolution</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    No obligation
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    No upfront fees
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Fast response
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Form */}
          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border/20 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First & Last Name Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-light text-foreground">First Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 transition-colors group-focus-within:text-accent/80" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-border/40 focus:border-accent/60 focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder:text-muted-foreground/40 shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-white/80"
                        placeholder="First Name / Nombre"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-light text-foreground">Last Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 transition-colors group-focus-within:text-accent/80" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-border/40 focus:border-accent/60 focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder:text-muted-foreground/40 shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-white/80"
                        placeholder="Last Name / Apellido"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Phone</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 transition-colors group-focus-within:text-accent/80" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-border/40 focus:border-accent/60 focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder:text-muted-foreground/40 shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-white/80"
                      placeholder="Phone"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 transition-colors group-focus-within:text-accent/80" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-border/40 focus:border-accent/60 focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder:text-muted-foreground/40 shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-white/80"
                      placeholder="Email Address"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Property Type</label>
                  <div className="relative group">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 transition-colors group-focus-within:text-accent/80" />
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-border/40 focus:border-accent/60 focus:ring-2 focus:ring-accent/30 transition-all duration-300 appearance-none cursor-pointer shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-white/80"
                      required
                    >
                      <option value="" className="text-muted-foreground/60">Select property type / Tipo de propiedad</option>
                      <option value="single-family" className="text-foreground py-2">Single Family Home</option>
                      <option value="condo" className="text-foreground py-2">Condominium / Condominio</option>
                      <option value="townhouse" className="text-foreground py-2">Townhouse</option>
                      <option value="apartment" className="text-foreground py-2">Apartment / Apartamento</option>
                      <option value="commercial" className="text-foreground py-2">Commercial Property</option>
                      <option value="multi-family" className="text-foreground py-2">Multi-Family Building</option>
                      <option value="other" className="text-foreground py-2">Other / Otro</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-focus-within:rotate-180">
                      <svg className="w-4 h-4 text-muted-foreground/60 group-focus-within:text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Damage Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Damage Type</label>
                  <div className="relative group">
                    <AlertTriangle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 transition-colors group-focus-within:text-accent/80" />
                    <select
                      name="damageType"
                      value={formData.damageType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-border/40 focus:border-accent/60 focus:ring-2 focus:ring-accent/30 transition-all duration-300 appearance-none cursor-pointer shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-white/80"
                      required
                    >
                      <option value="" className="text-muted-foreground/60">Select damage type / Tipo de daño</option>
                      <option value="water" className="text-foreground py-2">Water Damage / Daño por agua</option>
                      <option value="storm" className="text-foreground py-2">Storm & Hurricane Damage / Daño por tormenta o huracán</option>
                      <option value="fire" className="text-foreground py-2">Fire Damage / Daño por incendio</option>
                      <option value="flood" className="text-foreground py-2">Flood Damage / Daño por inundación</option>
                      <option value="mold" className="text-foreground py-2">Mold Damage / Daño por moho</option>
                      <option value="wind" className="text-foreground py-2">Wind Damage / Daño por viento</option>
                      <option value="roof" className="text-foreground py-2">Roof Damage / Daño en techo</option>
                      <option value="other" className="text-foreground py-2">Other / Otro</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-focus-within:rotate-180">
                      <svg className="w-4 h-4 text-muted-foreground/60 group-focus-within:text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground/60 transition-colors group-focus-within:text-accent/80" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-border/40 focus:border-accent/60 focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder:text-muted-foreground/40 resize-none shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-white/80"
                      placeholder="Briefly describe your damage / Describa su daño"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mt-4 text-base font-light disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{status === "sending" ? "Sending..." : "Get My Free Inspection"}</span>
                  <Send className="w-4 h-4" strokeWidth={2} />
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-center text-muted-foreground/60 leading-relaxed mt-4 px-2">
                  Your information is protected with enterprise-grade encryption. We adhere to strict confidentiality standards and never share your details.
                </p>

                {status === "success" && (
                  <p className="text-xs text-center text-emerald-600 mt-2">
                    Thanks! Your request has been sent. We'll be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-center text-red-600 mt-2">
                    Something went wrong. Please call +1 (407) 358-4589 or email info@crclaimsflorida.com.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}