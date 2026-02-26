import { useState } from "react";

const faqs = [
  {
    q: "What is GHK-Cu and where does it come from?",
    a: "GHK-Cu is a naturally occurring tripeptide (glycyl-L-histidyl-L-lysine) that binds with copper. It was first discovered in human plasma in 1973 and is also found in saliva and urine. The peptide is released from tissues during injury as part of the body's natural healing response. Levels decline significantly with age."
  },
  {
    q: "What does the research show about GHK-Cu's effectiveness?",
    a: "Clinical studies demonstrate significant benefits including improved skin density, thickness, reduced wrinkle depth, and increased collagen production. Research shows it modulates over 4,000 genes involved in tissue repair and inflammation."
  },
  {
    q: "How is GHK-Cu administered in research studies?",
    a: "Most studies use topical application (2–4%) applied twice daily. Injectable forms are used in specialized research. Although plasma half-life is short, effects persist due to gene modulation."
  },
  {
    q: "What are the safety concerns with GHK-Cu?",
    a: "GHK-Cu has an excellent safety profile. Mild side effects include temporary irritation or redness. No serious adverse events have been reported in studies."
  },
  {
    q: "How does GHK-Cu compare to other anti-aging compounds?",
    a: "GHK-Cu outperforms vitamin C and retinoic acid in collagen stimulation and affects thousands of genes simultaneously. It is naturally occurring and well studied."
  },
  {
    q: "What happens to GHK-Cu levels as we age?",
    a: "Levels decline by about 60% between ages 20 and 60, which may contribute to reduced healing and visible aging."
  }
];

export default function ResearchFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="py-6 lg:py-8 bg-white"
      aria-labelledby="research-faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-5 lg:mb-6">
            <div className="flex items-start gap-4 justify-center">
              <div
                className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-xl shrink-0"
                aria-hidden="true"
              >
                ❓
              </div>
              <div>
                <h2
                  id="research-faq-heading"
                  className="text-2xl lg:text-3xl font-semibold text-[#131315]"
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-sm lg:text-base text-[#5a5a5a] mt-1">
                  Common questions about GHK-Cu research
                </p>
              </div>
            </div>
          </header>

          {/* FAQ List */}
          <div role="list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={index}
                  className="border-b border-[#e4e4e7] last:border-b-0"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  role="listitem"
                >
                  <button
                    className="w-full py-5 lg:py-6 flex items-center justify-between text-left group"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <h3
                      className="font-semibold text-[#131315] text-sm lg:text-base pr-4 group-hover:text-[#4a5568]"
                      itemProp="name"
                    >
                      {faq.q}
                    </h3>

                    <span
                      className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#131315] rotate-180"
                          : "bg-[#f4f4f5] group-hover:bg-[#e4e4e7]"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className={`w-4 h-4 ${
                          isOpen ? "text-white" : "text-[#131315]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? "max-h-[500px] opacity-100 pb-5 lg:pb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="text-[#4a5568] text-sm leading-relaxed"
                      itemProp="text"
                    >
                      {faq.a}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}