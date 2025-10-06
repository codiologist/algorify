import BannerTitle from "@/components/page-banner/BannerTitle";
import Banner from "@/components/page-banner/PageBanner";
import ServiceCard from "@/freatures/services/ServiceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Get in touch with us to discuss your project requirements and how we can help.",
  keywords: [
    "Services",
    "Algorify Services",

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

const ServicePage = () => {
  return (
    <div className="page-wrapper">
      <Banner>
        <BannerTitle
          iconBeforeText="Your Idea"
          iconAfterText="Into"
          bottomText="Excellent Product"
        />
      </Banner>
      <section className="container-lg no-repeat relative py-10 xl:py-15">
        <ServiceCard />
      </section>
    </div>
  );
};

export default ServicePage;
