import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CMTNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 1.5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Hide popup exactly after 7 seconds of it being visible
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="
            fixed bottom-6 right-6 z-[9999]
            max-w-[420px] w-[calc(100vw-3rem)]
            bg-gradient-to-br from-[#4A0012]/95 to-[#2a000a]/95
            backdrop-blur-xl border border-[#F4D03F]/30
            rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]
            overflow-hidden flex flex-col
          "
        >
          {/* Inner Content Container */}
          <div className="p-6 flex items-start gap-5">
            
            {/* Modern Icon with Glow & Tilt */}
            <div className="relative flex-shrink-0 mt-1">
              <div className="absolute inset-0 bg-[#F4D03F] blur-md opacity-40 animate-pulse rounded-full"></div>
              <div className="relative w-12 h-12 bg-gradient-to-tr from-[#FFF9E8] to-[#F4D03F] rounded-xl flex items-center justify-center shadow-inner transform -rotate-3">
                <svg className="w-6 h-6 text-[#4A0012]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-extrabold text-[#F4D03F] text-[15px] uppercase tracking-widest mb-1">
                  CMT Portal Live
                </h4>
                {/* Close Button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/40 hover:text-white transition-colors p-1 -mt-1 -mr-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-200 text-sm leading-relaxed mb-5 pr-2">
                Paper submission for IEEE INDICON 2026 is now officially open. Submit your manuscript via Microsoft CMT.
              </p>
              
              <a
                href="/guidelines"
                className="inline-flex items-center justify-center gap-2 text-xs font-extrabold bg-white text-[#4A0012] px-5 py-2.5 rounded-lg hover:bg-[#F4D03F] transition-all shadow-md group tracking-wide"
              >
                SUBMIT PAPER 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Animated Progress Bar (Shrinks over 7 seconds) */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 7, ease: "linear" }}
            className="h-1 bg-gradient-to-r from-[#F4D03F] via-[#FFD700] to-[#C89B00]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}