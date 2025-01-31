import { useState } from 'react';
import Image from 'next/image';
import InfiniteMenu from './ui/InfiniteMenu';
import { motion } from 'framer-motion';

interface Achievement {
  image: string;
  title: string;
  description: string;
  date?: string;
  story?: string;
}

interface BehindTheScenesProps {
  achievements?: Achievement[];
  isDarkMode?: boolean;
}

// Default achievements if none are provided
const defaultAchievements: Achievement[] = [
  {
    image: "/placeholder.jpg",
    title: "Sample Achievement",
    description: "Please add your achievements",
    date: "2024",
  }
];
const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'Started learning web development basics.'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'Built full-stack apps confidently.'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'Worked with other developers/designers.'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'Successfully deployed a live product.'
  }
];



export default function BehindTheScenes({
  achievements = defaultAchievements,
  isDarkMode = false
}: BehindTheScenesProps) {
  const [selectedAchievement] = useState<Achievement | null>(null);

  console.log(achievements);
  
  return (
    <div className="space-y-12">
      {/* Main heading */}
      <div className="text-center space-y-4">
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          My Journey & Achievements
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Each photo tells a story of growth and accomplishment
        </p>
      </div>

      {/* Infinite Menu Section */}
      <div className="h-[600px] relative" style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} />

      </div>

      {/* Selected Achievement Detail */}
      {selectedAchievement && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px]">
                <Image
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  {selectedAchievement.title}
                </h3>
                {selectedAchievement.date && (
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {selectedAchievement.date}
                  </p>
                )}
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedAchievement.description}
                </p>
                {selectedAchievement.story && (
                  <div className="mt-4">
                    <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      The Story Behind
                    </h4>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedAchievement.story}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}