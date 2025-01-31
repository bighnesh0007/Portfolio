"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { SnowflakeIcon as Confetti } from "lucide-react"
import { motion } from "framer-motion"

export default function GameElement() {
  const [score, setScore] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          setGameOver(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [score, highScore])

  const handleClick = () => {
    if (!gameOver) {
      setScore(score + 1)
      if (score === 9) {
        setShowEasterEgg(true)
      }
    }
  }

  const resetGame = () => {
    setScore(0)
    setShowEasterEgg(false)
    setTimeLeft(30)
    setGameOver(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-md mx-auto p-8 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl shadow-2xl"
    >
      <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
        Click Frenzy
      </h3>
      <p className="mb-6 text-purple-300">Click the button as many times as you can in 30 seconds!</p>
      <Progress value={(timeLeft / 30) * 100} className="mb-6 bg-purple-700" />
      <p className="text-sm text-purple-400 mb-6">Time left: {timeLeft} seconds</p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={handleClick}
          className="mb-6 text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700 transition-colors text-white"
          disabled={gameOver}
        >
          Click me!
        </Button>
      </motion.div>
      <p className="text-2xl font-bold mb-4 text-purple-200">Score: {score}</p>
      <p className="text-md font-semibold mb-6 text-purple-300">High Score: {highScore}</p>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg"
        >
          <h4 className="text-2xl font-bold mb-2 text-purple-100">Congratulations!</h4>
          <p className="text-purple-200">You&quot;ve unlocked the secret message: &quot;You&apos;re awesome!&quot;</p>
          <Confetti className="w-12 h-12 mx-auto mt-4 text-purple-300" />
        </motion.div>
      )}
      {gameOver && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-xl font-bold mb-4 text-purple-200">Game Over!</p>
          <Button
            onClick={resetGame}
            className="bg-purple-600 hover:bg-purple-700 transition-colors text-white"
          >
            Play Again
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}