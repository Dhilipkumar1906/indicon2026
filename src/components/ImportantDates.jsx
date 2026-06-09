const dates = [
  {
    date: "30 June 2026",
    title: "Submission Start Date",
  },
  {
    date: "31 Augest 2026",
    title: "Submission Deadline",
  },
  {
    date: "02 November 2026",
    title: "Acceptance Notification",
  },
  {
    date: "16 November 2026",
    title: "Camera Ready Submission",
  },
  {
    date: "18–20 Dec 2026",
    title: "Conference Dates",
  },
];

export default function ImportantDates() {
  return (
    <section
      id="dates"
      className="bg-[#FAF7F2] py-28 px-6 scroll-mt-40"
    >
      <div className="max-w-7xl mx-auto">

        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <p className="text-[#B8860B] uppercase tracking-[4px] font-semibold">
            Conference Schedule
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4A0012]">
            Important Dates
          </h2>

          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#D4AF37]"></div>

          <div className="grid md:grid-cols-5 gap-8">

            {dates.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="relative text-center"
              >
                <div className="hidden md:flex w-6 h-6 bg-[#FFD700] rounded-full mx-auto mb-8 border-4 border-white shadow-lg"></div>

                <div
                  className="
                  bg-white
                  p-6
                  rounded-2xl
                  shadow-lg
                  border
                  border-[#FFD700]/20

                  hover:-translate-y-3
                  hover:shadow-2xl

                  transition-all
                  duration-500
                  "
                >
                  <h3 className="font-bold text-[#B8860B] text-lg">
                    {item.date}
                  </h3>

                  <p className="mt-3 text-[#4A0012] font-semibold">
                    {item.title}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}