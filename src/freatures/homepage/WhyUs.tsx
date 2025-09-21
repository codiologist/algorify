// app/components/WhyUs.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import waveShapeBlue from "/public/wave-shape-blue.png";
import waveShapeLemon from "/public/wave-shape-lemon.png";

/**
 * Data: title, wave image, description
 * You can reorder or add more items and the UI will adapt automatically.
 */
type WaveType = "blue" | "lemon";

type Reason = {
  title: string;
  wave: WaveType; // decides background + wave image size
  description: string;
  // Optional: layout width on large screens
  span?: "wide" | "narrow";
};

const REASONS: Reason[] = [
  {
    title: "Seamless Team Integration",
    wave: "blue",
    description:
      "We work as an extension of your team, understanding your brand’s culture and vision while aligning with business goals. Our collaboration is more than just a service.",
    span: "wide",
  },
  {
    title: "Hassle-Free Execution",
    wave: "lemon",
    description:
      "Say goodbye to micromanagement. Our experienced team delivers high-quality projects with minimal oversight, ensuring efficiency.",
    span: "narrow",
  },
  {
    title: "Beyond Development: Full Support",
    wave: "lemon",
    description:
      "We go beyond building products—we provide a comprehensive digital experience, ensuring a smooth journey from concept to launch.",
    span: "narrow",
  },
  {
    title: "AI-Driven Digital Innovation",
    wave: "blue",
    description:
      "We leverage AI to craft scalable, future-ready, user-centric solutions—from automation to personalization—that set you apart.",
    span: "wide",
  },
];

const waveConfig = {
  blue: {
    img: waveShapeBlue,
    bg: "bg-[#F0F4FF]",
    waveWidth: "w-[225px] lg:w-[300px]",
  },
  lemon: {
    img: waveShapeLemon,
    bg: "bg-[#F8FFEA]",
    waveWidth: "w-[200px] lg:w-[225px]",
  },
} as const;

const WhyUs = () => {
  return (
    <section className="container-xl relative py-20 !pb-0 xl:py-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-0">
        <div className="w-full lg:w-1/2">
          <h2 className="inline-block text-4xl leading-[1.1] font-medium tracking-tight text-black 2xl:text-[48px]">
            <span className="block">4 Reasons to Partner </span>
            <span className="mr-2">
              with{" "}
              <Image
                src="/icons/flower-icon.png"
                alt="Algorify icon"
                width={60}
                height={60}
                className="inline"
              />{" "}
              Algorify
            </span>
          </h2>
        </div>
        <div className="text-left lg:w-1/2 lg:text-right">
          <p className="text-gray w-full text-lg lg:ml-auto lg:w-[300px]">
            We don’t just build digital solutions—we become your strategic
            partner in driving innovation and growth.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mt-20 space-y-6">
        {/* Row 1 */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {REASONS.slice(0, 2).map((item, idx) => {
            const cfg = waveConfig[item.wave];
            const isWide = (item.span ?? "narrow") === "wide";
            return (
              <Card
                key={item.title}
                className={[
                  "relative w-full overflow-hidden border-0 shadow-none",
                  cfg.bg,
                  isWide ? "lg:w-7/12" : "lg:w-5/12",
                ].join(" ")}
              >
                <CardContent>
                  {/* Shape in top right */}
                  <div className="absolute top-0 right-0 z-10">
                    <Image
                      src={cfg.img}
                      alt="Wave Shape"
                      className={`h-auto ${cfg.waveWidth}`}
                      priority={idx === 0}
                    />
                  </div>
                  <div className="relative z-20">
                    <p className="font-medium">{`/ ${String(idx + 1).padStart(2, "0")}`}</p>
                    <h3 className="mt-60 mb-12 w-full text-4xl font-medium lg:mt-44 xl:w-[300px]">
                      {item.title}
                    </h3>
                    <p className="text-gray w-full xl:w-[450px]">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {REASONS.slice(2).map((item, i) => {
            const idx = i + 2; // continue numbering
            const cfg = waveConfig[item.wave];
            const isWide = (item.span ?? "narrow") === "wide";
            return (
              <Card
                key={item.title}
                className={[
                  "relative w-full overflow-hidden border-0 shadow-none",
                  cfg.bg,
                  isWide ? "lg:w-7/12" : "lg:w-5/12",
                ].join(" ")}
              >
                <CardContent>
                  <div className="absolute top-0 right-0 z-10">
                    <Image
                      src={cfg.img}
                      alt="Wave Shape"
                      className={`h-auto ${cfg.waveWidth}`}
                    />
                  </div>
                  <div className="relative z-20">
                    <p className="font-medium">{`/ ${String(idx + 1).padStart(2, "0")}`}</p>
                    <h3 className="mt-60 mb-12 w-full text-4xl font-medium lg:mt-44 xl:w-[300px]">
                      {item.title}
                    </h3>
                    <p className="text-gray w-full xl:w-[450px]">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
