"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface EnhancedBackgroundProps {
  isDarkMode: boolean
}

export default function EnhancedBackground({ isDarkMode }: EnhancedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Star[] = []
    const starCount = 200

    class Star {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 2
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (canvas && (this.x < 0 || this.x > canvas.width)) this.speedX *= -1
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.speedY *= -1
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = isDarkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.5)"
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function createStars() {
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star())
      }
    }

    function animateStars() {
      if (ctx) {
        if (canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
        for (let i = 0; i < stars.length; i++) {
          stars[i].update()
          stars[i].draw()
        }
        requestAnimationFrame(animateStars)
      }
    }

    createStars()
    animateStars()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isDarkMode])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ opacity: 0.5 }} />
      <div
        className={`fixed inset-0 -z-20 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
      />
      <motion.div
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]" />
      </motion.div>
    </>
  )
}

