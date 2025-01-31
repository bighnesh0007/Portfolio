"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const PROJECTS = [
  {
    name: "AgriVision Landing Page",
    image: "/roll/3.png",
    url: "https://agrivision-landing-page.vercel.app/",
  },
  {
    name: "Agrivision ",
    image: "/roll/4.png",
    url: "https://demo-eight-rose.vercel.app/",
  },
  {
    name: "MediCheck",
    image: "/roll/5.png",
    url: "https://med-check-weld.vercel.app/",
  },
  {
    name: "Api Manager",
    image: "/roll/6.png",
    url: "https://amps.vercel.app/",
  },
  {
    name: "Chatbot",
    image: "/roll/7.png",
    url: "https://chatbot-beryl-nu.vercel.app/",
  },
  {
    name: "gRPC Connection",
    image: "/roll/2.png",
    url: "https://sp-self.vercel.app/",
  },
  {
    name: "ISDT hackthon Project",
    image: "/roll/1.png",
    url: "https://isdt-hackthon.vercel.app/",
  },
  {
    name: "CricketHub",
    image: "/roll/8.png",
    url: "https://crickethub-three.vercel.app/",
  },
]

const RollingGallery = ({ autoplay = false, pauseOnHover = false, projects = PROJECTS }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640)
    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 3D geometry
  const cylinderWidth = isScreenSizeSm ? 1600 : 2400
  const faceCount = projects.length
  const faceWidth = (cylinderWidth / faceCount) * 1.8 // Increased multiplier for more space
  const radius = cylinderWidth / (2 * Math.PI)

  // Framer Motion
  const dragFactor = 0.05
  const rotation = useMotionValue(0)
  const controls = useAnimation()

  // Convert rotation -> 3D transform
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`)

  const startInfiniteSpin = useCallback(
    (startAngle: number) => {
      controls.start({
        rotateY: [startAngle, startAngle - 360],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    },
    [controls],
  )

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get()
      startInfiniteSpin(currentAngle)
    } else {
      controls.stop()
    }
  }, [autoplay, controls, rotation, startInfiniteSpin])

  const handleUpdate = (latest: { rotateY?: number }) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY)
    }
  }

  const handleDrag = (_: never, info: { offset: { x: number }; velocity: { x: number } }) => {
    controls.stop()
    rotation.set(rotation.get() + info.offset.x * dragFactor)
  }

  const handleDragEnd = (_: never, info: { offset: { x: number }; velocity: { x: number } }) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor
    rotation.set(finalAngle)

    if (autoplay) {
      startInfiniteSpin(finalAngle)
    }
  }

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop()
    }
  }
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get()
      startInfiniteSpin(currentAngle)
    }
  }

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div
        className="absolute top-0 left-0 h-full w-24 z-10"
        style={{
          background: "linear-gradient(to left, rgba(17,24,39,0) 0%, rgb(17,24,39) 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-24 z-10"
        style={{
          background: "linear-gradient(to right, rgba(17,24,39,0) 0%, rgb(17,24,39) 100%)",
        }}
      />

      <div className="flex h-full items-center justify-center [perspective:1600px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[12%] [backface-visibility:hidden] md:p-[10%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <div className="w-64 h-48 relative group transition-transform duration-300 ease-in-out transform hover:scale-105">
                  {/* Outer glow container */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Inner border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-1">
                    {/* Image container */}
                    <div className="relative w-full h-full overflow-hidden bg-white rounded-md">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end justify-center">
                        <p className="text-white text-lg font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default RollingGallery

