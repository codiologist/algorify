import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";

import circle_badge from "/public/animated-circle.png";
import sparkle_blue from "/public/sparkle-blue.svg";
import sparkle_green from "/public/sparkle-green.png";

export function Hero() {
  return (
    <section
      className="bg-content relative flex min-h-screen bg-[url('/mobile-hero-bg.png')] bg-no-repeat px-6 py-10 lg:items-center lg:bg-[url('/desktop-hero-bg.png')] lg:bg-cover lg:bg-center xl:py-40 2xl:py-20"
      //   style={{
      //     backgroundImage: "url(/hero-bg.png)",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      {/* Decorative Stars */}
      <div className="absolute top-5 right-4 xl:top-27 xl:right-20 2xl:right-35">
        <Image
          src={sparkle_blue}
          alt="Stars"
          className="h-auto w-14 xl:w-30 2xl:w-34"
        />
      </div>

      <div className="absolute top-87 left-3 xl:top-125 xl:left-25 2xl:top-160 2xl:left-40">
        <Image
          src={sparkle_green}
          alt="Stars"
          className="h-auto w-14 xl:w-24 2xl:w-32"
        />
      </div>

      <div className="absolute top-120 right-5 h-24 w-24 xl:top-147 xl:right-10 2xl:top-220">
        <div className="border-foreground flex h-full w-full items-center justify-center rounded-full border-2">
          <Image
            src={circle_badge}
            className="animate-spin-badge h-full w-full"
            alt=""
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full text-center xl:max-w-4xl">
        <h1 className="text-foreground mb-8 text-4xl leading-[3.5rem] font-semibold text-balance xl:text-6xl xl:leading-tight 2xl:text-[5.5rem] 2xl:leading-[100px]">
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
          engagement and success. From intuitive UI/UX to innovative web and app
          solutions, we craft experience that make an impact.
        </p>

        <div className="mt-10 flex items-center justify-center 2xl:mt-14">
          <CustomButton variant="transparent">Request a Demo</CustomButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
