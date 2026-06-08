import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/icons/favicon.svg";

export default function Navbar({ onHireMe, onContactOptions }) {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll threshold logic (Professional "Linear/Stripe" style)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest < 50) {
      setHidden(false);
      return;
    }
    if (latest > previous && (latest - previous) > 0) {
      setHidden(true); // Scroll down threshold
    } else if (latest < previous && (previous - latest) > 80) {
      setHidden(false); // Scroll up threshold
    }
  });

  const navLinks = ['Work', 'Case Study', 'Process', 'Results', 'Contact'];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4"
      >
        {/* Responsive Container: Fluid width and padding */}
        <div className="w-full max-w-7xl border border-white/10 rounded-full flex items-center justify-between shadow-2xl px-4 md:px-6 py-3 backdrop-blur-md bg-black/70 pointer-events-auto">
          
          {/* Logo Section */}
          <div className="flex items-center gap-0.1 shrink-0">
            <img src={Logo} alt="Ashik Artistry Logo" className="h-8 w-auto" />
            <span className="text-white font-bold text-[20px] tracking-[0.1em] mt-2 hidden sm:block">
              shik Artistry
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full ml-1" />
          </div>

          {/* Intelligent Navigation - Hidden ONLY on mobile (<768px) */}
          {/* Fluid Gaps: Starts tight (gap-3), expands to gap-6 on large screens */}
          <div className="hidden md:flex items-center gap-3 md:gap-4 lg:gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 whitespace-nowrap">
            {navLinks.map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ y: -2, color: "#E8192C" }}
                className="transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Contact Link: Hidden on small tablets to save space */}
            <button 
              onClick={onContactOptions} 
              className="hidden md:block text-[10px] font-bold uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors"
            >
              Contact
            </button>
            
            {/* Hire Me: Always visible */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(232, 25, 44, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onHireMe}
              className="px-4 md:px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] rounded-full hover:bg-primaryRed hover:text-white transition-all whitespace-nowrap"
            >
              Hire Me
            </motion.button>

            {/* Mobile Hamburger - Only visible < 768px */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden p-8"
          >
            <button
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-3xl font-black text-white uppercase tracking-widest hover:text-primaryRed transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              <div className="flex flex-col gap-6 mt-12 items-center">
                <button 
                  onClick={() => { onContactOptions(); setMobileMenuOpen(false); }} 
                  className="text-sm font-bold uppercase tracking-[0.2em] text-white/70"
                >
                  Contact
                </button>
                <button
                  onClick={() => { onHireMe(); setMobileMenuOpen(false); }}
                  className="px-8 py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-primaryRed hover:text-white transition-all"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}