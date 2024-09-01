import React from 'react';
import { iconStyle } from './IconStyles'; // Adjust the import path as needed

export const DatabaseIcon: React.FC = () => {
  return (
    <svg
      {...iconStyle}
      fill="#9c27b0"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 5c-3.31 0-6 1.79-6 4s2.69 4 6 4 6-1.79 6-4-2.69-4-6-4zm0 6c-2.21 0-4-1.11-4-2.5S9.79 6 12 6s4 1.11 4 2.5-1.79 2.5-4 2.5zM4 14c-2.21 0-4 1.79-4 4s1.79 4 4 4h16c2.21 0 4-1.79 4-4s-1.79-4-4-4H4zM4 16h16c1.1 0 2 .9 2 2s-.9 2-2 2H4c-1.1 0-2-.9-2-2s.9-2 2-2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2H4c-1.1 0-2-.9-2-2s.9-2 2-2zm16-2h2v-2h-2v2zm0-4h2v-2h-2v2zm-8-8c-5.52 0-10 4.48-10 10 0 3.1 1.45 5.9 3.71 7.68-.06-.27-.11-.55-.11-.84 0-3.31 2.69-6 6-6s6 2.69 6 6c0 .29-.05.57-.11.84 2.26-1.78 3.71-4.58 3.71-7.68 0-5.52-4.48-10-10-10z" />
    </svg>
  );
};
