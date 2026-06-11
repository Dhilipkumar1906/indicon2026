import mad from "../assets/image/ieee_madras.png";
import indc from "../assets/image/india_council.png";
import sairam from "../assets/image/secc.png";

export default function LogoStrip() {
  return (
    <div className="w-full px-4 mt-28">
      <div
        className="
          max-w-[700px]
          mx-auto

          bg-[rgba(250,244,225,0.68)]
          backdrop-blur-xl

          border border-[#D4AF37]/30
          rounded-xl

          px-4 md:px-6
          py-3

          shadow-[0_8px_30px_rgba(212,175,55,0.15)]
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center

            gap-9 md:gap-14
          "
        >
          <img
            src={indc}
            alt="IEEE India Council"
            className="
              h-6
              sm:h-9
              md:h-8
              object-contain
            "
          />

          <img
            src={mad}
            alt="IEEE Madras Section"
            className="
              h-7
              sm:h-8
              md:h-10
              object-contain
            "
          />

          <img
            src={sairam}
            alt="Sri Sairam Engineering College"
            className="
              h-10
              sm:h-12
              md:h-14
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
}