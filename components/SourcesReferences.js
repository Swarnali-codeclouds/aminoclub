const sources = [
  {
    journal: "International Journal of Molecular Sciences",
    title:
      "Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data",
    year: "2018",
    meta: "PMID: 29986520",
    authors: "Pickart L, Margolina A",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/"
  },
  {
    journal: "BioMed Research International",
    title:
      "GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration",
    year: "2015",
    meta: "PMID: 26236730",
    authors: "Pickart L, Vasquez-Soltero JM, Margolina A",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/"
  },
  {
    journal: "Journal of Cosmetic Science",
    title:
      "A 12-week, double-blind, placebo-controlled study of GHK-Cu facial cream",
    year: "2005",
    authors: "Finkley et al."
  },
  {
    journal: "Journal of Cosmetic Laser Therapy",
    title:
      "Stimulation of collagen production by copper-peptide complex",
    year: "2007",
    authors: "Appa Y et al."
  },
  {
    journal: "Journal of Aging Science and Clinical Practice",
    title:
      "Effects of GHK-Cu in nano-carriers on MMP expression and facial wrinkle parameters",
    year: "2009",
    authors: "Gorouhi F, Maibach HI"
  },
  {
    journal: "Archives of Facial Plastic Surgery",
    title:
      "Effects of Topical Copper Tripeptide Complex on CO2 Laser-Resurfaced Skin",
    year: "2006",
    meta: "DOI: 10.1001/archfaci.8.4.252",
    authors: "Miller TR et al."
  },
  {
    journal: "Various Sources",
    title: "GHK-Cu effects on hair follicle growth and size",
    year: "2020",
    authors: "Multiple researchers"
  },
  {
    journal: "Multiple Sources",
    title: "GHK-Cu dosing and administration protocols",
    year: "2018",
    authors: "Various clinical trials"
  },
  {
    journal: "Journal of Cosmetic Dermatology",
    title: "Anti-inflammatory effects of GHK-Cu",
    year: "2012",
    authors: "Campbell JD et al."
  }
];

export default function SourcesReferences() {
  return (
    <section
      className="py-6 lg:py-8 bg-[#fafafa] font-anek"
      aria-labelledby="sources-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-5 lg:mb-6">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-xl shrink-0"
              aria-hidden="true"
            >
              📚
            </div>
            <div className="flex-1 min-w-0">
              <h2
                id="sources-heading"
                className="text-2xl lg:text-3xl font-semibold text-[#131315]"
              >
                Sources &amp; References
              </h2>
              <p className="text-sm lg:text-base text-[#5a5a5a] mt-1">
                Peer-reviewed research
              </p>
            </div>
          </div>
        </header>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
        >
          {sources.map((item, index) => {
            const Wrapper = item.link ? "a" : "div";

            return (
              <Wrapper
                key={index}
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                role="listitem"
                className="bg-white rounded-2xl p-5 border border-[#e4e4e7] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 block"
              >
                <span className="text-[10px] font-semibold text-[#16a34a] uppercase tracking-wide">
                  {item.journal}
                </span>

                <h4 className="text-sm font-semibold text-[#131315] mt-2 leading-snug line-clamp-3">
                  {item.title}
                </h4>

                <div className="mt-3 flex items-center gap-2 text-xs text-[#5a5a5a]">
                  <span>{item.year}</span>
                  {item.meta && (
                    <>
                      <span>•</span>
                      <span className="truncate">{item.meta}</span>
                    </>
                  )}
                </div>

                <p className="text-xs text-[#5a5a5a] mt-2 line-clamp-1 italic">
                  {item.authors}
                </p>

                {item.link && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#16a34a]">
                    <span>View Source</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}