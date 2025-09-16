import * as React from "react";

type AppDevIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const AppDevIcon: React.FC<AppDevIconProps> = ({
  size = 81,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 81 81"
    className={`transition-all duration-500 ease-in ${className}`}
    {...props}
  >
    {/* Background */}
    <rect
      width="80"
      height="80"
      x="0.5"
      y="0.873"
      rx="33.5"
      className="text-fill-blue-brand fill-current transition-all duration-500 ease-in"
    />
    {/* Icon */}
    <path
      className="fill-blue-brand stroke-current text-white transition-all duration-500 ease-in hover:fill-white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      d="M34.75 29.373h11.5m-19.55-2.3v27.6a4.6 4.6 0 0 0 4.6 4.6h18.4a4.6 4.6 0 0 0 4.6-4.6v-27.6a4.6 4.6 0 0 0-4.6-4.6H31.3a4.6 4.6 0 0 0-4.6 4.6m13.8 23h.163v.147H40.5z"
    />
  </svg>
);

export default AppDevIcon;
