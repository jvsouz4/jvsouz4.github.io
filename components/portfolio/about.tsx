"use client"

import { motion, useInView } from "framer-motion"
import { Blocks, Code2, ShieldCheck } from "lucide-react"
import { useRef } from "react"
import { useLanguage } from "@/components/language-provider"

const highlightIcons = [Code2, Blocks, ShieldCheck]

export function About() {
  const { copy } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">01.</span><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.about.heading}</h2><span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -18 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>
            <p className="text-xl leading-9 text-foreground md:text-2xl">{copy.about.paragraphs[0]}</p>
            <p className="mt-6 leading-8 text-muted-foreground">{copy.about.paragraphs[1]}</p>
            <p className="mt-4 leading-8 text-muted-foreground">{copy.about.paragraphs[2]}</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {copy.about.highlights.map((item, index) => {
              const Icon = highlightIcons[index]

              return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.18 + index * 0.1 }} className="group rounded-2xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-blue-950/10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><Icon className="h-5 w-5" /></div>
                <h3 className="font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
