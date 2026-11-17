import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { ChatSection } from "@/components/portfolio/chat-section"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="site-shell min-h-screen overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ChatSection />
      <Contact />
      <Footer />
    </main>
  )
}
