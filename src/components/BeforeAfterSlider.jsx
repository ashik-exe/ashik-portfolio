import beforeImg from "../assets/before.jpg";
import afterImg from "../assets/thumb4.jpg";
import { useState } from "react";

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSlider = (e) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <section
      id="case-study"
      className="py-24 bg-[#111] relative border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            Case Study
          </h2>
          <div className="w-24 h-1 bg-accentGold mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See the difference a professionally designed thumbnail makes to your
            Click-Through Rate.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="bg-bgDark border border-white/10 p-6 rounded-xl text-center w-full md:w-64 shadow-lg">
            <p className="text-gray-400 text-sm uppercase font-bold tracking-wider mb-2">
              Old CTR
            </p>
            <p className="text-4xl font-black text-gray-500">2.4%</p>
          </div>
          <div className="hidden md:block text-2xl text-gray-600">→</div>
          <div className="bg-bgDark border border-primaryRed/30 p-6 rounded-xl text-center w-full md:w-64 shadow-glow-red relative overflow-hidden">
            <div className="absolute inset-0 bg-primaryRed/5 z-0" />
            <p className="text-gray-400 text-sm uppercase font-bold tracking-wider mb-2 relative z-10">
              New CTR
            </p>
            <p className="text-5xl font-black text-primaryRed relative z-10">
              9.8%
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border-2 border-white/10 group shadow-2xl">
          {/* After Image (bottom) */}
          <div className="absolute inset-0 bg-black flex items-center justify-center select-none">
            <img
              src={afterImg}
              alt="New Redesigned Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Before Image (clipped top) */}
          <div
            className="absolute inset-0 bg-black flex items-center justify-center select-none"
            style={{
              clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
            }}
          >
            <img
              src={beforeImg}
              alt="Original Unedited Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSlider}
            className="slider-input absolute inset-0 w-full h-full z-20 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Compare before and after"
          />

          {/* Handle Visual */}
          <div
            className="slider-handle absolute top-0 bottom-0 w-1 bg-accentGold z-10 shadow-glow-gold flex items-center justify-center"
            style={{ left: `${sliderValue}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-8 h-8 bg-accentGold rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded text-xs font-bold text-gray-400 z-10 uppercase tracking-wider border border-white/10 pointer-events-none">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-primaryRed px-3 py-1 rounded text-xs font-bold text-white z-10 uppercase tracking-wider shadow-lg pointer-events-none">
            After
          </div>
        </div>

        {/* Analysis */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <h4 className="text-2xl font-bold mb-4">Why it worked:</h4>
          <p className="text-gray-400 leading-relaxed">
            The original thumbnail lacked a clear focal point and the text was
            illegible on mobile devices. I removed the clutter, implemented a
            proven 3-element composition, boosted the contrast, and created an
            emotional hook that aligns perfectly with the video title.
          </p>
        </div>
      </div>
    </section>
  );
}
