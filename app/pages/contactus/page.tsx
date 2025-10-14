"use client";

import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { MapPin, MessageSquare, PhoneCall, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* 🌟 Hero Section */}
      <motion.section
        className="py-16 lg:py-24 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-200/30 blur-3xl rounded-full opacity-40"></div>

        <div
          className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl py-16"
          data-aos="zoom-in"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[#B68239] mb-6 drop-shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in Touch 📞
          </motion.h1>
          <motion.p
            className="text-xl text-[#8B7D6B] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to make a difference? We&apos;d love to hear from you and
            explore how we can work together!
          </motion.p>
        </div>
      </motion.section>

      {/* 📬 Main Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 💬 Contact Form */}
        <motion.div
          data-aos="fade-right"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Card
            title={
              <span className="text-brown-900 text-2xl font-bold flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-yellow-700" />
                Send us a Message
              </span>
            }
            className="border-brown-700 bg-yellow-50 shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-2xl"
          >
            <p className="text-brown-700 mb-4">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <form className="space-y-4" data-aos="fade-up">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-brown-700 bg-white text-brown-900 placeholder-brown-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-brown-700 bg-white text-brown-900 placeholder-brown-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-brown-700 bg-white text-brown-900 placeholder-brown-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="primary"
                  className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-3 rounded-lg font-semibold w-full transition-transform duration-300"
                >
                  Submit Message 🚀
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>

        {/* ⚡ Quick Contact */}
        <motion.div
          data-aos="fade-left"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Card
            title={
              <span className="text-brown-900 text-2xl font-bold flex items-center gap-2">
                <PhoneCall className="h-6 w-6 text-yellow-700" />
                Quick Contact
              </span>
            }
            className="border-brown-700 bg-yellow-50 shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-2xl"
          >
            <p className="text-brown-700 mb-4">
              For immediate Contact? Try these options.
            </p>

            <div className="space-y-4" data-aos="fade-up">
              <Link
                href="https://wa.me/233508469840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Button className="w-full justify-start text-brown-800 border border-brown-700 hover:bg-yellow-100 transition-colors">
                    <MessageSquare className="h-4 w-4 mr-2 text-brown-700" />
                    WhatsApp: +233 50 846 9840
                  </Button>
                </motion.div>
              </Link>

              <motion.div whileHover={{ scale: 1.03 }}>
                <Button className="w-full justify-start text-brown-800 border border-brown-700 hover:bg-yellow-100 transition-colors">
                  <PhoneCall className="h-4 w-4 mr-2 text-brown-700" />
                  Call: +233 24 567 8901
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }}>
                <Button className="w-full justify-start text-brown-800 border border-brown-700 hover:bg-yellow-100 transition-colors">
                  <Mail className="h-4 w-4 mr-2 text-brown-700" />
                  Email: info@ipa.org
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
