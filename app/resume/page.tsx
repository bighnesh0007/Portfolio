"use client"

import { useCallback } from "react";
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, Briefcase, GraduationCap, Code, Award } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { StyleChangeButtons } from "@/components/style-change-buttons"

const colorSchemes = [
  { name: "Default", primary: "blue", secondary: "gray" },
  { name: "Emerald", primary: "emerald", secondary: "teal" },
  { name: "Rose", primary: "rose", secondary: "pink" },
  { name: "Amber", primary: "amber", secondary: "orange" },
  { name: "Indigo", primary: "indigo", secondary: "violet" },
]

export default function ResumePage() {
  const [colorScheme, setColorScheme] = useState(colorSchemes[0])

  const changeColorScheme = useCallback(() => {
    setColorScheme((prevScheme) => {
      const currentIndex = colorSchemes.findIndex((scheme) => scheme.name === prevScheme.name);
      const nextIndex = (currentIndex + 1) % colorSchemes.length;
      return colorSchemes[nextIndex];
    });
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "c" || event.key === "C") {
        changeColorScheme();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [changeColorScheme]); // Now it's a stable dependency


  const personalInfo = {
    name: "Bighnesh Kumar Sahoo",
    title: "Full Stack Developer",
    email: "bighneshkumarsahoo58@gmail.com",
    phone: "+91-9337561649",
    github: "github.com/bighnesh0007",
    linkedin: "linkedin.com/in/bighnesh18",
  }

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech, Computer Science",
      date: "Expected December 2026",
    },
    {
      institution: "Doon International School, Bhubaneswar",
      degree: "Senior Secondary, Science",
      date: "92.4%",
    },
  ]

  const skills = [
    "Python",
    "Rust",
    "JavaScript",
    "C/C++",
    "Java",
    "Go",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Spark",
    "Kafka",
    "gRPC",
    "React.js",
    "HTML",
    "CSS",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Problem Solving",
    "Adaptability",
    "Time Management",
  ]

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Technook",
      date: "June 2023 – August 2023",
      achievements: [
        "Built and deployed a web application using Node.js with third-party API integrations, reducing data retrieval time by 15%",
        "Designed optimized database structures in MongoDB, enhancing performance by 20%",
        "Led front-end and back-end integration using React.js and TypeScript, improving overall system efficiency by 30%",
      ],
    },
    {
      title: "Internshala Student Partner",
      company: "Remote",
      date: "January 2024 – February 2024",
      achievements: [
        "Streamlined API services with Node.js and Express.js, boosting response times by 15%",
        "Debugged and resolved critical performance issues, ensuring application reliability",
        "Collaborated with front-end teams for seamless UI/UX implementation",
      ],
    },
    {
      title: "AI Model Training Specialist",
      company: "Freelance",
      date: "March 2024 – October 2024",
      achievements: [
        "Curated high-quality code examples for Python, Rust, JavaScript, C/C++, Java, and Go",
        "Reviewed and refined AI-generated code to align with industry standards for performance and scalability",
        "Authored detailed documentation for advanced coding concepts, simplifying AI training processes",
      ],
    },
  ]

  const projects = [
    {
      name: "AgriVision",
      date: "September 2024 – October 2024",
      description: "AI-powered web portal for farmers",
      achievements: [
        "Developed insights on crop selection, soil analysis, and market trends",
        "Integrated IoT devices for real-time monitoring and drone-based field analysis",
        "Built AI models for pest detection and cattle counting, enhancing user decision-making by 25%",
      ],
      link: "agrivision.vercel.app",
    },
    {
      name: "Rozgar Setu: Sikhe, Safal Banein",
      date: "October 2024 – Ongoing",
      description: "Personalized academic resource recommendations using AI",
      achievements: [
        "Designed a platform for students",
        "Built a recommendation system to boost user engagement by 30%",
      ],
    },
    {
      name: "MediCheck",
      date: "March 2024 – April 2024",
      description: "Health tracking system with AI-driven diagnostics",
      achievements: ["Created actionable insights for users", "Enhanced user engagement by 20%"],
      link: "med-check-weld.vercel.app",
    },
  ]

  const certifications = [
    "Git & GitHub Certification – Udemy",
    "MongoDB Certification – MongoDB University",
    "Advanced Web Development – Technook",
    "Generative AI for Everyone – Coursera",
  ]

  const achievements = [
    "Winner of 6+ Hackathons, including 2 State-level and 4 College-level",
    "Smart India Hackathon (SIH) Qualifier",
    "Enhanced API response times by 15%",
    "Developed AI-driven solutions for agriculture and education",
    "Contributed to open-source projects and achieved a high rating on competitive coding platforms",
  ]

  return (
    <div
      className={cn("min-h-screen py-8", `bg-${colorScheme.secondary}-50 dark:bg-${colorScheme.secondary}-900`)}
      style={{ "--resume-font-family": "inherit", "--resume-text-color": "inherit" } as React.CSSProperties}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className={cn("max-w-4xl mx-auto shadow-xl", `bg-white dark:bg-${colorScheme.secondary}-800`)}
          style={{ fontFamily: "var(--resume-font-family)", color: "var(--resume-text-color)" }}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <Header personalInfo={personalInfo} colorScheme={colorScheme} />
            </div>
            <Section title="Education" icon={GraduationCap} colorScheme={colorScheme}>
              <EducationList education={education} colorScheme={colorScheme} />
            </Section>
            <Section title="Technical Skills" icon={Code} colorScheme={colorScheme}>
              <SkillsList skills={skills} colorScheme={colorScheme} />
            </Section>
            <Section title="Experience" icon={Briefcase} colorScheme={colorScheme}>
              <ExperienceList experience={experience} colorScheme={colorScheme} />
            </Section>
            <Section title="Projects" icon={Code} colorScheme={colorScheme}>
              <ProjectsList projects={projects} colorScheme={colorScheme} />
            </Section>
            <Section title="Certifications" icon={Award} colorScheme={colorScheme}>
              <CertificationsList certifications={certifications} colorScheme={colorScheme} />
            </Section>
            <Section title="Achievements" icon={Award} colorScheme={colorScheme}>
              <AchievementsList achievements={achievements} colorScheme={colorScheme} />
            </Section>
          </div>
        </Card>
        <StyleChangeButtons onChangeColorScheme={changeColorScheme} />
      </motion.div>
    </div>
  )
}

function Header({ personalInfo, colorScheme }: { personalInfo: { name: string, title: string, email: string, phone: string, github: string, linkedin: string }, colorScheme: { primary: string, secondary: string } }) {
  return (
    <>
      <div>
        <motion.h1
          className={cn(
            "text-4xl font-bold mb-2",
            `text-${colorScheme.primary}-600 dark:text-${colorScheme.primary}-400`,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.h2
          className={cn("text-xl mb-4", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-300`)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {personalInfo.title}
        </motion.h2>
      </div>
      <motion.div
        className="flex flex-wrap gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
          { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
          { icon: Github, text: personalInfo.github, href: `https://${personalInfo.github}` },
          { icon: Linkedin, text: personalInfo.linkedin, href: `https://${personalInfo.linkedin}` },
        ].map(({ icon: Icon, text, href }) => (
          <Link
            key={text}
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
        ))}
      </motion.div>
    </>
  )
}

function Section({ title, icon: Icon, children, colorScheme }: { title: string, icon: React.ComponentType<{ className?: string }>, children: React.ReactNode, colorScheme: { primary: string, secondary: string } }) {
  return (
    <motion.section
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className={cn(
          "text-2xl font-semibold mb-4 flex items-center",
          `text-${colorScheme.primary}-600 dark:text-${colorScheme.primary}-400`,
        )}
      >
        <Icon className="w-6 h-6 mr-2" />
        {title}
      </h2>
      {children}
    </motion.section>
  )
}

function EducationList({ education, colorScheme }: { education: { institution: string, degree: string, date: string }[], colorScheme: { primary: string, secondary: string } }) {
  return (
    <ul className="space-y-2">
      {education.map((edu, index) => (
        <li key={index} className="flex justify-between">
          <div>
            <h3
              className={cn(
                "font-semibold",
                `text-${colorScheme.secondary}-800 dark:text-${colorScheme.secondary}-200`,
              )}
            >
              {edu.institution}
            </h3>
            <p className={cn("text-sm", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
              {edu.degree}
            </p>
          </div>
          <span className={cn("text-sm", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
            {edu.date}
          </span>
        </li>
      ))}
    </ul>
  )
}

function SkillsList({ skills, colorScheme }: { skills: string[], colorScheme: { primary: string, secondary: string } }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <li
          key={index}
          className={cn(
            "px-3 py-1 rounded-full text-sm",
            `bg-${colorScheme.primary}-100 dark:bg-${colorScheme.primary}-700`,
            `text-${colorScheme.primary}-800 dark:text-${colorScheme.primary}-200`,
          )}
        >
          {skill}
        </li>
      ))}
    </ul>
  )
}

function ExperienceList({ experience, colorScheme }: { experience: { title: string, company: string, date: string, achievements: string[] }[], colorScheme: { primary: string, secondary: string } }) {
  return (
    <ul className="space-y-4">
      {experience.map((exp, index) => (
        <li key={index}>
          <h3
            className={cn("font-semibold", `text-${colorScheme.secondary}-800 dark:text-${colorScheme.secondary}-200`)}
          >
            {exp.title}
          </h3>
          <p className={cn("text-sm", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
            {exp.company} | {exp.date}
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
              >
                {achievement}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

function ProjectsList({ projects, colorScheme }: { projects: { name: string, date: string, description: string, achievements: string[], link?: string }[], colorScheme: { primary: string, secondary: string } }) {
  return (
    <ul className="space-y-4">
      {projects.map((project, index) => (
        <li key={index}>
          <h3
            className={cn("font-semibold", `text-${colorScheme.secondary}-800 dark:text-${colorScheme.secondary}-200`)}
          >
            {project.name}
          </h3>
          <p className={cn("text-sm", `text-${colorScheme.secondary}-600 dark:text-${colorScheme.secondary}-400`)}>
            {project.date}
          </p>
          <p className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}>
            {project.description}
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
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
              View Project
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

function CertificationsList({ certifications, colorScheme }: { certifications: string[], colorScheme: { primary: string, secondary: string } }) {
  return (
    <ul className="list-disc list-inside space-y-1">
      {certifications.map((cert, index) => (
        <li
          key={index}
          className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
        >
          {cert}
        </li>
      ))}
    </ul>
  )
}

function AchievementsList({ achievements, colorScheme }: { achievements: string[], colorScheme: { primary: string, secondary: string } }) {
  return (
    <ul className="list-disc list-inside space-y-1">
      {achievements.map((achievement, index) => (
        <li
          key={index}
          className={cn("text-sm", `text-${colorScheme.secondary}-700 dark:text-${colorScheme.secondary}-300`)}
        >
          {achievement}
        </li>
      ))}
    </ul>
  )
}

