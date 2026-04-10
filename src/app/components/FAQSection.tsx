import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Reveal } from "./Reveal";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is a public adjuster?",
    answer:
      "A public adjuster is a licensed professional who represents the property owner -- not the insurance company -- during the insurance claim process. Our job is to prepare, document, and negotiate your claim to help ensure a fair settlement.",
  },
  {
    id: 2,
    question: "When should I hire a public adjuster?",
    answer:
      "You can hire a public adjuster at any stage of the claim -- before filing, after filing, or even if your claim was denied or underpaid. The sooner we get involved, the better we can protect your interests.",
  },
  {
    id: 3,
    question: "Does CR Claims Resolution work for the insurance company?",
    answer:
      "No. CR Claims Resolution works exclusively for the policyholder. We do not represent insurance companies in any capacity.",
  },
  {
    id: 4,
    question: "What types of claims do you handle?",
    answer:
      "We handle property damage claims related to water damage, fire and smoke damage, storm and hurricane damage, flood damage (when covered under applicable policies), and residential and commercial property losses.",
  },
  {
    id: 5,
    question: "How much does it cost to hire a public adjuster?",
    answer:
      "There are no upfront fees. Our fee is a percentage of the settlement we help recover, and we only get paid if you get paid.",
  },
  {
    id: 6,
    question: "Will hiring a public adjuster delay my claim?",
    answer:
      "No. In most cases, having a public adjuster helps avoid delays by ensuring the claim is properly documented and submitted from the start, reducing back-and-forth with the insurance company.",
  },
  {
    id: 7,
    question: "Can you help if my claim was denied or underpaid?",
    answer:
      "Yes. We regularly assist property owners with denied, delayed, or underpaid claims by reviewing the policy and damages to determine if additional compensation is owed.",
  },
  {
    id: 8,
    question: "Do I need a public adjuster for small claims?",
    answer:
      "Not necessarily. However, even smaller claims can be underpaid if damages are missed. A professional review can help you understand whether the settlement offered is fair.",
  },
  {
    id: 9,
    question: "How long does the claims process take?",
    answer:
      "Each claim is different and depends on the type of loss, policy coverage, and insurance company response. Our goal is always to move the claim forward as efficiently as possible while protecting your rights.",
  },
  {
    id: 10,
    question: "Do you serve all of Florida?",
    answer:
      "Yes. CR Claims Resolution serves residential and commercial property owners throughout the State of Florida.",
  },
  {
    id: 11,
    question: "How do I get started?",
    answer:
      "Simply request a free property inspection or contact us directly. One of our claim specialists will review your situation and explain the next steps.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="scroll-mt-24 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/95" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Reveal>
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-accent/10 mb-6">
              <HelpCircle className="w-7 h-7 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Get answers to common questions about public adjusting and how we can help maximize your insurance claim settlement.
            </p>
          </Reveal>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <Reveal key={faq.id} delay={index * 40}>
                <div className="bg-white rounded-2xl border border-border/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/50">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 lg:px-8 lg:py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base lg:text-lg font-medium text-foreground pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5 text-accent" strokeWidth={2} />
                      ) : (
                        <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-accent" strokeWidth={2} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`px-6 lg:px-8 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[1000px] pb-6 lg:pb-8" : "max-h-0"
                    }`}
                  >
                    <div className="pt-2 border-t border-border/20">
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 lg:mt-16 text-center">
          <Reveal delay={120}>
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 lg:p-10 border border-accent/10">
              <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto">
                Our team of licensed public adjusters is ready to answer any questions you have about your insurance claim.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] text-base font-medium text-center"
                >
                  Schedule Free Inspection
                </a>
                <a
                  href="tel:+14073584589"
                  className="w-full sm:w-auto bg-white hover:bg-background text-foreground px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-border/30 hover:scale-[1.02] active:scale-[0.98] text-base text-center"
                >
                  Call Now: +1 (407) 358-4589
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
