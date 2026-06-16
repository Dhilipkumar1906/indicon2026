import { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Router hooks
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle cross-page scrolling
  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); 
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { name: "Home", id: "home", isPage: false },
    { name: "About", id: "about", isPage: false },
    { name: "Tracks", id: "tracks", isPage: false },
    { name: "Speakers", id: "speakers", isPage: false },
    { name: "Schedule", id: "dates", isPage: false },
    { name: "Call For Papers", id: "cfp", isPage: false },
    { name: "Guidelines & Policies", id: "guidelines", isPage: true },
    { name: "Venue", id: "venue", isPage: false },
    { name: "Contact", id: "contact", isPage: false },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`
          mx-auto
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          /* Changed 1200px to 1280px so it has more breathing room when shrunk */
          ${scrolled ? "max-w-[1280px]" : "max-w-[1500px]"}
          px-4 md:px-8 lg:px-12 
        `}
      >
        {/* Navbar */}
        <div
          className={`
            mt-3 md:mt-7
            flex items-center justify-between
            rounded-2xl
            border border-[#F4D03F]/20
            transition-all duration-500
            ${
              scrolled
                ? "bg-[rgba(109,7,26,0.65)] backdrop-blur-xl px-4 md:px-8 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
                : "bg-[#4A0012]/85 backdrop-blur-md px-4 md:px-8 py-3 md:py-4 shadow-2xl"
            }
          `}
        >
          {/* Logos */}
          <div className="flex items-center gap-2 md:gap-4 xl:gap-6 flex-shrink min-w-0 pr-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logo}
                alt="INDICON 2026"
                className={`
                  w-auto
                  object-contain
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${scrolled ? "h-8 md:h-9" : "h-10 md:h-11"}
                `}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* Made gap dynamic: gap-4 on smaller desktops, gap-6 on larger monitors */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={`/${item.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="
                    relative
                    text-[14px] xl:text-[15px]
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
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    relative
                    text-[14px] xl:text-[15px]
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
              )
            )}
          </nav>

          {/* Desktop Register Button */}
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/registration");
            }}
            className={`
              hidden lg:flex
              ml-4 xl:ml-6
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
              flex-shrink-0
              ${scrolled ? "px-5 py-2" : "px-6 py-3"}
            `}
          >
            {scrolled ? "REGISTER" : "REGISTER NOW"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              text-white
              flex
              items-center
              justify-center
              min-w-[40px]
              flex-shrink-0
            "
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
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={`/${item.id}`}
                  onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo(0, 0); 
                  }}
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
                </Link>
              ) : (
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
              )
            )}

            <button
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
                navigate("/registration");
              }}
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