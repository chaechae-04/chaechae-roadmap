import React from 'react'
import { motion } from 'framer-motion'

interface Chapter {
  id: number
  title: string
  emoji: string
  path: string
  description: string
}

interface Position {
  x: number
  y: number
}

interface MainCardProps {
  chapter: Chapter
  position: Position
  index: number
  onClick: () => void
}

const MainCard: React.FC<MainCardProps> = ({ chapter, position, index, onClick }) => {
  return (
    <motion.div
      className="absolute cursor-pointer z-10 hover:z-20"
      style={{
        x: position.x,
        y: position.y,
      }}
      initial={{ 
        opacity: 0, 
        scale: 0,
        y: position.y + 100,
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: position.y,
      }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.15,
        y: position.y - 50,
        z: 100,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      onClick={onClick}
    >
      <motion.div 
        className="w-48 h-48 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col items-center justify-center"
        whileHover={{
          boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.25)",
          transition: { duration: 0.4 }
        }}
      >
        <motion.div 
          className="text-4xl mb-3"
          whileHover={{ 
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
        >
          {chapter.emoji}
        </motion.div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
          {chapter.title}
        </h3>
        <p className="text-sm text-gray-600 text-center leading-relaxed">
          {chapter.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default MainCard