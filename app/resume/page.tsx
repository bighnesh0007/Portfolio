"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, Download, Printer, Type } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const colorSchemes = [
  { name: "Default", primary: "blue", secondary: "gray", accent: "indigo" },
  { name: "Emerald", primary: "emerald", secondary: "teal", accent: "green" },
  { name: "Rose", primary: "rose", secondary: "pink", accent: "red" },
  { name: "Amber", primary: "amber", secondary: "orange", accent: "yellow" },
  { name: "Indigo", primary: "indigo", secondary: "violet", accent: "purple" },
]

const fonts = ["font-sans", "font-serif", "font-mono"]

const colors = ["red", "orange", "blue", "green", "yellow"]

export default function ResumePage() {
  const [colorScheme, setColorScheme] = useState(colorSchemes[0])
  const [font, setFont] = useState(fonts[0])
  const [headingColor, setHeadingColor] = useState(colors[0])

  const changeColorScheme = () => {
    setColorScheme((prevScheme) => {
      const currentIndex = colorSchemes.findIndex((scheme) => scheme.name === prevScheme.name)
      const nextIndex = (currentIndex + 1) % colorSchemes.length
      return colorSchemes[nextIndex]
    })
  }

  const changeFont = () => {
    setFont((prevFont) => {
      const currentIndex = fonts.indexOf(prevFont)
      const nextIndex = (currentIndex + 1) % fonts.length
      return fonts[nextIndex]
    })
  }

  const changeHeadingColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setHeadingColor(randomColor)
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Bighnesh_Kumar_Sahoo_12221115.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const printResume = () => {
    window.print()
  }

  useEffect(() => {
    document.body.classList.add("print-friendly")
    return () => {
      document.body.classList.remove("print-friendly")
    }
  }, [])

  return (
    <div
      className={cn("min-h-screen py-8", `bg-${colorScheme.secondary}-50 dark:bg-${colorScheme.secondary}-900`, font)}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className={cn("max-w-4xl mx-auto shadow-xl", `bg-white dark:bg-${colorScheme.secondary}-800`)}>
          <div className="p-8">
            <Header colorScheme={colorScheme} headingColor={headingColor} />
            <Skills colorScheme={colorScheme} headingColor={headingColor} />
            <Experience colorScheme={colorScheme} headingColor={headingColor} />
            <Projects colorScheme={colorScheme} headingColor={headingColor} />
            <Certifications colorScheme={colorScheme} headingColor={headingColor} />
            <Achievements colorScheme={colorScheme} headingColor={headingColor} />
            <Education colorScheme={colorScheme} headingColor={headingColor} />
          </div>
        </Card>
        <div className="mt-8 flex justify-center space-x-4 flex-wrap">
          <Button variant="outline" onClick={changeColorScheme}>
            Change Color Scheme
          </Button>
          <Button variant="outline" onClick={changeFont}>
            <Type className="mr-2 h-4 w-4" /> Change Font
          </Button>
          <Button variant="outline" onClick={changeHeadingColor}>
            Random Heading Color
          </Button>
          <Button onClick={downloadResume}>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
          <Button onClick={printResume}>
            <Printer className="mr-2 h-4 w-4" /> Print Resume
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

function Header({
  colorScheme,
  headingColor,
}: { colorScheme: { primary: string; secondary: string }; headingColor: string }) {
  return (
    <div className="mb-6">
      <h1 className={cn("text-4xl font-bold mb-2", `text-${headingColor}-600 dark:text-${headingColor}-400`)}>
        Bighnesh Kumar Sahoo
      </h1>
      <div className="flex flex-wrap gap-4">
        <ContactInfo
          icon={Mail}
          text="bighneshkumarsahoo58@gmail.com"
          href="mailto:bighneshkumarsahoo58@gmail.com"
          colorScheme={colorScheme}
        />
        <ContactInfo icon={Phone} text="+91-9337561649" href="tel:+919337561649" colorScheme={colorScheme} />
        <ContactInfo
          icon={Github}
          text="github.com/bighnesh0007"
          href="https://github.com/bighnesh0007"
          colorScheme={colorScheme}
        />
        <ContactInfo
          icon={Linkedin}
          text="linkedin.com/in/bighnesh18"
          href="https://linkedin.com/in/bighnesh18"
          colorScheme={colorScheme}
        />
      </div>
    </div>
  )
}

function ContactInfo({
  icon: Icon,
  text,
  href,
  colorScheme,
}: {
  icon: React.ComponentType<{ className?: string }>
  text: string
  href: string
  colorScheme: { primary: string; secondary: string }
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center text-sm",
        `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-300`,
        `hover:text-${colorScheme.primary}-600 dark:hover:text-${colorScheme.primary}-400`,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-4 h-4 mr-2" />
      {text}
    </Link>
  )
}

function Section({
  title,
  children,
  colorScheme,
  headingColor,
}: {
  title: string
  children: React.ReactNode
  colorScheme: { primary: string; secondary: string; accent: string }
  headingColor: string
}) {
  return (
    <section className="mb-6">
      <h2 className={cn("text-2xl font-semibold mb-2", `text-${headingColor}-600 dark:text-${headingColor}-400`)}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Skills({
  colorScheme,
  headingColor,
}: { colorScheme: { primary: string; secondary: string; accent: string }; headingColor: string }) {
  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "C/C++", "Java", "Go"] },
    { category: "Frontend", items: ["React.js", "HTML", "CSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express.js"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "Tools", items: ["Docker", "Kubernetes", "Jenkins", "Spark", "Kafka", "gRPC"] },
    { category: "Soft Skills", items: ["Problem-Solving", "Adaptability", "Time Management"] },
  ]

  return (
    <Section title="SKILLS" colorScheme={colorScheme} headingColor={headingColor}>
      {skills.map((skillGroup) => (
        <div key={skillGroup.category} className="mb-2">
          <span
            className={cn("font-semibold", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
          >
            {skillGroup.category}:
          </span>{" "}
          <span className={cn(`text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
            {skillGroup.items.join(", ")}
          </span>
        </div>
      ))}
    </Section>
  )
}

function Experience({
  colorScheme,
  headingColor,
}: { colorScheme: { primary: string; secondary: string; accent: string }; headingColor: string }) {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Technook",
      date: "June 2023 – Aug 2023",
      achievements: [
        "Built and deployed a web application using Node.js with third-party API integrations, reducing data retrieval time by 15%.",
        "Led front-end and back-end integration using React.js and TypeScript, improving overall system efficiency by 30%.",
        "Designed optimized database structures in MongoDB, enhancing performance by 20%.",
      ],
    },
    {
      title: "AI Model Training Specialist",
      company: "Freelance",
      date: "March 2024 – Oct 2024",
      achievements: [
        "Developed reusable code in Python, JavaScript, C/C++, Java.",
        "Reviewed and refined AI-generated code to align with industry standards for performance and scalability.",
        "Authored detailed documentation for advanced coding concepts, simplifying AI training processes.",
      ],
    },
  ]

  return (
    <Section title="EXPERIENCE" colorScheme={colorScheme} headingColor={headingColor}>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3
            className={cn("font-semibold", `text-${colorScheme.secondary}-800 dark:text-${colorScheme.secondary}-200`)}
          >
            {exp.title} - {exp.company}
          </h3>
          <p className={cn("text-sm mb-2", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
            {exp.date}
          </p>
          <ul className="list-disc list-inside">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
              >
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}

function Projects({
  colorScheme,
  headingColor,
}: { colorScheme: { primary: string; secondary: string; accent: string }; headingColor: string }) {
  const projects = [
    {
      name: "AgriVision",
      date: "Sept 2024 – Oct 2024",
      description: "AI-powered Agriculture Assistance Platform",
      achievements: [
        "Developed an AI-powered web portal for farmers, offering insights on crop selection, soil analysis, and market trends.",
        "Integrated IoT devices for real-time monitoring and drone-based field analysis.",
        "Built AI models for pest detection and cattle counting, enhancing user decision-making by 25%.",
      ],
      link: "agrivision.vercel.app",
    },
    {
      name: "MediCheck",
      date: "March 2024 – April 2024",
      description: "AI-driven Health Tracking System",
      achievements: [
        "Created a health tracking system with AI-driven diagnostics for actionable insights.",
        "Created an interactive chatbot with Python and NLP.",
      ],
      link: "med-check-weld.vercel.app",
    },
  ]

  return (
    <Section title="PROJECTS" colorScheme={colorScheme} headingColor={headingColor}>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3
            className={cn("font-semibold", `text-${colorScheme.secondary}-800 dark:text-${colorScheme.secondary}-200`)}
          >
            {project.name} - {project.description}
          </h3>
          <p className={cn("text-sm mb-2", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
            {project.date}
          </p>
          <ul className="list-disc list-inside">
            {project.achievements.map((achievement, i) => (
              <li
                key={i}
                className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
              >
                {achievement}
              </li>
            ))}
          </ul>
          {project.link && (
            <Link
              href={`https://${project.link}`}
              className={cn(
                "text-sm",
                `text-${colorScheme.primary}-600 dark:text-${colorScheme.primary}-400 hover:underline`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed: {project.link}
            </Link>
          )}
        </div>
      ))}
    </Section>
  )
}

function Certifications({
  colorScheme,
  headingColor,
}: { colorScheme: { primary: string; secondary: string; accent: string }; headingColor: string }) {
  const certifications = [
    { name: "Git & GitHub Certification", issuer: "Udemy", date: "Aug 2023" },
    { name: "MongoDB Certification", issuer: "MongoDB University", date: "Oct 2023" },
  ]

  return (
    <Section title="CERTIFICATIONS" colorScheme={colorScheme} headingColor={headingColor}>
      <ul className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
          >
            {cert.name} - {cert.issuer} ({cert.date})
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Achievements({
  colorScheme,
  headingColor,
}: { colorScheme: { primary: string; secondary: string; accent: string }; headingColor: string }) {
  const achievements = [
    "Winner of 6+ Hackathons (2 state-level, 4 college-level).",
    "Smart India Hackathon (SIH) Qualifier.",
    "Top 5 Finalist in National Hackathons.",
  ]

  return (
    <Section title="ACHIEVEMENTS" colorScheme={colorScheme} headingColor={headingColor}>
      <ul className="list-disc list-inside">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
          >
            {achievement}
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Education({
  colorScheme,
  headingColor,
}: { colorScheme: { primary: string; secondary: string; accent: string }; headingColor: string }) {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech, Computer Science",
      date: "Aug 2020 – Dec 2026",
    },
    {
      institution: "Doon International School, Bhubaneswar",
      degree: "Senior Secondary, Science",
      date: "April 2018 – March 2020",
      score: "92.4%",
    },
  ]

  return (
    <Section title="EDUCATION" colorScheme={colorScheme} headingColor={headingColor}>
      {education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3
            className={cn("font-semibold", `text-${colorScheme.secondary}-800 dark:text-${colorScheme.secondary}-200`)}
          >
            {edu.institution}
          </h3>
          <p className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}>
            {edu.degree} | {edu.date}
          </p>
          {edu.score && (
            <p className={cn("text-sm", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
              Score: {edu.score}
            </p>
          )}
        </div>
      ))}
    </Section>
  )
}

