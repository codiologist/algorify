import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import like_icon from "/public/icons/like-icon.png";
import target_icon from "/public/icons/target-icon.png";
import team_icon from "/public/icons/team-icon.png";

type Feature = {
  id: string; // e.g. "01"
  title: string; // e.g. "Expert Team"
  description: string; // e.g. "Skilled professionals..."
  icon: any; // e.g. Target, ThumbsUp, or custom icon component
  featured?: boolean; // blue card
};

const FEATURES: Feature[] = [
  {
    id: "01",
    title: "Expert Team",
    description: "Skilled professionals delivering scalable digital solutions.",
    icon: team_icon,
  },
  {
    id: "02",
    title: "Efficient Workflow",
    description: "Structured processes for timely project delivery.",
    icon: target_icon,
  },
  {
    id: "03",
    title: "Seamless Execution",
    description: "From concept to launch, we handle it all.",
    icon: like_icon,
    featured: true,
  },
];

const CustomSolution = () => {
  return (
    <div className="container-xl relative top-10 z-50 bg-transparent">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full lg:w-8/12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((item) => {
              const Icon = item.icon;
              const isFeatured = item.featured;

              return (
                <Card
                  key={item.id}
                  className={[
                    "relative h-full rounded-3xl border-0",
                    "transition-colors",
                    isFeatured
                      ? "bg-blue-brand text-white sm:col-span-2 lg:col-span-1"
                      : "bg-white text-black",
                  ].join(" ")}
                >
                  <CardContent className="flex h-full flex-col p-7 md:p-8">
                    {/* top index like "/ 01" */}
                    <span
                      className={[
                        "absolute top-5 left-6 text-xs tracking-wider",
                        isFeatured ? "text-white/70" : "text-black/50",
                      ].join(" ")}
                    >
                      / {item.id}
                    </span>

                    {/* icon */}
                    <div
                      className={[
                        "mb-6 inline-flex size-16 items-center justify-center rounded-full",
                        isFeatured
                          ? "bg-white"
                          : "text-blue-brand bg-blue-brand",
                      ].join(" ")}
                    >
                      {/* <Icon className="size-7" /> */}
                      <Image
                        src={item.icon}
                        alt={item.title}
                        className="h-7 w-7"
                      />
                    </div>

                    {/* title */}
                    <h3
                      className={[
                        "mt-14 text-2xl leading-tight font-semibold",
                        isFeatured ? "text-white" : "text-black",
                      ].join(" ")}
                    >
                      {item.title.split(" ").length > 1 ? (
                        <>
                          {item.title.split(" ").slice(0, -1).join(" ")}{" "}
                          <span
                            className={[
                              isFeatured ? "text-white" : "text-black",
                              "block",
                            ].join(" ")}
                          >
                            {item.title.split(" ").slice(-1)}
                          </span>
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>

                    {/* description */}
                    <p
                      className={[
                        "mt-4 text-sm leading-relaxed",
                        isFeatured ? "text-white/85" : "text-black/70",
                      ].join(" ")}
                    >
                      {item.description}
                    </p>

                    {/* spacer */}
                    <div className="mt-auto" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <div className="pl-0 lg:pl-6">
            <h2 className="text-4xl leading-[1.1] font-normal tracking-tight text-black">
              Custom digital solutions designed to scale your business.
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <Button
                asChild
                className="rounded-full bg-lime-300 px-6 py-6 text-base text-black hover:bg-lime-300/90"
              >
                <Link href="#contact">Try Now</Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="size-12 rounded-full border border-black/10 hover:bg-black/5"
                asChild
              >
                <Link href="#learn-more" aria-label="Learn more">
                  <ArrowUpRight className="size-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSolution;
