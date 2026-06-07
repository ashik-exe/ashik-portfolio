import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  const [view, setView] = useState("choice"); // 'choice', 'form', 'success'
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (isOpen) setView("choice");
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation: check if fields are empty
    if (!e.target.name.value || !e.target.email.value || !e.target.message.value) {
      alert("Please fill in all fields correctly.");
      return;
    }
    setSending(true);
    const formData = new FormData(e.target);
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    if (res.ok) { setView("success"); setTimeout(onClose, 3000); }
    setSending(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-xl bg-[#050505] border border-white/10 p-8 rounded-3xl relative shadow-2xl overflow-hidden">
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-primaryRed text-2xl transition-colors">✕</button>

            {view === "choice" && (
              <div className="text-center py-10">
                <h3 className="text-3xl font-black text-white mb-8">How to Proceed?</h3>
                <div className="space-y-4">
                  <button onClick={() => setView("form")} className="w-full p-6 border border-primaryRed/30 bg-primaryRed/5 rounded-2xl hover:bg-primaryRed transition-all text-left">
                    <h4 className="font-bold text-lg">Send a Message</h4>
                    <p className="text-xs text-gray-400">Directly via website form</p>
                  </button>
                  <a href="https://www.upwork.com/freelancers/~011c3afa07f2332e27" target="_blank" rel="noopener noreferrer" className="w-full p-6 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-all flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg">Hire via Upwork</h4>
                      <p className="text-xs text-gray-400">Secure & professional</p>
                    </div>
                    <span className="text-primaryRed">↗</span>
                  </a>
                </div>
              </div>
            )}

            {view === "form" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="9870b479-2fb9-45a4-8d60-55da60969734" />
                <h3 className="text-2xl font-black mb-4">Let's Work Together</h3>
                <input type="text" name="name" required placeholder="Your Name" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white focus:border-primaryRed outline-none" />
                <input type="email" name="email" required placeholder="Your Email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white focus:border-primaryRed outline-none" />
                <textarea name="message" required rows={3} placeholder="Tell me about your channel..." className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white focus:border-primaryRed outline-none resize-none" />
                <button type="submit" disabled={sending} className="w-full bg-primaryRed text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-700">
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}

            {view === "success" && (
              <div className="text-center py-12">
                <h4 className="text-2xl font-black text-white">Message Sent Successfully!</h4>
                <p className="text-gray-400 mt-2">I'll get back to you soon.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}