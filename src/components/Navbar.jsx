import { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import mad from "../assets/image/madras.png";
import indc from "../assets/image/india_council.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
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
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tracks", id: "tracks" },
    { name: "Schedule", id: "dates"},
    { name: "Speakers", id: "speakers" },
    { name: "Call For Papers", id: "cfp" },
    { name: "Venue", id: "venue" },
    { name: "Contact", id: "contact" },

  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className={`
    mx-auto
    transition-all duration-500
    ${scrolled ? "max-w-[1300px]" : "max-w-[1500px]"}
    px-8 lg:px-15
  `}>

        <div
          className={`
            mt-4
            flex items-center justify-between
            rounded-2xl
            border border-[#F4D03F]/20
            transition-all duration-500

            ${
              scrolled
                ? "bg-[rgba(109,7,26,0.5)] backdrop-blur-2xl px-8 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
                : "bg-[#4A0012]/80 backdrop-blur-xl px-8 py-4 shadow-2xl"
            }
          `}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-6">

            {/* INDICON Logo */}
            <img
              src={logo}
              alt="INDICON 2026"
              className={`
                w-auto transition-all duration-500
                ${scrolled ? "h-9" : "h-11"}
              `}
            />

            {/* IEEE Madras Section */}
            <img
              src={mad}
              alt="IEEE Madras Section"
              className={`
                w-auto transition-all duration-500
                ${
                  scrolled
                    ? "opacity-0 w-0 overflow-hidden"
                    : "opacity-100 h-12"
                }
              `}
            />

            {/* IEEE India Council */}
            <img
              src={indc}
              alt="IEEE India Council"
              className={`
                w-auto transition-all duration-500
                ${
                  scrolled
                    ? "opacity-0 w-0 overflow-hidden"
                    : "opacity-100 h-8"
                }
              `}
            />

          </div>

          {/* Navigation */}
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
                  text-white
                  transition-all
                  whitespace-nowrap
                  duration-300
                  hover:text-[#F4D03F]
                "
              >
                {item.name}
              </button>
            ))}

          </nav>

          {/* CTA Button */}
          <a
            href="#register"
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
          </a>

          {/* Mobile Menu */}
          <button className="lg:hidden text-white gap-8">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>

      </div>
    </header>
  );
}