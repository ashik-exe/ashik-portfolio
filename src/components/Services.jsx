import { services } from "../data/thumbnails";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#111] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-y-0 left-0 w-[18vw] dot-matrix [mask-image:linear-gradient(to_right,black,transparent)] opacity-20" />
      <div className="absolute inset-y-0 right-0 w-[18vw] dot-matrix [mask-image:linear-gradient(to_left,black,transparent)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-gray-500 mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase">
            What I Can <span className="text-primaryRed">Design</span>
          </h2>
          <div className="w-24 h-1 bg-primaryRed mx-auto rounded-full mb-6 shadow-[0_0_20px_rgba(255,0,0,0.35)]" />
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Strategic visuals designed to increase click-through rate, strengthen
            branding, and help creators stand out in competitive niches.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.number}
              className={`service-card group ${
                s.featured ? "service-card-featured" : ""
              }`}
            >
              {s.badge && <div className="service-badge">{s.badge}</div>}
              <div className="service-number">{s.number}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
