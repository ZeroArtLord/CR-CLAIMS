import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is a public adjuster and how can they help me?",
    answer: "A public adjuster is a licensed professional who works exclusively for policyholders (not insurance companies) to help you get the maximum settlement for your insurance claim. We handle all the paperwork, negotiations, and documentation to ensure you receive every dollar you're entitled to under your policy."
  },
  {
    id: 2,
    question: "How much does it cost to hire CR Claims Resolution?",
    answer: "We work on a contingency fee basis, which means we only get paid when you get paid. Our fee is a percentage of the additional settlement we recover for you above what the insurance company initially offered. There are no upfront costs or hidden fees."
  },
  {
    id: 3,
    question: "What types of claims do you handle?",
    answer: "We specialize in residential and commercial property damage claims including: water damage, fire/smoke damage, hurricane/wind damage, flood damage, mold remediation, theft/vandalism, and business interruption claims throughout Florida."
  },
  {
    id: 4,
    question: "How long does the claims process typically take?",
    answer: "The timeline varies depending on the complexity of the claim, but most claims are resolved within 30-90 days. We work efficiently to expedite the process while ensuring thorough documentation and maximum recovery."
  },
  {
    id: 5,
    question: "Can I still hire you if I've already filed a claim with my insurance company?",
    answer: "Absolutely! In fact, many of our clients come to us after receiving a low initial offer or experiencing delays from their insurance company. We can step in at any point in the process to review your claim and fight for a better settlement."
  },
  {
    id: 6,
    question: "What areas of Florida do you serve?",
    answer: "We serve the entire state of Florida with licensed public adjusters available throughout all counties. Whether you're in Miami, Orlando, Tampa, Jacksonville, or anywhere in between, we can help with your insurance claim."
  },
  {
    id: 7,
    question: "How much more can I expect to receive with your help?",
    answer: "On average, policyholders who hire a public adjuster receive settlements that are 747% higher than those who handle claims on their own. While every claim is unique, our expertise typically results in significantly higher recoveries."
  },
  {
    id: 8,
    question: "What information do I need to provide to get started?",
    answer: "Just contact us for a free consultation. We'll need basic information about your property, the type of damage, your insurance policy details, and any communication you've had with your insurance company so far."
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/95" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-accent/10 mb-6">
            <HelpCircle className="w-7 h-7 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about public adjusting and how we can help maximize your insurance claim settlement.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-border/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/50"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 lg:px-8 lg:py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base lg:text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
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
                    isOpen ? 'max-h-96 pb-6 lg:pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="pt-2 border-t border-border/20">
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 lg:p-10 border border-accent/10">
            <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto">
              Our team of licensed public adjusters is ready to answer any questions you have about your insurance claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] text-base font-medium">
                Schedule Free Consultation
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-background text-foreground px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-border/30 hover:scale-[1.02] active:scale-[0.98] text-base">
                Call Now: (888) 555-CLAIMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}