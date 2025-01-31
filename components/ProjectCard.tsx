import { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { Card,  CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  fullDescription?: string;
  deployedUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  fullDescription,
  deployedUrl,
  githubUrl
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ perspective: 1000 }}
      whileHover={{ 
        rotateX: 2,
        rotateY: -2,
        z: 10,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="transform-gpu relative group"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.4 }
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientFlow 12s ease infinite'
          }}
        />
      </div>

      <Card className="relative overflow-hidden bg-white dark:bg-gray-800 w-full max-w-sm shadow-2xl transition-all duration-300 group-hover:shadow-xl">
        {/* Image Container */}
        <motion.div 
          className="relative h-56 overflow-hidden"
          layoutId={`image-${title}`}
        >
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        <CardHeader className="space-y-2">
          <motion.div layout="position">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </CardTitle>
          </motion.div>
          <motion.div layout="position">
            <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {isExpanded ? fullDescription || description : description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardFooter className="flex flex-col space-y-4">
          {/* Links Section */}
          <motion.div className="flex justify-between w-full gap-4">
            {deployedUrl && (
              <motion.a
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-4 w-4" />
                Live Demo
                <span className="absolute inset-0" aria-hidden="true" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-4 w-4" />
                Source Code
                <span className="absolute inset-0" aria-hidden="true" />
              </motion.a>
            )}
          </motion.div>

          <motion.div layout className="w-full">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="ghost"
              className="group w-full justify-between hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-sm font-medium">
                {isExpanded ? 'Show Less' : 'Learn More'}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>

      <style jsx global>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}