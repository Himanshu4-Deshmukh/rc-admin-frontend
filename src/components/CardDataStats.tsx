import React from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, total, rate, levelUp, children, onClick }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-200 cursor-pointer" onClick={onClick}>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="flex items-center justify-between">
        <div>
          {children}
        </div>
        <div className="text-gray-700">
          <div className="text-xl font-bold">{total}</div>
          {/* <div className="flex items-center">
            <span className="text-sm font-medium mr-1">{rate}</span>
            {levelUp ? <span className="text-green-500">&#9650;</span> : <span className="text-red-500">&#9660;</span>}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
