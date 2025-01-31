"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LightCursorProps {
  isDarkMode: boolean
}

export default function LightCursor({ isDarkMode }: LightCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (!isDarkMode) {
      window.addEventListener("mousemove", updateMousePosition)
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [isDarkMode])

  if (isDarkMode) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-6 w-6 rounded-full border-2 border-blue-500"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

