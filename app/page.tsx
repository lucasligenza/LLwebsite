import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  )
} 
