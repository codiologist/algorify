import { HireUsForm } from "@/freatures/hire-us/HireUsForm";
import { Metadata } from "next";
import Image from "next/image";
import hire_us_bg from "/public/hire-us-bg-desktop.png";

export const metadata: Metadata = {
  title: "Hire Us",
  description:
    "Get in touch with us to discuss your project requirements and how we can help.",
  keywords: [
    "Hire Us",
    "Contact",
    "Project Inquiry",
    "Digital Solutions",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Webflow Development",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "AI Solutions",
    "Custom Software",
    "Tech Consultation",
    "Business Solutions",
  ],
};

const HireUs = () => {
  return (
    <div className="page-wrapper">
      <div>
        <Image
          src={hire_us_bg}
          alt="Hire Us Banner"
          className="h-40 w-full object-cover lg:h-auto"
        />
      </div>
      <section className="container-xl relative -mt-20 mb-20 !pb-0 lg:-mt-60 lg:py-20 xl:py-10">
        <div className="flex flex-col gap-10 rounded-2xl bg-white p-6 shadow-2xl lg:flex-row lg:gap-4 lg:p-14">
          <div className="w-full lg:w-4/12">
            <div className="3xl:w-[80%] w-full 2xl:w-[70%]">
              <h2 className="text-4xl leading-[1.2] font-normal tracking-tight text-black 2xl:text-[48px]">
                Turning Your Ideas into{" "}
                <span className="text-blue-brand">Impactful Digital</span>{" "}
                Products
              </h2>
              <div className="mt-6">
                <ul className="list-icon">
                  <li>
                    Skilled professionals delivering scalable digital solutions.
                  </li>
                  <li>Structured processes for timely project delivery.</li>
                  <li>From concept to launch, we handle it all.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 lg:w-8/12 lg:pl-20">
            <HireUsForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireUs;
