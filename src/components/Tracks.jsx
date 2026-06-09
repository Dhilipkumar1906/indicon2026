const tracks = [
  {
    icon: "🤖",
    title: "AI for Net-Zero & Sustainable Engineering",
    desc: "Green AI, Renewable Energy Forecasting, Digital Twins and Carbon-Aware Optimization.",
  },
  {
    icon: "📡",
    title: "6G & Sustainable Communication Networks",
    desc: "AI-native 6G, THz Communications, Quantum Networks and Energy-Efficient Connectivity.",
  },
  {
    icon: "🏙️",
    title: "Cyber-Physical Systems & Smart Infrastructure",
    desc: "Smart Cities, Smart Mobility, Green Buildings and Industrial Automation.",
  },
  {
    icon: "⚡",
    title: "Sustainable Electronics & Green Hardware",
    desc: "Low-Power VLSI, IoT Systems, Quantum Hardware and Sustainable Semiconductor Technologies.",
  },
  {
    icon: "🔒",
    title: "Secure, Ethical & Responsible Intelligence",
    desc: "Trustworthy AI, Privacy Preservation, Cybersecurity and Ethical Governance.",
  },
  {
    icon: "🌍",
    title: "Technology for Social Good",
    desc: "Climate-Tech, Smart Agriculture, Health-Tech and Smart Public Services.",
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="bg-[#FAF7F2] pb-28 px-6 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4A0012]">
            Technical Tracks
          </h2>

          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {tracks.map((track, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
              group
              bg-white
              rounded-3xl
              p-8
              border
              border-[#FFD700]/20
              shadow-lg

              hover:-translate-y-4
              hover:border-[#FFD700]
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]

              transition-all
              duration-500
              "
            >
              <div className="text-5xl mb-6">
                {track.icon}
              </div>

              <h3
                className="
                text-xl
                font-bold
                text-[#4A0012]
                mb-4
                group-hover:text-[#B8860B]
                transition-all
                duration-300
                "
              >
                {track.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {track.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}