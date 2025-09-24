// BannerTitle.tsx
import Image from "next/image";

interface BannerTitleProps {
  iconBeforeText: string;
  iconAfterText: string;
  bottomText: string;
}

export default function BannerTitle({
  iconBeforeText,
  iconAfterText,
  bottomText,
}: BannerTitleProps) {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 flex h-full w-full flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-4xl leading-tight font-medium lg:text-6xl">
        <span>{iconBeforeText}</span>
        <Image
          src="/icons/flower-icon.svg"
          alt="Flower Icon"
          width={80}
          height={80}
          className="inline-block h-auto w-10 lg:w-20"
        />
        <span>{iconAfterText}</span>
      </h2>
      <h2 className="text-4xl leading-tight font-medium lg:text-6xl">
        {bottomText}
      </h2>
    </div>
  );
}
