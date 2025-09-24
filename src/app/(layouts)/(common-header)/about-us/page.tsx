import BannerTitle from "@/components/page-banner/BannerTitle";
import Banner from "@/components/page-banner/PageBanner";
import Features from "@/freatures/about-us/Features";
import Hero from "@/freatures/about-us/Hero";
import Teams from "@/freatures/about-us/Teams";
import WhyUs from "@/freatures/homepage/WhyUs";

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
