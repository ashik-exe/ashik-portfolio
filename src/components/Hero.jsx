import ShapeGrid from './ShapeGrid';

export default function Hero({ onHireMe }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ padding: 'clamp(6rem, 12vw, 8rem) clamp(1rem, 5vw, 3rem) clamp(3rem, 6vw, 5rem)' }}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ShapeGrid — pointer-events-auto so hover works */}
        <div className="absolute inset-0 opacity-30 pointer-events-auto">
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

        {/* Tech grid */}
        <div className="absolute inset-0 tech-grid opacity-40 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_45%,black_15%,transparent_100%)]" />

        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[70vh] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.10)_0%,transparent_72%)]" />

        {/* Center glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        {/* Crosshairs */}
        <div className="absolute top-1/4 left-[10%] w-4 h-4 crosshair opacity-25" />
        <div className="absolute bottom-1/4 right-[10%] w-4 h-4 crosshair opacity-25" />

        {/* Glow lines */}
        <div className="absolute top-1/2 right-[5%] w-[1px] h-32 glow-line-v opacity-35" />
        <div className="absolute top-[22%] left-0 w-full h-[1px] glow-line-h opacity-20" />

        {/* Dot matrix */}
        <div className="absolute inset-y-0 left-0 w-[20vw] dot-matrix [mask-image:linear-gradient(to_right,black,transparent)] opacity-20" />
        <div className="absolute inset-y-0 right-0 w-[20vw] dot-matrix [mask-image:linear-gradient(to_left,black,transparent)] opacity-20" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full text-center mx-auto"
        style={{ maxWidth: 'clamp(300px, 90vw, 860px)' }}
      >
        {/* Live Indicator */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span
            className="text-green-400 font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)' }}
          >
            Available for Work
          </span>
        </div>

        {/* Eyebrow */}
        <p
          className="text-accentGold font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.875rem)' }}
        >
          Stand out in the feed
        </p>

        {/* Headline */}
        <h1
          className="font-black leading-[1.1] tracking-tighter mb-5"
          style={{ fontSize: 'clamp(2rem, 7.5vw, 5rem)' }}
        >
          High CTR{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryRed to-red-600 whitespace-nowrap">
            YouTube Thumbnail
          </span>{' '}
          Designer
        </h1>

        {/* Subheadline */}
        <p
          className="text-gray-400 font-medium leading-relaxed mb-8 mx-auto"
          style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
            maxWidth: 'clamp(260px, 80vw, 520px)',
          }}
        >
          Stop losing views to bad packaging. I design thumbnails that turn
          impressions into clicks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
          <a
            href="#portfolio"
            className="w-full sm:w-auto bg-primaryRed text-white font-black uppercase tracking-wider rounded hover:-translate-y-1 hover:shadow-glow-red transition-all duration-300"
            style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              maxWidth: '360px',
            }}
          >
            View My Work
          </a>
          <a
            href="#case-study"
            className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white font-bold uppercase tracking-wider rounded hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              maxWidth: '360px',
            }}
          >
            See Results
          </a>
        </div>
      </div>
    </section>
  );
}