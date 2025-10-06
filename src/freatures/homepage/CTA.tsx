import { CustomButton } from "@/components/CustomButton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import blue_shape_mobile from "/public/cta-blue-shape-mobile.png";
import blue_shape from "/public/cta-blue-shape.png";
import curve_shape_mobile from "/public/cta-curve-shape-mobile.png";
import curve_shape_desktop from "/public/cta-curve-shape.png";
import text_animation from "/public/text-animation-2.gif";

const CTA = () => {
  return (
    <section className="container-xl relative overflow-hidden rounded-xl px-1 py-0 lg:py-10">
      <Card className="relative gap-0 overflow-hidden rounded-2xl bg-white p-0 pb-20 shadow-none lg:min-h-[450px] lg:border-0">
        <p className="absolute top-42 left-5 z-10 text-base font-medium lg:top-4">
          Find the Best <span className="text-[#B5B5B5]">Service</span> at
        </p>
        <p className="absolute right-5 bottom-4 z-10 text-base font-medium text-[#676767]">
          Discover Your Potential
        </p>
        <div className="absolute top-0 left-0 opacity-60">
          <Image
            src={curve_shape_desktop}
            className="hidden h-auto w-[670px] lg:block"
            alt="Shape"
          />
          <Image
            src={curve_shape_mobile}
            className="block h-auto w-[670px] lg:hidden"
            alt="Shape"
          />
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src={blue_shape}
            className="hidden h-auto w-[350px] lg:block"
            alt="Shape"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={blue_shape_mobile}
            className="ml-auto h-auto w-[200px]"
            alt="Shape"
          />
        </div>
        <CardContent className="relative z-20 pl-5">
          <div className="lg:pt-14 lg:pl-6">
            <h2 className="flex items-center gap-x-2 text-5xl leading-tight font-semibold lg:mt-6">
              Be{" "}
              <Image
                src={text_animation}
                alt="Animation"
                className="hidden h-[45px] w-[100px] rounded-full lg:inline"
              />{" "}
              <span className="text-lemon">Visionary</span>
            </h2>
            <h2 className="flex items-center gap-x-2 text-5xl leading-tight font-semibold">
              <span className="text-gray">Be</span> Dynamic
              <Image
                src="/icons/flower-icon.svg"
                alt="Icon"
                width={65}
                height={65}
                className="inline"
              />
            </h2>
            <h2 className="lex items-center gap-x-2 text-5xl leading-tight font-semibold">
              Build with
              <Image
                src="/algorify-logo.svg"
                alt="Icon"
                width={200}
                height={65}
                className="ml-0 inline lg:ml-3"
              />
            </h2>
            <div className="mt-10 text-center lg:text-left">
              <Link href="#" className="inline-block">
                <CustomButton variant="lemon">Start Now</CustomButton>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CTA;
