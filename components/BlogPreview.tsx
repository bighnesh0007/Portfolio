import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock,  ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  readTime: string;
  category: "DSA" | "Full Stack" | "AI/ML" | "System Design";
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mastering System Design: Building a Real-time Chat Application",
    excerpt: "Deep dive into WebSocket architecture, message queuing with Redis, and horizontal scaling strategies for handling millions of concurrent connections...",
    date: "2025-01-25",
    imageUrl: "/d/4.jpg",
    readTime: "12 min read",
    category: "System Design",
    tags: ["WebSocket", "Redis", "Scaling", "Architecture"]
  },
  {
    id: "2",
    title: "Advanced Graph Algorithms in Machine Learning",
    excerpt: "Exploring how Graph Neural Networks (GNNs) are revolutionizing recommendation systems. Implementation using PyTorch Geometric with real-world examples...",
    date: "2025-01-20",
    imageUrl: "/d/2.jpg",
    readTime: "15 min read",
    category: "AI/ML",
    tags: ["GNN", "PyTorch", "Deep Learning", "RecSys"]
  },
  {
    id: "3",
    title: "Dynamic Programming in Frontend: Optimizing React Performance",
    excerpt: "Implementing memoization patterns, virtual list rendering, and state management optimization techniques to handle large datasets in React applications...",
    date: "2025-01-15",
    imageUrl: "/d/1.jpg",
    readTime: "10 min read",
    category: "Full Stack",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: "4",
    title: "Building a Production-Ready LLM Application",
    excerpt: "Step-by-step guide to creating a secure and scalable AI application using LangChain, Vector Databases, and RAG pattern for enhanced context awareness...",
    date: "2025-01-10",
    imageUrl: "/d/3.jpg",
    readTime: "18 min read",
    category: "AI/ML",
    tags: ["LLM", "LangChain", "Vector DB", "RAG"]
  }
];

interface BlogPreviewProps {
  isDarkMode: boolean;
}

const categoryColors = {
  "DSA": "from-green-500 to-emerald-700",
  "Full Stack": "from-blue-500 to-indigo-700",
  "AI/ML": "from-purple-500 to-pink-700",
  "System Design": "from-orange-500 to-red-700"
};

export default function BlogPreview({ isDarkMode }: BlogPreviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`
            group relative overflow-hidden rounded-xl shadow-lg
            ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
          `}
        >
          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`
              px-3 py-1 rounded-full text-sm font-medium text-white
              bg-gradient-to-r ${categoryColors[post.category]}
            `}>
              {post.category}
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
          </div>

          <div className="p-6 space-y-4">
            {/* Meta Information */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Title and Excerpt */}
            <div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
              <p className={`line-clamp-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {post.excerpt}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className={`
                    text-xs px-2 py-1 rounded-full
                    ${isDarkMode 
                      ? "bg-gray-700 text-gray-300" 
                      : "bg-gray-100 text-gray-600"}
                  `}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Read More Button */}
            <Button
              variant="ghost"
              className="w-full justify-between group/btn"
            >
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}