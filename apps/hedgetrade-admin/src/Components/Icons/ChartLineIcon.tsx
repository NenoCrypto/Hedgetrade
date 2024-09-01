import React from 'react';
import { iconStyle } from './IconStyles'; // Adjust the import path as needed

export const ChartLineIcon: React.FC = () => {
  return (
    <svg
      {...iconStyle}
      fill="#4caf50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M3 13.5V16h3v-2.5h3V16h3V9h3V5.5H6.5V9h3V5.5H3z" />
    </svg>
  );
};
