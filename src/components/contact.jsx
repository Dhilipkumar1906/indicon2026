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
              ieeeindicon2026@gamil.com
            </p>
          </div>

          {/* WhatsApp */}
          <div className="mt-8">
            <p className="text-[#FFD700] font-semibold uppercase tracking-wider">
              WhatsApp Support
            </p>

            <p className="mt-2 text-xl text-white">
              +91 9487248689
            </p>
          </div>

          {/* Important Badge */}
          <div
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-[#FFD700]/15
              border border-[#FFD700]/30
              text-[#FFD700]
              font-semibold
              text-lg
            "
          >
            💬 WhatsApp Only • No Calls Please
          </div>

          {/* Small Note */}
          <p className="mt-6 text-gray-400 text-sm">
            For conference-related queries, registration assistance,
            paper submission support and general information,
            kindly contact us via WhatsApp or Email.
          </p>

        </div>

      </div>
    </section>
  );
}