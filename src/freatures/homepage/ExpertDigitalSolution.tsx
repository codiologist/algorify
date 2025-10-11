// components/ExpertDigitalSolution.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import AppDevIcon from "@/components/icons/app-dev-icon";
import GoToLinkArrowIcon from "@/components/icons/go-to-link";
import UIUXIcon from "@/components/icons/ux-ui-icon";
import WebDevIcon from "@/components/icons/web-dev";
import WebflowIcon from "@/components/icons/webflow-icon";

import wave_shape from "/public/wave-shape-large.png";

type IconProps = { className?: string };
type SolutionItem = {
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<IconProps>;
  iconClassName?: string; // optional per-card override
};

const iconBaseClass =
  "[&>rect]:text-blue-brand [&>path]:text-white group-hover:[&>path]:text-black group-hover:[&>rect]:text-white";

const solutions: SolutionItem[] = [
  {
    title: "UI/UX Design",
    description:
      "Visually stunning and user-centric designs that enhance engagement and usability.",
    href: "/services",
    Icon: UIUXIcon,
  },
  {
    title: "Web Development",
    description:
      "Custom-built, scalable, and high-performance websites designed for seamless user experiences.",
    href: "/services",
    Icon: WebDevIcon,
  },
  {
    title: "App Development",
    description:
      "Robust and feature-rich mobile applications tailored for a smooth and intuitive experience.",
    href: "/services",
    Icon: AppDevIcon,
    iconClassName:
      "[&>rect]:text-blue-brand [&>path]:text-white group-hover:[&>path]:fill-white group-hover:[&>path]:text-black group-hover:[&>rect]:text-white",
  },
  {
    title: "Webflow Development",
    description:
      "Pixel-perfect, no-code Webflow solutions for modern and dynamic websites.",
    href: "/services",
    Icon: WebflowIcon,
  },
];

export default function ExpertDigitalSolution() {
  return (
    <section className="container-xl relative py-20 xl:py-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-0">
        <div className="w-full lg:w-1/2">
          <h2 className="inline-block text-4xl leading-[1.1] font-medium tracking-tight text-black 2xl:text-[48px]">
            <span className="block">Discover Our</span>
            <span className="text-blue-brand mr-2">
              Expert{" "}
              <Image
                src="/icons/flower-icon.svg"
                alt="Gear Icon"
                width={60}
                height={60}
                className="inline"
              />{" "}
              Digital
            </span>
            <span className="block">Solutions</span>
          </h2>
        </div>
        <div className="text-left lg:w-1/2 lg:text-right">
          <p className="text-gray w-full text-lg lg:ml-auto lg:w-[300px]">
            We craft innovative, high-performance digital experiences that drive
            business success.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {solutions.map(({ Icon, title, description, href, iconClassName }) => (
          <div key={title}>
            <Card className="group hover-bg-blue-brand relative overflow-hidden rounded-xl border-0 bg-[#F8FFEA] text-black shadow-none transition-all duration-500 ease-in hover:bg-black hover:text-white">
              <CardContent>
                {/* Shape in top right */}
                <div className="absolute top-0 right-0">
                  <Image
                    src={wave_shape}
                    alt="Wave Shape"
                    className="h-auto w-36 origin-top-right transform transition-transform duration-500 ease-in group-hover:scale-140 lg:group-hover:scale-170"
                  />
                </div>

                {/* Icon */}
                <div>
                  <Icon className={iconClassName ?? iconBaseClass} />
                </div>

                {/* Animate margin top */}
                <div className="mt-32 transition-all duration-500 ease-in group-hover:mt-40">
                  <h2 className="mb-6 text-4xl font-medium">{title}</h2>
                  <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                    <p className="w-full 2xl:w-[500px]">{description}</p>
                    <div>
                      <Link href={href} className="inline-block">
                        <GoToLinkArrowIcon
                          className="h-11 w-11 rounded-full group-hover:border-2 group-hover:[&>path]:fill-white"
                          bgColor="transparent"
                          arrowColor="black"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
