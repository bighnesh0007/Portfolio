"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/ProjectCard"
import SkillBar from "@/components/SkillBar"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import BlogPreview from "@/components/BlogPreview"
import CustomIllustration from "@/components/CustomIllustration"
import GameElement from "@/components/GameElement"
import SocialProof from "@/components/SocialProof"
import PersonalTouch from "@/components/PersonalTouch"
import LiveDemo from "@/components/LiveDemo"
import FutureGoals from "@/components/FutureGoals"
import LightCursor from "@/components/LightCursor"
import EnhancedBackground from "@/components/EnhancedBackground"
import ScrollAnimation from "@/components/ScrollAnimation"
import CodeBlock from "@/components/CodeBlock"
import TextTransition from "@/components/TextTransition"
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import {
  Award,
  Briefcase,
  Code,
  MessageSquare,
  User,
  HomeIcon,
  Globe,
  Share2,
  Sun,
  Moon,
  Linkedin,
  Github,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import QRCode from "@/components/QRCode"
import VideoIntro from "@/components/VideoIntro"
import BehindTheScenes from "@/components/BehindTheScenes"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { TerminalDemo } from "@/components/TerminalDemo"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true) // Set dark mode as default
  const [language, setLanguage] = useState("en")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const myAchievements = [
    {
      image: "/path/to/award-image.jpg",
      title: "First Place in Web Development Competition",
      description: "Won the national web development challenge",
      date: "June 2023",
      story: "This competition pushed me to my limits. I spent weeks preparing...",
    },
    {
      image: "/path/to/conference-image.jpg",
      title: "Speaker at Tech Conference",
      description: "Presented to over 500 developers",
      date: "September 2023",
      story: "Speaking at this conference was a dream come true...",
    },
  ]
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  const shareData = {
    title: "My Portfolio",
    text: "Check out my portfolio!",
    url: "https://your-portfolio-url.com",
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      }
    } catch (err) {
      console.log("Error sharing:", err)
    }
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className={`relative min-h-screen ${isDarkMode ? "text-gray-100 bg-gray-900" : "text-gray-900 bg-white"}`}>
      {/* <SplashCursor isDarkMode={isDarkMode} /> */}
      <LightCursor isDarkMode={isDarkMode} />
      <EnhancedBackground isDarkMode={isDarkMode} />
      <BackgroundAnimation />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400 origin-left z-50"
        style={{ scaleX }}
      />
      <nav
        className={`sticky top-0 backdrop-blur-md shadow-lg z-40 ${
          isDarkMode ? "bg-gray-900/80 shadow-gray-800/50" : "bg-white/80 shadow-gray-200/50"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/" className="text-2xl">
                    <HomeIcon className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Home</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="hidden md:flex space-x-6">
              {[
                { icon: User, label: "About", href: "#about" },
                { icon: Briefcase, label: "Projects", href: "#projects" },
                { icon: Code, label: "Skills", href: "#skills" },
                { icon: Award, label: "Resume", href: "/resume" },
                { icon: MessageSquare, label: "Contact", href: "#contact" },
              ].map(({ icon: Icon, label, href }) => (
                <TooltipProvider key={label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <Globe className="w-5 h-5" />

            <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <QRCode url={shareData.url} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex space-x-2">
              {[
                { icon: Github, href: "https://github.com/bighnesh0007/" },
                { icon: Linkedin, href: "https://linkedin.com/in/bighnesh18/" },
                { icon: Mail, href: "mailto:bighneshkumarsahoo58@gmail.com" },
                { icon: Phone, href: "tel:+919337561649" },
              ].map(({ icon: Icon, href }) => (
                <Button key={href} variant="ghost" size="icon" asChild>
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 space-y-32">
        <ScrollAnimation>
          <TextTransition className="text-center">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <CustomIllustration />
            </motion.div>
            <motion.h1
              className={`text-5xl font-bold mb-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bighnesh Kumar Sahoo
            </motion.h1>
            <motion.p
              className="text-2xl mb-8 text-gray-400 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Web Developer & Designer
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Button
                size="lg"
                className={`
                  ${isDarkMode ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}
                `}
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </motion.div>
          </TextTransition>
        </ScrollAnimation>

        {/* About Me section (unchanged) */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-24"
          >
            {/* Header Section */}
            <div className="text-center space-y-6">
              <h2 className={`text-6xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>About Me</h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed">
                Passionate about creating impactful digital experiences through innovative design and development
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="pt-8"
              >
                <ChevronDown className="w-8 h-8 mx-auto text-blue-500" />
              </motion.div>
            </div>

            {/* Video Introduction */}
            <div className="space-y-8">
              <VideoIntro videoUrl="/your-intro-video.mp4" title="Welcome to My World" />
            </div>

            {/* Behind The Scenes */}
            <BehindTheScenes achievements={myAchievements} />

            {/* Personal Touch Section */}
            <PersonalTouch isDarkMode={isDarkMode} />

            {/* Skills & Expertise */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Skills & Expertise</h3>
                <div className="space-y-4">
                  {["Design", "Development", "Strategy", "Innovation"].map((skill) => (
                    <div key={skill} className="relative h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-y-0 left-0 bg-blue-500"
                      />
                      <span className="absolute inset-0 flex items-center px-4 text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Notable Achievements</h3>
                <ul className="space-y-4">
                  {[
                    "Award-winning projects",
                    "Industry recognition",
                    "Successful collaborations",
                    "Innovation leadership",
                  ].map((achievement) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="w-3 h-3 bg-blue-500 rounded-full" />
                      <span className="text-lg">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={0.3}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="MediCheck"
                description="AI-powered diagnostics 🏥 with instant results!"
                fullDescription="MediCheck leverages cutting-edge AI 🤖 to provide fast, accurate diagnostics 🩺 and seamless telemedicine services 📱. From orthopedic X-ray analysis 🦴 to vision 👁️ and hearing 👂 assessments, tumor detection 🎯, and more—MediCheck enhances healthcare accessibility 🌍, improves diagnostic accuracy 📊, and boosts patient outcomes 💯."
                imageUrl="/image.png"
                deployedUrl="https://your-project.com"
                githubUrl="https://github.com/your/project"
              />

              <ProjectCard
                title="AgriVision"
                description="Revolutionizing farming with AI 🌾🚜"
                fullDescription="AgriVision is an AI-integrated web portal 🌱 designed to support farmers from seed to harvest 🌾. It provides real-time insights 📈, automated crop monitoring 🌦️, and smart resource management to optimize yields and sustainability. With AgriVision, farmers can harness technology to grow smarter and more efficiently 🚀."
                imageUrl="/image1.png"
                deployedUrl="https://your-project.com"
                githubUrl="https://github.com/your/project"
              />

              <ProjectCard
                title="API Manager"
                description="Effortless API & snippet management ⚡"
                fullDescription="API Manager is your all-in-one solution for seamless API and code snippet management 🛠️. Easily organize, edit, and search your code snippets 🔍. Manage API keys securely with customizable permissions 🔑, real-time usage tracking 📊, and rate limits. Build, test, and monitor APIs with interactive tools 🚀. Plus, personalize your dashboard with drag-and-drop widgets 🖥️, custom themes 🎨, and smart notifications 🔔—making API development smooth and efficient!"
                imageUrl="/image2.png"
                deployedUrl="https://your-project.com"
                githubUrl="https://github.com/your/project"
              />
            </div>
          </TextTransition>
        </ScrollAnimation>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={0.5}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              My Skills
            </h2>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
              <SkillBar skill="React" icon="react" percentage={90} />
              <SkillBar skill="Next.js" icon="nextjs" percentage={85} />
              <SkillBar skill="TypeScript" icon="typescript" percentage={80} />
              <SkillBar skill="Node.js" icon="nodejs" percentage={85} />
              <SkillBar skill="Express" icon="express" percentage={80} />
              <SkillBar skill="AWS" icon="aws" percentage={75} />
              <SkillBar skill="Docker" icon="docker" percentage={70} />
              <SkillBar skill="Jenkins" icon="jenkins" percentage={65} />
              <SkillBar skill="Git" icon="git" percentage={90} />
            </div>
          </TextTransition>
        </ScrollAnimation>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={0.6}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Code Example
            </h2>
            <CodeBlock
              code={`document.write("Hello World");
Developer dev = new Developer(Bighnesh kumar Sahoo);
const Sagar = {
    pronouns: "he" | "his",
    status: Student,
    technologies: {
        frontEnd: [HTML, CSS, SASS, Javascript, React],
        backEnd: [Node.js, Express.js, Mongoose.js, Python],
        dataBase: [MongoDB, SQL]
        libraries: [Bootstrap, JQuery]
    },
    editors: [VS Code, Vim, PyCharm, Nano],
    learning: [Kali Linux, c++],
    contact: bighneshkumarsahoo58@gmail.com
};

if(succeed == false){
    tryagain();
}else{
    party();
};`}
              language="typescript"
              isDarkMode={isDarkMode}
              fileName="example.ts"
            />
          </TextTransition>
        </ScrollAnimation>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={0.7}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Client Testimonials
            </h2>
            <TestimonialCarousel isDarkMode={isDarkMode} />
            <SocialProof />
          </TextTransition>
        </ScrollAnimation>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={0.8}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlogPreview isDarkMode={isDarkMode} />
              <BlogPreview isDarkMode={isDarkMode} />
            </div>
          </TextTransition>
        </ScrollAnimation>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={0.9}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Fun Stuff
            </h2>
            <GameElement />
          </TextTransition>
        </ScrollAnimation>


        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={1.1}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Live Demos
            </h2>
            <LiveDemo />
          </TextTransition>
        </ScrollAnimation>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={1.2}>
            <h2 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Future Goals
            </h2>
            <FutureGoals />
            <TerminalDemo />
          </TextTransition>
        </ScrollAnimation>

        <ScrollAnimation>
          <TextTransition className="space-y-16" delay={1.3}>
            <h2
              id="contact"
              className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
            >
              Get in Touch
            </h2>
            {/* <ContactForm/> */}
          </TextTransition>
        </ScrollAnimation>
      </div>
    </main>
  )
}

