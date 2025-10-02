"use client";

import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { MapPin, MessageSquare, PhoneCall, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-[#EDEAE3] to-[#F5F0E5] py-16 lg:py-24"
        data-aos="fade-down"
      >
        <div
          className="max-w-4xl mx-auto px-6 sm:px-8 text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-lg py-16"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#D1A054] mb-6 drop-shadow-sm">
            Get in Touch 📞
          </h1>
          <p className="text-xl text-[#8B7D6B] leading-relaxed">
            Ready to make a difference? We&apos;d love to hear from you and
            explore how we can work together!
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 space-y-12">
        {/* Contact Form */}
        <Card
          title={
            <span className="text-brown-900 text-2xl font-bold">
              Send us a Message 💬
            </span>
          }
          className="border-brown-700 bg-yellow-50 shadow-lg"
          data-aos="fade-right"
        >
          <p className="text-brown-700 mb-4">
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>
          <form className="space-y-4" data-aos="fade-up">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-brown-700 bg-white text-brown-900 placeholder-brown-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-brown-700 bg-white text-brown-900 placeholder-brown-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-brown-700 bg-white text-brown-900 placeholder-brown-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button
              type="primary"
              className="bg-brown-700 hover:bg-brown-800 text-yellow-50 px-6 py-3 rounded-lg font-semibold"
              data-aos="zoom-in"
            >
              Submit Message 🚀
            </Button>
          </form>
        </Card>

        {/* Quick Contact */}
        <Card
          title={<span className="text-brown-900">Quick Contact 🚀</span>}
          className="border-brown-700 bg-yellow-50 shadow-lg"
          data-aos="fade-left"
        >
          <p className="text-brown-700 mb-4">
            Need immediate assistance? Try these options.
          </p>
          <div className="space-y-3" data-aos="fade-up">
            <Button className="w-full justify-start text-brown-800 border-brown-700 hover:bg-yellow-100">
              <MessageSquare className="h-4 w-4 mr-2 text-brown-700" />
              WhatsApp: +233 24 567 8901
            </Button>
            <Button className="w-full justify-start text-brown-800 border-brown-700 hover:bg-yellow-100">
              <PhoneCall className="h-4 w-4 mr-2 text-brown-700" />
              Phone: +233 50 846 9840
            </Button>
            <Button className="w-full justify-start text-brown-800 border-brown-700 hover:bg-yellow-100">
              <Mail className="h-4 w-4 mr-2 text-brown-700" />
              Email: info@ipa.org
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
