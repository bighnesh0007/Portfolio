import { motion } from "framer-motion";
import { Sparkles,  Brain, Code, Globe, Users,  Target } from "lucide-react";

const goals = [
  {
    title: "Technical Mastery 🚀",
    description: "Master cutting-edge technologies",
    subGoals: [
      "Become an AI/ML expert and build innovative applications 🤖",
      "Master System Design for large-scale applications 🏗️",
      "Deep dive into Web3 and Blockchain development ⛓️",
      "Explore Quantum Computing and its applications 💫"
    ],
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Community Impact 🌟",
    description: "Give back to the tech community",
    subGoals: [
      "Create free educational content for aspiring developers 📚",
      "Mentor 100+ developers to success in tech careers 🎯",
      "Build open-source tools used by 10k+ developers ⚡",
      "Start a tech community for knowledge sharing 🤝"
    ],
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Innovation & Entrepreneurship 💡",
    description: "Create meaningful impact through tech",
    subGoals: [
      "Launch a SaaS startup solving real developer problems 🎸",
      "Build AI-powered developer productivity tools 🔧",
      "Create a platform for connecting mentors and mentees 🤝",
      "Develop sustainable tech solutions for climate change 🌍"
    ],
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Global Recognition 🌎",
    description: "Share knowledge and inspire others",
    subGoals: [
      "Speak at major tech conferences worldwide 🎤",
      "Write a book on modern software architecture 📖",
      "Build a personal brand reaching 100k+ developers 💫",
      "Create viral tech educational content 🎥"
    ],
    icon: <Globe className="w-6 h-6" />
  }
];

export default function FutureGoals() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-xl blur-xl" />
        
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Future Aspirations ✨
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Dreaming big, working hard, making impact 🎯
              </p>
            </div>
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gray-50 dark:bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                      {goal.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {goal.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {goal.description}
                  </p>

                  <ul className="space-y-3">
                    {goal.subGoals.map((subGoal, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <Target className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {subGoal}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 italic">
            &quot;The future belongs to those who believe in the beauty of their dreams&quot; 💫
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}