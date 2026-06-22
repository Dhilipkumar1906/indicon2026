import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Committee() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Structured Data from Excel with \n added for PERFECT Logical Line Breaks
  const committeeData = [
    {
      sectionName: "The Core Steering & Advisory Committees",
      members: [
        { name: "Dr. Prerna Gaur", role: "Chair-IEEE India Council\n(2025-2026)", image: "/committee/1.jpg" },
        { name: "Dr. Saiprakash\nLeoMuthu", role: "Chairman & CEO,\nSairam Institutions", image: "/committee/CEO1.jpg" },
        { name: "Dr. Preeti Bajaj", role: "Chair-Elect IEEE India Council\n(2025-2026)", image: "/committee/3.jpg" },
        { name: "Dr. Debabrata Das", role: "Past Chair-IEEE\nIndia Council", image: "/committee/4.jpg" },
        { name: "Shri. Deepak Mathur", role: "Member-IEEE Governance\n(2026)", image: "/committee/5.jpg" },
        { name: "Dr. S.M. Sameer", role: "R10 - Director-Elect\n(2025-2026)", image: "/committee/6.jpg" },
        { name: "Shri. Srikanth\nChandrasekaran", role: "Country Head-GIEEE,\nBangalore", image: "/committee/7.jpg" },
        { name: "Dr. Amit Kumar", role: "Chairman - Section and\nChapter Committee [R10]", image: "/committee/37.jpg" },
      ],
      colSpan: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    },
    {
      sectionName: "General Chair(s)",
      members: [
        { name: "Dr. P. Sakthivel", role: "Chairman-IEEE\nMadras Section", image: "/committee/10.jpg" },
        { name: "Dr. J. Raja", role: "Principal-\nSri Sai Ram Engineering College", image: "/committee/11.jpg" },
        { name: "Prof. Dr. Sudip Misra", role: "Professor/CSE-\nIITKGP", image: "/committee/12.jpg" },
      ],
      colSpan: "sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl mx-auto",
    },
    {
      sectionName: "Conference Chair",
      members: [
        { name: "Dr. Brindha Saminathan", role: "Professor/ECE,\nSri Sai Ram Engineering College\nTreasurer-IEEE Madras Section", image: "/committee/13.png" },
      ],
      colSpan: "md:grid-cols-1 max-w-sm mx-auto",
    },
    {
      sectionName: "Technical Program Committee (TPC) Chair(s)",
      members: [
        { name: "Dr. S. Radha", role: "Secretary-IEEE\nMadras Section", image: "/committee/015.jpg" },
        { name: "Dr. K. Palanikumar", role: "Principal-Sri Sairam Institute of Technology", image: "/committee/18.jpg" },
        { name: "Dr. T. Shanmuganantham", role: "Professor/Electronics-\nPondicherry Central University", image: "/committee/16.jpg" },
        { name: "Dr. K. A. Mohamed\nJunaid", role: "Principal-\nRMK Engineering College", image: "/committee/junaid.jpg" },
      ],
      colSpan: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    },
    {
      sectionName: "Organizing Secretaries",
      members: [
        { name: "Dr. Nandhan", role: "Secretary-India Council", image: "/committee/17.jpg" },
        { name: "Dr. S. Arumugaperumal", role: "VC-Professional Activities MAS", image: "/committee/30.jpg" },
      ],
      colSpan: "sm:grid-cols-2 max-w-2xl mx-auto",
    },
    {
      sectionName: "Publication Chair(s)",
      members: [
        { name: "Dr. V. Nagarajan", role: "Professor/Electronics Pondicherry University", image: "/committee/19.jpg" },
        { name: "Dr. R. Praveen", role: "Assistant Professor/CSE-NITPY", image: "/committee/20.jpg" },
      ],
      colSpan: "sm:grid-cols-2 max-w-2xl mx-auto",
    },
    {
      sectionName: "WIE Track Chair(s)",
      members: [
        { name: "Dr. Rajashree Jain", role: "Treasurer-IEEE India Council", image: "/committee/21.jpg" },
        { name: "Dr. Aswini Appaji", role: "Chair-WIE India Council", image: "/committee/22.jpg" },
        { name: "Dr. Somaprathiba", role: "Chair-WIE Madras Section", image: "/committee/23.jpg" },
      ],
      colSpan: "sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto",
    },
    {
      sectionName: "SAC Track Chair(s)",
      members: [
        { name: "Dr. Anuradha Tomar", role: "VC-SAC India Council", image: "/committee/26.jpg" },
        { name: "Dr. Abhishek Appaji", role: "Member-SAC India Council", image: "/committee/27.png" },
        { name: "Dr. S. Koteeswaran", role: "SAC Chair - IEEE Madrs Section", image: "/committee/28.jpg" },
      ],
      colSpan: "sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto",
    },
    {
      sectionName: "YP Track Chair(s)",
      members: [
        { name: "Dr. M. Arun", role: "VC-YP India Council & R10", image: "/committee/24.jpg" },
        { name: "Mr. R. Sreekanth", role: "Vice-Chairman – SDG MAS", image: "/committee/rs.webp" },
      ],
      colSpan: "sm:grid-cols-2 max-w-2xl mx-auto",
    },
    {
      sectionName: "Paper Presentation Chair(s)",
      members: [
        { name: "Dr. M. Venkateshkumar", role: "Professor/EEE- Amirta Univ", image: "/committee/29.jpg" },
        { name: "Dr. K. Vijayakumar", role: "Professor/IT-St.Joseph IT", image: "/committee/031.jpg" },
        { name: "Dr. N. Venkateswaran", role: "Professor/ECE-SSNCE", image: "/committee/32.jpg" },
      ],
      colSpan: "sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto",
    },
    {
      sectionName: "Special Sessions / Tutorial Chairs",
      members: [
        { name: "Dr. T. Sree Sharmila", role: "Professor/IT-Anna Univ", image: "/committee/33.jpg" },
        { name: "Dr. J. Arputha\nVijayaselvi Jan", role: "Principal-Kings Engg College", image: "/committee/34.jpg" },
        { name: "Dr. Ramalatha Marimuthu", role: "Vice-Chairman –Industry MAS", image: "/committee/35.jpg" },
      ],
      colSpan: "sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto",
    },
    {
      sectionName: "Operations & Logistics Committees",
      members: [
        { name: "Sri Sai Ram Engineering College", role: "IEEE SCOPE & MAGIC Members", image: "" },
      ],
      colSpan: "md:grid-cols-1 max-w-2xl mx-auto",
    }
    
  ];

  // Helper to extract first letter for Avatar fallback
  const getInitials = (name) => {
    const cleaned = name.replace(/Dr\.\s*|Prof\.\s*|Shri\.\s*|Mr\.\s*/g, '');
    return cleaned.charAt(0).toUpperCase();
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#faf8f2] to-white py-32 px-6 relative overflow-hidden">
        
        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4D03F] opacity-5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-[#C89B00] uppercase tracking-[4px] font-semibold mt-8">
              Leadership Team
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#4A0012] mt-3">
              Organizing Committee
            </h1>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Meet the dedicated leaders and experts guiding the 23rd Edition of the IEEE India Council Conference.
            </p>
          </motion.div>

          {/* Committee Sections */}
          <div className="space-y-24">
            {committeeData.map((section, sectionIdx) => (
              <motion.div 
                key={sectionIdx}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Section Title */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-[#4A0012] inline-block relative px-4">
                    {section.sectionName}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#F4D03F] rounded-full"></div>
                  </h2>
                </div>

                {/* Conditional Rendering: Check if it's Operations & Logistics */}
                {section.sectionName === "Operations & Logistics Committees" ? (
                  
                  // Text-only Layout for Operations & Logistics (Centered perfectly)
                  <div className={`grid gap-6 ${section.colSpan}`}>
                    {section.members.map((member, idx) => (
                      <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className="
                          bg-[#FFF9E8] border border-[#F4D03F]/50 rounded-2xl p-8 
                          text-center shadow-sm hover:shadow-md transition-shadow duration-300
                          mx-auto w-full
                        "
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-[#4A0012] mb-3">
                          {member.name}
                        </h3>
                        <p className="text-lg text-[#C89B00] font-semibold tracking-wide">
                          {member.role}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                ) : (

                  // Standard Card Layout for other Committees
                  <div className={`grid gap-8 ${section.colSpan}`}>
                    {section.members.map((member, idx) => (
                      <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className="
                          group bg-white rounded-[2rem] p-8 
                          border border-[#F4D03F]/20 shadow-lg 
                          flex flex-col items-center text-center
                          hover:-translate-y-3 hover:shadow-2xl hover:border-[#F4D03F]/60 
                          transition-all duration-500
                        "
                      >
                        {/* Avatar / Photo Container with Ring */}
                        <div className="relative mb-6">
                          <div className="absolute inset-0 rounded-full border-2 border-[#F4D03F]/30 scale-[1.1] group-hover:scale-[1.15] group-hover:border-[#F4D03F] transition-all duration-500"></div>
                          {member.image ? (
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-md z-10 bg-white"
                            />
                          ) : (
                            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full bg-[#FFF9E8] flex items-center justify-center text-5xl font-bold text-[#C89B00] group-hover:bg-[#F4D03F] group-hover:text-[#4A0012] transition-colors duration-500 shadow-md z-10">
                              {getInitials(member.name)}
                            </div>
                          )}
                        </div>
                        
                        {/* Details */}
                        <div>
                          <h3 className="text-xl font-bold text-[#4A0012] group-hover:text-[#B8860B] transition-colors">
                            {member.name}
                          </h3>
                          <div className="w-10 h-[2px] bg-[#F4D03F] mx-auto my-3 opacity-50"></div>
                          <p className="text-[15px] text-gray-600 leading-relaxed font-medium px-2">
                            {member.role}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                )}

              </motion.div>
            ))}
          </div>
            
        </div>
      </section>
      
      <Footer />
    </>
  );
}