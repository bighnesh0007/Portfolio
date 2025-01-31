"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check } from "lucide-react"
import { motion } from "framer-motion"

interface CodeBlockProps {
  code: string
  language: string
  isDarkMode: boolean
  showLineNumbers?: boolean
  fileName?: string
}

export default function CodeBlock({ code, language, isDarkMode, showLineNumbers = true, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {fileName && (
        <div
          className={`px-4 py-2 text-sm font-mono ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}
        >
          {fileName}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? vscDarkPlus : vs}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          borderRadius: fileName ? "0 0 0.5rem 0.5rem" : "0.5rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className={`absolute top-2 right-2 p-2 rounded-md transition-colors ${
          isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
        }`}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </motion.div>
  )
}

