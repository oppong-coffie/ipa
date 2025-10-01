"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQ() {
  const faqs = [
    {
      question: "🌍 What does IPA stand for?",
      answer:
        "IPA stands for Indigenous People Alliance, a non-profit organization dedicated to empowering indigenous communities.",
    },
    {
      question: "📍 Where is your office located?",
      answer:
        "Our headquarters is located in Accra, Ghana. You can find our exact location on the map section above.",
    },
    {
      question: "🤝 How can I support your work?",
      answer:
        "You can support us by volunteering, donating, or collaborating on community-driven projects.",
    },
    {
      question: "📧 How can I get in touch?",
      answer:
        "Use our contact page to send a message or email us directly at info@ipa.org.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] mb-6 text-center"
          whileHover={{ scale: 1.03 }}
        >
          ❓ Frequently Asked Questions
        </motion.h2>
        <p className="text-center text-[#8B7D6B] mb-12 max-w-2xl mx-auto">
  Have questions about our mission, projects, or how to get involved?{' '}
  <span className="text-yellow-400 font-semibold">We’ve got you covered.</span>
</p>


        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border-l-4 border-yellow-500 shadow-md rounded-xl p-6 cursor-pointer hover:bg-yellow-100 transition"
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-up"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-900">
                  {faq.question}
                </h3>
                <span className="text-yellow-700 font-bold text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <motion.p
                  className="mt-4 text-gray-800 leading-relaxed text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
