import * as React from "react";

interface GoToLinkArrowIconProps extends React.SVGProps<SVGSVGElement> {
  bgColor?: string;
  arrowColor?: string;
  borderColor?: string;
}

const GoToLinkArrowIcon: React.FC<GoToLinkArrowIconProps> = ({
  bgColor = "#131313", // default black
  arrowColor = "#B2F824", // default green
  borderColor = "#131313", // default black
  ...props
}) => {
  const isTransparent =
    bgColor.toLowerCase() === "transparent" || bgColor.toLowerCase() === "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 52 52"
      {...props}
    >
      <rect
        width="51"
        height="51"
        x="0.125"
        y="0.873"
        fill={bgColor}
        rx="25.5"
        stroke={isTransparent ? borderColor : "none"}
        strokeWidth={isTransparent ? 1 : 0}
      />
      <path
        fill={arrowColor}
        fillRule="evenodd"
        d="m21.67 17.89.493.494c.476.476 1.32.77 2.466.876 1.124.104 2.422.016 3.672-.156a34 34 0 0 0 3.278-.633 34 34 0 0 0 1.302-.343l.07-.021.018-.005.004-.002a.7.7 0 0 1 .26-.029.69.69 0 0 1 .553.199.703.703 0 0 1 .035.947l-.086.215c-.086.22-.206.54-.34.935-.268.792-.59 1.877-.808 3.06-.22 1.186-.328 2.441-.191 3.583.136 1.14.512 2.12 1.218 2.824l.493.494-1.006 1.006-.493-.494c-.992-.991-1.451-2.3-1.611-3.635-.16-1.333-.03-2.743.204-4.008.115-.622.256-1.216.403-1.76l-13.589 13.59-.986-.987 14.003-14.003c-.754.165-1.637.335-2.565.463-1.302.179-2.72.281-3.995.163-1.253-.115-2.496-.454-3.315-1.273l-.493-.493z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default GoToLinkArrowIcon;
