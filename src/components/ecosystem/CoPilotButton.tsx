
import React from "react";

// Add this type declaration to inform TypeScript about the Chatbase widget
declare global {
  interface Window {
    ChatbaseWidget?: {
      open: () => void;
    };
  }
}

const CoPilotButton = () => (
  <button
    type="button"
    onClick={() => {
      if (window.ChatbaseWidget) {
        window.ChatbaseWidget.open();
      }
    }}
    className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full shadow-lg text-base font-semibold bg-royalgold text-midnight hover:shadow-glow-gold animate-fade-in"
    style={{ border: "2px solid #010c43" }}
    aria-label="Open Co-Pilot chat"
  >
    🧭 Ask the Co-Pilot
  </button>
);

export default CoPilotButton;
