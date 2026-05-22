import { processSteps } from "../data/thumbnails";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-bgDark border-t border-white/5 relative"
    >
      <div className="w-full max-w-[1600px] mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            My Process
          </h2>
          <div className="w-24 h-1 bg-primaryRed mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className={`bg-panelDark border p-8 rounded-xl relative hover:-translate-y-2 transition-transform duration-300 ${
                step.featured
                  ? "border-primaryRed/30 shadow-[0_0_15px_rgba(255,0,0,0.1)]"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div
                className={`text-6xl font-black absolute top-4 right-4 pointer-events-none ${
                  step.featured ? "text-primaryRed/10" : "text-white/5"
                }`}
              >
                {step.number}
              </div>
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-xl ${
                  step.featured
                    ? "bg-primaryRed/20 text-primaryRed"
                    : "bg-white/10"
                }`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
