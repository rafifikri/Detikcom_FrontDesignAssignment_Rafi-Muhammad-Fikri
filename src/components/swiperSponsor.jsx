import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import alpha from "@/assets/img/sponsor/alpha-jwc.png";
import gfc from "@/assets/img/sponsor/gfc.png";
import golden from "@/assets/img/sponsor/golden-gate.png";
import insignia from "@/assets/img/sponsor/insignia.png";
import sequoia from "@/assets/img/sponsor/sequoia.png";
import sginnovate from "@/assets/img/sponsor/sginnovate.png";
import wave from "@/assets/img/sponsor/wave-maker.png";
import lima from "@/assets/img/sponsor/500.png";

export default function SwiperComponent() {
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
    <>
      <h1 className="fw-bold text-white my-4">DIDUKUNG OLEH</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
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
    </>
  );
}
