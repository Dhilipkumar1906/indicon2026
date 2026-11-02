export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #4A0012 0%, #6D071A 50%, #4A0012 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p className="text-[#FFD700] uppercase tracking-[4px] font-semibold">
          Need Assistance?
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h2>

        <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>

        {/* Contact Card */}
        <div
          className="
            mt-16
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-10
            shadow-2xl
          "
        >
          <h3 className="text-3xl font-bold text-white">
            IEEE INDICON 2026 Secretariat
          </h3>

          <p className="mt-4 text-gray-300 text-lg">
            Sri Sairam Engineering College
          </p>

          <p className="text-gray-400">
            Chennai, Tamil Nadu, India
          </p>

          {/* Email */}
          <div className="mt-10">
            <p className="text-[#FFD700] font-semibold uppercase tracking-wider">
              Email
            </p>

            <p className="mt-2 text-xl text-white">
              ieeeindicon2026@gmail.com
            </p>
          </div>

          {/* Small Note */}
          <p className="mt-10 text-gray-400 text-sm">
            For conference-related queries, registration assistance,
            paper submission support and general information,
            kindly contact us via Email.
          </p>
        </div>
      </div>
    </section>
  );
}