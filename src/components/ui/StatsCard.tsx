
import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {icon && <div className="text-esed-blue mb-3">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-esed-blue mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;
