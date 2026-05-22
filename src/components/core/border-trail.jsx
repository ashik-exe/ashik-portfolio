"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function BorderTrail() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* subtle border */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/10" />

      {/* hover enter animation */}
      {isHovering && (
        <motion.div
          initial={{ x: "-150%" }}
          animate={{ x: "250%" }}
          exit={{ x: "-150%" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
            filter: "blur(10px)",
          }}
        />
      )}

      {/* hover leave animation */}
      {!isHovering && (
        <motion.div
          initial={{ x: "250%" }}
          animate={{ x: "-150%" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.20), transparent)",
            filter: "blur(10px)",
          }}
        />
      )}
    </div>
  );
}