import * as React from "react";

type WebflowIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const WebflowIcon: React.FC<WebflowIconProps> = ({
  size = 81,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 81 81"
    width={size}
    height={size}
    className={`transition-all duration-500 ease-in ${className}`}
    {...props}
  >
    {/* Background */}
    <rect
      width="80"
      height="80"
      x="0.5"
      y="0.87"
      rx="33.5"
      ry="33.5"
      className="text-blue-brand fill-current transition-all duration-500 ease-in"
    />
    {/* Icon */}
    <path
      className="fill-current text-white transition-all duration-500 ease-in"
      d="M51.37 34.02s-3.66 11.46-3.93 12.43c-.11-.97-2.77-21.57-2.77-21.57-6.24 0-9.56 4.42-11.31 9.14 0 0-4.44 11.5-4.8 12.48-.02-.91-.68-12.35-.68-12.35-.38-5.75-5.62-9.24-9.88-9.24l5.12 31.21c6.53-.02 10.04-4.44 11.88-9.14 0 0 3.91-10.15 4.08-10.62.04.44 2.81 19.75 2.81 19.75 6.53 0 10.07-4.14 11.97-8.67L63 24.88c-6.47 0-9.88 4.42-11.63 9.14"
    />
  </svg>
);

export default WebflowIcon;
