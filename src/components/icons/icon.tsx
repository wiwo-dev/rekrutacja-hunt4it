import React from 'react';

interface IconProps {
  name: string; // Name of the SVG component
  color?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = 'currentColor',
  size = 24,
  className,
}) => {
  const SvgIcon = require(`public/icons/${name}.svg`).default;

  const iconElement = (
    <SvgIcon
      height={size}
      width={size}
      fill={color}
      stroke={color}
      strokeWidth={0}
      className={className}
    />
  );

  return <>{iconElement}</>;
};

export default Icon;
