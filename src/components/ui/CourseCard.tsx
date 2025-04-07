
import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  category?: string;
  duration?: string;
  format?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  slug,
  image,
  category,
  duration,
  format
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-transform hover:scale-[1.02]">
      <div className="h-48 bg-gray-200 relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-esed-blue to-esed-orange bg-opacity-90 text-white">
            <span className="text-xl font-bold">{title}</span>
          </div>
        )}
        {category && (
          <div className="absolute top-3 left-3 bg-esed-orange text-white text-sm font-medium py-1 px-2 rounded">
            {category}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {duration && (
            <span className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded">
              {duration}
            </span>
          )}
          {format && (
            <span className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded">
              {format}
            </span>
          )}
        </div>
        
        <Link 
          to={`/formation/${slug}`}
          className="btn-outline w-full text-center"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
