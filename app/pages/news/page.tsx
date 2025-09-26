"use client"

import React from "react"
import { Search } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 📰 Hero Section */}
      <section className="bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-500 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates 📰</h1>
            <p className="text-xl text-yellow-100">
              Stay informed about our latest projects, community impact stories, and important developments.
            </p>
          </div>
        </div>
      </section>

      {/* 🔍 Search + Filters */}
      <section className="py-8 bg-neutral-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-600 h-4 w-4" />
              <input
                placeholder="Search news and articles..."
                className="pl-10 w-full rounded-md bg-white text-neutral-800 border border-neutral-300 focus:ring-2 focus:ring-amber-500 py-2"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded cursor-pointer hover:bg-yellow-300 text-sm font-medium">All Categories</span>
              <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded cursor-pointer hover:bg-yellow-300 text-sm font-medium">Project Updates 🚀</span>
              <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded cursor-pointer hover:bg-yellow-300 text-sm font-medium">Community Stories 🏘️</span>
              <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded cursor-pointer hover:bg-yellow-300 text-sm font-medium">Press Releases 📢</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🗂 News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article
                key={item}
                className="bg-white border border-neutral-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="h-40 bg-amber-100 rounded-t-xl flex items-center justify-center text-5xl">
                  📰
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="px-2 py-1 bg-amber-200 text-amber-900 rounded text-xs w-max mb-2">Category</span>
                  <h2 className="text-xl font-bold text-neutral-900 mb-2">
                    Exciting News Headline {item}
                  </h2>
                  <p className="text-neutral-700 flex-1">
                    A short description of this news item. Clear, dark text for readability. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 📩 Newsletter */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter 📩</h2>
          <p className="mb-6 text-yellow-100">
            Get updates directly to your inbox about our latest news and projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md bg-white text-neutral-800 border-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md font-semibold">
              Subscribe ✅
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
