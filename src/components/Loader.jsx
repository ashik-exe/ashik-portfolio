import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/icons/favicon.svg"; 

export default function Loader() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 100 ? 100 : prev + Math.floor(Math.random() * 10) + 5));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => setIsComplete(true), 400);
    }
  }, [count]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          // এখানে লোডারটি উপরের দিকে স্লাইড হয়ে ওয়েবসাইটকে জায়গা করে দেবে
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img src={Logo} alt="Logo" className="w-24 h-24 mb-6" />
          </motion.div>

          {/* Progress Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-mono text-xl tracking-[0.2em]"
          >
            {count}%
          </motion.div>

          {/* Minimal Line Progress */}
          <div className="w-64 h-[1px] bg-white/20 mt-8 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}