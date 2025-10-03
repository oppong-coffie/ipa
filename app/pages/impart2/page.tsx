"use client";


export default function Impart2Page() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
           {/* 🌍 Hero Section */}
           <section className="bg-gradient-to-br from-[#EDEAE3] to-[#F5F0E5] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-lg py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#D1A054] mb-6 drop-shadow-sm">
            🌍 Our Global Impact
          </h1>
          <p className="text-xl text-[#8B7D6B] leading-relaxed">
            Empowering communities with technology, knowledge, and innovation.
          </p>
        </div>
      </section>

      {/* 🌍 Impact Summary Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-10">
            🌍 Our Global Impact at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 📚 Education */}
            <div className="bg-emerald-50 rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                📚 Education
              </h3>
              <ul className="space-y-2 text-emerald-700">
                <li>🎓 25,000+ students trained</li>
                <li>👩🏽‍🏫 300 teachers supported</li>
                <li>💻 25 solar-powered labs</li>
              </ul>
            </div>

            {/* 🌱 Sustainability */}
            <div className="bg-green-50 rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-900 mb-3">
                🌱 Sustainability
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>🌳 50,000 trees planted</li>
                <li>♻️ 2,000 households recycling</li>
                <li>💧 10,000L clean water monthly</li>
              </ul>
            </div>

            {/* 💼 Business Empowerment */}
            <div className="bg-indigo-50 rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                💼 Business Empowerment
              </h3>
              <ul className="space-y-2 text-indigo-700">
                <li>📈 500 SMEs onboarded</li>
                <li>👩🏾‍💼 200 women-led startups funded</li>
                <li>🚜 1,200 farmers connected</li>
              </ul>
            </div>

            {/* 🤝 Community Growth */}
            <div className="bg-yellow-50 rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                🤝 Community Growth
              </h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✌️ 5,000+ youth in peacebuilding</li>
                <li>💵 1,500 women supported</li>
                <li>🔆 3,200 families with solar power</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}












