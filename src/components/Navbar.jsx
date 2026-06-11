import { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };
  const currentY = window.scrollY;

if (Math.abs(currentY - lastScrollY) > 20) {
  setScrolled(currentY > 350);
  setLastScrollY(currentY);
}

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tracks", id: "tracks" },
    {name: "Speakers", id: "speakers"},
    { name: "Schedule", id: "dates" },
    { name: "Call For Papers", id: "cfp" },
    { name: "Venue", id: "venue" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`
          mx-auto
transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${scrolled ? "max-w-[1200px]" : "max-h-[1500px]"}
    px-8 lg:px-15
        `}
      >
        {/* Navbar */}
        <div
          className={`
            mt-7
            flex items-center justify-between
            rounded-2xl
            border border-[#F4D03F]/20
            transition-all duration-500

            ${
              scrolled
? "bg-[rgba(109,7,26,0.65)] backdrop-blur-xl px-8 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
: "bg-[#4A0012]/85 backdrop-blur-md px-8 py-4 shadow-2xl"
            }
          `}
        >
          {/* Logos */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* INDICON */}
            <img
              src={logo}
              alt="INDICON 2026"
              className={`
  w-auto
  transition-all
  duration-700
  ease-[cubic-bezier(0.22,1,0.36,1)]
  ${scrolled ? "h-9 scale-95" : "h-11 scale-100"}
`}
            />

            {/* IEEE Madras */}
            

            {/* IEEE India Council */}
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="
                  relative
                  text-[15px]
                  font-medium
                  tracking-wide
                  whitespace-nowrap
                  text-white
                  transition-all
                  duration-300
                  hover:text-[#F4D03F]
                "
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Register Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`
              hidden lg:flex
              ml-6
              items-center
              rounded-full
              bg-[#F4D03F]
              text-sm
              font-semibold
              tracking-wider
              text-[#4A0012]
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-xl

              ${
                scrolled
                  ? "px-5 py-2"
                  : "px-6 py-3"
              }
            `}
          >
            {scrolled ? "REGISTER" : "REGISTER NOW"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className="
              lg:hidden
              mt-2
              rounded-2xl
              bg-[#4A0012]/95
              backdrop-blur-xl
              border border-[#F4D03F]/20
              shadow-2xl
              overflow-hidden
            "
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="
                  block
                  w-full
                  text-left
                  px-6
                  py-4
                  text-white
                  border-b
                  border-white/10
                  hover:text-[#F4D03F]
                "
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="
                w-full
                bg-[#F4D03F]
                text-[#4A0012]
                font-semibold
                py-4
              "
            >
              REGISTER NOW
            </button>
          </div>
        )}
      </div>
    </header>
  );
}