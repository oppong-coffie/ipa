"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnnualReportSection() {
  const reports = [
    {
      year: "2024",
      label: "2024 Annual Impact & Financial Report",
      description:
        "Comprehensive breakdown of project outcomes, voluntary drives in Amanokrom & Teacher Mante, and financial accountability.",
      downloadUrl: "/reports/report-2024.pdf",
      size: "PDF • 4.2 MB",
      highlights: ["500+ Beneficiaries", "GARF Api-Fund Rollout", "100% Grassroots Audited"],
    },
  ];

  return (
    <section
      id="report"
      className="w-full py-20 lg:py-28 bg-[#FAF6EE] dark:bg-zinc-900/60 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Background Subtle Highlights */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-yellow-300/15 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#8B7D6B]/15 dark:bg-zinc-800/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Integrity &amp; Open Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4">
            Transparent, Accountable &amp;{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">Community-First</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed">
            Every donation, grant, and volunteer hour entrusted to IPA Ghana is tracked and documented.
            Explore our verified annual reports to see how resources drive real impact on the ground.
          </p>
        </div>

        {/* Report Cards Grid */}
        <div className="max-w-4xl mx-auto w-full">
          {reports.map((report) => (
            <motion.div
              key={report.year}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 border border-yellow-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-100 dark:bg-zinc-800 text-[#D1A054] dark:text-yellow-400 flex items-center justify-center font-bold">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Annual Release • {report.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D241E] dark:text-white mt-0.5">
                      {report.label}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-zinc-800 text-stone-600 dark:text-zinc-400">
                  {report.size}
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-zinc-300 py-6 leading-relaxed">
                {report.description}
              </p>

              {/* Key Highlights Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {report.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-4 py-1.5 rounded-xl bg-yellow-50 dark:bg-zinc-800/80 text-[#8B7D6B] dark:text-yellow-300 border border-yellow-200/50 dark:border-zinc-700/50 font-medium"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                <a
                  href={report.downloadUrl}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#D1A054] hover:bg-yellow-400 text-zinc-950 font-extrabold text-sm sm:text-base shadow-md hover:shadow-yellow-400/20 hover:scale-102 active:scale-98 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Annual Report (PDF)</span>
                </a>

                <Link
                  href="/pages/contactus"
                  className="text-xs sm:text-sm font-semibold text-[#8B7D6B] dark:text-yellow-400 hover:underline flex items-center gap-1"
                >
                  <span>Request detailed audit schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversational Bottom Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-stone-500 dark:text-zinc-400">
          <span>Looking for specific data or prior archival material? </span>
          <Link
            href="/pages/contactus"
            className="text-[#8B7D6B] dark:text-yellow-400 font-bold hover:underline"
          >
            Chat with our Knowledge &amp; Impact team &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
