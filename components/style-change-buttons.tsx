"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Palette, Type, Download, RefreshCw } from "lucide-react"

const fontFamilies = [
  "Arial, sans-serif",
  "Helvetica, sans-serif",
  "Georgia, serif",
  "Times New Roman, serif",
  "Courier New, monospace",
  "Verdana, sans-serif",
  "Trebuchet MS, sans-serif",
  "Arial Black, sans-serif",
  "Impact, sans-serif",
  "Bookman, serif",
  "Garamond, serif",
  "Palatino, serif",
  "Tahoma, sans-serif",
]

interface StyleChangeButtonsProps {
  onChangeColorScheme: () => void
}

export function StyleChangeButtons({ onChangeColorScheme }: StyleChangeButtonsProps) {
  const [fontFamily, setFontFamily] = useState(fontFamilies[0])
  const [textColor, setTextColor] = useState("inherit")
  console.log(fontFamily + textColor);
  const changeFontStyle = useCallback(() => {
    const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
    setFontFamily(randomFont)
    document.body.style.setProperty("--resume-font-family", randomFont)
  }, [])

  const changeTextColor = useCallback(() => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    setTextColor(randomColor)
    document.body.style.setProperty("--resume-text-color", randomColor)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
      <Button onClick={() => window.print()} variant="outline" size="icon" title="Download PDF">
        <Download className="h-4 w-4" />
      </Button>
      <Button onClick={onChangeColorScheme} variant="outline" size="icon" title="Change Color Scheme">
        <RefreshCw className="h-4 w-4" />
      </Button>
      <Button onClick={changeFontStyle} variant="outline" size="icon" title="Change Font Style">
        <Type className="h-4 w-4" />
      </Button>
      <Button onClick={changeTextColor} variant="outline" size="icon" title="Change Text Color">
        <Palette className="h-4 w-4" />
      </Button>
    </div>
  )
}

