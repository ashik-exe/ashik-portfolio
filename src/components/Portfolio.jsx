import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { thumbnails, mockItems, filterCategories } from "../data/thumbnails";

export default function Portfolio({ onOpenImage }) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Combine real + mock items preserving original order
  const allItems = [
    thumbnails[0], // documentary
    thumbnails[1], // documentary
    thumbnails[2], // money
    thumbnails[3], // money
    mockItems[0],  // gaming
    mockItems[1],  // tech
    mockItems[2],  // crypto
    mockItems[3],  // social
    mockItems[4],  // gaming
  ];

  const visible = allItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section
      id="portfolio"
      className="py-24 bg-bgDark border-t border-white/5 relative"
    >
      <div className="w-full px-20 2xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            My Work
          </h2>
          <div className="w-24 h-1 bg-primaryRed mx-auto mb-8" />

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2 rounded-full border text-sm font-bold transition-colors ${
                  activeFilter === cat.value
                    ? "bg-white text-black border-white"
                    : "border-white/20 text-white hover:bg-white hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {visible.map((item) => (
            <div
              key={item.id}
              style={{
                opacity: 1,
                transform: "scale(1)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <PortfolioCard item={item} onOpen={onOpenImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
