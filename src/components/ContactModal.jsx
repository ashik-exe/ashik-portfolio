import { useEffect, useRef, useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const backdropRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Error: " + data.message);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
      className={`fixed inset-0 z-[9999] transition-opacity duration-300 bg-black/70 contact-modal-backdrop flex items-center justify-center p-4 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`w-full max-w-2xl bg-panelDark border border-white/10 rounded-2xl p-8 transition-transform duration-300 relative ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-white transition-colors"
        >
          &times;
        </button>

        <h3 className="text-3xl font-black mb-2">Let's Work Together</h3>
        <p className="text-gray-400 mb-8">
          Tell me about your channel and what kind of thumbnail you need.
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ✓
            </div>
            <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
            <p className="text-gray-400">I'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value="9870b479-2fb9-45a4-8d60-55da60969734" />
            <input type="hidden" name="subject" value="New Portfolio Inquiry from AshikArtistry" />
            <input type="hidden" name="from_name" value="AshikArtistry Website" />

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primaryRed transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primaryRed transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Ex: I need a high-CTR thumbnail designed for my upcoming YouTube video."
                className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primaryRed transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primaryRed text-white font-bold py-4 rounded hover:bg-red-700 transition-colors uppercase tracking-wider mt-4 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
