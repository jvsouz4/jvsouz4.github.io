"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react"
import { useRef } from "react"
import { useLanguage } from "@/components/language-provider"

export function Experience() {
  const { copy } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiencia" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">03.</span><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.experience.heading}</h2><span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -18 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>
            <div className="sticky top-28">
              <div className="mb-5 flex items-center gap-2 text-sm font-mono text-accent"><CalendarDays className="h-4 w-4" /> {copy.experience.date}</div>
              <h3 className="text-3xl font-semibold tracking-tight text-foreground">{copy.experience.company}</h3>
              <p className="mt-2 text-lg text-primary">{copy.experience.role}</p>
              <p className="mt-5 leading-8 text-muted-foreground">{copy.experience.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">{["Golang", "PHP", "PostgreSQL", "AWS", "Docker"].map((tech) => <span key={tech} className="rounded-full border border-primary/25 px-3 py-1.5 font-mono text-xs text-primary">{tech}</span>)}</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-blue-950/5 md:p-9">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{copy.experience.evolution}</p>
            <div className="-mx-1 mb-9 overflow-x-auto px-1 pb-2">
              <div className="flex min-w-max items-center gap-2">
                {copy.experience.progression.map((role, index) => <div key={role} className="flex shrink-0 items-center gap-2"><span className={`rounded-lg px-3 py-2 text-sm ${index === copy.experience.progression.length - 1 ? "bg-primary font-medium text-white" : "bg-secondary text-secondary-foreground"}`}>{role}</span>{index < copy.experience.progression.length - 1 && <span className="text-border">→</span>}</div>)}
              </div>
            </div>
            <div className="space-y-4 border-t border-border pt-7">{copy.experience.responsibilities.map((item) => <div key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />{item}</div>)}</div>
            <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent">{copy.experience.callToAction} <ArrowUpRight className="h-4 w-4" /></a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/60 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{copy.experience.education}</p>
            <div className="mt-5 space-y-4 text-sm"><div><p className="font-medium text-foreground">{copy.experience.degree}</p><p className="mt-1 text-muted-foreground">{copy.experience.degreeInfo}</p></div><div><p className="font-medium text-foreground">{copy.experience.bachelor}</p><p className="mt-1 text-muted-foreground">{copy.experience.bachelorInfo}</p></div></div>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{copy.experience.courses}</p>
            <div className="mt-5 flex flex-wrap gap-2">{["Linux · 32h", "DevOps · 58h", "SQL com PostgreSQL · 46h", "PHP · 50h"].map((course) => <span key={course} className="rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground">{course}</span>)}</div><p className="mt-4 text-xs text-muted-foreground">{copy.experience.courseNote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
