"use client";
import { Card } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function TeamSection() {
  const team = [
    {
      name: "Lord Offei-Darko",
      position: "Youth Leader",
      image: "/images/team7.png",
    },
    {
      name: "David D. Tawiah",
      position: "Team Member",
      image: "/images/team21.jpg",
    },
    {
      name: "Gabriel O. Akyaw",
      position: "Team Member",
      image: "/images/team31.jpg",
    },
    {
      name: "Hilda Darko",
      position: "Communications Officer",
      image: "/images/team6.png",
    },
    {
      name: "Ekow Freeman",
      position: "Media officer",
      image: "/images/team8.jpg",
    },
    {
      name: "Jacqueline Okine",
      position: "knowledge and impact officer",
      image: "/resolve/jack.jpg",
    },
    {
      name: "Emmanuel Oppong Oppong",
      position: "Software Engineer",
      image: "/images/me2.png",
    },
  ];

  return (
    <section className="bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96">
        <Image
          src="/images/teamwork41.jpg"
          alt="Teamwork"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-yellow-900/40 flex items-center justify-center">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-900 mb-4"
            data-aos="fade-up"
          >
            Our Dedicated Team
          </h2>
          <p
            className="text-lg text-yellow-800 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Passionate professionals driving impact across Ghana&opos;s
            indigenous communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                hoverable
                className="
                  rounded-xl 
                  overflow-hidden 
                  border-none 
                  shadow-md 
                  hover:shadow-xl 
                  transition-shadow
                "
                cover={
                  <MotionImage
                    alt={member.name}
                    src={member.image}
                    width={400}
                    height={320}
                    className="h-80 md:h-64 w-full object-cover"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                }
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-yellow-900 hover:text-yellow-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-yellow-800 hover:text-yellow-600 transition-colors">
                    {member.position}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div
          className="flex justify-center text-center mt-16"
          data-aos="fade-up"
        >
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
                        <a href="/pages/about">

            <div
              className="
    w-80
    bg-[#8B7D6B] 
    hover:bg-[#A67C52] 
    text-[#F5EBDD] 
    rounded-xl 
    px-8 py-4 
    text-lg 
    font-semibold 
    shadow-[0_4px_20px_rgba(146,64,14,0.5)] 
    hover:shadow-[0_6px_30px_rgba(202,138,4,0.7)] 
    transition-all duration-300
  "
            >
              Meet Our Team
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
