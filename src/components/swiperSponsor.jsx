import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import alpha from "@/assets/img/alpha-jwc.png";
import gfc from "@/assets/img/gfc.png";
import golden from "@/assets/img/golden-gate.png";
import insignia from "@/assets/img/insignia.png";
import sequoia from "@/assets/img/sequoia.png";
import sginnovate from "@/assets/img/sginnovate.png";
import wave from "@/assets/img/wave-maker.png";
import lima from "@/assets/img/500.png";

const SwiperComponent = () => {
  const slideContent = [
    <img src={alpha} alt="Alpha" />,
    <img src={gfc} alt="GFC" />,
    <img src={golden} alt="Golden Gate" />,
    <img src={insignia} alt="Insignia" />,
    <img src={sequoia} alt="Sequoia" />,
    <img src={sginnovate} alt="SG Innovate" />,
    <img src={wave} alt="Wave Maker" />,
    <img src={lima} alt="500" />,
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {slideContent.map((content, index) => (
        <SwiperSlide
          key={index}
          className="bg-white py-3 d-flex align-items-center justify-content-center rounded-4"
          style={{ width: "15rem", height: "8rem" }}
        >
          {content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
