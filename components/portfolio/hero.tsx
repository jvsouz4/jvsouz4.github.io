"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { copy } = useLanguage()

  return (
    <section id="topo" className="relative flex min-h-[42rem] items-center overflow-hidden pb-20 pt-32 md:min-h-screen md:pb-24 md:pt-28">
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="absolute -left-28 top-32 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8 lg:gap-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" />
            {copy.hero.eyebrow}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground md:text-7xl lg:text-8xl">
            João <span className="text-primary">Souza</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-7 max-w-xl text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            {copy.hero.role} <span className="text-accent">{copy.hero.speciality}</span>
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            {copy.hero.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-6 shadow-xl shadow-blue-600/20">
              <a href="#contato">{copy.hero.contact} <ArrowUpRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary/30 bg-transparent px-6 hover:border-primary hover:bg-primary/10">
              <a href="/Joao-Souza-Curriculo.pdf" target="_blank" rel="noopener noreferrer">{copy.hero.resume} <ArrowDown className="h-4 w-4" /></a>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />{copy.hero.location}</span>
            <a className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href="mailto:joaovsouz@gmail.com"><Mail className="h-4 w-4 text-accent" />joaovsouz@gmail.com</a>
            <a className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href="https://www.linkedin.com/in/jvsouz4" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4 text-accent" />LinkedIn</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem] md:justify-self-end md:max-w-[20rem] lg:max-w-[22rem]">
          <div className="absolute -inset-5 rounded-[2rem] border border-primary/15 bg-primary/5" />
          <div className="absolute -right-3 -top-3 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/35 bg-background/70 shadow-2xl shadow-blue-500/15 backdrop-blur-sm"><img src="/andrade-signature.svg" alt="" className="h-12 w-12 object-contain opacity-90" /></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-primary/40 bg-[#081227] shadow-2xl shadow-blue-950/50">
            <img src="/images/joao-souza-2026.png" alt={copy.hero.photoAlt} className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">João Souza</p>
                <p className="mt-1 text-sm text-white/80">{copy.hero.photoRole}</p>
              </div>
              <BriefcaseBusiness className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-border bg-card/85 p-4 shadow-xl backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{copy.hero.stackLabel}</p>
            <p className="mt-2 font-mono text-sm text-foreground"><span className="text-primary">Go</span> · PHP · PostgreSQL</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
