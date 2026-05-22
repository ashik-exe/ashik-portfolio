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
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
          Stop wasting hours on videos that no one clicks. Let's work together to
          explode your channel growth.
        </p>

        <button
          onClick={onHireMe}
          className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white transition-all duration-200 bg-primaryRed rounded-full shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:shadow-[0_0_50px_rgba(255,0,0,0.8)] hover:-translate-y-2 uppercase tracking-widest overflow-hidden"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10" />
          <span className="relative">Hire Me Now</span>
        </button>
      </div>
    </section>
  );
}
