'use client'
import { Button, Card } from 'antd'
import { motion } from 'framer-motion'

export default function TeamSection() {
  const team = [
    {
      name: 'Lord Offei-Darko',
      position: 'Youth Leader',
      image: '/images/team7.png'
    },
    {
      name: 'David Djangmah Tawiah',
      position: 'Team Member',
      image: '/images/team2.jpg'
    },
    {
      name: 'Gabriel Owusu Akyaw',
      position: 'Team Member',
      image: '/images/team3.jpg'
    },
    {
      name: 'Hilda Darko',
      position: 'Communications Officer',
      image: '/images/team6.png'
    }
  ]

  return (
    <section className="bg-yellow-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96">
        <img
          src="/images/teamwork4.jpg" // 🔥 general teamwork hero image
          alt="Teamwork"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold text-center"
            data-aos="fade-down"
          >
            Meet the People Behind Our Mission
          </motion.h1>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-4"
            data-aos="fade-up"
          >
            Our Dedicated Team
          </h2>
          <p
            className="text-lg text-yellow-700 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Passionate professionals driving impact across Ghana’s indigenous communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

{team.map((member, index) => (
  <motion.div
    key={member.name}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <Card
      hoverable
      className="rounded-xl overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow"
      cover={
        <motion.img
          alt={member.name}
          src={member.image}
          className="h-80 md:64 w-full object-cover"
          // 🔥 Framer Motion animation
          whileHover={{ scale: 1.05, y: -5 }} // scale & lift on hover
          whileTap={{ scale: 0.97 }}          // small press animation
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        />
      }
    >
      <div className="text-center">
        <h3 className="text-xl hover:text-yellow-500 font-semibold text-yellow-800">{member.name}</h3>
        <p className=" hover:text-yellow-500 text-yellow-700">{member.position}</p>
      </div>
    </Card>
  </motion.div>
))}

        </div>

        <div className="flex justify-center text-center mt-16" data-aos="fade-up">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <div
             
              className="
              w-80
                bg-yellow-500 
                hover:bg-yellow-600 
                text-white 
                rounded-xl 
                px-8 py-4 
                text-lg 
                font-semibold 
                shadow-[0_4px_20px_rgba(250,204,21,0.5)] 
                hover:shadow-[0_6px_30px_rgba(234,179,8,0.7)] 
                transition-all duration-300
              "
            >
              Meet Our Team
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
