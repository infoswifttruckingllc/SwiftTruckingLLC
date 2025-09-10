import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { mockData } from '@/mock';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = mockData.faqs;
  const [showFaq, setShowFaq] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleShowFaq = () => {
    setShowFaq(!showFaq);
  };

  return (
    < section className="section-padding bg-white" >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our dispatch services and how we work.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-primary mb-4 text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-between w-full"
            aria-label="Toggle FAQ"
            onClick={handleShowFaq}
          >
            {showFaq ? 'Hide FAQ' : 'Show FAQ'}
            {showFaq ? <ChevronUp className="h-5 w-5  bg-white p-1 rounded-full text-primary flex-shrink-0" /> : <ChevronDown className="h-5 w-5  bg-white p-1 rounded-full text-primary flex-shrink-0" />}
          </button>
        </div>

        <div className="space-y-4">
          {showFaq && faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-card-foreground pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-muted-foreground leading-relaxed animate-fade-in"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-16">
          <div className="bg-brand-gainsboro/50 rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
              Still have queries?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our dispatch team is available 24/7 to answer any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13302031165"
                className="bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (330) 203-1165
              </a>
              <a
                href="#contact"
                className="bg-white text-primary hover:bg-gray-50 border border-primary px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};