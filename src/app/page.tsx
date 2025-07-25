import { AboutSection } from '@components/sections/about'
import { ContactSection } from '@components/sections/contact'
import { HeroSection } from '@components/sections/heroPage'
import { ProjectsSection } from '@components/sections/projects'

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
