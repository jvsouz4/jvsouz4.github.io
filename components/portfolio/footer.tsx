"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { copy } = useLanguage()

  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center md:flex-row md:px-8 md:text-left">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sm text-muted-foreground">© {new Date().getFullYear()} João Souza. {copy.footer.rights}</motion.p>
        <p className="text-sm text-muted-foreground">{copy.footer.madeWith} <span className="text-primary">Next.js</span> · Natal/RN</p>
      </div>
    </footer>
  )
}
