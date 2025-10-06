import BannerTitle from "@/components/page-banner/BannerTitle";
import Banner from "@/components/page-banner/PageBanner";
import Features from "@/freatures/about-us/Features";
import Hero from "@/freatures/about-us/Hero";
import Teams from "@/freatures/about-us/Teams";
import WhyUs from "@/freatures/homepage/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Algorify Labs, our mission, vision, and the team.",
  keywords: [
    "About Us",
    "Company Information",
    "Our Story",
    "Mission and Vision",
    "Team Members",
    "Core Values",
    "Culture",
    "Strategic Design",
    "Digital Success",
    "Scalable Growth",
  ],
};

const AboutUsPage = () => {
  return (
    <div className="page-wrapper">
      <Banner>
        <BannerTitle
          iconBeforeText="The Story,"
          iconAfterText="the mind"
          bottomText="Behind the Magic"
        />
      </Banner>
      <Hero />
      <Features />
      <WhyUs />
      <Teams />
    </div>
  );
};

export default AboutUsPage;
