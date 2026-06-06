import { useEffect, useRef } from "react";
import { viewerImages } from "../data/thumbnails";

export default function FullscreenViewer({ currentIndex, onClose, onNext, onPrev }) {
  const isOpen = currentIndex !== null;
  const viewerRef = useRef(null);


  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onNext, onPrev, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const src =
    isOpen && currentIndex >= 0 && currentIndex < viewerImages.length
      ? viewerImages[currentIndex]
      : "";

  return (
    <div
      ref={viewerRef}
      className={`image-viewer ${isOpen ? "show" : ""}`}
      onClick={(e) => {
        if (e.target === viewerRef.current) onClose();
      }}
    >
      {/* Prev */}
      <button className="gallery-btn left-5" onClick={onPrev}>
        &#10094;
      </button>

      {/* Next */}
      <button className="gallery-btn right-5" onClick={onNext}>
        &#10095;
      </button>

      {/* Close */}
      <button className="viewer-close-btn" onClick={onClose}>
        &times;
      </button>

      {/* Image */}
      {src && (
        <img
          key={src}
          src={src}
          alt="Fullscreen view"
          className="viewer-image relative z-10"
        />
      )}
    </div>
  );
}
