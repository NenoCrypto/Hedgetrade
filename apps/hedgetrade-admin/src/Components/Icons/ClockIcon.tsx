import React from 'react';

interface ClockIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ClockIcon: React.FC<ClockIconProps> = ({ size = 12, color = '#000000', className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 8V12L14.5 14.5"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

