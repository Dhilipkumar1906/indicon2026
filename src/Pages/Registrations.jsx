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

  // Updated Data arrays with full GST breakdown
  const indianFees = [
    { category: "IEEE Student Member", type: "Regular", base: "INR 9,000", gst: "INR 1,620", total: "INR 10,620" },
    { category: "Non-IEEE Student Member", type: "Regular", base: "INR 11,000", gst: "INR 1,980", total: "INR 12,980" },
    { category: "IEEE Member", type: "Regular", base: "INR 11,000", gst: "INR 1,980", total: "INR 12,980" },
    { category: "Non-IEEE Member", type: "Regular", base: "INR 12,000", gst: "INR 2,160", total: "INR 14,160" },
  ];

  const foreignFees = [
    { category: "IEEE Student Member", type: "Regular", base: "USD 300", gst: "USD 54", total: "USD 354" },
    { category: "Non-IEEE Student Member", type: "Regular", base: "USD 350", gst: "USD 63", total: "USD 413" },
    { category: "IEEE Member", type: "Regular", base: "USD 400", gst: "USD 72", total: "USD 472" },
    { category: "Non-IEEE Member", type: "Regular", base: "USD 500", gst: "USD 90", total: "USD 590" },
  ];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#faf8f2] to-white py-32 px-6 relative overflow-hidden">
        
        {/* Background Decorative Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F4D03F] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
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
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Secure your participation at IEEE INDICON 2026. All registrations include access to technical sessions, keynotes, and conference materials.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Author Notice */}
            <motion.div variants={itemVariants} className="bg-[#FFF9E8] border-l-4 border-[#F4D03F] p-6 rounded-r-2xl mb-12 shadow-sm flex items-start gap-4 max-w-4xl mx-auto">
              <div className="text-[#C89B00] text-2xl mt-1">⚠️</div>
              <div>
                <h4 className="font-bold text-[#4A0012] mb-1">Mandatory Author Registration</h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  At least one author of each accepted paper must register at the applicable rate to have the paper included in the conference proceedings.
                </p>
              </div>
            </motion.div>

            {/* Indian Delegates Table */}
            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden mb-12">
              <div className="bg-[#4A0012] p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl font-bold text-white relative z-10 flex items-center justify-center gap-3">
                  🇮🇳 Indian Delegates
                </h2>
              </div>
              
              <div className="p-6 md:p-8 overflow-x-auto">
                <div className="min-w-[800px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 bg-[#faf8f2] p-4 rounded-xl text-[#4A0012] font-bold text-sm uppercase tracking-wider mb-2 border border-[#F4D03F]/20">
                    <div className="col-span-4 pl-2">Category</div>
                    <div className="col-span-2 text-center text-gray-500">Type</div>
                    <div className="col-span-2 text-center text-gray-500">Fee (excl. GST)</div>
                    <div className="col-span-2 text-center text-gray-500">GST @ 18%</div>
                    <div className="col-span-2 text-right pr-2">Total (incl. GST)</div>
                  </div>
                  
                  {/* Table Rows */}
                  <div className="space-y-2">
                    {indianFees.map((item, index) => (
                      <div key={index} className="grid grid-cols-12 gap-4 items-center p-4 rounded-xl hover:bg-[#FFF9E8]/50 transition-colors border border-transparent hover:border-[#F4D03F]/30 group">
                        <div className="col-span-4 font-semibold text-gray-800 group-hover:text-[#4A0012] pl-2">{item.category}</div>
                        <div className="col-span-2 text-center text-sm bg-gray-100 text-gray-600 py-1 rounded-md mx-4">{item.type}</div>
                        <div className="col-span-2 text-center text-gray-600 font-medium">{item.base}</div>
                        <div className="col-span-2 text-center text-gray-500 text-sm">{item.gst}</div>
                        <div className="col-span-2 text-right font-bold text-[17px] text-[#4A0012] bg-[#FFF9E8] py-1 px-3 rounded-lg border border-[#F4D03F]/40">{item.total}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Foreign Delegates Table */}
            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden mb-16">
              <div className="bg-[#4A0012] p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl font-bold text-white relative z-10 flex items-center justify-center gap-3">
                  🌍 Foreign Delegates
                </h2>
              </div>
              
              <div className="p-6 md:p-8 overflow-x-auto">
                <div className="min-w-[800px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 bg-[#faf8f2] p-4 rounded-xl text-[#4A0012] font-bold text-sm uppercase tracking-wider mb-2 border border-[#F4D03F]/20">
                    <div className="col-span-4 pl-2">Category</div>
                    <div className="col-span-2 text-center text-gray-500">Type</div>
                    <div className="col-span-2 text-center text-gray-500">Fee (excl. GST)</div>
                    <div className="col-span-2 text-center text-gray-500">GST @ 18%</div>
                    <div className="col-span-2 text-right pr-2">Total (incl. GST)</div>
                  </div>
                  
                  {/* Table Rows */}
                  <div className="space-y-2">
                    {foreignFees.map((item, index) => (
                      <div key={index} className="grid grid-cols-12 gap-4 items-center p-4 rounded-xl hover:bg-[#FFF9E8]/50 transition-colors border border-transparent hover:border-[#F4D03F]/30 group">
                        <div className="col-span-4 font-semibold text-gray-800 group-hover:text-[#4A0012] pl-2">{item.category}</div>
                        <div className="col-span-2 text-center text-sm bg-gray-100 text-gray-600 py-1 rounded-md mx-4">{item.type}</div>
                        <div className="col-span-2 text-center text-gray-600 font-medium">{item.base}</div>
                        <div className="col-span-2 text-center text-gray-500 text-sm">{item.gst}</div>
                        <div className="col-span-2 text-right font-bold text-[17px] text-[#4A0012] bg-[#FFF9E8] py-1 px-3 rounded-lg border border-[#F4D03F]/40">{item.total}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Deadline Banner */}
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-5 mb-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 shadow-sm">
              <span className="text-2xl">⏳</span>
              <p className="text-red-800 font-medium text-sm md:text-base">
                <strong className="font-bold">Important:</strong> Registration window closes on <span className="underline decoration-red-300 decoration-2 underline-offset-2">5 December 2026</span> shortly before the conference.
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