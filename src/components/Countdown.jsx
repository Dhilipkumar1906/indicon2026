import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-12-26T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-10">

      {/* Title */}
      <p
        className="
        text-center
        text-[#FFD700]
        uppercase
        tracking-[4px]
        text-sm
        font-semibold
        mb-4
      "
      >
        Conference Begins In
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-5 text-white">

        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="
              group
              relative

              w-[125px]
              h-[115px]

              bg-white/10
              backdrop-blur-xl

              border
              border-[#FFD700]/20

              rounded-3xl

              flex
              flex-col
              items-center
              justify-center

              shadow-xl

              hover:-translate-y-2
              hover:border-[#FFD700]
              hover:shadow-[0_0_30px_rgba(255,215,0,0.25)]

              transition-all
              duration-500
            "
          >
            {/* Glow Effect */}
            <div
              className="
              absolute
              inset-0
              rounded-3xl
              bg-[#FFD700]/5
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
            ></div>

            {/* Number */}
            <p
              className="
              relative z-10
              text-4xl md:text-5xl
              font-bold

              bg-gradient-to-b
              from-[#FFD700]
              via-[#FFF3B0]
              to-[#FFD700]

              bg-clip-text
              text-transparent
            "
            >
              {String(timeLeft[unit] ?? "00").padStart(2, "0")}
            </p>

            {/* Label */}
            <p
              className="
              relative z-10
              mt-2
              text-[11px]
              uppercase
              tracking-[3px]
              text-white/80
              font-semibold
            "
            >
              {unit}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}