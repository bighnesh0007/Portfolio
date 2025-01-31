"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function TextTransition({ children, className = "", delay = 0 }: TextTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

