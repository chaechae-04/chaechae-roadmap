import React from "react"
import { motion } from "framer-motion"
import useNavigate from "../../hook/useNavigate"
import MainCard from "./MainCard"

interface Chapter {
    id: number
    title: string
    emoji: string
    path: string
    description: string
}

const chapters: Chapter[] = [
    {
        id: 1,
        title: "Todo List",
        emoji: "📝",
        path: "/todo",
        description: "Todo List"

    },
    {
        id: 2,
        title: "Currency Converter",
        emoji: "💸",
        path: "/convert",
        description: "Currency Converter"
    },  
    {
        id: 3,
        title: "Voting Web App",
        emoji: "🗳️",
        path: "/voting",
        description: "Voting Web App"
    },
    {
        id: 4,
        title: "Vercel Deploy",
        emoji: "☁️",
        path: "/vercel",
        description: "Vercel Deploy"
    },
    {
        id: 5,
        title: "Overview",
        emoji: "🖥️",
        path: "/overview",
        description: "Overview"
    }
]

const MainCardContainer: React.FC = () => {

    const { navigate } = useNavigate()

    return (
        <div className="relative w-full h-full overflow-hidden">
          {/* 배경 그라데이션 효과 */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100"></div>
          
          {/* 카드들이 배치될 반원 영역 */}
          <div className="relative w-full h-full flex items-end justify-center">
            <motion.div 
              className="relative w-[1200px] h-[400px] flex items-end justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {chapters.map((chapter, index) => {
                const angle = (index * 22.5) + 225
                const radius = 400
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius + 250
                
                return (
                  <MainCard
                    key={chapter.id}
                    chapter={chapter}
                    position={{ x, y }}
                    index={index}
                    onClick={() => navigate(chapter.path)}
                  />
                )
              })}
            </motion.div>
          </div>
        </div>
      )
}

export default MainCardContainer