import Image from "next/image";
import Marquee from "react-fast-marquee";

const serviceTagsList = [
  "Web Development",
  "UI/UX Design",
  "App Development",
  "Webflow ",
  "E-commerce Solutions",
  "Digital Marketing",
  "SEO Optimization",
];

const ServiceTags = () => {
  return (
    <>
      <section className="container-xl tag-loop-scroll w-full py-10">
        <Marquee>
          <div className="group mr-16 flex space-x-16 overflow-hidden text-lg font-medium text-gray-700">
            {serviceTagsList.map((tag, idx) => (
              <div
                key={idx}
                className="animate-tag-loop-scroll flex items-center whitespace-nowrap"
              >
                <Image
                  src="/icons/asterisk-icon.svg"
                  alt="Check Icon"
                  width={40}
                  height={40}
                  className="mr-2 inline h-auto w-10"
                />
                <p className="text-5xl font-semibold uppercase">{tag}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default ServiceTags;
