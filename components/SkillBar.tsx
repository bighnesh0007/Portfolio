import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJenkins, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiExpress } from "react-icons/si"

interface SkillBarProps {
  skill: string
  icon: string
  percentage: number
}

const iconComponents = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  nodejs: FaNodeJs,
  express: SiExpress,
  aws: FaAws,
  docker: FaDocker,
  jenkins: FaJenkins,
  git: FaGitAlt,
}

export default function SkillBar({ skill, icon, percentage }: SkillBarProps) {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents]

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-blue-300 flex items-center">
          {IconComponent && <IconComponent className="mr-2" />}
          {skill}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{percentage}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Progress value={percentage} className="w-full" />
      </motion.div>
    </div>
  )
}

