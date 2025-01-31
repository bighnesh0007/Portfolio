import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, LinkedinIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    location: "Bangalore",
    avatar: "/avatars/rahul.jpg", // Add your image paths
    text: "As a fresher from a tier-2 college, breaking into tech seemed daunting. The mentorship I received helped me land my dream job at a top startup. Now I'm earning 12 LPA!",
    rating: 5,
    project: "E-commerce Platform",
    linkedin: "https://linkedin.com/in/rahul-sharma",
    github: "https://github.com/rahul-dev"
  },
  {
    name: "Priya Patel",
    role: "UI/UX Designer",
    location: "Mumbai",
    avatar: "/avatars/priya.jpg",
    text: "Transitioning from engineering to design was challenging, but the practical projects and guidance made it possible. Successfully freelancing now with international clients!",
    rating: 5,
    project: "FinTech App Redesign",
    linkedin: "https://linkedin.com/in/priya-design",
    github: "https://github.com/priya-ux"
  },
  {
    name: "Arun Kumar",
    role: "MERN Stack Developer",
    location: "Hyderabad",
    avatar: "/avatars/arun.jpg",
    text: "Coming from a non-CS background, I was worried about my career. After 6 months of dedicated learning and building projects, I secured a remote position with a US-based company!",
    rating: 5,
    project: "SaaS Dashboard",
    linkedin: "https://linkedin.com/in/arun-dev",
    github: "https://github.com/arun-mern"
  },
  {
    name: "Neha Gupta",
    role: "Frontend Developer",
    location: "Delhi NCR",
    avatar: "/avatars/neha.jpg",
    text: "The structured learning path and real-world projects helped me grow from a basic HTML/CSS developer to a confident React developer. Now I'm mentoring other beginners!",
    rating: 5,
    project: "EdTech Platform",
    linkedin: "https://linkedin.com/in/neha-frontend",
    github: "https://github.com/neha-react"
  }
];

interface TestimonialCarouselProps {
  isDarkMode: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialCarousel({ 
  isDarkMode, 
  autoPlay = true, 
  interval = 5000 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setInterval(nextTestimonial, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, isPaused, interval]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-16"
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar Section */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden relative">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Quote className="w-4 h-4 text-white" />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
                <div className="flex gap-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg italic">
              &quot;{testimonials[currentIndex].text}&quot;
              </blockquote>

              <div className="pt-4 flex items-center justify-between">
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Project: {testimonials[currentIndex].project}
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href={testimonials[currentIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={testimonials[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-blue-500 w-6" 
                : `${isDarkMode ? "bg-gray-600" : "bg-gray-300"} hover:bg-blue-400`
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
}