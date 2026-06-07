import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// ১. ইমপোর্ট সবসময় ফাইলের উপরে হবে
// Navbar.jsx ফাইলের একদম উপরে এই লাইনটি দিন:
import Logo from "../assets/icons/favicon.svg";


export default function Navbar({ onHireMe, onContactOptions }) {
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // 1. Hero section-এর উপরে থাকলে navbar hide হবে না
    if (latest < 0) {
      setIsTop(true);
      setHidden(false); 
    } else {
      setIsTop(false);
      // 2. Scroll down করলে hide, scroll up করলে show
      if (latest > scrollY.getPrevious() && latest > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 flex justify-center pt-6 px-4 ${isTop ? "pointer-events-none" : ""}`}
    >
      <motion.div
        animate={{ 
          width: "92%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(16px)",
        }}
        className="border border-white/10 rounded-full flex items-center justify-between shadow-2xl px-8 py-4 pointer-events-auto"
      >
              {/* লোগো, টেক্সট এবং হলুদ ডট সেকশন */}
<div className="flex items-center gap-0.1"> 
  <img src={Logo} alt="Ashik Artistry Logo" className="h-8 w-auto" />
  
  {/* এখানে mt-1 যোগ করা হয়েছে লেখাটিকে নিচে নামানোর জন্য */}
  <span className="text-white font-bold text-[20px] tracking-[0.1em] mt-2">
    shik Artistry
  </span>
  
  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
</div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
          {['Work', 'Case Study', 'Process', 'Results', 'Contact'].map((item) => (
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
          <button onClick={onContactOptions} className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors mr-2">
            Contact
          </button>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(232, 25, 44, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onHireMe}
            className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] rounded-full hover:bg-primaryRed hover:text-white transition-all"
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
} 