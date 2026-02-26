import Stat from "./Stat";
function DiscoveryCard() {
  return (
    <article className="rounded-2xl p-6 lg:p-8 flex flex-col bg-[#131315] text-white">
      <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">
        Key Discovery
      </div>

      <h3 className="text-lg lg:text-xl font-semibold mb-2">
        Unprecedented Gene Influence
      </h3>

      <p className="text-sm text-white/70 leading-relaxed">
        GHK-Cu affects more human genes than any other studied peptide —
        modulating 31.2% of the human genome.
      </p>

      <div className="mt-5 p-4 rounded-xl bg-white/[0.06]">
        <p className="text-sm text-white/85 leading-relaxed">
          <strong className="text-white">Research finding:</strong>{" "}
          GHK-Cu increased expression of 1,942 genes and suppressed 762 genes in
          human fibroblasts.
        </p>
      </div>

      <div className="mt-5 divide-y divide-white/10">
        <Stat label="Genes Upregulated" value="1,942" highlight />
        <Stat label="Genes Downregulated" value="762" muted />
        <Stat label="DNA Repair Genes" value="↑ 47 genes" highlight />
        <Stat label="Antioxidant Genes" value="↑ 14 genes" muted />
      </div>
    </article>
  );
}