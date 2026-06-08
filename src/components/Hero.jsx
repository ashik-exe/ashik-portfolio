import ShapeGrid from './ShapeGrid';

export default function Hero({ onHireMe }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Visual Background Elements - pointer-events-none ensures buttons remain clickable */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <ShapeGrid
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#2F293A"
            hoverFillColor="#914242"
            shape="square"
            hoverTrailAmount={0}
          />
        </div>

        {/* Technical Grid */}
        <div className="absolute inset-0 tech-grid opacity-40 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_45%,black_15%,transparent_100%)]" />

        {/* Main Red Cinematic Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[70vh] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.10)_0%,transparent_72%)]" />

        {/* Secondary White Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        {/* Crosshairs */}
        <div className="absolute top-1/4 left-[10%] w-4 h-4 crosshair opacity-25" />
        <div className="absolute bottom-1/4 right-[10%] w-4 h-4 crosshair opacity-25" />

        {/* Glow Lines */}
        <div className="absolute top-1/2 right-[5%] w-[1px] h-32 glow-line-v opacity-35" />
        <div className="absolute top-[22%] left-0 w-full h-[1px] glow-line-h opacity-20" />

        {/* Dot Matrix */}
        <div className="absolute inset-y-0 left-0 w-[20vw] dot-matrix [mask-image:linear-gradient(to_right,black,transparent)] opacity-20" />
        <div className="absolute inset-y-0 right-0 w-[20vw] dot-matrix [mask-image:linear-gradient(to_left,black,transparent)] opacity-20" />
      </div>

      {/* Main Content Container */}
      {/* max-w-4xl ensures text doesn't stretch too wide on ultrawide monitors */}
      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        
        {/* Live Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-green-400 font-bold">
            Available for Work
          </span>
        </div>

        <h2 className="text-accentGold font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">
          Stand out in the feed
        </h2>

        {/* Headline with Optimized Responsive Scaling */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-6 tracking-tighter">
          High CTR
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryRed to-red-600 block sm:inline">
            YouTube Thumbnail
          </span>
          <br className="hidden sm:block" />
          Designer
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
          Stop losing views to bad packaging. I design thumbnails that turn
          impressions into clicks.
        </p>

        {/* CTA Buttons - Optimized for touch and flow */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-primaryRed text-white font-black text-base md:text-lg rounded uppercase tracking-wider hover:-translate-y-1 hover:shadow-glow-red transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#case-study"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold text-base md:text-lg rounded uppercase tracking-wider hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            See Results
          </a>
        </div>
      </div>
    </section>
  );
}