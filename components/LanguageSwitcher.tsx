import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LanguageSwitcherProps {
  language: string
  setLanguage: (lang: string) => void
}

export default function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="es">Español</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
      </SelectContent>
    </Select>
  )
}

