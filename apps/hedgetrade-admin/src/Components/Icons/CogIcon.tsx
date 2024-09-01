import React from 'react';
import { iconStyle } from './IconStyles'; // Adjust the import path as needed

export const CogIcon: React.FC = () => {
  return (
    <svg
      {...iconStyle}
      fill="#9c27b0"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 3v2h-2V3h2zm0 4v2h-2V7h2zm0 4v2h-2v-2h2zm0 4v2h-2v-2h2zm-4-6v2H6v-2h2zm4-4v2h-2V5h2zm-4 8v2H6v-2h2zm4-4v2h-2v-2h2zm4-4v2h-2V7h2zM5 5v2H3V5h2zm2 12v2H5v-2h2zm12-2v2h-2v-2h2zM7 3v2H5V3h2zm12 0v2h-2V3h2z" />
    </svg>
  );
};
