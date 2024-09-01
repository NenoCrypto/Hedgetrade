import React from 'react';
import { iconStyle } from './IconStyles'; // Adjust the import path as needed

export const BullhornIcon: React.FC = () => {
  return (
    <svg
      {...iconStyle}
      fill="#f44336"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M19 1v2H5V1h14zm0 4v2H5V5h14zm0 4v2H5V9h14zm0 4v2H5v-2h14zm0 4v2H5v-2h14zM2 21h18v2H2v-2z" />
    </svg>
  );
};
