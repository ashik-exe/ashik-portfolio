import { tools } from "../data/thumbnails";

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-16 bg-[#111] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-8">
          Built With Professional Tools
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-default"
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="w-10 h-10 object-contain"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-lg">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
