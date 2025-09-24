"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import firoj_image from "@/assets/images/teams/firoj-ahmed-robin.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Firoj Ahmed",
    designation: "CEO & Founder",
    image: firoj_image.src,
  },
  {
    id: 2,
    name: "Firoj Ahmed",
    designation: "CEO & Founder",
    image: firoj_image.src,
  },
  {
    id: 3,
    name: "Firoj Ahmed",
    designation: "CEO & Founder",
    image: firoj_image.src,
  },
  {
    id: 4,
    name: "Firoj Ahmed",
    designation: "CEO & Founder",
    image: firoj_image.src,
  },
  {
    id: 5,
    name: "Firoj Ahmed",
    designation: "CEO & Founder",
    image: firoj_image.src,
  },
  {
    id: 6,
    name: "Firoj Ahmed",
    designation: "CEO & Founder",
    image: firoj_image.src,
  },
];

export function TeamCarousel() {
  const swiperRef = useRef<SwiperType>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        {/* <div className="absolute top-1/2 -left-4 z-10 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={isBeginning}
            className="bg-background/80 border-border/50 hover:bg-background rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

       <div className="absolute top-1/2 -right-4 z-10 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={isEnd}
            className="bg-background/80 border-border/50 hover:bg-background rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div> */}

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={false}
          // centeredSlides={true}
          loop={true}
          className="pb-4"
          breakpoints={{
            320: {},
            640: {
              navigation: {
                enabled: false,
              },
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3.5,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="group 3xl:h-[480px] relative h-[450px] w-full cursor-pointer overflow-hidden rounded-2xl pb-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /> */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 6%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                  <h3 className="mb-1 text-2xl font-semibold text-balance">
                    {member.name}
                  </h3>
                  <p className="text-lemon text-sm font-medium">
                    {member.designation}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
