export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 xl:px-16 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-14 shadow-xl shadow-black/6 border border-border/30">
          <h2 className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] mb-4 lg:mb-6 tracking-tight text-foreground">
            Ready to Maximize Your Insurance Claim Settlement?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
            Avoid missed damages and underpaid claims after property loss. CR Claims Resolution represents property owners -- not
            insurance companies -- handling your claim from inspection to negotiation to help you secure the full compensation your
            policy allows.
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
            Schedule your free inspection today and get expert guidance every step of the way.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] text-base font-medium"
          >
            Request Your Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
}