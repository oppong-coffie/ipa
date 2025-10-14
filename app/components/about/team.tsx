"use client";

import React, { useState } from "react";
import { Modal, Tabs, Button } from "antd";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  emoji: string;
  image: string;
  bio: string;
  details: string;
  impact: string;
  experience: string;
}


const teamMembers: TeamMember[] = [
  {
    name: "Lord Offei-Darko",
    role: "Youth Leader",
    emoji: "🧑‍🔬",
    image: "/images/team7.png",
    bio: "Environmental scientist and passionate fundraiser for rural community development.",
    details: `
      Offei Darko Lord is an environmental scientist, and a passionate fundraiser for philanthropic causes
      aimed at fostering rural community development. His expertise and unwavering passion makes him a
      formidable force in driving positive change in the complex nexus of human society and the environment.
    `,
    impact: `
      Spearheaded over 15 community-driven environmental programs, directly improving the livelihoods
      of more than 5,000 rural residents through clean water, tree planting, and climate-adaptive farming projects.
    `,
    experience: `
      8+ years of experience in environmental science, community development, and rural fundraising initiatives.
    `,
  },
  {
    name: "David D. Tawiah",
    role: "Team Member",
    emoji: "🐝",
    image: "/images/team21.jpg",
    bio: "Natural resource management expert and African Climate Innovation Challenge winner.",
    details: `
      David Djangmah Tawiah, a natural resource management expert, and 2022 winner of the African Climate Innovation Challenge,
      has dedicated over four years to the art of beekeeping and honey production as a sustainable livelihood strategy
      for rural communities. He has successfully led multiple rural community projects, honing his skills in community engagement.
    `,
    impact: `
      Trained over 300 rural farmers in sustainable beekeeping and honey production, increasing household incomes by 40% on average.
    `,
    experience: `
      6+ years of field experience in natural resource management, sustainable agriculture, and rural community engagement.
    `,
  },
  {
    name: "Gabriel O. Akyaw",
    role: "Team Member",
    emoji: "🧪",
    image: "/images/team31.jpg",
    bio: "Environmental scientist and researcher in sustainable agro-waste and textile production.",
    details: `
      Gabriel Owusu-Akyaw is an environmental scientist and researcher. His research work spans from carbon capture via
      sustainable agro-waste recovery to pioneering projects in environmentally friendly textile production.
      He is currently pursuing a Masters in Environmental Science at the Institute of Environmental and Sanitation Studies.
    `,
    impact: `
      Developed two innovative eco-textile prototypes using agro-waste, reducing carbon footprint by 25% in pilot communities.
    `,
    experience: `
      5+ years of research and project development in carbon capture, agro-waste recovery, and environmental science.
    `,
  },
  {
    name: "Hilda Darko",
    role: "Team Member",
    emoji: "👩‍💼",
    image: "/images/team6.png",
    bio: "Women, youth, and children advocate.",
    details: `
      Hilda Darko is a passionate advocate for women, youth, and children. She leads initiatives to empower marginalized groups
      and ensure equal access to education, healthcare, and community development programs.
    `,
    impact: `
      Established 10+ women-led community groups and youth mentorship programs, benefiting over 2,000 participants.
    `,
    experience: `
      7+ years of experience in advocacy, policy engagement, and community capacity-building programs.
    `,
  },
  {
    name: "Ekow Freeman",
    role: "Media & Storytelling Officer",
    emoji: "📸",
    image: "/images/team81.jpg",
    bio: "Creative media strategist and storytelling advocate, amplifying indigenous voices through impactful narratives.",
    details: `
      Ekow Freeman is a dynamic Media and Storytelling Officer dedicated to capturing and amplifying the stories of Ghana's indigenous communities. 
      With a strong background in multimedia production, journalism, and digital advocacy, Ekow specializes in creating powerful narratives 
      that drive awareness, inspire action, and highlight the resilience of marginalized groups. 
      He has led numerous campaigns combining photography, videography, and social media storytelling to showcase grassroots projects, 
      connect with global audiences, and secure support for community-driven initiatives. 
      Ekow&apos;s work ensures that the voices and experiences of indigenous people remain at the heart of sustainable development conversations.
    `,
    impact: `
      Produced 50+ high-impact storytelling campaigns and media documentaries that reached over 100,000 viewers globally, 
      boosting awareness and fundraising for rural initiatives.
    `,
    experience: `
      6+ years of experience in journalism, multimedia production, social media advocacy, and community storytelling.
    `,
  },
    {
      name: "Jacqueline Okine",
      role: "Knowledge and Impact Officer",
      emoji: "📚",
      image: "/resolve/jack.jpg",
      bio: "Jacqueline is dedicated to ensuring that knowledge translates into real impact for communities.",
      details:
        "As Knowledge and Impact Officer, Jacqueline leads monitoring, evaluation, and learning (MEL) initiatives, ensuring that every project captures lessons that guide future strategies. She facilitates evidence-based decision-making and champions the documentation of indigenous knowledge systems.",
      impact:
        "Jacqueline has been instrumental in developing community-driven knowledge hubs, where insights are shared between local leaders, youth, and international partners. Her work ensures that indigenous voices are elevated in development dialogues and that cultural heritage informs modern solutions. She emphasizes transparency, accountability, and sustainability in measuring project outcomes.",
      experience:
        "She brings a strong background in impact assessment, research methodology, and participatory development. Jacqueline has collaborated with NGOs, academic institutions, and grassroots organizations to design tools that track progress, assess resilience, and measure social change. Her hands-on experience with marginalized communities gives her a practical understanding of the challenges they face and the opportunities knowledge can unlock.",
    },
    {
      name: "Emmanuel Oppong Coffie",
      role: "Software Engineer",
      emoji: "💻",
      image: "/images/me2.png",
      bio: "Full-stack software engineer and digital innovator passionate about using technology to build impactful, sustainable, and inclusive solutions.",
      details: `
        Emmanuel Oppong Coffie is a software engineer with a strong focus on creating
        scalable, user-centered applications that empower communities and organizations.
        His work bridges the intersection of technology, climate innovation, and social impact —
        using data-driven systems to enhance collaboration, accessibility, and knowledge sharing.
      `,
      impact: `
        Designed and developed robust digital platforms supporting over 10,000 users across
        community and research networks. His contributions include building visualized
        softwares, optimizing API integrations, and enhancing UX for knowledge-based systems.
      `,
      experience: `
        3 years of experience in software engineering, with expertise in React, Next.js,
        TypeScript, and Larave. Skilled in cloud architecture, API design, building
        modern web applications and Ai Automations with performance and accessibility at the core.
      `
    }    
    
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

const openModal = (member: TeamMember) => setSelectedMember(member);
const closeModal = () => setSelectedMember(null);


  return (
    <div className="bg-white py-16 lg:py-0">
      {/* Header */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] drop-shadow-md mb-4">
          Meet Our Team 🌟
        </h1>
        <p className="text-lg md:text-xl text-[#5B3A1A] max-w-3xl mx-auto leading-relaxed">
          Our passionate leaders and experts empower indigenous communities in
          Ghana. Click &ldquo;Read More&ldquo; to explore their profiles, backgrounds, and
          impact.
        </p>
      </section>

      {/* Team Grid */}
      <section className="px-6 sm:px-8 lg:px-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="relative bg-white/30 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300 shadow-lg border-gradient-to-r from-[#FDDC5C] via-[#FEEBC3] to-[#FDDC5C]"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex items-center justify-center text-4xl bg-white/40 border-4 border-[#8B7D6B]">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#8B7D6B] mb-1 text-center">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-[#A67C52] text-center mb-2">
              {member.role}
            </p>
            <p className="text-[#5B3A1A] text-center mb-4">{member.bio}</p>
            <button
              onClick={() => openModal(member)}
              className="bg-[#8B7D6B] text-[#FDDC5C] px-5 py-2 rounded-full shadow hover:bg-[#A67C52] transition-all duration-300 font-semibold"
            >
              Read More
            </button>
          </div>
        ))}
      </section>

      {/* Modal */}
      <Modal
        open={!!selectedMember}
        onCancel={closeModal}
        footer={null}
        centered
        width={700}
        bodyStyle={{
          backgroundColor: "#FFFDF5",
          borderRadius: "20px",
          padding: "0rem",
        }}
      >
        {selectedMember && (
          <div className="text-center">
            <div className="md:w-40 md:h-40 mx-auto overflow-hidden mb-1 border-[#8B7D6B]">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-3xl font-bold text-[#8B7D6B] mb-1">
              {selectedMember.name}
            </h2>
            <p className="text-sm font-semibold text-[#A67C52] mb-4">
              {selectedMember.role}
            </p>

            <Tabs defaultActiveKey="1" centered className="text-left">
              <Tabs.TabPane tab="Bio" key="1">
                <p className="text-[#5B3A1A] leading-relaxed">
                  {selectedMember.details}
                </p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Experience" key="2">
                <p className="text-[#5B3A1A] leading-relaxed">
                  {/* Add detailed experience info here */}
                  {selectedMember.experience ||
                    "Experience details coming soon."}
                </p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Impact" key="3">
                <p className="text-[#5B3A1A] leading-relaxed">
                  {/* Add detailed impact info here */}
                  {selectedMember.impact || "Impact details coming soon."}
                </p>
              </Tabs.TabPane>
            </Tabs>

            <Button
              onClick={closeModal}
              className="mt-6 bg-[#8B7D6B] text-[#FDDC5C] px-6 py-2 rounded-full hover:bg-[#A67C52] font-semibold"
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}
