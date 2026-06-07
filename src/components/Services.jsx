import { motion } from "framer-motion";
import { services } from "../data/thumbnails";
import { Target, RefreshCw, Layers, Bitcoin } from "lucide-react";

// সার্ভিস অনুযায়ী প্রফেশনাল আইকন ম্যাপিং
const getIcon = (iconCode) => {
  const iconProps = { size: 28, strokeWidth: 1.5 };
  switch (iconCode) {
    case "🎯": return <Target {...iconProps} />;
    case "♻️": return <RefreshCw {...iconProps} />;
    case "📱": return <Layers {...iconProps} />;
    case "₿": return <Bitcoin {...iconProps} />;
    default: return <Target {...iconProps} />;
  }
};

// অ্যানিমেশন ভ্যারিয়েন্ট (পুরো সেকশনের জন্য)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // প্রতিটি কার্ড আসার সময় ১টি থেকে অন্যটির গ্যাপ
    },
  },
};

// কার্ডের জন্য অ্যানিমেশন ভ্যারিয়েন্ট
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-primaryRed font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Services
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            What I Can Design
          </h2>
        </div>

        {/* Bento-Style Grid - এখানেই অ্যানিমেশন ট্রিগার হচ্ছে */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // 'once: false' মানেই প্রতিবার স্ক্রলে এনিমেশন হবে
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.number}
              variants={itemVariants} // কার্ডের আলাদা অ্যানিমেশন
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-500 hover:border-primaryRed/30 hover:bg-white/[0.04]"
            >
              {/* আইকন কন্টেইনার */}
              <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-white/5 text-primaryRed group-hover:bg-primaryRed group-hover:text-white transition-all duration-300">
                {getIcon(s.icon)}
              </div>

              {/* সার্ভিস টেক্সট */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{s.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {s.text}
                </p>
              </div>

              {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-primaryRed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 