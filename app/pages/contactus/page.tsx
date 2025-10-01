"use client";

import React from "react";
import { Card, Button } from "antd";
import { MapPin, MessageSquare, PhoneCall, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EDEAE3] to-[#F5F0E5] py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-lg py-16">
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#D1A054] mb-6 drop-shadow-sm">
      Get in Touch 📞
    </h1>
    <p className="text-xl text-[#8B7D6B] leading-relaxed">
      Ready to make a difference? We&apos;d love to hear from you and explore
      how we can work together!
    </p>
  </div>
</section>


      <section className="container mx-auto px-4 py-16 space-y-12">
        {/* Contact Form */}
        <Card
          title={<span className="text-brown-900 text-2xl font-bold">Send us a Message 💬</span>}
          className="border-brown-700 bg-yellow-50 shadow-lg"
        >
          <p className="text-brown-700 mb-4">
            Fill out the form below and well get back to you within 24 hours.
          </p>
          <form className="space-y-4">
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
            >
              Submit Message 🚀
            </Button>
          </form>
        </Card>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title={
              <span className="text-brown-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brown-700" /> Our Office 🏢
              </span>
            }
            className="border-brown-700 bg-yellow-50 shadow-md"
          >
            <p className="text-brown-800">Innovation for Poverty Action (IPA)</p>
            <p className="text-brown-800">Accra, Ghana</p>
          </Card>

          <Card
            title={
              <span className="text-brown-900 flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-brown-700" /> Call Us 📞
              </span>
            }
            className="border-brown-700 bg-yellow-50 shadow-md"
          >
            <p className="text-brown-800">+233 50 846 9840</p>
          </Card>
        </div>

        {/* Regional Offices */}
        <Card
          title={<span className="text-brown-900">Regional Offices 🌍</span>}
          className="border-brown-700 bg-yellow-50 shadow-lg"
        >
          <p className="text-brown-700 mb-4">
            We have presence across Ghana&apos;s indigenous regions.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center p-3 bg-yellow-100 rounded-lg">
              <div>
                <p className="font-medium text-brown-900">Northern Region Office</p>
                <p className="text-sm text-brown-700">Tamale</p>
              </div>
              <span className="text-2xl">🏢</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-100 rounded-lg">
              <div>
                <p className="font-medium text-brown-900">Ashanti Region Office</p>
                <p className="text-sm text-brown-700">Kumasi</p>
              </div>
              <span className="text-2xl">🏢</span>
            </div>
          </div>
        </Card>

        {/* Quick Contact */}
        <Card
          title={<span className="text-brown-900">Quick Contact 🚀</span>}
          className="border-brown-700 bg-yellow-50 shadow-lg"
        >
          <p className="text-brown-700 mb-4">
            Need immediate assistance? Try these options.
          </p>
          <div className="space-y-3">
            <Button
              className="w-full justify-start text-brown-800 border-brown-700 hover:bg-yellow-100"
            >
              <MessageSquare className="h-4 w-4 mr-2 text-brown-700" />
              WhatsApp: +233 24 567 8901
            </Button>
            <Button
              className="w-full justify-start text-brown-800 border-brown-700 hover:bg-yellow-100"
            >
              <Mail className="h-4 w-4 mr-2 text-brown-700" />
              Email: info@ipa.org
            </Button>
          </div>
        </Card>

      
      </section>
    </div>
  );
}
