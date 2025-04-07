
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  imageSrc,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col">
      <div className="mb-4 text-esed-orange">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <div className="flex items-center mt-auto">
        {imageSrc ? (
          <div className="mr-4">
            <img
              src={imageSrc}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="mr-4 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-gray-600 font-medium text-xl">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">
            {role}
            {company && ` · ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
