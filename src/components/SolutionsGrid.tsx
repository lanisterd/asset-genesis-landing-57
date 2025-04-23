
import { Zap, Rocket, Link } from "lucide-react";

const features = [
  {
    title: "Agentic Automation",
    sub: "CRM, workflows, backend AI systems",
    icon: Zap,
  },
  {
    title: "MVP Prototyping",
    sub: "Build AI-enabled MVPs in weeks",
    icon: Rocket,
  },
  {
    title: "Token Infrastructure",
    sub: "Own, govern, and grow your assets",
    icon: Link,
  },
];

const SolutionsGrid = () => (
  <section className="w-full py-20 bg-white animate-fade-section">
    <div className="container max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-2 text-midnight">Real Tools. Real Results.</h2>
        <p className="text-lg text-midnight/70 font-poppins">
          From no-code MVPs to token-ready stacks, our infrastructure empowers you to move fast, stay compliant, and build what matters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ title, sub, icon: Icon }, i) => (
          <div
            key={title}
            className="rounded-2xl bg-gradient-to-br from-yellow-50 to-royalgold/20 shadow-glow-gold border border-royalgold/25 p-8 flex flex-col items-center text-center hover:shadow-gold transition-shadow duration-200 group"
          >
            <Icon size={40} className="text-royalgold mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-xl font-semibold font-poppins text-midnight mb-2">{title}</div>
            <div className="text-base text-midnight/70">{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsGrid;
