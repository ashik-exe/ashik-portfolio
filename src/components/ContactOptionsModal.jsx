import { useEffect, useRef } from "react";
import { contactOptions } from "../data/thumbnails";

export default function ContactOptionsModal({ isOpen, onClose }) {
  const backdropRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
      className={`fixed inset-0 z-[9999] transition-opacity duration-300 bg-black/70 contact-options-backdrop flex items-center justify-center p-4 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        id="contactOptionsContent"
        className={`w-full max-w-3xl rounded-2xl p-8 transition-transform duration-300 relative ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="modal-close-btn absolute top-4 right-4 text-3xl text-gray-400 hover:text-white transition-colors"
        >
          &times;
        </button>

        <h3 className="text-3xl font-black mb-2">Contact Me</h3>
        <p className="text-gray-400 mb-8">
          Choose your preferred way to get in touch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactOptions.map((opt) => (
            <a
              key={opt.title}
              href={opt.href}
              target={opt.target}
              rel="noopener noreferrer"
              className="group bg-black border border-white/10 rounded-xl p-6 block"
            >
              <img
                src={opt.icon}
                alt={opt.alt}
                className="contact-logo contact-icon mb-3"
              />
              <h4 className="font-bold text-lg mb-1 text-gray-200">{opt.title}</h4>
              <p className="text-sm text-gray-400">{opt.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
