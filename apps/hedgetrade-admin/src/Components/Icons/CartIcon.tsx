import React, { SVGProps } from 'react';

export const CartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l1.68 7.39a1 1 0 0 0 .72.61l12.88 2.3a1 1 0 0 0 1.1-.69l3.32-9.97"></path>
      <path d="M6 14h14v6H6z"></path>
    </svg>
  );
};
