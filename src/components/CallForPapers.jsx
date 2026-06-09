export default function CallForPapers() {
  return (
    <section
      id="cfp"
      className="bg-[#FAF7F2] py-28 px-6 scroll-mt-22"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4A0012]">
            Call For Papers
          </h2>

          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div data-aos="fade-right">

            <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700]/20 text-[#6D071A] font-semibold mb-6">
              Paper Submission Open
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#4A0012] leading-snug">
              Share Your Research With
              <span className="block text-[#B8860B] mt-2">
                IEEE INDICON 2026
              </span>
            </h3>

            <p className="mt-8 text-gray-700 text-lg leading-relaxed">
              IEEE INDICON 2026 invites original and unpublished
              research papers from academicians, researchers,
              industry professionals and students.
            </p>

            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              Authors are encouraged to submit high-quality
              contributions aligned with Artificial Intelligence,
              6G Communications, Cyber-Physical Systems and
              Sustainable Electronics.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="
                px-8 py-4
                rounded-full
                bg-[#B8860B]
                text-white
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Submit Paper
              </button>

              <button
                className="
                px-8 py-4
                rounded-full
                border-2
                border-[#B8860B]
                text-[#6D071A]
                font-semibold
                hover:bg-[#B8860B]
                hover:text-white
                transition-all
                duration-300
                "
              >
                Download CFP
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div
            data-aos="fade-left"
            className="
            bg-gradient-to-br
            from-[#4A0012]
            to-[#6D071A]
            rounded-3xl
            p-10
            text-white
            shadow-2xl
            "
          >

            <div className="text-6xl mb-6">
              📄
            </div>

            <h3 className="text-3xl font-bold mb-8">
              Topics of Interest
            </h3>

            <div className="space-y-4">

              <div>✓ Artificial Intelligence & Machine Learning</div>

              <div>✓ 6G Communications & Networking</div>

              <div>✓ Cyber-Physical Systems</div>

              <div>✓ Sustainable Electronics</div>

              <div>✓ Smart Grid & Energy Systems</div>

              <div>✓ IoT & Edge Computing</div>

              <div>✓ Robotics & Automation</div>

              <div>✓ Security & Privacy Technologies</div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}