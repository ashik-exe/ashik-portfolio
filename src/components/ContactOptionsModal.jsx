import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactOptions } from "../data/thumbnails";

export default function ContactOptionsModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }} // Backdrop খুব দ্রুত ফেড ইন হবে
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            // Spring animation: stiffness বাড়ালে ফাস্ট হয়, damping অ্যাডজাস্ট করলে বাউন্স কন্ট্রোল হয়
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#050505] border border-white/10 p-10 rounded-3xl relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryRed to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white/50 hover:text-primaryRed transition-colors text-2xl"
            >
              ✕
            </button>

            <div className="text-center mb-10">
              <h3 className="text-4xl font-black uppercase tracking-widest text-white mb-2">Let's Talk</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px]">Choose your preferred connection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactOptions.map((opt) => (
                <motion.a
                  key={opt.title}
                  href={opt.href}
                  target={opt.target}
                  whileHover={{ scale: 1.02, borderColor: "#E8192C" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="group relative border border-white/5 bg-white/[0.02] rounded-xl p-6 transition-colors duration-200"
                >
                  <img src={opt.icon} alt={opt.alt} className="w-8 h-8 mb-4 filter brightness-0 invert opacity-70 group-hover:opacity-100" />
                  <h4 className="font-bold text-white mb-1 group-hover:text-primaryRed transition-colors">{opt.title}</h4>
                  <p className="text-xs text-gray-500">{opt.subtitle}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}