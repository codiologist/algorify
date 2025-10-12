import BannerTitle from "@/components/page-banner/BannerTitle";
import Banner from "@/components/page-banner/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Join our team and be part of a dynamic company that values innovation, collaboration, and growth. Explore exciting career opportunities with us.",
  keywords: ["Career Opportunities", "Career Opportunities with Algorify Labs"],
};

const CareerPage = () => {
  return (
    <div className="page-wrapper">
      <Banner>
        <BannerTitle
          iconBeforeText="Be"
          iconAfterText="Part of"
          bottomText="Our Team"
        />
      </Banner>
      <section className="container-xl relative py-20 xl:py-30">
        <h1 className="text-blue-brand text-center text-xl leading-relaxed font-semibold lg:text-6xl">
          Right now, we don&apos;t have any open positions. <br /> Please check
          back later.
        </h1>
      </section>
    </div>
  );
};

export default CareerPage;
