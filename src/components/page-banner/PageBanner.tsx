import Image from "next/image";
import { ReactNode } from "react";
import banner_bg from "/public/page-banner-bg.png";
import wave_shape from "/public/wave-shape-purple-2.png";

interface BannerProps {
  children?: ReactNode;
}

const Banner = ({ children }: BannerProps) => {
  return (
    <section className="relative w-full overflow-hidden lg:h-auto">
      <div className="absolute top-0 left-0">
        <Image
          src={wave_shape}
          alt="Shape"
          className="3xl:w-80 h-auto w-22 lg:w-70"
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src={wave_shape}
          alt="Shape"
          className="3xl:w-80 h-auto w-22 rotate-180 lg:w-70"
        />
      </div>
      <div>
        <Image
          src={banner_bg}
          alt="Banner Background"
          width={1920}
          height={300}
          className="3xl:h-[400px] h-[300px] w-full lg:h-[350px]"
        />
      </div>
      {children}
    </section>
  );
};

export default Banner;
