import logo from "../assets/image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#250009] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & About */}
          <div>

            <img
              src={logo}
              alt="IEEE INDICON 2026"
              className="h-16"
            />

            <p className="mt-6 text-gray-300 leading-relaxed">
              IEEE INDICON 2026 is the flagship conference of the
              IEEE India Council, bringing together researchers,
              academicians, industry experts and innovators from
              across the globe.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold text-[#FFD700]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-[#FFD700]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#FFD700]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#tracks"
                  className="text-gray-300 hover:text-[#FFD700]"
                >
                  Tracks
                </a>
              </li>

              <li>
                <a
                  href="#venue"
                  className="text-gray-300 hover:text-[#FFD700]"
                >
                  Venue
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#FFD700]"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-xl font-bold text-[#FFD700]">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <p>
                📍 Sri Sairam Engineering College,
                Chennai, Tamil Nadu
              </p>

              <p>
                📧 ieeeindicon2026@gamil.com
              </p>

              <p>
                💬 WhatsApp: +91 9487248689
              </p>

              <div
                className="
                inline-block
                mt-4
                px-4 py-2
                rounded-full
                bg-[#FFD700]/10
                border border-[#FFD700]/20
                text-[#FFD700]
                text-sm
                "
              >
                WhatsApp Only • No Calls Please
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          "
        >

          <p className="text-gray-400 text-sm">
            © 2026 IEEE INDICON. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Hosted by Sri Sairam Engineering College, Chennai
          </p>

        </div>

      </div>

    </footer>
  );
}