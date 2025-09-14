import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        transparent:
          "bg-transparent hover:bg-transparent text-black font-medium text-base border-2 border-black hover:border-black ",
        green: "bg-green-400 text-black hover:bg-green-400 ",
        dark: "bg-[#050505] text-white hover:bg-[#050505] border-2 border-white",
      },
      size: {
        default: "h-12 px-9 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-14 px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "transparent",
      size: "default",
    },
  },
);

const arrowVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors",
  {
    variants: {
      variant: {
        transparent: "bg-black text-white",
        green: "bg-black text-white",
        "green-blue": "bg-transparent text-blue-600",
        dark: "bg-[#B2F824] text-[#050505]",
      },
      size: {
        default: "h-11 w-11",
        sm: "h-8 w-8",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "transparent",
      size: "default",
    },
  },
);

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
  arrowVariant?: VariantProps<typeof arrowVariants>["variant"];
  arrowSize?: VariantProps<typeof arrowVariants>["size"];
}

const ArrowIcon = ({
  className,
  backgroundFill = "#131313",
  arrowFill = "#B2F824",
}: {
  className?: string;
  backgroundFill?: string;
  arrowFill?: string;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="52"
    fill="none"
    viewBox="0 0 52 52"
  >
    <rect
      width="51"
      height="51"
      x="0.125"
      y="0.873"
      fill={backgroundFill}
      rx="25.5"
    ></rect>
    <path
      fill={arrowFill}
      fillRule="evenodd"
      d="m21.67 17.89.493.494c.476.476 1.32.77 2.466.876 1.124.104 2.422.016 3.672-.156a34 34 0 0 0 3.278-.633 34 34 0 0 0 1.302-.343l.07-.021.018-.005.004-.002a.7.7 0 0 1 .26-.029.69.69 0 0 1 .553.199.703.703 0 0 1 .035.947l-.086.215c-.086.22-.206.54-.34.935-.268.792-.59 1.877-.808 3.06-.22 1.186-.328 2.441-.191 3.583.136 1.14.512 2.12 1.218 2.824l.493.494-1.006 1.006-.493-.494c-.992-.991-1.451-2.3-1.611-3.635-.16-1.333-.03-2.743.204-4.008.115-.622.256-1.216.403-1.76l-13.589 13.59-.986-.987 14.003-14.003c-.754.165-1.637.335-2.565.463-1.302.179-2.72.281-3.995.163-1.253-.115-2.496-.454-3.315-1.273l-.493-.493z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      showArrow = true,
      arrowVariant,
      arrowSize,
      children,
      ...props
    },
    ref,
  ) => {
    // Determine arrow variant based on button variant if not explicitly set
    const resolvedArrowVariant =
      arrowVariant ||
      (variant === "green"
        ? "green"
        : variant === "dark"
          ? "dark"
          : "transparent");

    const getArrowColors = (variant: string) => {
      switch (variant) {
        case "transparent":
          return { backgroundFill: "#000000", arrowFill: "#B2F824" };
        case "green":
          return { backgroundFill: "#000000", arrowFill: "#B2F824" };
        case "green-blue":
          return { backgroundFill: "#ffffff", arrowFill: "#2563eb" };
        case "dark":
          return { backgroundFill: "#B2F824", arrowFill: "#050505" };
        default:
          return { backgroundFill: "#131313", arrowFill: "#B2F824" };
      }
    };

    const arrowColors = getArrowColors(resolvedArrowVariant);

    const buttonContent = (
      <div className="group flex cursor-pointer items-center gap-1">
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {variant === "transparent" && (
            <>
              <span className="absolute inset-0 h-full w-full bg-transparent"></span>
              <span className="bg-lemon absolute top-0 right-0 block h-64 w-64 origin-top-left -translate-x-6 rotate-50 transform rounded-full transition duration-700 ease-in-out group-hover:-rotate-21"></span>
            </>
          )}
          <span className="relative z-10">{children}</span>
        </button>
        {showArrow && (
          <div
            className={cn(
              arrowVariants({
                variant: resolvedArrowVariant,
                size: arrowSize || size,
              }),
            )}
          >
            <ArrowIcon
              backgroundFill={arrowColors.backgroundFill}
              arrowFill={arrowColors.arrowFill}
            />
          </div>
        )}
      </div>
    );

    return buttonContent;
  },
);
CustomButton.displayName = "CustomButton";

export { arrowVariants, buttonVariants, CustomButton };
