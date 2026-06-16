const tracks = [
  {
    icon: "🤖",
    title: "AI, Machine Learning, and Intelligence for Net-Zero Engineering",
    desc: "Foundational and applied AI/ML, distributed and secure learning systems, and software engineering oriented toward sustainability and net-zero goals.",
  },
  {
    icon: "📡",
    title: "6G, Next-Gen Wireless, Networking & Sustainable Communication System",
    desc: "Next-generation communication systems, networking, IoT, and energy-efficient connectivity.",
  },
  {
    icon: "🏙️",
    title: "Cyber-Physical Systems, Digital Twins & Sustainable Smart Infrastructure",
    desc: "CPS architectures, digital twins, secure embedded intelligence, and smart infrastructure.",
  },
  {
    icon: "⚡",
    title: "Sustainable Electronics, Green Hardware, VLSI & Embedded Systems",
    desc: "Electronic devices, circuits, VLSI, embedded systems, and low-power / green hardware design.",
  },
  {
    icon: "🔌",
    title: "Power Electronics, Smart Grids, and Industrial Automation",
    desc: "Power systems, power electronics, smart grids, renewable integration, and Industry 4.0 / 5.0 automation.",
  },
  {
    icon: "🦾",
    title: "Robotics, Automation, Instrumentation, and Intelligent Control",
    desc: "Robotics, automation, instrumentation, and intelligent control systems.",
  },
  {
    icon: "⚛️",
    title: "Photonics, Quantum Technologies, and Optical Intelligence",
    desc: "Photonics, quantum technologies, optical computing, and optical sensing intelligence.",
  },
  {
    icon: "🛰️",
    title: "Sensors, Remote Sensing, Signal & Image Processing & Perception",
    desc: "Sensors, remote sensing, advanced signal / image processing, and perception systems.",
  },
  {
    icon: "🧬",
    title: "Biomedical Engineering, Wearable Systems & Healthcare Technologies",
    desc: "Biomedical engineering, wearables, and healthcare technologies.",
  },
  {
    icon: "🛡️",
    title: "Secure, Ethical Intelligence, Intelligent Mobility, and Applications for Social Good",
    desc: "Secure / ethical / responsible AI, intelligent mobility and vehicular / transportation systems, and applications for social good and smart society enablement.",
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="bg-[#FAF7F2] py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <p className="text-[#B8860B] uppercase tracking-[4px] font-semibold text-sm mb-3">
            Call For Papers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A0012]">
            Technical Tracks
          </h2>

          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 12-Column Custom Grid for Perfect Centering */}
        <div className="grid grid-cols-12 gap-6 xl:gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={(index % 4) * 100}
              className={`
                /* Grid Column Span Logic */
                col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3
                
                /* Centering the last 2 items on Desktop (xl) */
                ${index === 8 ? "xl:col-start-4" : ""}
                
                /* Centering the last item on Laptop (lg) and placing it next to 9th on Desktop (xl) */
                ${index === 9 ? "lg:col-start-5 xl:col-start-7" : ""}
                
                group
                relative
                bg-white
                rounded-3xl
                p-8
                border border-[#FFD700]/20
                shadow-lg
                overflow-hidden
                flex flex-col justify-center items-center text-center
                h-[320px] 
                hover:border-[#FFD700]/60
                hover:shadow-[0_20px_40px_rgba(255,215,0,0.15)]
                transition-all duration-500
              `}
            >
              {/* Giant Background Number Watermark */}
              <div className="absolute inset-0 flex items-center justify-center text-[180px] font-black text-black/[0.02] pointer-events-none z-0 group-hover:scale-110 transition-transform duration-700">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>

              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Content Wrapper (Shifts up on hover) */}
              <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-10 flex flex-col items-center w-full">
                {/* Icon */}
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                  {track.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] md:text-lg font-bold text-[#4A0012] leading-snug group-hover:text-[#B8860B] transition-colors duration-300 px-2">
                  {track.title}
                </h3>
              </div>

              {/* Hidden Description (Fades in and slides up on hover) */}
              <div className="absolute bottom-8 left-6 right-6 text-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-10 pointer-events-none">
                <div className="w-10 h-[2px] bg-[#FFD700] mx-auto mb-3 opacity-50"></div>
                <p className="text-[14px] text-gray-700 leading-relaxed font-medium">
                  {track.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}