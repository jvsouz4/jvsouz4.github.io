"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { copy } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <span className="mb-5 block font-mono text-sm text-accent">06. {copy.contact.next}</span>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-6xl">{copy.contact.heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{copy.contact.description}</p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-full px-6 shadow-xl shadow-blue-600/20"><a href="mailto:joaovsouz@gmail.com"><Mail className="h-4 w-4" />{copy.contact.email}</a></Button>
          <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary/30 bg-transparent px-6 hover:border-primary hover:bg-primary/10"><a href="/Joao-Souza-Curriculo.pdf" target="_blank" rel="noopener noreferrer">{copy.contact.resume} <ArrowUpRight className="h-4 w-4" /></a></Button>
        </div>

        <div className="mx-auto mt-12 grid max-w-xl gap-3 text-left sm:grid-cols-3">
          <a href="mailto:joaovsouz@gmail.com" className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/50"><Mail className="h-4 w-4 text-accent" /><p className="mt-3 text-xs text-muted-foreground">Email</p><p className="mt-1 truncate text-sm text-foreground">joaovsouz@gmail.com</p></a>
          <a href="tel:+5586986033241" className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/50"><Phone className="h-4 w-4 text-accent" /><p className="mt-3 text-xs text-muted-foreground">{copy.contact.phone}</p><p className="mt-1 text-sm text-foreground">(84) 9 8603-3241</p></a>
          <a href="https://www.linkedin.com/in/jvsouz4" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/50"><Linkedin className="h-4 w-4 text-accent" /><p className="mt-3 text-xs text-muted-foreground">LinkedIn</p><p className="mt-1 text-sm text-foreground">/in/jvsouz4</p></a>
        </div>
      </motion.div>
    </section>
  )
}
