import mad from "../assets/image/ieee_madras.png";
import indc from "../assets/image/india_council.png";
import sairam from "../assets/image/secc.png";

export default function LogoStrip() {
  return (
     <div className="w-full px-4 mt-24 md:mt-28">
      <div
        className="
          max-w-[650px]
          mx-auto

          bg-[rgba(250,244,225,0.72)]
          backdrop-blur-xl

          border border-[#D4AF37]/30
          rounded-2xl

          px-3 md:px-6
          py-3

          shadow-[0_8px_30px_rgba(212,175,55,0.15)]
        "
      >
        <div
          className="
            flex
            flex-nowrap
            items-center
            justify-center

            gap-3 md:gap-8
          "
        >
          <img
            src={indc}
            alt="IEEE India Council"
            className="
              h-7
              md:h-10
              object-contain
            "
          />

          <img
            src={mad}
            alt="IEEE Madras Section"
            className="
              h-7
              md:h-10
              object-contain
            "
          />

          <img
            src={sairam}
            alt="Sri Sairam Engineering College"
            className="
              h-8
              md:h-12
              object-contain
            "
          />
        </div>
      </div>
    </div>

  );
}