// components/FAQ.js
import { useState } from "react";

const faqs = [
  {
    id: "purity",
    question: "What purity level are your peptides and how is it verified?",
    answer: "All Amino Club peptides are guaranteed 99%+ pure. Each batch is independently tested by accredited U.S. laboratories using HPLC (High-Performance Liquid Chromatography) and Mass Spectrometry. We provide a Certificate of Analysis (CoA) with every order showing exact purity percentages, molecular weight verification, and amino acid sequence confirmation."
  },
  {
    id: "coa",
    question: "What is a Certificate of Analysis (CoA) and how do I read it?",
    answer: "All Amino Club peptides are guaranteed 99%+ pure. Each batch is independently tested by accredited U.S. laboratories using HPLC (High-Performance Liquid Chromatography) and Mass Spectrometry. We provide a Certificate of Analysis (CoA) with every order showing exact purity percentages, molecular weight verification, and amino acid sequence confirmation."
  },
  {
    id: "reconstitute",
    question: "How do I reconstitute lyophilized peptides?",
    answer: "To reconstitute peptides: (1) Allow the vial to reach room temperature, (2) Use bacteriostatic water (BAC water) or sterile water for injection, (3) Inject the water slowly down the inside wall of the vial—never directly onto the powder, (4) Gently swirl until fully dissolved—do not shake vigorously, (5) Once reconstituted, store in the refrigerator at 2-8°C. Most peptides remain stable for 4-6 weeks after reconstitution when properly stored."
  },
  {
    id: "bac-water",
    question: "How should I store peptides before reconstitution?",
    answer: "Lyophilized (freeze-dried) peptides are very stable. For short-term storage (under 3 months), room temperature in a cool, dark place is fine. For long-term storage, refrigerate at 2-8°C or freeze at -20°C. Avoid repeated freeze-thaw cycles. Properly stored lyophilized peptides can remain stable for 2+ years."
  },
  {
    id: "dosing",
    question: "How long do peptides last after reconstitution?",
    answer: "Once reconstituted with bacteriostatic water, most peptides remain stable for 4-6 weeks when refrigerated at 2-8°C. If reconstituted with sterile water (no preservative), use within 7-10 days. Never freeze reconstituted peptides. Always inspect for cloudiness or particles before use—clear solution indicates stability."
  },
   {
    id: "shipping",
    question: "How fast do you ship and is cold shipping required?",
    answer: "Orders are processed within 0-2 business days. Standard shipping takes 3-5 business days from fulfillment. Every order includes free shipment protection. Lyophilized peptides don't require cold shipping—they're stable at room temperature. All orders ship in discreet, unlabeled packaging."
  },
  {
    id: "international",
    question: "Do you ship internationally?",
    answer: "Currently, we ship to all 50 U.S. states. International shipping varies by country due to customs regulations on research materials. Contact our support team for specific country availability. All international orders may be subject to local customs fees and import duties."
  },
  {
    id: "trust",
    question: "What is Amino Club and why should I trust you?",
    answer: "Amino Club is a U.S.-based peptide research supplier committed to quality and transparency. We source from GMP-compliant manufacturers and conduct independent third-party testing on every batch at accredited American laboratories. Unlike other suppliers, we provide full Certificates of Analysis, maintain strict quality control, and back everything with our 99%+ purity guarantee. Our Discord community of researchers provides real peer feedback and support."
  },
  {
    id: "discord",
    question: "What is the Amino Club Discord community?",
    answer:"Every purchase unlocks access to our private Discord community—a space where peptide researchers connect, share insights, and get real-time support. You'll find dosing discussions, reconstitution tips, research updates, and direct access to our team. It's a valuable resource for both newcomers and experienced researchers."
  },
  {
    id: "research",
    question: "Are these peptides for human use?",
    answer:"All Amino Club peptides are sold strictly for research, laboratory, and educational purposes only. They are not approved for human consumption, veterinary use, or any therapeutic application. By purchasing, you confirm you are a qualified researcher and will use products in accordance with all applicable laws and regulations."
  },
   {
    id: "refund",
    question: "What is your return and refund policy?",
    answer:"We offer a 60-day money-back guarantee. If you receive a damaged product, incorrect item, or a peptide that doesn't meet our purity standards, contact us for a full refund or replacement. Due to the nature of research materials, we cannot accept returns on opened products unless there's a quality issue. Unopened items can be returned within 60 days for a full refund."
  },
   {
    id: "support",
    question: "How can I contact Amino Club support?",
    answer: "You can reach our support team via email or through our Discord community for the fastest response. We typically respond within 24 hours on business days. For order issues, have your order number ready. Our team can help with product questions, order tracking, reconstitution guidance, and any concerns about your purchase."
  },
  // Add the rest of your FAQs similarly...
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="py-12 bg-white w-full max-w-[100vw] overflow-x-hidden"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="font-sans text-3xl md:text-4xl font-semibold text-black mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about peptide research
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq) => (
            <article
              key={faq.id}
              className="border-b border-gray-200"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full py-5 flex items-center justify-between text-left group"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3
                  className="font-semibold text-black text-base lg:text-lg pr-4 group-hover:text-gray-700 transition-colors"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <span
                 className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openId === faq.id
                    ? "bg-black text-white rotate-180" // OPEN: black bg, white arrow, rotated
                    : "bg-gray-100 text-gray-800 group-hover:bg-gray-200 rotate-0" // CLOSED: gray bg, dark arrow, normal
                }`}
                  aria-hidden="true"
                >
                 <svg
                    className="w-4 h-4 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
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
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p
                  className="text-gray-600 text-sm lg:text-base leading-relaxed break-words"
                  itemProp="text"
                >
                  {faq.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}