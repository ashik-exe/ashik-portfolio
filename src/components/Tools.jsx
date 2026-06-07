import { motion } from "framer-motion";

// ফাইলগুলো ইমপোর্ট করুন
import photoshopIcon from "../assets/icons/photoshop.svg";
import figmaIcon from "../assets/icons/figma.svg";
import canvaIcon from "../assets/icons/canva.svg";

const tools = [
  { name: "Photoshop", icon: photoshopIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Canva", icon: canvaIcon },
];

export default function Tools() {
  return (
    <section className="py-20 border-t border-white/5 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-10">
          Built with Professional Tools
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/5 rounded-full hover:border-primaryRed/50 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
            >
              {/* Image tag ব্যবহার করে SVG লোড করা */}
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
              />
              
              <span className="text-xs font-bold text-gray-400 tracking-wider group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}