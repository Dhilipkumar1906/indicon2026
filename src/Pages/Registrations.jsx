import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Registration() {
  const [showPopup, setShowPopup] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Simplified Data arrays (Only Category and Total)
  const indianFees = [
    { category: "IEEE Student Member", total: "INR 10,620" },
    { category: "Non-IEEE Student Member", total: "INR 12,980" },
    { category: "IEEE Member", total: "INR 12,980" },
    { category: "Non-IEEE Member", total: "INR 14,160" },
  ];

  const foreignFees = [
    { category: "IEEE Student Member", total: "USD 354" },
    { category: "Non-IEEE Student Member", total: "USD 413" },
    { category: "IEEE Member", total: "USD 472" },
    { category: "Non-IEEE Member", total: "USD 590" },
  ];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#faf8f2] to-white py-32 px-6 relative overflow-hidden">
        
        {/* Background Decorative Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F4D03F] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Heading Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[#C89B00] uppercase tracking-[4px] font-semibold mt-8">
              IEEE INDICON 2026
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#4A0012] mt-3">
              Registration Details
            </h1>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            
            {/* Mandatory Requirement Paragraph (Exact from Image) */}
            <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border-t-4 border-[#4A0012] mb-10 text-gray-700 leading-relaxed text-lg text-justify">
              At least one author of each accepted paper must complete the registration by paying the appropriate conference fee in order for the paper to be included in the <strong>IEEE INDICON 2026</strong> conference program and submitted for publication in <strong>IEEE Xplore</strong> <em>(subject to compliance with IEEE quality standards and presentation at the conference)</em>.
            </motion.div>

            {/* Registration Guidelines (Exact from Image) */}
            <motion.div variants={itemVariants} className="bg-[#FFF9E8] p-8 md:p-10 rounded-[2rem] shadow-md border border-[#F4D03F]/30 mb-16">
              <h3 className="text-2xl font-bold text-[#4A0012] mb-6">Registration Guidelines</h3>
              <ul className="space-y-5 text-gray-700 list-disc pl-5 marker:text-[#C89B00] text-lg">
                <li><strong>Eligibility for IEEE Xplore:</strong> Only registered and presented papers will be considered for <strong>IEEE Xplore Digital Library</strong>.</li>
                <li>Each full registration covers <strong>one (1) paper</strong> with a maximum of <strong>6 pages</strong>.</li>
                <li>A maximum of <strong>2 additional pages</strong> can be included with an overlength fee of <strong>₹1000 / $18</strong> per extra page.</li>
                <li><strong>Registration fees are non-refundable</strong> under any circumstances.</li>
                <li>Authors must retain a copy of the <strong>payment transaction ID or receipt</strong> for use during the registration process.</li>
                <li>Authors registering under <strong>IEEE Member</strong> or <strong>Student</strong> categories must upload a valid <strong>IEEE membership card</strong> or <strong>student ID</strong> respectively.</li>
              </ul>
            </motion.div>

            {/* Indian Delegates Table */}
            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden mb-12">
              <div className="bg-[#4A0012] p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl font-bold text-white relative z-10 flex items-center justify-center gap-3">
                  🇮🇳 Indian Delegates
                </h2>
              </div>
              
              <div className="p-6 md:p-8">
                {/* Table Header */}
                <div className="flex justify-between items-center bg-[#faf8f2] p-4 rounded-xl text-[#4A0012] font-bold md:text-lg uppercase tracking-wider mb-2 border border-[#F4D03F]/20">
                  <div className="pl-2 md:pl-4">Category</div>
                  <div className="pr-2 md:pr-4 text-right">Fee (incl. GST)</div>
                </div>
                
                {/* Table Rows */}
                <div className="space-y-3 mt-4">
                  {indianFees.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 md:p-5 rounded-xl hover:bg-[#FFF9E8]/80 transition-colors border border-gray-100 hover:border-[#F4D03F]/40 group shadow-sm">
                      <div className="font-semibold text-gray-800 text-base md:text-lg group-hover:text-[#4A0012] pl-2 md:pl-4">{item.category}</div>
                      <div className="font-bold text-lg md:text-xl text-[#4A0012] bg-[#FFF9E8] py-2 px-4 md:px-6 rounded-lg border border-[#F4D03F]/50">{item.total}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Foreign Delegates Table */}
            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden mb-16">
              <div className="bg-[#4A0012] p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl font-bold text-white relative z-10 flex items-center justify-center gap-3">
                  🌍 Foreign Delegates
                </h2>
              </div>
              
              <div className="p-6 md:p-8">
                {/* Table Header */}
                <div className="flex justify-between items-center bg-[#faf8f2] p-4 rounded-xl text-[#4A0012] font-bold md:text-lg uppercase tracking-wider mb-2 border border-[#F4D03F]/20">
                  <div className="pl-2 md:pl-4">Category</div>
                  <div className="pr-2 md:pr-4 text-right">Fee (incl. GST)</div>
                </div>
                
                {/* Table Rows */}
                <div className="space-y-3 mt-4">
                  {foreignFees.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 md:p-5 rounded-xl hover:bg-[#FFF9E8]/80 transition-colors border border-gray-100 hover:border-[#F4D03F]/40 group shadow-sm">
                      <div className="font-semibold text-gray-800 text-base md:text-lg group-hover:text-[#4A0012] pl-2 md:pl-4">{item.category}</div>
                      <div className="font-bold text-lg md:text-xl text-[#4A0012] bg-[#FFF9E8] py-2 px-4 md:px-6 rounded-lg border border-[#F4D03F]/50">{item.total}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Deadline Banner */}
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-5 mb-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 shadow-sm">
              <span className="text-2xl">⏳</span>
              <p className="text-red-800 font-medium text-sm md:text-base">
                <strong className="font-bold">Important:</strong> Registration window closes on <span className="underline decoration-red-300 decoration-2 underline-offset-2">5 December 2026</span>.
              </p>
            </motion.div>

            {/* Final CTA Button */}
            <motion.div variants={itemVariants} className="text-center pb-10">
              <button
                onClick={() => setShowPopup(true)}
                className="
                  relative group overflow-hidden
                  bg-[#F4D03F] text-[#4A0012]
                  px-12 py-5 rounded-full font-bold text-lg
                  shadow-[0_10px_40px_rgba(244,208,63,0.4)]
                  hover:shadow-[0_10px_60px_rgba(244,208,63,0.6)]
                  transition-all duration-300 transform hover:scale-105
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Proceed to Registration
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Premium Popup */}
      {showPopup && (
        <div
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/50 backdrop-blur-sm
            px-4
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="
              bg-white max-w-md w-full
              rounded-[2rem] p-10 text-center
              shadow-2xl border border-gray-100
            "
          >
            <div className="w-20 h-20 bg-[#FFF9E8] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
              <span className="text-4xl">⏳</span>
            </div>
            
            <h2 className="text-3xl font-bold text-[#4A0012] mb-3">
              Opening Soon
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The official registration portal for IEEE INDICON 2026 is being finalized. Please stay tuned for updates!
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="
                w-full bg-[#4A0012] text-white
                py-4 rounded-full font-semibold
                hover:bg-[#650018] transition-colors
              "
            >
              Got it, thanks!
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}