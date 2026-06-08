import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/icons/favicon.svg";

export default function Navbar({ onHireMe, onContactOptions }) {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Professional Threshold Scroll Engine
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Always visible at the very top
    if (latest < 50) {
      setHidden(false);
      return;
    }

    // Scroll Down > 100px -> Hide | Scroll Up > 80px -> Show
    if (latest > previous && (latest - previous) > 80) {
      setHidden(true); 
    } else if (latest < previous && (previous - latest) > 80) {
      setHidden(false);
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
        {/* Navbar Container */}
        <div className="w-full max-w-7xl border border-white/10 rounded-full flex items-center justify-between shadow-2xl px-6 py-4 backdrop-blur-md bg-black/70 pointer-events-auto">
          
          {/* Logo - Preserved Branding */}
          <div className="flex items-center gap-2 shrink-0">
            <img src={Logo} alt="Ashik Artistry Logo" className="h-8 w-auto" />
            <span className="text-white font-bold text-[20px] tracking-[0.1em] hidden sm:block">
              shik Artistry
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          </div>

          {/* Desktop Navigation (Hidden on <1024px) */}
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 whitespace-nowrap">
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

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button onClick={onContactOptions} className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors">
                Contact
              </button>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(232, 25, 44, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onHireMe}
                className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] rounded-full hover:bg-primaryRed hover:text-white transition-all whitespace-nowrap"
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile/Tablet Hamburger Trigger */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <button
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8 text-center">
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