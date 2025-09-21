import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import butterfly_icon from "/public/butterfly.png";
import whatsapp_icon from "/public/icons/whatsapp-icon.gif";
import logo_icon from "/public/logo-icon.png";
import bg_watermark from "/public/logo-watermark.png";

const CeoMessage = () => {
  return (
    <section className="container-xl relative py-20 xl:py-20">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left column */}
        <div className="w-full lg:order-2 lg:w-3/12 2xl:w-4/12">
          <Card className="bg-blue-dark relative w-full overflow-hidden shadow-none lg:min-h-[410px]">
            {/* Vertical center */}
            <CardContent className="flex h-full flex-col justify-center text-left">
              <Image
                src="/ceo-avatar.png"
                alt="CEO Image"
                width={100}
                height={100}
                className="mb-8 h-auto w-[100px] rounded-lg"
              />
              <p className="3xl:text-4xl text-2xl font-normal text-white">
                Hello, This is Nazmul Hasan Rasel,{" "}
                <span className="font-semibold">CEO</span> of Algorify. Have an
                <span className="ml-2 font-semibold">idea in mind?</span>
              </p>

              <Link href="#" className="mt-11 flex items-center">
                <Button className="bg-lemon rounded-full text-lg font-medium text-black">
                  Let&apos;s Discuss
                </Button>
                <div className="felx-col flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Image
                    src={whatsapp_icon}
                    alt="WhatsApp Icon"
                    className="h-9 w-9 rounded-full"
                  />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="w-full lg:order-1 lg:w-9/12 2xl:w-8/12">
          <Card className="bg-blue-dark relative h-[700px] w-full overflow-hidden border-0 shadow-none lg:h-[410px]">
            <div className="absolute right-0 bottom-0 opacity-80 lg:top-0 lg:right-auto lg:left-0">
              <Image
                src={bg_watermark}
                alt="CEO Message"
                className="h-50 w-full lg:h-[410px]"
              />
            </div>
            <div className="relative left-5 z-10 lg:absolute lg:top-10 lg:right-10 lg:left-auto">
              <Image
                src={logo_icon}
                alt="Logo Icon"
                className="h-auto w-[60px]"
              />
            </div>
            <div className="absolute bottom-10 left-5 z-10 lg:right-10 lg:bottom-6 lg:left-auto">
              <Image
                src={butterfly_icon}
                alt="Logo Icon"
                className="h-auto w-[120px]"
              />
            </div>

            {/* Vertical center only */}
            <CardContent className="relative z-20 flex h-full text-left text-white lg:items-center">
              <div className="relative">
                <div className="before:absolute before:top-5 before:left-0 before:z-10 before:h-[30px] before:w-[30px] before:bg-[url('/quote-symbol.svg')] before:bg-contain before:bg-no-repeat lg:before:top-0"></div>
                <h2 className="mt-6 w-full max-w-[600px] pl-10 text-[2.8rem] leading-tight font-normal lg:text-4xl lg:text-[3.6rem]">
                  Ready to <span className="font-semibold">Elevate</span> Your
                  Brand&apos;s{" "}
                  <span className="font-semibold">Impact and Drive</span>{" "}
                  Meaningful <span className="font-semibold">Growth?</span>
                </h2>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
