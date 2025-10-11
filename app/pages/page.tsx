import { VideoHero } from "../components/video-hero"
import { MissionSection } from "../components/mission-section"
import { ImpactSection } from "../components/impact-section"
import TeamSection from "../components/TeamSection"
import Testimonials from "../components/Testimonials"
import Partners from "../components/partners"
import MapLocation from "../components/map"
import FAQ from "../components/faq"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <MissionSection />
      <TeamSection />
      <ImpactSection />
      {/* < Testimonials /> */}
      < Partners />
      < FAQ />
      < MapLocation />

    </main> 
  )
}