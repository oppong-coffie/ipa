"use client"

import { Card, Button } from "antd"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF5]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Indigenous People Alliance 🌍
            </h1>
            <p className="text-xl text-white">
              Discover our story, mission, and the passionate team working to empower Ghana's indigenous communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5B3A1A] mb-6">Our Story 📖</h2>
              <div className="space-y-4 text-[#3B2A1A]">
                <p>
                  Founded in 2020 by a group of passionate young indigenous leaders, the Indigenous People Alliance
                  emerged from a deep understanding of the challenges facing Ghana's indigenous communities.
                </p>
                <p>
                  Our founders witnessed firsthand how climate change, economic marginalization, and cultural erosion
                  were threatening the very fabric of their communities. They decided to take action, combining
                  traditional wisdom with modern approaches to create sustainable solutions.
                </p>
                <p>
                  Today, IPA stands as a beacon of hope, bridging the gap between indigenous knowledge and contemporary
                  development practices to build resilient, thriving communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-yellow-200 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🏘️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card bordered={true} className="border-[#E2B84D] shadow-lg text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#5B3A1A] mb-4">Our Mission</h3>
              <p className="text-[#3B2A1A]">
                To empower marginalized indigenous communities through sustainable development, cultural preservation,
                and climate resilience initiatives that honor traditional wisdom while embracing innovation.
              </p>
            </Card>

            <Card bordered={true} className="border-[#E2B84D] shadow-lg text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👁️</span>
              </div>
              <h3 className="text-xl font-bold text-[#5B3A1A] mb-4">Our Vision</h3>
              <p className="text-[#3B2A1A]">
                A future where indigenous communities in Ghana thrive with dignity, their cultures are celebrated,
                their voices are heard, and their traditional knowledge contributes to global sustainability.
              </p>
            </Card>

            <Card bordered={true} className="border-[#E2B84D] shadow-lg text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-xl font-bold text-[#5B3A1A] mb-4">Our Values</h3>
              <div className="space-y-2">
                {["Respect 🙏", "Integrity ✨", "Collaboration 🤝", "Innovation 💡", "Sustainability 🌱"].map((v) => (
                  <div key={v} className="w-full bg-[#5B3A1A] text-yellow-50 py-2 rounded-md font-medium">
                    {v}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#5B3A1A] text-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission 🚀</h2>
          <p className="text-xl mb-8">
            Whether you're an individual, organization, or community leader, there are many ways to support our work and
            make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" className="bg-yellow-500 text-[#5B3A1A] hover:bg-yellow-600">
              Become a Volunteer 🙋‍♀️
            </Button>
            <Button
              size="large"
              className="border border-yellow-200 text-yellow-50 hover:bg-yellow-100 hover:text-[#5B3A1A]"
            >
              Partner With Us 🤝
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5B3A1A] text-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🌍</span>
                </div>
                <span className="font-bold text-lg">Indigenous People Alliance</span>
              </div>
              <p>Empowering communities, preserving culture, building futures.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About Us", "Our Projects", "Resources", "Contact"].map((link, i) => (
                  <li key={i}>
                    <a href={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-yellow-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-300">Facebook 📘</a></li>
                <li><a href="#" className="hover:text-yellow-300">Twitter 🐦</a></li>
                <li><a href="#" className="hover:text-yellow-300">Instagram 📸</a></li>
                <li><a href="#" className="hover:text-yellow-300">LinkedIn 💼</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p>📍 Accra, Ghana</p>
                <p>📧 info@ipa-ghana.org</p>
                <p>📞 +233 XX XXX XXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-200 mt-8 pt-8 text-center">
            <p>&copy; 2025 Indigenous People Alliance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
