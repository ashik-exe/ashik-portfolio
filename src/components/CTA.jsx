  import ShinyButton from "./ShinyButton";
  export default function CTA({ onHireMe }) {
    return (
      <section
        id="cta"
        className="py-32 relative overflow-hidden text-center bg-bgDark"
      >
        {/* Background Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primaryRed/20 via-bgDark to-bgDark z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-tight">
            Need Thumbnails That<br />
            <span className="text-primaryRed drop-shadow-glow-red">
              Actually Get Clicks?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
            Stop wasting hours on videos that no one clicks. Let's work together to
            explode your channel growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-16">
    <ShinyButton
      text="LET'S WORK"
      onClick={onHireMe}
    />

    <a
    href="https://www.upwork.com/freelancers/~011c3afa07f2332e27"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      px-10
      py-5
      rounded-2xl
      border
      border-white/20
      text-white
      font-black
      uppercase
      tracking-wider
      transition-all
      duration-300
      hover:border-primaryRed
      hover:text-primaryRed
      hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]
      hover:-translate-y-1
    "
  >
    VIEW MY UPWORK
    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </a>
  </div>
        </div>
      </section>
    );
  }
