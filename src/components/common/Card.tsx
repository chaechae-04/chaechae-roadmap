import React from 'react'

interface CardProps {
    title?: string
    content: string
    onClick?: () => void
}

const Card: React.FC<CardProps> = ({ title, content, onClick }) => {
    return (
        <div 
          className="bg-white rounded-lg p-4 shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
          onClick={onClick}
        >
          {title && (
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {title}
            </h3>
          )}
          <p className="text-gray-600 leading-relaxed">
            {content}
          </p>
        </div>
      )
}

export default Card