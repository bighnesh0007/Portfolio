"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
}

export default function ScrollAnimation({ children }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

