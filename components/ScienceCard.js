import Pathway from "./Pathway";

function ScienceCard() {
  return (
    <article className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e4e4e7]">
      <div className="text-xs font-semibold text-[#5a5a5a] uppercase tracking-wider mb-2">
        The Science, Simplified
      </div>

      <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-2">
        Multi-Pathway Regeneration
      </h3>

      <p className="text-sm text-[#4a5568] leading-relaxed mb-6">
        GHK-Cu is a naturally occurring tripeptide that binds with copper to create
        a powerful regenerative complex. Released from damaged collagen as an
        injury signal, it orchestrates healing by modulating thousands of genes
        involved in tissue repair, inflammation control, and cellular protection.
      </p>

      {/* Pathways */}
      <div
        className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 mb-6"
        role="list"
      >
        <Pathway
          title="Gene Expression"
          subtitle="Epigenetic Modulation"
          label="GE"
          strength="Primary"
          percent={75}
          color="gray"
          points={[
            "Upregulates 59% of affected genes",
            "Activates 47 DNA repair genes",
            "Suppresses inflammatory pathways",
          ]}
        />

        <Pathway
          title="Collagen Pathway"
          subtitle="Collagen & ECM Synthesis"
          label="COL"
          strength="Strongest"
          percent={95}
          color="green"
          points={[
            "Stimulates type I & III collagen",
            "Increases elastin production",
            "Enhances ECM remodeling",
          ]}
        />

        <Pathway
          title="Copper Delivery"
          subtitle="Copper Ion Transport"
          label="Cu²⁺"
          strength="Supportive"
          percent={85}
          color="green"
          points={[
            "Delivers copper to cells",
            "Activates SOD antioxidant",
            "Supports wound healing enzymes",
          ]}
        />
      </div>

      {/* Citation */}
      <a
        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-[#a0aec0] hover:text-[#5a5a5a]"
      >
        <svg
          className="w-3 h-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        Pickart & Margolina, Int J Mol Sci 2018
      </a>
    </article>
  );
}