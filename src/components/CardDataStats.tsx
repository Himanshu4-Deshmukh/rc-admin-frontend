import React from 'react';
import PropTypes from 'prop-types';

const CardDataStats = ({ title, total, rate, levelUp, children, onClick, borderColor }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
      style={{ borderBottom: `4px solid ${borderColor}` }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-gray-600 font-medium">{title}</h5>
          <p className="text-2xl font-semibold text-black">{total}</p>
          {/* {rate && (
            <div className={`flex items-center ${levelUp ? 'text-green-500' : 'text-red-500'}`}>
              {levelUp ? '▲' : '▼'} {rate}
            </div>
          )} */}
        </div>
        <div className="text-gray-400">{children}</div>
      </div>
    </div>
  );
};

CardDataStats.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  rate: PropTypes.string,
  levelUp: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  borderColor: PropTypes.string,
};

CardDataStats.defaultProps = {
  rate: '',
  levelUp: false,
  children: null,
  onClick: () => {},
  borderColor: '#4F46E5', // Default to indigo if no color is provided
};

export default CardDataStats;
