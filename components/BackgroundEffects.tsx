"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface BackgroundEffectsProps {
  isDarkMode: boolean
}

export default function BackgroundEffects({ isDarkMode }: BackgroundEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 50
    const colors = isDarkMode ? ["#60A5FA", "#3B82F6", "#2563EB"] : ["#BFDBFE", "#93C5FD", "#60A5FA"]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        if (canvas) {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        } else {
          this.x = 0
          this.y = 0
        }
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1

        if (canvas && (this.x < 0 || this.x > canvas.width)) this.speedX *= -1
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.speedY *= -1
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (ctx) {
        if (canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
        for (let i = 0; i < particles.length; i++) {
          particles[i].update()
          particles[i].draw()
        }
        requestAnimationFrame(animate)
      }
    }

    init()
    animate()

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
            ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
        }`}
      />
      <motion.div
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />
      </motion.div>
    </>
  )
}

