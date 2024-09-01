import React, { SVGProps } from 'react';

export const WalletIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 7V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2"></path>
      <path d="M22 7H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      <path d="M16 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
    </svg>
  );
};
