"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";

export default function AnnualReportSection() {
  const reports = [
    // {
    //   year: "2025",
    //   label: "This Year's Report",
    //   description: "Our latest achievements and milestones",
    //   downloadUrl: "/reports/report-2025.pdf",
    // },
    {
      year: "2024",
      label: "Last Year's Report",
      description: "A year of growth and community impact",
      downloadUrl: "/reports/report-2024.pdf",
    },
  ];

  return (
    <section
      id="report"
      className="relative py-24 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300/20 dark:bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B7D6B]/10 dark:bg-zinc-800/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] dark:text-[#A78B60] mb-6 leading-tight drop-shadow-md">
            Our Annual Reports
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Download our comprehensive annual reports to learn about our impact,
            achievements, and the communities we serve.
          </p>
        </motion.div>

        {/* Report Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reports.map((report, index) => (
            <motion.div
              key={report.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
              }}
              className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-yellow-100 dark:border-zinc-800 overflow-hidden group transition-colors duration-300"
            >
              {/* Card Header with Year */}
              <div className="bg-gradient-to-r from-[#8B7D6B] to-[#6B5D4B] dark:from-zinc-800 dark:to-zinc-950 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-yellow-300 dark:text-yellow-500" />
                  <span className="text-yellow-100 dark:text-yellow-500/80 font-semibold text-lg">
                    {report.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8B7D6B] dark:text-[#A78B60] mb-2">
                  {report.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {report.description}
                </p>

                {/* Download Button */}
                <motion.a
                  href={report.downloadUrl}
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B7D6B] to-[#6B5D4B] dark:from-zinc-800 dark:to-zinc-950 hover:from-[#FDDC5C] dark:hover:from-yellow-600 hover:to-yellow-400 dark:hover:to-yellow-500 text-white dark:text-zinc-200 hover:text-[#8B7D6B] dark:hover:text-zinc-950 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 w-full justify-center"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.a>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-200/30 dark:bg-yellow-900/10 rounded-full blur-2xl group-hover:bg-yellow-300/40 dark:group-hover:bg-yellow-700/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-500 dark:text-gray-400 text-sm mt-12"
        >
          For older reports or additional documentation, please{" "}
          <a
            href="/pages/contactus"
            className="text-[#8B7D6B] dark:text-[#A78B60] hover:text-[#FDDC5C] dark:hover:text-yellow-500 font-medium underline transition-colors"
          >
            contact us
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
