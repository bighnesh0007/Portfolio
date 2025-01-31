import Image from "next/image"
import { motion } from "framer-motion"

interface PersonalTouchProps {
  isDarkMode: boolean
}

export default function PersonalTouch({ isDarkMode }: PersonalTouchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mt-12 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } rounded-xl shadow-2xl p-8 max-w-4xl mx-auto`}
    >
      <h3 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
        A Bit More About Me
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-48 h-48 md:w-64 md:h-64"
        >
          <Image
            src="/p3.jpg"
            alt="Your Name"
            fill
            className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
        </motion.div>
        <div className="flex-1">
          <h4 className="text-2xl font-semibold mb-4 text-purple-400">Hobbies & Interests</h4>
          <ul className="list-disc list-inside mb-6 space-y-2">
            {["Photography", "Hiking", "Playing guitar"].map((hobby, index) => (
              <motion.li
                key={hobby}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="text-lg"
              >
                {hobby}
              </motion.li>
            ))}
          </ul>
          <h4 className="text-2xl font-semibold mb-4 text-purple-400">Fun Facts</h4>
          <ul className="list-disc list-inside space-y-2">
            {[
              "I've visited 20 countries",
              "I can solve a Rubik's cube in under 2 minutes",
              "I once won a hot dog eating contest",
            ].map((fact, index) => (
              <motion.li
                key={fact}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 4) }}
                className="text-lg"
              >
                {fact}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}