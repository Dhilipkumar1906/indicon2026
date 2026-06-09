import ieee from "../assets/image/ieee.jpg";
import madras from "../assets/image/ieee madras.webp";
import indiaCouncil from "../assets/image/india_council.png";
import sairam from "../assets/image/sec.png";

export default function TopBar() {
  return (
    <div className="bg-[#150005] border-b border-[#FFD700]/20">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap justify-center items-center gap-6">

        <img
          src={ieee}
          alt="IEEE"
          className="h-8 object-contain"
        />

        <img
          src={madras}
          alt="IEEE Madras Section"
          className="h-8 object-contain"
        />

        <img
          src={indiaCouncil}
          alt="IEEE India Council"
          className="h-8 object-contain"
        />

        <img
          src={sairam}
          alt="Sairam Engineering College"
          className="h-8 object-contain"
        />

      </div>
    </div>
  );
}