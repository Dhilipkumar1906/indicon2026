import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

export default function CallForPapers() {
  // States for Popups
  const [showCmtPopup, setShowCmtPopup] = useState(false);
  const [showRegPopup, setShowRegPopup] = useState(false);
  
  const navigate = useNavigate();

  // Full topics array for CFP
  const topics = [
    "AI, Machine Learning, and Intelligence for Net-Zero Engineering",
    "6G, Next-Gen Wireless, Networking, and Sustainable Communication Systems",
    "Cyber-Physical Systems, Digital Twins, and Sustainable Smart Infrastructure",
    "Sustainable Electronics, Green Hardware, VLSI, and Embedded Systems",
    "Power Electronics, Smart Grids, and Industrial Automation",
    "Robotics, Automation, Instrumentation, and Intelligent Control",
    "Photonics, Quantum Technologies, and Optical Intelligence",
    "Sensors, Remote Sensing, Signal & Image Processing, and Intelligent Perception",
    "Biomedical Engineering, Wearable Systems, and Healthcare Technologies",
    "Secure, Ethical Intelligence, Intelligent Mobility, and Applications for Social Good"
  ];

  // Data arrays for Registration
  const indianFees = [
    { category: "IEEE Student Member", total: "INR 9,000" },
    { category: "Non-IEEE Student Member", total: "INR 10,000" },
    { category: "IEEE Member", total: "INR 10,000" },
    { category: "Non-IEEE Member", total: "INR 11,000" },
  ];

  const foreignFees = [
    { category: "IEEE Student Member", total: "USD 150" },
    { category: "Non-IEEE Student Member", total: "USD 200" },
    { category: "IEEE Member", total: "USD 200" },
    { category: "Non-IEEE Member", total: "USD 250" },
  ];

  // Animation variants for Registration Section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Intersection Observer to trigger animations on scroll for CFP
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Custom Keyframes for CFP Fade-Up Animation */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .reveal-on-scroll {
            opacity: 0;
          }
          .animate-fade-up {
            animation: fadeUp 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* =========================================
          SECTION 1: CALL FOR PAPERS (CFP) 
      ========================================= */}
      <section
        id="call-for-papers"
        className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#faf8f2] to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading - Reveal 1 */}
          <div className="text-center mb-10 reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
            <p className="text-[#C89B00] uppercase tracking-[4px] font-semibold">
              Paper Submission
            </p>
            <h2 className="text-5xl font-bold text-[#4A0012] mt-3">
              Call For Papers
            </h2>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Intro Paragraph & Best Paper Award */}
          <div className="max-w-4xl mx-auto text-center mb-10 reveal-on-scroll" style={{ animationDelay: '0.15s' }}>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 text-justify md:text-center px-4">
              IEEE INDICON 2026 invites original, high-quality research papers from academicians, industry professionals, and researchers worldwide. The conference provides a premier platform to present and discuss the latest innovations, trends, and practical challenges encountered in the fields of engineering and technology.
            </p>
            
            <div className="inline-block bg-[#FFF9E8] border-2 border-[#F4D03F]/50 px-8 py-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300">
              <p className="text-[#4A0012] font-extrabold text-lg md:text-xl flex items-center justify-center gap-3">
                <span className="text-3xl">🏆</span> 
                Track-wise Best Paper will be awarded!
                <span className="text-3xl">🏆</span>
              </p>
            </div>
          </div>

          {/* HYBRID MODE PRESENTATION ALERT */}
          <div className="max-w-4xl mx-auto mb-16 reveal-on-scroll" style={{ animationDelay: '0.18s' }}>
            <div className="bg-[#FFF9E8] border-l-4 border-[#C89B00] p-6 md:p-8 rounded-r-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 border-y border-r border-[#F4D03F]/30">
              <div className="text-4xl md:text-5xl drop-shadow-sm">🌍</div>
              <div>
                <h4 className="text-xl font-bold text-[#4A0012] mb-2 uppercase tracking-wide">Presentation Mode (Hybrid)</h4>
                <p className="text-gray-700 text-[15.5px] leading-relaxed">
                  IEEE INDICON 2026 will be conducted in a hybrid format. Please note that <strong className="text-[#4A0012]">virtual (online) presentations are exclusively reserved for foreign authors</strong>. All Indian delegates are required to attend and present their papers <strong className="text-red-700 underline decoration-red-300 underline-offset-4">in person</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* TOPICS OF INTEREST */}
          <div 
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-[#F4D03F]/20 mb-10 transform transition-all duration-300 hover:shadow-2xl reveal-on-scroll"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#4A0012] mb-8 flex items-center gap-3">
              <span className="text-3xl md:text-4xl">🎯</span> Topics of Interest
            </h3>
            <div className="grid lg:grid-cols-2 gap-4 md:gap-5">
              {topics.map((topic, index) => (
                <div 
                  key={index}
                  className="
                    group flex items-start gap-4 
                    bg-[#faf8f2] border border-[#F4D03F]/30 
                    p-5 rounded-2xl 
                    hover:bg-[#FFF9E8] hover:border-[#F4D03F] hover:-translate-y-1 hover:shadow-md
                    transition-all duration-300 cursor-default
                  "
                >
                  <div className="w-8 h-8 rounded-full bg-[#F4D03F]/20 flex items-center justify-center text-[#4A0012] font-bold flex-shrink-0 group-hover:bg-[#F4D03F] transition-colors duration-300">
                    {index + 1}
                  </div>
                  <div className="text-[#4A0012] font-semibold text-[15px] leading-relaxed mt-1">
                    {topic}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HOW TO SUBMIT */}
          <div 
            className="bg-[#4A0012] rounded-[2rem] p-8 md:p-12 text-white reveal-on-scroll relative overflow-hidden shadow-2xl"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4D03F] opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center relative z-10">
              How To Submit
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 relative z-10">
              {[
                "Prepare Manuscript using IEEE template.",
                "Register / Login to Microsoft CMT.",
                "Complete Paper Metadata details.",
                "Upload Full Paper (PDF Format).",
                "Verify Submission Details carefully.",
                "Submit and get acknowledgement."
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-[#F4D03F]/50 hover:shadow-xl cursor-default group"
                >
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center text-xl font-bold text-[#F4D03F] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F4D03F] group-hover:text-[#4A0012]">
                    {index + 1}
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">{step}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-12 relative z-10">
              <a
                href="/callforpapers.pdf"
                download
                className="
                  bg-[#F4D03F] text-[#4A0012] font-bold px-8 py-4 rounded-full
                  hover:scale-105 hover:shadow-[0_10px_30px_rgba(244,208,63,0.3)]
                  transition-all duration-300 inline-flex items-center gap-2
                "
              >
                Download CFP
              </a>

              <button
                onClick={() => setShowCmtPopup(true)} // Changed from redirecting to opening the CMT popup
                className="
                  border-2 border-[#F4D03F] text-[#F4D03F] font-bold px-8 py-4 rounded-full
                  hover:bg-[#F4D03F] hover:text-[#4A0012] hover:scale-105
                  transition-all duration-300
                "
              >
                Submit via CMT
              </button>
            </div>
          </div>

          {/* CMT Acknowledgement */}
          <div 
            className="mt-10 bg-[#FFF9E8] border border-[#F4D03F]/30 rounded-2xl p-6 transform transition-all duration-300 hover:shadow-md hover:border-[#F4D03F]/50 reveal-on-scroll"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-[15px] text-gray-700 leading-relaxed font-bold text-center md:text-left">
              The Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free by
              Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: REGISTRATION DETAILS 
      ========================================= */}
      <section id="registration" className="bg-gradient-to-b from-white to-[#faf8f2] pt-16 pb-24 px-6 relative overflow-hidden">
        
        {/* Background Decorative Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F4D03F] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Heading Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A0012] mt-3">
              Registration Details
            </h1>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Mandatory Requirement Paragraph */}
            <motion.div variants={itemVariants} className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#4A0012] mb-10 text-gray-700 leading-relaxed text-[15px] md:text-base text-justify">
              At least one author of each accepted paper must complete the registration by paying the appropriate conference fee in order for the paper to be included in the <strong>IEEE INDICON 2026</strong> conference program and submitted for publication in <strong>IEEE Xplore</strong> <em>(subject to compliance with IEEE quality standards and presentation at the conference)</em>.
            </motion.div>

            {/* Registration Guidelines */}
            <motion.div variants={itemVariants} className="max-w-5xl mx-auto bg-[#FFF9E8] p-8 md:p-10 rounded-3xl shadow-sm border border-[#F4D03F]/30 mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#4A0012] mb-6">Registration Guidelines</h3>
              <ul className="space-y-4 text-gray-700 list-disc pl-5 marker:text-[#C89B00] text-[15px] md:text-base">
                <li><strong>Eligibility for IEEE Xplore:</strong> Only registered and presented papers will be considered for <strong>IEEE Xplore Digital Library</strong>.</li>
                <li>Each full registration covers <strong>one (1) paper</strong> with a maximum of <strong>6 pages</strong>.</li>
                <li>A maximum of <strong>2 additional pages</strong> can be included with an overlength fee of <strong>₹1000 / $18</strong> per extra page.</li>
                <li><strong>Registration fees are non-refundable</strong> under any circumstances.</li>
                <li>Authors must retain a copy of the <strong>payment transaction ID or receipt</strong> for use during the registration process.</li>
                <li>Authors registering under <strong>IEEE Member</strong> or <strong>Student</strong> categories must upload a valid <strong>IEEE membership card</strong> or <strong>student ID</strong> respectively.</li>
              </ul>
            </motion.div>

            {/* Tables Grid Layout */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              
              {/* Indian Delegates Table */}
              <div className="bg-white rounded-[1.5rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#4A0012] py-5 px-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-white relative z-10 flex items-center justify-center gap-3">
                    Indian Delegates
                  </h2>
                </div>
                
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center bg-[#faf8f2] py-3 px-4 rounded-lg text-[#4A0012] font-bold text-xs md:text-sm uppercase tracking-wider mb-3 border border-[#F4D03F]/20">
                    <div>Category</div>
                    <div className="text-right">Fee (incl. GST)</div>
                  </div>
                  
                  <div className="space-y-3 mt-2">
                    {indianFees.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-[#FFF9E8]/60 transition-colors border border-gray-100 hover:border-[#F4D03F]/40 group">
                        <div className="font-medium text-gray-700 text-sm md:text-base group-hover:text-[#4A0012]">{item.category}</div>
                        <div className="font-bold text-sm md:text-base text-[#4A0012] bg-[#FFF9E8] py-1.5 px-3 rounded-md border border-[#F4D03F]/40 whitespace-nowrap">{item.total}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Foreign Delegates Table */}
              <div className="bg-white rounded-[1.5rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#4A0012] py-5 px-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-white relative z-10 flex items-center justify-center gap-3">
                    Foreign Delegates
                  </h2>
                </div>
                
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center bg-[#faf8f2] py-3 px-4 rounded-lg text-[#4A0012] font-bold text-xs md:text-sm uppercase tracking-wider mb-3 border border-[#F4D03F]/20">
                    <div>Category</div>
                    <div className="text-right">Fee (incl. GST)</div>
                  </div>
                  
                  <div className="space-y-3 mt-2">
                    {foreignFees.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-[#FFF9E8]/60 transition-colors border border-gray-100 hover:border-[#F4D03F]/40 group">
                        <div className="font-medium text-gray-700 text-sm md:text-base group-hover:text-[#4A0012]">{item.category}</div>
                        <div className="font-bold text-sm md:text-base text-[#4A0012] bg-[#FFF9E8] py-1.5 px-3 rounded-md border border-[#F4D03F]/40 whitespace-nowrap">{item.total}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Deadline Banner */}
            <motion.div variants={itemVariants} className="max-w-2xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-4 mb-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 shadow-sm">
              <span className="text-xl">⏳</span>
              <p className="text-red-800 font-medium text-sm md:text-base">
                <strong className="font-bold">Important:</strong> Registration window closes on <span className="underline decoration-red-300 decoration-2 underline-offset-2">10 November 2026</span>.
              </p>
            </motion.div>

            {/* Final CTA Button */}
            <motion.div variants={itemVariants} className="text-center pb-10">
              <button
                onClick={() => setShowRegPopup(true)} // Connected to Registration Popup
                className="
                  relative group overflow-hidden
                  bg-[#F4D03F] text-[#4A0012]
                  px-10 py-4 rounded-full font-bold text-base md:text-lg
                  shadow-[0_8px_30px_rgba(244,208,63,0.3)]
                  hover:shadow-[0_10px_40px_rgba(244,208,63,0.5)]
                  transition-all duration-300 transform hover:scale-105
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Proceed to Registration
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Footer added at the bottom */}
      <Footer />

      {/* =========================================
          POPUPS SECTION 
      ========================================= */}

      {/* 1. CMT Submission Popup */}
      {showCmtPopup && (
        <div
          onClick={() => setShowCmtPopup(false)}
          className="
            fixed inset-0 z-[999] flex items-center justify-center
            bg-black/50 backdrop-blur-md px-4 animate-[fadeIn_0.3s_ease-out]
          "
        >
          <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-2xl
              transform transition-all duration-300 animate-[fadeUp_0.4s_ease-out]
            "
          >
            <div className="text-5xl mb-4 hover:animate-bounce cursor-default">📄</div>
            <h2 className="text-2xl font-bold text-[#4A0012]">Paper Submission Portal</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Microsoft CMT submission portal will be available shortly.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Authors are encouraged to download the CFP and prepare their manuscripts in advance.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <a
                href="/cfp.pdf"
                download
                className="bg-[#F4D03F] text-[#4A0012] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Download CFP
              </a>
              <button
                onClick={() => setShowCmtPopup(false)}
                className="bg-[#4A0012] text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Registration Popup */}
      <AnimatePresence>
        {showRegPopup && (
          <div
            className="
              fixed inset-0 z-[999]
              flex items-center justify-center
              bg-black/50 backdrop-blur-sm
              px-4
            "
            onClick={() => setShowRegPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white max-w-md w-full
                rounded-[2rem] p-8 md:p-10 text-center
                shadow-2xl border border-gray-100
              "
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFF9E8] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                <span className="text-3xl md:text-4xl">⏳</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-[#4A0012] mb-3">
                Opening Soon
              </h2>

              <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                The official registration portal for IEEE INDICON 2026 is being finalized. Please stay tuned for updates!
              </p>

              <button
                onClick={() => setShowRegPopup(false)}
                className="
                  w-full bg-[#4A0012] text-white
                  py-3.5 md:py-4 rounded-full font-semibold
                  hover:bg-[#650018] transition-colors text-sm md:text-base
                "
              >
                Got it, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
