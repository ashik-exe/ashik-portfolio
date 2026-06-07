import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { viewerImages } from "./data/thumbnails";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Services from "./components/Services";
import Process from "./components/Process";
import Tools from "./components/Tools";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ContactOptionsModal from "./components/ContactOptionsModal";
import FullscreenViewer from "./components/FullscreenViewer";

export default function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [contactOptOpen, setContactOptOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(null);

  const openImage = (i) => setViewerIndex(i);
  const closeImage = () => setViewerIndex(null);

  const nextImage = () =>
    setViewerIndex((prev) => (prev + 1) % viewerImages.length);

  const prevImage = () =>
    setViewerIndex((prev) =>
      prev - 1 < 0 ? viewerImages.length - 1 : prev - 1
    );

  // Schema Markup-এর জন্য ডেটা
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "MD ASHIKUR RAHMAN",
    "jobTitle": "Thumbnail Designer & Video Editor",
    "url": "https://ashik-exe.github.io/ashik-portfolio/",
    "sameAs": [
      "https://www.upwork.com/freelancers/~011c3afa07f2332e27",
      "https://github.com/ashik-exe"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ashik Artistry | Expert YouTube Thumbnail Designer</title>
        <meta name="description" content="Professional YouTube thumbnail design and video editing services by Ashik Artistry." />
        
        <link rel="canonical" href="https://ashik-artistry.vercel.app/" />
        
        <meta property="og:title" content="Ashik Artistry | Expert Thumbnail Designer" />
        <meta property="og:description" content="Want more clicks? Get professional YouTube thumbnails." />
        
        <meta property="og:url" content="https://ashik-artistry.vercel.app/" />
        
        {/* ফিক্সড স্ক্রিপ্ট ট্যাগ */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

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