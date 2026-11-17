"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const { language, setLanguage, copy } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("topo")

  const navLinks = [
    { href: "#sobre", label: copy.nav.about },
    { href: "#skills", label: copy.nav.stack },
    { href: "#experiencia", label: copy.nav.experience },
    { href: "#projetos", label: copy.nav.work },
    { href: "#chat", label: copy.nav.agent },
    { href: "#contato", label: copy.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["topo", "sobre", "skills", "experiencia", "projetos", "chat", "contato"]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function selectSection(id: string) {
    setActiveSection(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -88, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 px-3 py-3 transition-all duration-300 md:px-5 ${isScrolled ? "bg-background/35 shadow-lg shadow-blue-950/5 backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav className="mx-auto grid h-[4.5rem] max-w-[90rem] grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-border/60 bg-background/55 px-3 shadow-lg shadow-blue-950/5 backdrop-blur-xl md:px-5">
        <motion.a
          href="#topo"
          onClick={() => selectSection("topo")}
          className="group flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-card/20 shadow-lg shadow-blue-950/10 transition-colors hover:border-primary/50 hover:bg-card/35"
          whileHover={{ y: -2 }}
          aria-label="João Souza — início"
        >
          <img src="/andrade-signature.svg" alt="Assinatura Andrade" className="h-9 w-9 object-contain opacity-90 transition-opacity group-hover:opacity-100" />
        </motion.a>

        <div className="hidden items-center justify-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => selectSection(link.href.slice(1))}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
              </a>
            )
          })}
        </div>

        <div className="hidden items-center justify-end gap-1.5 md:flex">
          <a href="/Joao-Souza-Curriculo.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-primary/45 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
            {copy.nav.resume}
          </a>
          <button
            type="button"
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="rounded-xl px-2.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            aria-label={copy.nav.languageLabel}
          >
            {copy.nav.language}
          </button>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-end gap-1.5 md:hidden">
          <button
            type="button"
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="rounded-lg px-2 py-2 text-xs font-bold text-primary"
            aria-label={copy.nav.languageLabel}
          >
            {copy.nav.language}
          </button>
          <ThemeToggle />
          <button onClick={() => setIsMobileMenuOpen((current) => !current)} className="rounded-lg p-2 text-foreground" aria-label="Alternar menu">
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-2 max-w-[90rem] rounded-2xl border border-border/70 bg-background/85 px-3 py-3 shadow-xl shadow-blue-950/10 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return <a key={link.href} href={link.href} className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`} onClick={() => selectSection(link.href.slice(1))}>{link.label}</a>
            })}
            <a href="/Joao-Souza-Curriculo.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-3 text-sm font-semibold text-primary hover:bg-primary/10">{copy.nav.resume}</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
