import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";
import laptop_desktop from "/public/laptop-design-mock-desktop.png";
import laptop_mobile from "/public/laptop-design-mock-mobile.png";

const Hero = () => {
  return (
    <section className="container-xl no-repeat relative mt-20 grid min-h-[820px] grid-cols-1 rounded-[60px] bg-[url('/about-hero-bg-mobile.jpg')] bg-cover bg-bottom-left pb-10 lg:mt-30 lg:min-h-[450px] lg:grid-cols-2 lg:rounded-[50px] lg:bg-[url('/about-hero-bg.jpg')]">
      <div className="h-[300px] lg:h-auto">
        <Image
          src={laptop_desktop}
          className="absolute bottom-0 left-0 hidden lg:block lg:w-3xl lg:rounded-bl-[50px]"
          alt="Laptop Design Mockup"
        />
        <Image
          src={laptop_mobile}
          className="absolute -top-14 left-0 block lg:hidden"
          alt="Laptop Design Mockup"
        />
      </div>

      <div className="space-y-1 p-0 text-right lg:space-y-4 lg:p-10">
        <h1 className="bg-gradient-to-b from-white from-50% to-[#959292] to-100% bg-clip-text text-[2.6rem] font-bold text-transparent lg:text-6xl">
          Strategic Design
        </h1>
        <h1 className="bg-gradient-to-b from-white from-50% to-[#959292] to-100% bg-clip-text text-[2.6rem] font-bold text-transparent lg:text-6xl">
          Digital Success
        </h1>
        <h1 className="bg-gradient-to-b from-white from-40% to-[#c2c1c1] to-100% bg-clip-text text-[2.6rem] font-bold text-transparent lg:text-6xl">
          Scalable Growth
        </h1>
        <div className="mt-10 flex justify-end lg:mt-12">
          <CustomButton
            variant="green"
            arrowVariant="green-black"
            className="text-lg font-medium"
          >
            Book a call
          </CustomButton>
        </div>
      </div>
      <div className="absolute right-10 bottom-14 lg:right-16 lg:bottom-10">
        <Image
          src="/logo-icon.png"
          width={50}
          height={50}
          alt="About Hero Background"
        />
      </div>
    </section>
  );
};

export default Hero;
