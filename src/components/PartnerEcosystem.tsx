
const partners = [
  "Story Protocol",
  "Hash Legal",
  "IXSwap",
  "SUI",
  "PEAQ",
];

const PartnerEcosystem = () => (
  <section className="w-full py-16 bg-gradient-to-br from-white via-yellow-50 to-royalgold/20 animate-fade-section" id="ecosystem">
    <div className="container max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold font-poppins text-midnight mb-8 text-center">Partner Ecosystem</h2>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 py-6">
        {partners.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center w-40 h-16 rounded-lg bg-white shadow border border-royalgold/10 grayscale hover:grayscale-0 hover:shadow-glow-gold hover:border-royalgold/90 transition-all duration-200 cursor-pointer"
          >
            <span className="font-montserrat text-lg font-bold text-midnight group-hover:text-royalgold" style={{ letterSpacing: "0.02em" }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerEcosystem;
