import { useEffect, useState } from "react";

export default function Navbar({ onHireMe, onContactOptions }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300`}
      id="navbar"
    >
      <div className="absolute inset-0 bg-bgDark/80 backdrop-blur-md border-b border-white/10" />
      <div
        className={`w-full px-4 lg:px-12 xl:px-20 ${
          scrolled ? "py-2" : "py-5"
        } transition-all duration-300 relative flex justify-between items-center`}
      >
        {/* Logo */}
        <a href="#" className="text-3xl lg:text-4xl font-black tracking-tight">
          Ashik<span className="text-primaryRed">Artistry</span>
          <span className="text-accentGold">.</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-14 text-lg font-black uppercase tracking-[0.15em]">
          <a href="#portfolio" className="hover:text-primaryRed transition-colors">
            Work
          </a>
          <a href="#case-study" className="hover:text-primaryRed transition-colors">
            Case Study
          </a>
          <a href="#process" className="hover:text-primaryRed transition-colors">
            Process
          </a>
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onContactOptions}
            className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:border-white hover:bg-white hover:text-black transition-all uppercase text-base tracking-wide"
          >
            Contact Me
          </button>
          <button
            onClick={onHireMe}
            className="px-9 py-4 bg-white text-black font-bold rounded hover:bg-primaryRed hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-glow-red uppercase text-base tracking-wide"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
