import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThemeSwitcherProps {
  isDarkMode: boolean
  setIsDarkMode: (isDark: boolean) => void
}

export default function ThemeSwitcher({ isDarkMode, setIsDarkMode }: ThemeSwitcherProps) {
  return (
    <Button variant="outline" size="icon" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle theme">
      {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}

