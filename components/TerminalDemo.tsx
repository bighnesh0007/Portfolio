"use client"

import { motion } from "framer-motion"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal"
import { useInView } from "@/hooks/useInView"

export function TerminalDemo() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-3xl mx-auto p-8"
    >
      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-xl blur-xl animate-gradient-xy" />

      {/* Terminal Container */}
      <div className="relative bg-gray-900/95 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-gray-400 text-sm">~/shadcn-setup</div>
          <div className="w-4 h-4" /> {/* Spacer for flex justify-between */}
        </div>

        {/* Terminal Content */}
        <Terminal className="bg-transparent">
          {isInView && (
            <>
              <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

              <AnimatedSpan delay={1500} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}>
                    ✔
                  </motion.span>
                  Preflight checks.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }}>
                    ✔
                  </motion.span>
                  Verifying framework. Found Next.js.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 }}>
                    ✔
                  </motion.span>
                  Validating Tailwind CSS.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={3000} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3 }}>
                    ✔
                  </motion.span>
                  Validating import alias.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3.5 }}>
                    ✔
                  </motion.span>
                  Writing components.json.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4 }}>
                    ✔
                  </motion.span>
                  Checking registry.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.5 }}>
                    ✔
                  </motion.span>
                  Updating tailwind.config.ts
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={5000} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 5 }}>
                    ✔
                  </motion.span>
                  Updating app/globals.css
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={5500} className="text-green-500">
                <span className="flex items-center gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 5.5 }}>
                    ✔
                  </motion.span>
                  Installing dependencies.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={6000} className="text-blue-500">
                <span className="flex flex-col gap-1">
                  <span>ℹ Updated 1 file:</span>
                  <span className="pl-6">- lib/utils.ts</span>
                </span>
              </AnimatedSpan>

              <TypingAnimation delay={6500} className="text-green-400">
                Success! Project initialization completed.
              </TypingAnimation>

              <TypingAnimation delay={7000} className="text-gray-400">
                You may now add components.
              </TypingAnimation>
            </>
          )}
        </Terminal>
      </div>

      {/* Additional Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-xl blur-2xl -z-10" />
    </motion.div>
  )
}

