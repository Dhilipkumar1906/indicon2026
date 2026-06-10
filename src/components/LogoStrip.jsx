import mad from "../assets/image/ieee_madras.png";
import indc from "../assets/image/india_council.png";
import sairam from "../assets/image/seci.png";

export default function LogoStrip() {
  return (
    <div className="w-full px-4 mt-28">
      <div
  className="
  max-w-[500px]
  h-[80px]
  mx-auto

  bg-[rgba(250,244,225,0.68)]
  backdrop-blur-xl

  border border-[#D4AF37]/30

  rounded-xl

  px-5
  py-1

  shadow-[0_8px_30px_rgba(212,175,55,0.15)]
"
>
        <div
          className="
          flex
          flex-wrap

          items-center
          justify-center

          gap-8
        "
        >
        
          <img
            src={indc}
            alt="IEEE India Council"
            className="h-8 md:h-7 object-contain"
          />

          <img
            src={mad}
            alt="IEEE Madras Section"
            className="h-9 md:h-11 object-contain"
          />

          <img
            src={sairam}
            alt="Sri Sairam Engineering College"
            className="h-[80px] md:h-18 object-contain"
          />
        </div>
      </div>
    </div>
  );
}