import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxClock,
  RxAccessibility,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Custom Web Development:",
    description: "Building dynamic, responsive websites and applications using React and MongoDB.",
  },
  {
    Icon: RxPencil2,
    title: "Software Solutions:",
    description: "Creating tailored software to meet unique business needs.",
  },
  {
    Icon: RxDesktop,
    title: "Consulting & Strategy:",
    description: "Offering guidance on technology stacks, project planning, and implementation.",
  },
  {
    Icon: RxReader,
    title: "Open-Source Contributions:",
    description: "Collaborating on and contributing to open-source projects",
  },
  {
    Icon: RxClock,
    title: "Cloud Solutions:",
    description: "Implementing and managing cloud-based solutions for scalability and efficiency.",
  },
  {
    Icon: RxAccessibility,
    title: "API Integration:",
    description: "Seamlessly integrating third-party APIs to enhance functionality and connectivity.",
  },
  {
    Icon: RxRocket,
    title: "Mobile App Development:",
    description: "Creating intuitive and user-friendly mobile applications for various platforms.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
