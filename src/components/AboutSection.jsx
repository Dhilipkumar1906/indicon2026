export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#FAF7F2] py-24 px-6 scroll-mt-22"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4A0012]">
            IEEE INDICON 2026
          </h2>

          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div data-aos="fade-right">

            <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700]/20 text-[#6D071A] font-semibold mb-6">
              Theme
            </div>  <br />
            <div className="inline-block px-6 py-2 rounded-full bg-[#FFD700]/20 text-[#6D071A] font-semibold mb-6">
              IEEE Conference Record Number: #72446
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#6D071A] leading-snug">
              Net-Zero Cyber-Physical Intelligence:
              <span className="block text-[#B8860B] mt-2">
                AI, 6G & Sustainable Electronics
              </span>
            </h3>

            {/* Added text-justify here */}
            <p className="mt-8 text-gray-700 text-lg leading-relaxed text-justify">
              IEEE INDICON 2026, the flagship international conference
              of the IEEE India Council, brings together researchers,
              academicians, industry experts and innovators to explore
              the convergence of Artificial Intelligence, 6G
              Communications, Cyber-Physical Systems and Sustainable
              Electronics.
            </p>

            {/* Added text-justify here */}
            <p className="mt-6 text-gray-700 text-lg leading-relaxed text-justify">
              The conference focuses on building future-ready smart
              societies through secure, connected and environmentally
              responsible technologies aligned with global Net-Zero
              goals.
            </p>

          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6"   data-aos="fade-left">

            <div className="
              bg-white
              rounded-2xl
              p-8
              shadow-lg
              border
              border-[#FFD700]/20
              hover:-translate-y-4
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
              transition-all
              duration-500
            ">
              <div className="text-4xl mb-4">🌍</div>

              <h4 className="text-xl font-bold text-[#6D071A]">
                Global Knowledge Exchange
              </h4>

              <p className="mt-3 text-gray-600">
                Bringing together researchers and professionals from
                academia, industry and government.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FFD700]/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>

              <h4 className="text-xl font-bold text-[#6D071A]">
                Industry Collaboration
              </h4>

              <p className="mt-3 text-gray-600">
                Promoting partnerships among industries, startups,
                innovators and IEEE communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FFD700]/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">♻️</div>

              <h4 className="text-xl font-bold text-[#6D071A]">
                Sustainable Engineering
              </h4>

              <p className="mt-3 text-gray-600">
                Encouraging green technologies and engineering
                solutions aligned with Net-Zero goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FFD700]/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>

              <h4 className="text-xl font-bold text-[#6D071A]">
                Future-Ready Society
              </h4>

              <p className="mt-3 text-gray-600">
                Advancing AI, 6G, CPS and sustainable electronics for
                smart and resilient communities.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}