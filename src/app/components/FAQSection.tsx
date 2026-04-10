import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQSection() {
  const { content } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  };

  const faqData: FAQItem[] = content.faq.items.map((item, index) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section className="scroll-mt-24 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/95" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <Reveal>
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-accent/10 mb-6">
              <HelpCircle className="w-7 h-7 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
              {content.faq.title}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {content.faq.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <Reveal key={faq.id} delay={index * 40} className="reveal-fast">
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

        <div className="mt-12 lg:mt-16 text-center">
          <Reveal delay={120} className="reveal-fast">
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 lg:p-10 border border-accent/10">
              <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">{content.faq.ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto">{content.faq.ctaBody}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98] text-base font-medium text-center"
                >
                  {content.faq.ctaPrimary}
                </a>
                <a
                  href="tel:+14073584589"
                  className="w-full sm:w-auto bg-white hover:bg-background text-foreground px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-border/30 hover:scale-[1.02] active:scale-[0.98] text-base text-center"
                >
                  {content.faq.ctaSecondary}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}