import beforeImg from "../assets/before.webp";
import afterImg from "../assets/thumb4.webp";
import { useState } from "react";

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSlider = (e) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <section
      id="case-study"
      className="py-24 bg-[#050505] relative border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            Case Study
          </h2>
          <div className="w-24 h-1 bg-primaryRed mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            See the difference a professionally designed thumbnail makes to your
            Click-Through Rate.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="border border-white/10 p-6 rounded-xl text-center w-40">
            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-2">
              Old CTR
            </p>
            <p className="text-3xl font-black text-gray-500">2.4%</p>
          </div>
          <div className="text-xl text-gray-600">→</div>
          <div className="border border-primaryRed p-6 rounded-xl text-center w-40 bg-primaryRed/5 shadow-[0_0_20px_rgba(232,25,44,0.15)]">
            <p className="text-gray-300 text-xs uppercase font-bold tracking-widest mb-2">
              New CTR
            </p>
            <p className="text-4xl font-black text-primaryRed">9.8%</p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative w-full aspect-video rounded-none overflow-hidden border border-white/10 group shadow-2xl">
          {/* After Image (Full background) */}
          <div className="absolute inset-0 bg-black flex items-center justify-center select-none">
            <img
              src={afterImg}
              alt="New Redesigned Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          {/* EXTRA STATIONARY RED LINE (Marked 2) */}
          <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-primaryRed/100 z-10 pointer-events-none"></div>

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 bg-black flex items-center justify-center select-none"
            style={{
              clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
            }}
          >
            <img
              src={beforeImg}
              alt="Original Unedited Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSlider}
            className="absolute inset-0 w-full h-full z-20 cursor-col-resize opacity-0"
          />

          {/* Handle Visual */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-primaryRed z-10 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="w-8 h-8 bg-primaryRed rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-[10px] font-bold">◀▶</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur px-4 py-2 text-[10px] font-bold text-gray-400 z-10 uppercase tracking-widest border border-white/10">
            Before
          </div>
          <div className="absolute bottom-6 right-6 bg-primaryRed px-4 py-2 text-[10px] font-bold text-white z-10 uppercase tracking-widest shadow-lg">
            After
          </div>
        </div>

        <p className="text-center text-[10px] text-gray-500 mt-6 uppercase tracking-[0.3em]">
          ← Drag to compare →
        </p>
      </div>
    </section>
  );
}