import { FaWhatsapp } from "react-icons/fa";
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

          {/* WhatsApp */}
          <div className="mt-8">
            <p className="text-[#FFD700] font-semibold uppercase tracking-wider">
              WhatsApp Support
            </p>

            <p className="mt-2 text-xl text-white">
              7502217554 / 9487248689
            </p>
          </div>

          {/* Important Badge */}
          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-[#FFD700]/15
              border border-[#FFD700]/30
              text-white
              font-semibold
              text-lg
            "
          >
            <div className="flex items-center justify-center gap-2 text-gray-600">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-5 h-5"
    fill="#25D366"
  >
    <path d="M16 3C8.8 3 3 8.8 3 16c0 2.8.9 5.4 2.4 7.6L3 29l5.6-2.3c2.1 1.3 4.6 2 7.4 2 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.4c-2.4 0-4.7-.7-6.7-2l-.5-.3-3.3 1.4 1.4-3.2-.3-.5c-1.4-2-2.1-4.3-2.1-6.8 0-6 4.9-10.9 10.9-10.9S26.9 10 26.9 16s-4.9 10.4-10.9 10.4zm6-7.8c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.8-1.8.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.5 3.9 1.7.7 2.4.8 3.2.7.5-.1 1.8-.7 2-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"/>
  </svg>

  <p className="text-white">
    For queries, kindly reach us on WhatsApp.
  </p>
</div>
            
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
