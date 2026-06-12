import { useState } from "react";
import earth from "../assets/image/earth.jpg";
import LogoStrip from "./LogoStrip";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section id="home"
      className="min-h-screen relative bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(20,0,5,0.88),
rgba(40,0,10,0.62)
          ),
          url(${earth})
        `,
      }}
    >
      
      <div className="max-w-5xl mx-auto text-center px-6 pt-30 ">
<LogoStrip/>
        
        <div className="mb-7 fade-up mt-3">
  <p className="text-[#F4D03F] uppercase tracking-[4px] text-sm font-medium">
    An IEEE India Council Conference
  </p>


  <p className="text-white/80 uppercase tracking-[3px] text-sm">
    In Association with IEEE Madras Section presents 23rd Edition of
  </p>
</div>
        <h1 className="mt-2 text-5xl md:text-7xl font-bold text-white font-['Playfair_Display'] fade-up">
         <p>IEEE</p> 
        <span className="text-[#F4D03F] drop-shadow-lg">
    INDICON 2026</span>
        </h1>

        <p className="mt-8 text-lg md:text-2xl text-white/90 leading-relaxed font-['Cinzel']">
          Net-Zero Cyber-Physical Intelligence:
          AI, 6G & Sustainable Electronics
          for Future-Ready Smart Societies
        </p>

        <div className="mt-8 inline-flex items-center gap-3 bg-[#F4D03F]/80 backdrop-blur-md border border-[#F4D03F]/30 px-6 py-3 rounded-xl text-[#4A0012] font-bold text-[18px]">
          📅 18 - 20 December 2026 | Sri Sairam Engineering College, Chennai, India
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button onClick={() => setShowPopup(true)} className="bg-[#F4D03F] text-[#4A0012] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Register Now
          </button>

          <button onClick={() =>
    document.getElementById("cfp")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  } className="border border-[#F4D03F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#F4D03F] hover:text-[#4A0012] transition">
            Submit Paper
          </button>
        </div>

        <div className="mt-3 flex justify-center animate-fadeInUp">
          
        </div>

      </div>

      {showPopup && (
  <div
    className="
      fixed inset-0 z-[999]
      flex items-center justify-center

      bg-black/40
      backdrop-blur-md

      px-4
    "
  >
    <div
      className="
        w-full max-w-md

        bg-white
        rounded-3xl

        p-8
        text-center

        shadow-2xl
        animate-[fadeIn_0.3s_ease]
      "
    >
      <div className="text-5xl mb-4"></div>

      <h2 className="text-2xl font-bold text-[#4A0012]">
        Registration Opens Soon
      </h2>

      <p className="mt-3 text-gray-600">
        Registration for IEEE INDICON 2026 will be announced shortly.
        Stay tuned for updates.
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="
          mt-6
          px-6 py-3

          rounded-full

          bg-[#4A0012]
          text-white

          hover:bg-[#650021]
          transition-all
        "
      >
        Close
      </button>
    </div>
  </div>
)}
\
    </section>
  );
}