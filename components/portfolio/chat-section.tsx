"use client"

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Loader2, MessageSquare, Send, Sparkles } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"

type ChatMessage = {
  role: "assistant" | "user"
  content: string
}

export function ChatSection() {
  const { language, copy } = useLanguage()
  const isStaticDeployment = process.env.NEXT_PUBLIC_STATIC_DEPLOY === "true"
  const officialSiteUrl = process.env.NEXT_PUBLIC_OFFICIAL_SITE_URL ?? "https://jvsouz4.vercel.app"
  const ref = useRef(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [messages, setMessages] = useState<ChatMessage[]>(() => [{ role: "assistant", content: copy.chat.welcome }])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMessages([{ role: "assistant", content: copy.chat.welcome }])
    setInput("")
  }, [language, copy.chat.welcome])

  useEffect(() => {
    const container = messagesContainerRef.current

    if (!container) {
      return
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    })
  }, [messages])

  async function sendMessage(prompt?: string) {
    const content = (prompt ?? input).trim()

    if (!content || isLoading) {
      return
    }

    const nextUserMessage: ChatMessage = { role: "user", content }
    const nextMessages = [...messages, nextUserMessage]

    setMessages(nextMessages)
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          history: nextMessages.slice(-8),
          language,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Nao foi possivel obter uma resposta agora.")
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply,
        },
      ])
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : copy.chat.unavailable

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: fallbackMessage,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void sendMessage()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      void sendMessage()
    }
  }

  function renderMessageContent(message: ChatMessage) {
    if (message.role === "user") {
      return <p className="whitespace-pre-wrap">{message.content}</p>
    }

    return (
      <div className="chat-markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
      </div>
    )
  }

  return (
    <section id="chat" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-sm text-accent">05.</span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">{copy.chat.heading}</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-card p-6 md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.16),transparent_38%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-sm text-primary mb-5">
                  <Sparkles className="h-4 w-4" />
                  {copy.chat.badge}
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4 text-balance">
                  {copy.chat.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {copy.chat.description}
                </p>

                <div className="rounded-2xl border border-border bg-background/80 p-4 mb-6">
                  <p className="mb-3 font-mono text-sm text-primary">{copy.chat.suggestions}</p>
                  <div className="flex flex-wrap gap-2">
                    {copy.chat.starterPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => void sendMessage(prompt)}
                        className="rounded-full border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background/60 p-4">
                  <div className="rounded-full bg-primary/12 p-2 text-primary">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {copy.chat.note}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-border bg-card/95 shadow-sm"
            >
              <div className="border-b border-border px-5 py-4">
                  <p className="font-mono text-sm text-primary">{copy.chat.panel}</p>
                <h3 className="text-lg font-semibold text-foreground">
                  {copy.chat.panelTitle}
                </h3>
              </div>

              {isStaticDeployment && (
                <div className="mx-4 mt-4 rounded-2xl border border-primary/25 bg-primary/8 p-4 md:mx-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy.chat.staticNotice}</p>
                  <a
                    href={officialSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {copy.chat.officialSite}
                  </a>
                </div>
              )}

              <div ref={messagesContainerRef} className="h-[28rem] overflow-y-auto px-4 py-4 md:px-5">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "border border-border bg-background text-foreground"
                        }`}
                      >
                        {renderMessageContent(message)}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {copy.chat.thinking}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              <form onSubmit={handleSubmit} className="border-t border-border p-4 md:p-5">
                <div className="space-y-3">
                  <Textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={copy.chat.placeholder}
                    className="min-h-28 resize-none"
                    disabled={isStaticDeployment || isLoading}
                  />

                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">
                      {copy.chat.inputHint}
                    </p>
                    <Button type="submit" disabled={isStaticDeployment || isLoading || !input.trim()}>
                      {copy.chat.send}
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
