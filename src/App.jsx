import { useState } from "react";
import { viewerImages } from "./data/thumbnails";

import Loader               from "./components/Loader";
import Navbar               from "./components/Navbar";
import Hero                 from "./components/Hero";
import Portfolio            from "./components/Portfolio";
import BeforeAfterSlider    from "./components/BeforeAfterSlider";
import Services             from "./components/Services";
import Process              from "./components/Process";
import Tools                from "./components/Tools";
import CTA                  from "./components/CTA";
import Footer               from "./components/Footer";
import ContactModal         from "./components/ContactModal";
import ContactOptionsModal  from "./components/ContactOptionsModal";
import FullscreenViewer     from "./components/FullscreenViewer";


export default function App() {
  const [hireModalOpen,    setHireModalOpen]    = useState(false);
  const [contactOptOpen,   setContactOptOpen]   = useState(false);
  const [viewerIndex,      setViewerIndex]      = useState(null);

  const openImage = (i) => {
 
  setViewerIndex(i);
};
  const closeImage = ()  => setViewerIndex(null);

  const nextImage  = () =>
    setViewerIndex((prev) => (prev + 1) % viewerImages.length);

  const prevImage  = () =>
    setViewerIndex((prev) =>
      prev - 1 < 0 ? viewerImages.length - 1 : prev - 1
    );

  return (
    <>
      {/* Film grain overlay */}
      <div className="noise-overlay" />

      {/* Loading screen */}
      <Loader />

    
      {/* Navigation */}
      <Navbar
        onHireMe={() => setHireModalOpen(true)}
        onContactOptions={() => setContactOptOpen(true)}
      />

      {/* Page Sections */}
      <main>
        <Hero onHireMe={() => setHireModalOpen(true)} />
        <Portfolio onOpenImage={openImage} />
        <BeforeAfterSlider />
        <Services />
        <Process />
        <Tools />
        <CTA onHireMe={() => setHireModalOpen(true)} />
      </main>

      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
      <ContactOptionsModal
        isOpen={contactOptOpen}
        onClose={() => setContactOptOpen(false)}
      />

      {/* Fullscreen Image Viewer */}
      <FullscreenViewer
        currentIndex={viewerIndex}
        onClose={closeImage}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
