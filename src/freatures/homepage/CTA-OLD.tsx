import { CustomButton } from "@/components/CustomButton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import text_animation from "/public/text-animation-2.gif";

const CTA = () => {
  return (
    <section className="container-xl relative overflow-hidden rounded-xl px-1 py-0 lg:py-10">
      <div
        className={[
          "relative overflow-hidden rounded-xl",
          "before:absolute before:top-1 before:left-1 before:content-['']",
          "before:h-[750px] before:w-[430px] lg:before:h-[650px] lg:before:w-[660px]",
          "before:bg-[url('/cta-curve-shape-mobile.png')] before:bg-contain before:bg-no-repeat lg:before:bg-[url('/cta-curve-shape.png')]",
          "before:pointer-events-none before:z-10 before:opacity-100",
          "after:absolute after:top-1 after:right-1 after:content-['']",
          "after:h-[480px] after:w-[410px] lg:after:w-[380px] xl:after:h-[360px]",
          "after:bg-fill after:bg-[url('/cta-blue-shape-mobile2.png')] after:bg-contain after:bg-no-repeat lg:after:bg-[url('/cta-blue-shape.png')]",
          "after:pointer-events-none",
        ].join(" ")}
      >
        <p className="absolute top-42 left-5 z-10 text-base font-medium lg:top-4">
          Find the Best <span className="text-[#B5B5B5]">Service</span> at
        </p>
        <p className="absolute right-5 bottom-4 z-10 text-base font-medium text-[#676767]">
          Discover Your Potential
        </p>
        <Card className="relative m-1 flex min-h-[450px] flex-col justify-center border-1 border-gray-200 bg-white lg:border-0">
          <CardContent className="relative z-20 space-y-2 pt-44 pb-10 pl-4 lg:pt-0 lg:pb-0 lg:pl-10">
            <h2 className="mt-6 flex items-center gap-x-2 text-5xl leading-tight font-semibold">
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
                src="/icons/flower-icon.png"
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
            <div className="mt-10">
              <Link href="#" className="mt-6">
                <CustomButton variant="green">Start Now</CustomButton>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
