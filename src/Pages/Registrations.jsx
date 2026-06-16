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

  // Data arrays for cleaner code
  const indianFees = [
    { category: "IEEE Student Member", fee: "₹10,620" },
    { category: "Non-IEEE Student Member", fee: "₹12,980" },
    { category: "IEEE Member", fee: "₹12,980" },
    { category: "Non-IEEE Member", fee: "₹14,160" },
  ];

  const foreignFees = [
    { category: "IEEE Student Member", fee: "USD 354" },
    { category: "Non-IEEE Student Member", fee: "USD 413" },
    { category: "IEEE Member", fee: "USD 472" },
    { category: "Non-IEEE Member", fee: "USD 590" },
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
              Registration
            </h1>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Secure your participation at IEEE INDICON 2026. Registration includes access to technical sessions, keynote talks, conference materials, and networking events.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Overview / Perks Grid */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: "🎟️", title: "Technical Sessions", desc: "Full access to all paper presentations" },
                { icon: "🎤", title: "Keynote Talks", desc: "Listen to industry & academic leaders" },
                { icon: "💼", title: "Conference Kit", desc: "Exclusive materials and proceedings" },
                { icon: "🤝", title: "Networking", desc: "Connect with global researchers" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-[#F4D03F]/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl mb-4 bg-[#FFF9E8] w-14 h-14 flex items-center justify-center rounded-2xl border border-[#F4D03F]/40">{item.icon}</div>
                  <h3 className="font-bold text-[#4A0012] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Author Notice */}
            <motion.div variants={itemVariants} className="bg-[#FFF9E8] border-l-4 border-[#F4D03F] p-6 rounded-r-2xl mb-12 shadow-sm flex items-start gap-4">
              <div className="text-[#C89B00] text-2xl mt-1">⚠️</div>
              <div>
                <h4 className="font-bold text-[#4A0012] mb-1">Mandatory Author Registration</h4>
                <p className="text-gray-700 text-sm">At least one author of each accepted paper must register for the conference to ensure the paper is included in the official proceedings.</p>
              </div>
            </motion.div>

            {/* Fee Structure - Side by Side on Desktop */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              
              {/* Indian Delegates Card */}
              <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden">
                <div className="bg-[#4A0012] p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                  <h2 className="text-3xl font-bold text-white relative z-10">Indian Delegates</h2>
                  <p className="text-[#F4D03F] mt-2 text-sm font-medium relative z-10">Fee in INR (₹)</p>
                </div>
                <div className="p-4 md:p-6 space-y-2">
                  {indianFees.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-xl hover:bg-[#faf8f2] transition-colors group">
                      <span className="font-medium text-gray-700 group-hover:text-[#4A0012] transition-colors">{item.category}</span>
                      <span className="font-bold text-lg text-[#4A0012]">{item.fee}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Foreign Delegates Card */}
              <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl border border-[#F4D03F]/30 overflow-hidden">
                <div className="bg-[#4A0012] p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                  <h2 className="text-3xl font-bold text-white relative z-10">Foreign Delegates</h2>
                  <p className="text-[#F4D03F] mt-2 text-sm font-medium relative z-10">Fee in USD ($)</p>
                </div>
                <div className="p-4 md:p-6 space-y-2">
                  {foreignFees.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-xl hover:bg-[#faf8f2] transition-colors group">
                      <span className="font-medium text-gray-700 group-hover:text-[#4A0012] transition-colors">{item.category}</span>
                      <span className="font-bold text-lg text-[#4A0012]">{item.fee}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Important Dates */}
            <motion.div variants={itemVariants} className="bg-[#4A0012] text-white rounded-[2.5rem] p-10 md:p-12 mb-16 relative overflow-hidden shadow-2xl">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F4D03F] opacity-10 rounded-full blur-[80px]"></div>
              
              <h2 className="text-3xl font-bold mb-10 text-center relative z-10">
                Important Dates
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  { title: "Submission Start", date: "30 June 2026", icon: "📝" },
                  { title: "Submission End", date: "31 August 2026", icon: "⏳" },
                  { title: "Acceptance", date: "02 November 2026", icon: "✅" },
                  { title: "Camera Ready", date: "16 November 2026", icon: "📸" },
                ].map((date, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-2xl mb-3">{date.icon}</div>
                    <h3 className="font-medium text-white/80 text-sm uppercase tracking-wider mb-2">
                      {date.title}
                    </h3>
                    <p className="text-[#F4D03F] font-bold text-lg">{date.date}</p>
                  </div>
                ))}
              </div>
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