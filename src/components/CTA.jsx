import { motion } from "framer-motion";
import ShinyButton from "./ShinyButton";

export default function CTA({ onHireMe }) {
  return (
    <section
      id="cta"
      className="py-32 relative overflow-hidden text-center bg-[#050505]"
    >
      {/* Background Radial - Slightly more subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primaryRed/10 via-[#050505] to-[#050505] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-tight tracking-tight text-white">
            Need Thumbnails That<br />
            <span className="text-primaryRed drop-shadow-[0_0_15px_rgba(232,25,44,0.5)]">
              Actually Get Clicks?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop wasting hours on videos that no one clicks. Let's work together to explode your channel growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            {/* ShinyButton (Assuming this is your custom component) */}
            <ShinyButton
              text="LET'S WORK"
              onClick={onHireMe}
            />

            {/* Premium Upwork Button */}
            <a
              href="https://www.upwork.com/freelancers/~011c3afa07f2332e27"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                px-10
                py-5
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                text-white
                font-black
                uppercase
                tracking-widest
                text-sm
                transition-all
                duration-300
                hover:border-primaryRed/50
                hover:bg-white/[0.05]
                hover:-translate-y-1
              "
            >
              VIEW MY UPWORK
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}