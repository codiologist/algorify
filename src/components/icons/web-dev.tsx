import * as React from "react";

type WebDevIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const WebDevIcon: React.FC<WebDevIconProps> = ({
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
      className="text-blue-brand fill-current transition-all duration-500 ease-in"
    />
    {/* Icon */}
    <path
      className="fill-current text-white transition-all duration-500 ease-in"
      d="M63.5 57.13a2.24 2.24 0 0 1-2.242 2.243H19.742a2.242 2.242 0 0 1 0-4.485h41.516A2.24 2.24 0 0 1 63.5 57.13m-3.02-8.745a2.24 2.24 0 0 1-2.243 2.242h-35.65a2.24 2.24 0 0 1-2.243-2.242v-23.77a2.24 2.24 0 0 1 2.242-2.242h35.651a2.24 2.24 0 0 1 2.242 2.242zm-35.651-2.242h31.166V26.857H24.829zm13.29-14.697a2.24 2.24 0 0 0-3.151-.352l-4.603 3.678a2.242 2.242 0 0 0 0 3.504l4.603 3.678a2.238 2.238 0 0 0 3.151-.352 2.243 2.243 0 0 0-.352-3.152l-2.41-1.926 2.41-1.926a2.244 2.244 0 0 0 .352-3.152m12.517 3.326-4.603-3.678a2.242 2.242 0 1 0-2.8 3.504l2.411 1.926-2.41 1.926a2.242 2.242 0 0 0 2.8 3.504l4.602-3.678a2.243 2.243 0 0 0 0-3.504"
    />
  </svg>
);

export default WebDevIcon;
