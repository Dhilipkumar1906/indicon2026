import earth from "../assets/image/earth.jpg";
import LogoStrip from "./LogoStrip";

export default function Hero() {
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

        <div className="mt-8 inline-flex items-center gap-3 bg-[#F4D03F]/80 backdrop-blur-md border border-[#F4D03F]/30 px-6 py-3 rounded-xl text-[#4A0012] font-bold">
          📅 18 - 20 December 2026 | Sri Sairam Engineering College, Chennai, India
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="bg-[#F4D03F] text-[#4A0012] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Register Now
          </button>

          <button className="border border-[#F4D03F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#F4D03F] hover:text-[#4A0012] transition">
            Submit Paper
          </button>
        </div>

        <div className="mt-3 flex justify-center animate-fadeInUp">
          
        </div>

      </div>
\
    </section>
  );
}