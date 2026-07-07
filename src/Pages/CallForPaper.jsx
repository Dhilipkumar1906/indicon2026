import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function CallForPapers() {
  const [showCmtPopup, setShowCmtPopup] = useState(false);
  const navigate = useNavigate();

  // Full topics array
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

  // Intersection Observer to trigger animations on scroll
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
      <section
        id="call-for-papers"
        className="min-h-screen pt-32 pb-24 px-6 bg-gradient-to-b from-[#faf8f2] to-white overflow-hidden"
      >
        {/* Custom Keyframes for Fade-Up Animation */}
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

          {/* NEW SECTION: HYBRID MODE PRESENTATION ALERT */}
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

          {/* SECTION 1: TOPICS OF INTEREST */}
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


          {/* SECTION 3: HOW TO SUBMIT */}
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
                onClick={() => { window.location.href = "/guidelines#dates"; }}
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

        {/* Popup Animation */}
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

              <h2 className="text-2xl font-bold text-[#4A0012]">
                Paper Submission Portal
              </h2>

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
      </section>

      {/* Footer added at the bottom */}
      <Footer />
    </>
  );
}