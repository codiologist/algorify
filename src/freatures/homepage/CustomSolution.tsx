import { CustomButton } from "@/components/CustomButton";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import like_icon from "/public/icons/like-icon.png";
import target_icon from "/public/icons/target-icon.png";
import team_icon from "/public/icons/team-icon.png";

type Feature = {
  id: string; // e.g. "01"
  title: string; // e.g. "Expert Team"
  description: string; // e.g. "Skilled professionals..."
  icon: StaticImageData; // e.g. Target, ThumbsUp, or custom icon component
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
    <section className="container-xl z-50 bg-transparent px-8 lg:px-0 lg:py-20">
      <div className="flex flex-col items-end gap-4 lg:flex-row">
        {/* Left Column */}
        <div className="w-full lg:order-2 lg:w-4/12">
          <div className="pl-0 lg:pl-6">
            <h2 className="inline-block text-4xl leading-[1.1] font-medium tracking-tight text-black 2xl:text-[48px]">
              Custom
              <Image
                src="/icons/flower-icon.png"
                alt="Icon"
                width={60}
                height={60}
                className="inline"
              />
              <span className="text-blue-brand mr-2">digital solutions</span>
              <span>designed to scale your business.</span>
            </h2>

            <div className="mt-8">
              <Link href="#">
                <CustomButton variant="green">Try Now</CustomButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:order-1 lg:w-8/12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((item) => {
              const isFeatured = item.featured;

              return (
                <Card
                  key={item.id}
                  className={[
                    "relative h-full rounded-3xl border-0 shadow-2xl",
                    "transition-colors",
                    isFeatured
                      ? "bg-blue-brand text-white sm:col-span-2 lg:col-span-1"
                      : "bg-white text-black",
                  ].join(" ")}
                >
                  <CardContent className="flex h-full flex-col gap-4">
                    {/* top index like "/ 01" */}
                    <span
                      className={[
                        "mb-10 text-base tracking-normal lg:mb-20 2xl:mb-24",
                        isFeatured ? "text-white/70" : "text-black/50",
                      ].join(" ")}
                    >
                      / {item.id}
                    </span>

                    {/* icon */}
                    <div
                      className={[
                        "inline-flex size-16 items-center justify-center rounded-full",
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
                        "text-4xl leading-tight font-semibold lg:text-2xl 2xl:text-3xl",
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
                        "text-base leading-tight tracking-wide",
                        isFeatured ? "text-white/85" : "text-black/70",
                      ].join(" ")}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolution;
