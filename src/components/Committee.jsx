export default function Committee() {
  const members = [
    {
      name: "Dr. Brindha",
      role: "Conference Coordinator",
      image: "/committee1.jpg",
    },
    {
      name: "Dr. Raja",
      role: "Organizing Chair",
      image: "/committee2.jpg",
    },
  ];

  return (
    <section
      id="committee"
      className="bg-[#FAF7F2] py-28 px-6 scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#B8860B] uppercase tracking-[4px] font-semibold">
            Leadership Team
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4A0012]">
            Organizing Committee
          </h2>

          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Members */}
        <div className="grid md:grid-cols-2 gap-10">

          {members.map((member, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border border-[#FFD700]/20
                hover:-translate-y-2
                transition-all duration-300
                text-center
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="
                  w-36 h-36
                  rounded-full
                  object-cover
                  mx-auto
                  border-4 border-[#FFD700]
                "
              />

              <h3 className="mt-6 text-2xl font-bold text-[#4A0012]">
                {member.name}
              </h3>

              <p className="mt-2 text-[#B8860B] font-semibold">
                {member.role}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}