
const FounderHighlight = () => (
  <section className="w-full py-16 bg-midnight text-white animate-fade-section">
    <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <div className="text-2xl md:text-3xl font-poppins font-bold mb-5 leading-snug">
          “We don’t build hype. We build systems, stories,<br />and sustainable digital ventures.”
        </div>
        <div className="text-lg font-poppins mb-6 text-royalgold">
          — Aneesha Reihana, Founder
        </div>
        <a
          href="#"
          className="inline-block mt-2 font-montserrat uppercase tracking-wide text-midnight px-5 py-2.5 rounded-full bg-royalgold hover:shadow-glow-gold hover:bg-yellow-200 transition-all text-base font-bold"
        >
          Read Our Story
        </a>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-64 h-64 bg-gradient-to-br from-white/60 to-royalgold/40 rounded-xl border-4 border-royalgold/50 flex items-center justify-center shadow-glow-gold">
          {/* Placeholder for founder image */}
          <span className="font-poppins text-6xl text-midnight/20">AR</span>
        </div>
      </div>
    </div>
  </section>
);

export default FounderHighlight;
