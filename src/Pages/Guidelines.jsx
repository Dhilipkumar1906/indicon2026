import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";



export default function Guidelines() {
    const [showSubmitPopup, setShowSubmitPopup] = useState(false);
const [agreed, setAgreed] = useState(false);
  return (
    <>
    <section className="min-h-screen bg-gradient-to-b from-[#faf8f2] to-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#C89B00] uppercase tracking-[4px] font-semibold">
            IEEE INDICON 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#4A0012] mt-3">
            Guidelines & Policies
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-relaxed">
            Authors are requested to carefully review all submission,
            formatting, review, publication, and presentation policies
            before preparing and submitting their manuscripts to
            IEEE INDICON 2026.
          </p>

          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-5 rounded-full"></div>
        </motion.div>

        {/* General Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4A0012] mb-5">
            General Guidelines to Authors
          </h2>

          <p className="text-gray-700 leading-relaxed">
            IEEE INDICON 2026 welcomes original research contributions
            from academia, industry, and research organizations.
            Authors are encouraged to submit high-quality manuscripts
            aligned with the conference themes and technical tracks.
            All submissions must comply with IEEE standards and follow
            the conference formatting and review requirements.
          </p>
        </motion.div>

        {/* Originality + Submission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20"
          >
            <h3 className="text-2xl font-bold text-[#4A0012] mb-5">
              Originality of Submitted Papers
            </h3>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                • Papers must contain original and unpublished research work.
              </li>

              <li>
                • Manuscripts must not be under review or submitted to
                any other conference, journal, or publication venue.
              </li>

              <li>
                • IEEE anti-plagiarism policies apply to all submissions.
              </li>

              <li>
                • Authors are fully responsible for ensuring the originality
                and authenticity of their work.
              </li>

              <li>
                • Papers violating publication ethics may be rejected
                without review.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20"
          >
            <h3 className="text-2xl font-bold text-[#4A0012] mb-5">
              Paper Submission Requirements
            </h3>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                • Papers must be prepared in IEEE standard
                two-column conference format.
              </li>

              <li>
                • Manuscripts must be written in English.
              </li>

              <li>
                • Papers should be between four and six pages,
                including references and figures.
              </li>

              <li>
                • Literature-review-only papers are not accepted, and any submission exceeding six pages will be rejected. 
              </li>

              <li>
                • Submitted papers must NOT list any author names, affiliations, or other personally identifiable information, and must not include page numbers. 
              </li>
              
              <li>
                • Detailed format information is available on the IEEE website <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline hover:text-blue-800">(IEEE conference templates)</a>.
              </li>

              <li>
                • Submissions exceeding the page limit may be rejected.
              </li>
              
            </ul>
          </motion.div>

        </div>
        
        

  <div className="flex justify-center gap-4 mt-12 mb-12">

  <a
    href="https://www.ieee.org/conferences/publishing/templates"
    target="_blank"
    className="
      border-2 border-[#4A0012]
      text-[#4A0012]
      px-8 py-4
      rounded-full
      font-semibold
      hover:bg-[#4A0012]
      hover:text-white
      transition
    "
  >
    Download Template
  </a>
</div>



        {/* Upload Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4A0012] mb-5">
            Paper Upload Instructions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li>
                  • All papers must be submitted through the Microsoft
                  Conference Management Toolkit (CMT).
                </li>

                <li>
                  • Submitting authors may need to create a CMT account before uploading. Authors should provide a complete paper title
                  and abstract of no more than 250 words during submission.
                </li>

                <li>
                  • Abstracts should clearly summarize the contribution
                  and significance of the work.
                </li>

                <li>
                  • Authors must verify all metadata before final submission.
                </li>

                <li>
                  • All submitted papers are peer-reviewed by the Technical Program Committee (TPC).
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li>
                  • All accepted papers that are registered and presented at the conference will be sent for possible inclusion in IEEE Xplore.
                </li>

                <li>
                  • Authors must agree to the IEEE copyright conditions and sign the IEEE copyright form as part of the online submission process. 
                </li>

                <li>
                  • Accepted and presented papers will be considered
                  for submission to IEEE Xplore.
                </li>

                <li>
                  • The Microsoft CMT service is used to manage the peer-review process for this conference. 
                </li>

                <li>
                  • The Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free by
              Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        <div 
            className="mt-10 bg-[#FFF9E8] border border-[#F4D03F]/30 rounded-2xl p-6 transform transition-all duration-300 hover:shadow-md hover:border-[#F4D03F]/50 reveal-on-scroll flex justify-center gap-4 mt-12 mb-12"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-[15px] text-gray-700 leading-relaxed font-bold text-center md:text-left">
              The Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free by
              Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
            </p>
          </div>
          
                {/* Manuscript Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4A0012] mb-5">
            Manuscript Preparation Guidelines
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>• Submitted manuscripts must be structured as <b>technical papers</b>. They must represent original, unpublished research that is <b>NOT currently under review </b>for any other conference or journal.</li>
            <li>• Manuscripts must be a maximum of <b>six pages</b>; single-spaced, double-column, using 10-point font on 8.5×11-inch pages (IEEE conference style), including figures, tables, and references.</li>
            <li>• <b>The IEEE conference style templates</b> for MS Word and LaTeX, provided by IEEE eXpress Conference Publishing, are available for download. Papers not following the style guidelines may be rejected without review.</li>
            <li>• Electronic submissions must be a readable PDF file.</li>
            <li>• Submitted manuscripts undergo mandatory <b>plagiarism screening </b>per IEEE guidelines. Papers violating ethics will be desk-rejected and the authors’ parent organizations informed.</li>
            <li>• All submitted manuscripts are reviewed by the Program Committee :</li>
	        <li>      - Submitted papers must NOT list any author names, affiliations, or other personally identifiable information.</li>
	<li> - Authors should NOT identify themselves or their organization in the paper, either explicitly or by implication (e.g., through references or acknowledgments). References to one’s own work should be in the third person.</li>
	<li> - Submissions are judged on correctness, originality, technical strength, significance, potential impact, quality of presentation, and relevance to the conference scope.</li>

            <li>• <b>The author list and order at the time of submission is considered final </b>— no co-authors may be added, removed, or re-ordered after the submission deadline or upon acceptance (no exceptions).</li>
          <li>• Manuscripts that DO NOT follow these guidelines (size, formatting, and anonymization requirements) will be rejected without review.</li>
          <li>• A paper may be accepted for the track in which it is submitted, or as a WIP/Poster paper if it does not meet the requisite depth. In the latter case, authors will have one week to submit a shorter version for the proceedings.</li>
          <li>• Upon acceptance, <b>at least one author must register</b> for the conference and present the paper. Every accepted paper requires an individual author registration.</li>
          <li>• Per IEEE policy, authors of every published paper must sign a copyright transfer agreement. Instructions will be shared with authors after acceptance.</li>
          <li text-bold>• <b>All manuscripts must be submitted through the submit button provided at the bottom of this document.</b></li>
          <li text-bold>• <b>All accepted and presented papers will be submitted for inclusion in IEEE Xplore, subject to meeting IEEE Xplore’s scope and quality requirements.</b></li>

          </ul>
        </motion.div>

        {/* Review Process */}
        <div className="bg-[#4A0012] rounded-3xl p-10 text-white mb-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Review Process
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

            {[
              "Plagiarism Screening",
              "Editorial Screening",
              "Technical Evaluation",
              "Acceptance Decision",
              "Camera Ready",
              "Conference Presentation"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white/10 rounded-2xl p-5 text-center"
              >
                <div className="text-2xl font-bold text-[#F4D03F] mb-2">
                  {index + 1}
                </div>

                <p>{step}</p>
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4A0012] mb-5">
            Review Process
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>• Submitted manuscripts undergo mandatory plagiarism screening per IEEE guidelines. Papers violating ethics will be desk-rejected and the authors’ parent organizations informed.</li>
            <li>• All submitted manuscripts will be reviewed by the Program Committee.
</li>
            
            
            <li> -Submissions will be judged on correctness, originality, technical strength, significance, potential impact, quality of presentation, and interest and relevance to the conference scope.
</li>
            <li>• The author list and order at the time of submission is considered final – no co-authors can be added or removed or re-ordered after the submission deadline or upon acceptance (no exceptions).
</li>
            <li>• Submitted manuscripts that DO NOT follow these guidelines (i.e., do not meet the size, formatting, and anonymization requirements ) will be rejected without review.
</li>
            <li>• Paper may be accepted for the track it is submitted in, or may be accepted as a WIP/Poster paper in case it does not meet the requisite depth. In case of the latter, authors will have 1 week to submit a shorter version of the paper to appear in the proceedings.
</li>

            

          </ul>
        </motion.div>

        {/* Publication Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4A0012] mb-5">
            Publication Policy
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>• Upon paper acceptance, at least one author must register for the conference and present the paper. Every accepted paper must have an individual author registration.

</li>
            <li>• As per IEEE policy, authors of every published paper needs to sign a copyright transfer agreement. The instructions for the copyright agreement will be shared with the author after acceptance of the paper.

</li>
            <li>• <b>All accepted and presented papers will be submitted for inclusion into IEEE Xplore, subject to meeting IEEE Xplore’s scope and quality requirements.</b>

</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4A0012] mb-5">
            IEEE Author Center
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>• IEEE is a trusted source for researchers in academia, industry, and government. By publishing with IEEE, you will get the global prestige that high-quality research deserves. All you need to know to publish in IEEE is <a href="https://ieeeauthorcenter.ieee.org/">here</a>.

</li>
            <ul className="list-circle pl-10 mt-4 space-y-3">
            <li>- <b>Become an IEEE Conference Author: IEEE offers guidance and best practices on the conference publishing process.</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/become-an-ieee-conference-author/" className="text-blue-600 underline hover:text-blue-800">here</a>.

</li>
            <li>- <b>Author Ethics: Ethical guidelines are required in scientific publishing.</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/" className="text-blue-600 underline hover:text-blue-800">here</a>.

</li>
            <li>- <b>Write your Paper:</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/write-your-paper/" className="text-blue-600 underline hover:text-blue-800">here</a>.

</li>
            <li>- <b>Understand Peer Review:</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/" className="text-blue-600 underline hover:text-blue-800">here</a>

</li>
            <li>- <b>Get Published:</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/get-published/" className="text-blue-600 underline hover:text-blue-800">here</a>.

</li>
</ul>
          </ul>
        </motion.div>

        {/* Camera Ready */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4A0012] mb-5">
            Camera Ready and Copyright
          </h2>
            <h2 className="mb-5">Authors are requested to upload the camera ready. Authors need to complete the following steps:
</h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>• All final paper submissions must be electronic, using IEEE Xplore compliant PDF format (*.pdf). Failure to do so may result in the rejection of the paper. Authors are requested to upload the camera ready in CMT
</li>
            <li>• Type 3 fonts (bitmaps) will not be accepted. Authors can use the IEEE PDF eXpress to generate compliant PDF Files for final submission.
</li>
            <li>• Prepare final manuscript STRICTLY according to IEEE template. Failing which, we will not submit your manuscript to Xplore. Template can be found here. Preferably, use US Letter. Manuscript Templates for Conference Proceedings: <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline hover:text-blue-800">https://www.ieee.org/conferences/publishing/templates.html</a>.
</li>
            <li>• Length of manuscript should be maximum 6 pages
</li>
            <li>• Format and verify your manuscript using IEEE PDF eXpress™ to generate IEEE Xplore®-compliant PDF. RESOURCES IEEE PDF eXpress: A freely available online tool designed to assist conference organizers and authors in complying with the IEEE PDF requirements <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline hover:text-blue-800">https://www.ieee.org/conferences/publishing/pdfexpress.html</a>  (In case, you need conference id to use PDFXpress, please use this – #72446)
</li>
            
            <li>• Get and upload your IEEE Electronic Copyright Form (eCF) to CMT.
</li>
            <li>• Upload your camera-ready paper (IEEE Xplore®-compliant PDF or Microsoft Word Document) to CMT, your respective track.
</li>
            <li>• Register for the conference with payment. Registration should be done before camera ready upload.
</li>
 
          </ul>
        </motion.div>


        {/* Important Dates */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-9">

          <h2 className="text-3xl font-bold text-[#4A0012] mb-6">
            Important Dates
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-[#4A0012] text-white">
                  <th className="p-4 text-left">Milestone</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-4">Submission Start Date</td>
                  <td className="p-4">22 June 2026</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Submission Deadline</td>
                  <td className="p-4">31 August 2026</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Notification of Acceptance</td>
                  <td className="p-4">02 November 2026</td>
                </tr>

                <tr>
                  <td className="p-4">Camera Ready Submission</td>
                  <td className="p-4">16 November 2026</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
                <div className="text-center mt-10">

  <button
    onClick={() => setShowSubmitPopup(true)}
    className="
      bg-[#F4D03F]
      text-[#4A0012]
      px-8 py-4
      rounded-full
      font-semibold
      hover:scale-105
      transition
      shadow-lg
    "
  >
    Submit Paper
  </button>

</div>
      </div>

    </section>
    {showSubmitPopup && (
  <div
    className="
      fixed inset-0
      z-[999]
      flex items-center justify-center
      bg-black/60
      backdrop-blur-md
      px-4
    "
    onClick={() => setShowSubmitPopup(false)}
  >

    <div
      onClick={(e) => e.stopPropagation()}
      className="
        bg-white
        max-w-lg
        w-full
        rounded-3xl
        p-8
        shadow-2xl
      "
    >

      <h2 className="text-2xl font-bold text-[#4A0012] mb-4">
        Author Declaration
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
            

        Before proceeding to the Microsoft CMT submission portal,
        authors must confirm that they have read and understood
        all submission guidelines, publication policies,
        formatting requirements, and important dates.
      </p>

      <label className="flex items-start gap-3 mb-6">

        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="mt-1 w-9 h-9 accent-[#F4D03F]"
        />

        <span className="text-sm text-gray-700">
          I confirm that I have read, understood,
          and agree to comply with the IEEE INDICON 2026
          submission guidelines and publication policies.

          
        </span>

      </label>

      <div className="flex justify-end gap-3">

        <button
          onClick={() => setShowSubmitPopup(false)}
          className="
            px-5 py-3
            rounded-full
            bg-gray-200
            text-gray-700
          "
        >
          Cancel
        </button>

        <a
          href="https://cmt3.research.microsoft.com/INDICON2026/Submission/Index"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            px-6 py-3
            rounded-full
            font-semibold
            transition

            ${
              agreed
                ? "bg-[#F4D03F] text-[#4A0012]"
                : "bg-gray-300 text-gray-500 pointer-events-none"
            }
          `}
        >
          Proceed to CMT
        </a>

      </div>

    </div>

  </div>
  
)}
    <Footer/>
    </>
    
  );

}
