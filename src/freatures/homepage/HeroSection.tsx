import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";
import bg_animation from "/public/hero-bg-animation.png";
import bg_mobile from "/public/mobile-hero-bg.png";
import bg_desktop from "/public/plus-grid-frame.png";
// import bg from "/public/hero-bg-animation.png";

import Link from "next/link";
import circle_badge from "/public/animated-circle.png";
import sparkle_blue from "/public/sparkle-blue.svg";
import sparkle_green from "/public/sparkle-green.png";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative w-full">
        <Image src={bg_desktop} className="hidden w-full lg:block" alt="" />
        <Image src={bg_mobile} className="blcok w-full lg:hidden" alt="" />
        {/* <Image
          src={plus_grid}
          className="relative top-0 h-auto w-full"
          alt=""
          /> */}
      </div>
      <div className="absolute top-0 right-0 left-0 z-0 hidden w-full lg:block">
        <Image src={bg_animation} className="w-full" alt="" />
      </div>
      <div className="absolute top-20 right-0 left-0 z-50 flex flex-col justify-center lg:items-start xl:top-35 xl:items-center 2xl:top-55">
        {/* Main Content */}
        <div className="mx-auto w-full text-center xl:max-w-4xl">
          <h1 className="text-foreground mb-8 text-[40px] leading-[3.3rem] font-semibold text-balance xl:text-6xl xl:leading-tight 2xl:text-[5.5rem] 2xl:leading-[100px]">
            Your vision{" "}
            <span className="text-gray">
              our <br /> Innovation
            </span>{" "}
            crafting
            <br />
            digital experiences
          </h1>

          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty"> */}
          <p className="xl:px-28 xl:text-xl xl:leading-[36px] 2xl:px-6 2xl:text-2xl">
            Empowering brands with seamless digital experiences that drive
            engagement and success. From intuitive UI/UX to innovative web and
            app solutions, we craft experience that make an impact.
          </p>

          <div className="mt-10 flex items-center justify-center 2xl:mt-14">
            <Link href="/hire-us">
              <CustomButton variant="transparent">Request a Demo</CustomButton>
            </Link>
          </div>
        </div>

        {/* <div className="relative top-50 block px-10 lg:hidden">
          <CustomSolution />
        </div> */}
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-5 right-4 xl:top-27 xl:right-20 2xl:right-35">
        <Image
          src={sparkle_blue}
          alt="Stars"
          className="h-auto w-14 xl:w-30 2xl:w-34"
        />
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-87 left-3 xl:top-125 xl:left-25 2xl:top-160 2xl:left-40">
        <Image
          src={sparkle_green}
          alt="Stars"
          className="h-auto w-14 xl:w-24 2xl:w-32"
        />
      </div>

      {/* Animated Circle Badge Stars */}
      <div className="absolute top-130 right-5 h-24 w-24 xl:top-140 xl:right-20 2xl:top-180 2xl:right-40">
        <div className="border-foreground flex h-full w-full items-center justify-center rounded-full border-2">
          <Image
            src={circle_badge}
            className="animate-spin-badge h-full w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
