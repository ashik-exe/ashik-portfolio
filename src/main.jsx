import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async"; // ১. ইমপোর্ট করুন

// Styles
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/gallery.css";
import "./styles/modal.css";
import "./styles/services.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider> {/* ২. অ্যাপটিকে এর ভেতরে রাখুন */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);