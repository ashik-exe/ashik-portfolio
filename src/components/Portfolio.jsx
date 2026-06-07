import { useState } from "react";
import { thumbnails, mockItems, filterCategories } from "../data/thumbnails";

export default function Portfolio({ onOpenImage }) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Combine real + mock items preserving original order
  const allItems = [
    thumbnails[0],
    thumbnails[1],
    thumbnails[2],
    thumbnails[3],
    thumbnails[4],
    ...mockItems,
  ];

  const visible = allItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section
      id="portfolio"
      className="py-24 bg-bgDark border-t border-white/5 relative"
    >
      <div className="w-full px-6 md:px-20 2xl:px-32">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[11px] tracking-[4px] uppercase text-primaryRed mb-4 block">
              Full Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-0 leading-none">
              All Work
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="gallery-filters">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`filter-btn ${activeFilter === cat.value ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="gallery-grid">
          {visible.map((item, index) => {
            // Generate dynamic SVG for mock items to match the premium design
            const palette = item.palette || ["#0d0d0d", "#1a0505"];
            const color = item.color || "#E8192C";
            const svgSrc = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1280' height='720'><defs><linearGradient id='g${index}' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='${encodeURIComponent(palette[0])}'/><stop offset='100%25' stop-color='${encodeURIComponent(palette[1])}'/></linearGradient></defs><rect fill='url(%23g${index})' width='1280' height='720'/><text x='640' y='320' font-family='Georgia' font-size='52' fill='${encodeURIComponent(color)}' text-anchor='middle' font-weight='bold'>${encodeURIComponent((item.label || item.category).toUpperCase())}</text><text x='640' y='430' font-family='Arial' font-size='24' fill='%23888' text-anchor='middle'>Place your thumbnail here</text></svg>`;

            return (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => onOpenImage(item.id)}
              >
                <img
                  src={item.isReal ? item.image : svgSrc}
                  alt={item.alt || item.label}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}