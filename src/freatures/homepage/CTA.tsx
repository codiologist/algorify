import { CustomButton } from "@/components/CustomButton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import text_animation from "/public/text-animation-2.gif";

const CTA = () => {
  return (
    <section className="container-xl relative py-20 xl:py-10">
      <div
        className={[
          "relative overflow-hidden rounded-2xl",
          "before:absolute before:top-0 before:left-0 before:content-['']",
          "before:h-[650px] before:w-[660px]",
          "before:bg-[url('/cta-curve-shape.png')] before:bg-contain before:bg-no-repeat",
          "before:pointer-events-none before:z-10 before:opacity-100",
          "after:absolute after:-top-0 after:right-0 after:content-['']",
          "after:h-[380px] after:w-[380px]",
          "after:bg-[url('/cta-blue-shape.png')] after:bg-contain after:bg-no-repeat",
          "after:pointer-events-none",
        ].join(" ")}
      >
        <p className="absolute top-4 left-5 z-10 text-base font-medium">
          Find the Best <span className="text-[#B5B5B5]">Service</span> at
        </p>
        <p className="absolute right-5 bottom-2 z-10 text-base font-medium text-[#676767]">
          Discover Your Potential
        </p>
        <Card className="relative flex min-h-[450px] flex-col justify-center border-0 bg-white">
          <CardContent className="relative z-20 space-y-2 pl-10">
            <h2 className="mt-6 flex items-center gap-x-2 text-5xl leading-tight font-semibold">
              Be{" "}
              <Image
                src={text_animation}
                alt="Animation"
                className="h-[45px] w-[100px] rounded-full"
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
                className="ml-3 inline"
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
