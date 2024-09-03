import React, { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const withIconProps = (
  IconComponent: React.FC<SVGProps<SVGSVGElement>>
): React.FC<IconProps> => {
  return ({
    size = 12,
    color = '#fff',
    className,
    onClick,
    ...props
  }) => {
    return (
      <IconComponent
        width={size}
        height={size}
        fill={color}
        className={className}
        onClick={onClick}
        {...props}
      />
    );
  };
};

export default withIconProps;
