import sairamCampus from "../assets/image/image.png";

export default function Venue() {
  return (
    <section
      id="venue"
      className="bg-[#FAF7F2] py-28 px-6 scroll-mt-22"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <p className="text-[#B8860B] uppercase tracking-[4px] font-semibold">
            Conference Venue
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4A0012]">
            Sri Sairam Engineering College
          </h2>

          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image */}
          <div data-aos="fade-right">

            <img
              src={sairamCampus}
              alt="Sri Sairam Engineering College"
              className="
                w-full
                rounded-3xl
                shadow-2xl
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            />

          </div>

          {/* Right Side */}
          <div data-aos="fade-left">

            <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700]/20 text-[#6D071A] font-semibold mb-6">
              Chennai, Tamil Nadu
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#4A0012]">
              Welcome to the Host Institution
            </h3>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Sri Sairam Engineering College is one of the leading
              engineering institutions in India, known for academic
              excellence, innovation, research and industry engagement.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              The campus offers modern infrastructure, advanced
              laboratories, smart classrooms, auditoriums and a vibrant
              environment for researchers, professionals and students.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
                🏛 Modern Infrastructure
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
                🌳 Green Campus
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
                🎓 Research Ecosystem
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
                ✈ Easy Airport Access
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://maps.google.com/?q=Sri+Sairam+Engineering+College+Chennai"
                target="_blank"
                rel="noopener noreferrer"
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
                View Location
              </a>

              <a
                href="https://sairam.edu.in"
                target="_blank"
                rel="noopener noreferrer"
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
                Explore Campus
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}