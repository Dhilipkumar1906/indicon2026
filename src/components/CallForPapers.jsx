import { useState } from "react";
const submissionSteps = [
  {
    title: "Prepare Manuscript",
    desc: "Format your research paper according to the IEEE conference template and ensure all submission requirements are satisfied."
  },
  {
    title: "Access Microsoft CMT",
    desc: "Create a Microsoft CMT account or sign in using your existing credentials."
  },
  {
    title: "Enter Paper Information",
    desc: "Provide the paper title, abstract, keywords, author details and other required metadata."
  },
  {
    title: "Upload Manuscript",
    desc: "Submit the complete paper in PDF format through the conference submission portal."
  },
  {
    title: "Review Submission",
    desc: "Carefully verify all entered information and uploaded files before proceeding."
  },
  {
    title: "Complete Submission",
    desc: "Finalize the submission and receive a confirmation acknowledgement from the system."
  }
];
{
  submissionSteps.map((step, index) => (
    <div
      key={index}
      className="bg-white/10 rounded-2xl p-5 text-center"
    >
      <div className="text-2xl font-bold text-[#F4D03F] mb-3">
        {index + 1}
      </div>

      <h4 className="font-semibold mb-2">
        {step.title}
      </h4>

      <p className="text-sm text-white/80">
        {step.desc}
      </p>
    </div>
  ))
}

export default function CallForPapers() {
  const [showCmtPopup, setShowCmtPopup] = useState(false);
  return (
    <section
      id="cfp"
      className="py-24 px-6 bg-gradient-to-b from-[#faf8f2] to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#C89B00] uppercase tracking-[4px] font-semibold">
            Paper Submission
          </p>

          <h2 className="text-5xl font-bold text-[#4A0012] mt-3">
            Call For Papers
          </h2>

          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Topics + Guidelines */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Topics */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20">
            <h3 className="text-2xl font-bold text-[#4A0012] mb-6">
              Topics of Interest
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• AI for Net-Zero and Sustainable Engineering</li>
              <li>• 6G & Sustainable Communication Networks</li>
              <li>• Cyber-Physical Systems & Smart Infrastructure</li>
              <li>• Sustainable Electronics & Green Hardware</li>
              <li>• Secure, Ethical & Responsible Intelligence</li>
              <li>• Technology for Social Good & Smart Society</li>
            </ul>
          </div>

          {/* Submission */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20">
            <h3 className="text-2xl font-bold text-[#4A0012] mb-6">
              Submission Guidelines
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Original and unpublished research work only</li>
              <li>• Manuscript must be in IEEE format</li>
              <li>• PDF submissions only</li>
              <li>• English language submissions</li>
              <li>• All papers undergo peer review</li>
              <li>• Submit through Microsoft CMT</li>
            </ul>
          </div>

        </div>

        {/* How To Submit */}
        <div className="mt-12 bg-[#4A0012] rounded-3xl p-10 text-white">

          <h3 className="text-3xl font-bold mb-8 text-center">
            How To Submit
          </h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

            {[
              "Prepare Manuscript Use IEEE conference template.",
  "Register / Login to Microsoft CMT",
  "Complete Paper Metadata",
  "Upload Full Paper (PDF)",
  "Verify Submission Details",
  "Complete Submission Submit and get acknowledgement."
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-5 text-center"
              >
                <div className="text-2xl font-bold text-[#F4D03F] mb-2">
                  {index + 1}
                </div>

                <p>{step}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
  href="/cfp.pdf"
  download
  className="
    bg-[#F4D03F]
    text-[#4A0012]
    font-semibold
    px-8 py-3
    rounded-full
    hover:scale-105
    transition
    inline-flex
    items-center
    gap-2
  "
>
  Download CFP
</a>

            <button
            onClick={() => setShowCmtPopup(true)}
              className="
                border border-[#F4D03F]
                text-[#F4D03F]
                px-8 py-3
                rounded-full
                hover:bg-[#F4D03F]
                hover:text-[#4A0012]
                transition
              "
            >
              Submit via CMT
            </button>

          </div>
        </div>

        {/* CMT Acknowledgement */}
        <div className="mt-10 bg-[#FFF9E8] border border-[#F4D03F]/30 rounded-2xl p-6">
          <p className="text-[15px] text-gray-700 leading-relaxed font-bold">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </div>

      </div>
      {showCmtPopup && (
  <div
    onClick={() => setShowCmtPopup(false)}
    className="
      fixed inset-0
      z-[999]
      flex items-center justify-center
      bg-black/50
      backdrop-blur-md
      px-4
    "
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        max-w-md
        w-full
        bg-white
        rounded-3xl
        p-8
        text-center
        shadow-2xl
      "
    >
      <div className="text-5xl mb-4">📄</div>

      <h2 className="text-2xl font-bold text-[#4A0012]">
        Paper Submission Portal
      </h2>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Microsoft CMT submission portal will be available shortly.
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Authors are encouraged to download the CFP and prepare their manuscripts in advance.
      </p>

      <div className="flex justify-center gap-3 mt-6">
        <a
          href="/cfp.pdf"
          download
          className="
            bg-[#F4D03F]
            text-[#4A0012]
            px-5 py-3
            rounded-full
            font-semibold
          "
        >
          Download CFP
        </a>

        <button
          onClick={() => setShowCmtPopup(false)}
          className="
            bg-[#4A0012]
            text-white
            px-5 py-3
            rounded-full
          "
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}