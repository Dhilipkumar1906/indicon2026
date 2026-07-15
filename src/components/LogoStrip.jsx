import mad from "../assets/image/ieee_madras.png";
import indc from "../assets/image/india_council.png";
import sairam from "../assets/image/secc.png";

export default function LogoStrip() {
  return (
    <div className="w-full px-4 mt-24 md:mt-28">
      <div
        className="
          w-full
          max-w-[560px]
          mx-auto

          bg-[rgba(250,244,225,0.85)]
          backdrop-blur-xl

          border border-[#D4AF37]/40
          rounded-2xl

          px-4 md:px-6
          py-3

          shadow-[0_8px_30px_rgba(212,175,55,0.2)]
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-2 md:gap-6
          "
        >
          {/* Logo 1 */}
          <div className="flex flex-1 items-center justify-center h-10 md:h-16">
            <img
              src={indc}
              alt="IEEE India Council"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider (shrink-0 கொடுத்தா நசுங்காது) */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 2 */}
          <div className="flex flex-1 items-center justify-center h-10 md:h-16">
            <img
              src={mad}
              alt="IEEE Madras Section"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 3 */}
          <div className="flex flex-1 items-center justify-center h-10 md:h-16">
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
