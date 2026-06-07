import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  { id: "01", title: "Understand Topic", text: "I analyze your video, title, and target audience to find the core message and emotional trigger.", icon: <BrainCircuit size={28} /> },
  { id: "02", title: "Create Hook", text: "Brainstorming visual hooks that complement the title without repeating it, creating a curiosity gap.", icon: <Lightbulb size={28} /> },
  { id: "03", title: "Design Layout", text: "Drafting compositions using the rule of thirds, high-contrast colors, and readable typography.", icon: <Palette size={28} /> },
  { id: "04", title: "Optimize & Deliver", text: "Testing against UI elements (timestamps, mobile view) to ensure perfect visibility and maximum CTR.", icon: <Rocket size={28} /> },
];

export default function Process() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-primaryRed font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
            Workflow
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            My Process
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-primaryRed/30 transition-all duration-500"
            >
              {/* Step Number */}
              <div className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-primaryRed/10 transition-colors duration-500">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-white/5 text-primaryRed group-hover:bg-primaryRed group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{step.title}</h3>
              <p className="text-[13px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {step.text}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primaryRed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}