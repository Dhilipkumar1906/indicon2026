import { useState, useEffect } from "react";

export default function CallForPapers() {
  const [showCmtPopup, setShowCmtPopup] = useState(false);

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            // Optional: unobserve after animating once so it doesn't repeat every time you scroll up and down
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible in the screen
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="cfp"
      className="py-24 px-6 bg-gradient-to-b from-[#faf8f2] to-white overflow-hidden"
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
          /* Initial state before scrolling */
          .reveal-on-scroll {
            opacity: 0;
          }
          /* Class added by IntersectionObserver */
          .animate-fade-up {
            animation: fadeUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">

        {/* Heading - Reveal 1 */}
        <div className="text-center mb-16 reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
          <p className="text-[#C89B00] uppercase tracking-[4px] font-semibold">
            Paper Submission
          </p>

          <h2 className="text-5xl font-bold text-[#4A0012] mt-3">
            Call For Papers
          </h2>

          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Topics + Guidelines */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Topics Card - Reveal 2 */}
          <div 
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-[#F4D03F]/60 reveal-on-scroll"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-[#4A0012] mb-6">
              Topics of Interest
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• AI for Net-Zero and Sustainable Engineering</li>
              <li>• 6G & Sustainable Communication Networks</li>
              <li>• Cyber-Physical Systems & Smart Infrastructure</li>
              <li>• Sustainable Electronics & Green Hardware</li>
              <li>• Secure, Ethical & Responsible Intelligence</li>
              <li>• Technology for Social Good & Smart Society</li>
            </ul>
          </div>

          {/* Submission Card - Reveal 3 */}
          <div 
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-[#F4D03F]/60 reveal-on-scroll"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-bold text-[#4A0012] mb-6">
              Submission Guidelines
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Original and unpublished research work only</li>
              <li>• Manuscript must be in IEEE format</li>
              <li>• PDF submissions only</li>
              <li>• English language submissions</li>
              <li>• All papers undergo peer review</li>
              <li>• Submit through Microsoft CMT</li>
            </ul>
          </div>

        </div>

        {/* How To Submit - Reveal 4 */}
        <div 
          className="mt-12 bg-[#4A0012] rounded-3xl p-10 text-white reveal-on-scroll"
          style={{ animationDelay: '0.2s' }}
        >

          <h3 className="text-3xl font-bold mb-8 text-center">
            How To Submit
          </h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

            {[
              "Prepare Manuscript Use IEEE conference template.",
              "Register / Login to Microsoft CMT",
              "Complete Paper Metadata",
              "Upload Full Paper (PDF)",
              "Verify Submission Details",
              "Complete Submission Submit and get acknowledgement."
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-5 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-lg cursor-pointer group reveal-on-scroll"
                style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
              >
                <div className="text-2xl font-bold text-[#F4D03F] mb-2 transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </div>

                <p>{step}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="/cfp.pdf"
              download
              className="
                bg-[#F4D03F]
                text-[#4A0012]
                font-semibold
                px-8 py-3
                rounded-full
                hover:scale-105
                transition-all
                duration-300
                inline-flex
                items-center
                gap-2
              "
            >
              Download CFP
            </a>

            <button
              onClick={() => setShowCmtPopup(true)}
              className="
                border border-[#F4D03F]
                text-[#F4D03F]
                px-8 py-3
                rounded-full
                hover:bg-[#F4D03F]
                hover:text-[#4A0012]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Submit via CMT
            </button>

          </div>
        </div>

        {/* CMT Acknowledgement - Reveal 5 */}
        <div 
          className="mt-10 bg-[#FFF9E8] border border-[#F4D03F]/30 rounded-2xl p-6 transform transition-all duration-300 hover:shadow-md hover:border-[#F4D03F]/50 reveal-on-scroll"
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-[15px] text-gray-700 leading-relaxed font-bold">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </div>

      </div>

      {/* Popup Animation (Scale & Fade) */}
      {showCmtPopup && (
        <div
          onClick={() => setShowCmtPopup(false)}
          className="
            fixed inset-0
            z-[999]
            flex items-center justify-center
            bg-black/50
            backdrop-blur-md
            px-4
            animate-[fadeIn_0.3s_ease-out]
          "
        >
          <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
          
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-md
              w-full
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-2xl
              transform transition-all duration-300 
              animate-[fadeUp_0.4s_ease-out]
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
                className="
                  bg-[#F4D03F]
                  text-[#4A0012]
                  px-5 py-3
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition-transform
                  duration-300
                "
              >
                Download CFP
              </a>

              <button
                onClick={() => setShowCmtPopup(false)}
                className="
                  bg-[#4A0012]
                  text-white
                  px-5 py-3
                  rounded-full
                  hover:scale-105
                  transition-transform
                  duration-300
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}