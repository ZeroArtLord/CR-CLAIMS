import { User, Mail, Phone, MessageSquare, Send, Home, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function ContactFormSection() {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    propertyType: "",
    damageType: "",
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
        message: "",
        propertyType: "",
        damageType: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <Reveal>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
              {content.contact.intro}
            </p>
          </Reveal>
        </div>

        <div className="text-center mb-12 lg:mb-16">
          <Reveal delay={80}>
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-accent/10 mb-6">
              <MessageSquare className="w-8 h-8 lg:w-10 lg:h-10 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
              {content.contact.title}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {content.contact.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Reveal>
            <div className="space-y-8">
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-border/20 shadow-soft">
                <h3 className="text-xl font-light text-foreground mb-6">{content.contact.directContact}</h3>

                <div className="space-y-6">
                  <a
                    href="tel:+14073584589"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/10 hover:border-accent/30 transition-all duration-300 hover:shadow-gentle"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{content.contact.callFreeNow}</p>
                      <p className="text-lg font-medium text-foreground">+1 (407) 358-4589</p>
                    </div>
                  </a>

                  <div className="p-4 rounded-2xl bg-white border border-border/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{content.contact.emailLabel}</p>
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
                        <p className="text-sm text-muted-foreground">{content.contact.serving}</p>
                        <p className="text-lg font-medium text-foreground">{content.contact.appointmentOnly}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border border-accent/10">
                <h4 className="text-lg font-light text-foreground mb-4">{content.contact.whyChoose}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    {content.contact.bullet1}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    {content.contact.bullet2}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    {content.contact.bullet3}
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border/20 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-light text-foreground">{content.contact.firstName}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                        placeholder={content.contact.placeholderFirst}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-light text-foreground">{content.contact.lastName}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                        placeholder={content.contact.placeholderLast}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">{content.contact.phone}</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                      placeholder={content.contact.placeholderPhone}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">{content.contact.email}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                      placeholder={content.contact.placeholderEmail}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-light text-foreground">{content.contact.propertyType}</label>
                    <div className="relative">
                      <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 z-10" />
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-10 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all appearance-none cursor-pointer text-foreground"
                        required
                      >
                        <option value="" className="text-muted-foreground/60">
                          {content.contact.placeholderPropertyType}
                        </option>
                        {content.contact.propertyTypes.map((type) => (
                          <option key={type.value} value={type.value} className="text-foreground">
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="w-2 h-2 border-r border-b border-muted-foreground/60 rotate-45 -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-light text-foreground">{content.contact.damageType}</label>
                    <div className="relative">
                      <AlertTriangle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 z-10" />
                      <select
                        name="damageType"
                        value={formData.damageType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-10 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all appearance-none cursor-pointer text-foreground"
                        required
                      >
                        <option value="" className="text-muted-foreground/60">
                          {content.contact.placeholderDamageType}
                        </option>
                        {content.contact.damageTypes.map((type) => (
                          <option key={type.value} value={type.value} className="text-foreground">
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="w-2 h-2 border-r border-b border-muted-foreground/60 rotate-45 -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-light text-foreground">{content.contact.message}</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground/60" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3.5 bg-background/50 rounded-xl border border-border/30 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40 resize-none"
                      placeholder={content.contact.placeholderMessage}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mt-4 text-base font-light disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{status === "sending" ? content.contact.sending : content.contact.submit}</span>
                  <Send className="w-4 h-4" strokeWidth={2} />
                </button>

                <p className="text-xs text-center text-muted-foreground/60 leading-relaxed mt-4 px-2">
                  {content.contact.privacy}
                </p>

                {status === "success" && (
                  <p className="text-xs text-center text-emerald-600 mt-2">{content.contact.success}</p>
                )}
                {status === "error" && (
                  <p className="text-xs text-center text-red-600 mt-2">{content.contact.error}</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}