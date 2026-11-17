"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Banknote, Boxes, Workflow } from "lucide-react"
import { useRef } from "react"
import { useLanguage } from "@/components/language-provider"

const areas = [
  { icon: Banknote, number: "01", tags: ["APIs", "PostgreSQL", "JWT"] },
  { icon: Boxes, number: "02", tags: ["Golang", "Docker", "AWS"] },
  { icon: Workflow, number: "03", tags: ["PHP", "Node.js", "REST"] },
]

export function Projects() {
  const { copy } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projetos" className="border-y border-border bg-secondary/35 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">04.</span><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.projects.heading}</h2><span className="h-px flex-1 bg-border" />
        </motion.div>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><p className="max-w-2xl text-lg leading-8 text-muted-foreground">{copy.projects.description}</p><a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent">{copy.projects.contact} <ArrowUpRight className="h-4 w-4" /></a></div>
        <div className="grid gap-4 lg:grid-cols-3">
          {areas.map((area, index) => (
            <motion.article key={area.number} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-blue-950/10">
              <div className="absolute right-6 top-5 font-mono text-5xl font-semibold text-primary/10 transition-colors group-hover:text-primary/20">{area.number}</div>
              <div className="relative"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><area.icon className="h-6 w-6" /></div><h3 className="mt-8 text-xl font-semibold text-foreground">{copy.projects.areas[index].title}</h3><p className="mt-3 min-h-24 leading-7 text-muted-foreground">{copy.projects.areas[index].text}</p><div className="mt-6 flex flex-wrap gap-2">{area.tags.map((tag) => <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">{tag}</span>)}</div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
