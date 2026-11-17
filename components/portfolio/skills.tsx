"use client"

import { motion, useInView } from "framer-motion"
import { Cloud, Database, GitBranch, Server, Terminal, Wrench } from "lucide-react"
import { useRef } from "react"
import { useLanguage } from "@/components/language-provider"

const skillCategories = [
  { icon: Terminal },
  { icon: Database },
  { icon: Server },
  { icon: Cloud },
  { icon: GitBranch },
  { icon: Wrench },
]

export function Skills() {
  const { copy } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="border-y border-border bg-secondary/35 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">02.</span><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.skills.heading}</h2><span className="h-px flex-1 bg-border" />
        </motion.div>
        <p className="mb-10 max-w-2xl text-lg leading-8 text-muted-foreground">{copy.skills.description}</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div key={copy.skills.categories[index].title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.07 }} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
              <div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><category.icon className="h-5 w-5" /></div><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{copy.skills.categories[index].title}</h3><p className="mt-1 text-sm text-muted-foreground">{copy.skills.categories[index].description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{copy.skills.categories[index].skills.map((skill) => <span key={skill} className="rounded-md border border-border bg-secondary px-2.5 py-1.5 font-mono text-xs text-secondary-foreground">{skill}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
