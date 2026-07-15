import mad from "../assets/image/ieee_madras.png";
import indc from "../assets/image/india_council.png";
import sairam from "../assets/image/secc.png";

export default function LogoStrip() {
  return (
    <div className="w-full px-4 mt-24 md:mt-28">
      <div
        className="
          max-w-[560px]
          mx-auto

          bg-[rgba(250,244,225,0.85)]
          backdrop-blur-xl

          border border-[#D4AF37]/40
          rounded-2xl

          px-3 md:px-5
          py-2.5

          shadow-[0_8px_30px_rgba(212,175,55,0.2)]
        "
      >
        <div
          className="
            flex
            flex-nowrap
            items-center
            justify-center

            gap-3 md:gap-6
          "
        >
          {/* Logo 1 */}
          <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32">
            <img
              src={indc}
              alt="IEEE India Council"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-9 md:h-12 w-px bg-[#D4AF37]/40" />

          {/* Logo 2 */}
          <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32">
            <img
              src={mad}
              alt="IEEE Madras Section"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-9 md:h-12 w-px bg-[#D4AF37]/40" />

          {/* Logo 3 */}
          <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32">
            <img
              src={sairam}
              alt="Sri Sairam Engineering College"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
