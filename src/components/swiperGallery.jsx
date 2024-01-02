import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/styles/swiper.css";

import galeri1 from "@/assets/img/gallery/galeri1.png";
import galeri2 from "@/assets/img/gallery/galeri2.png";
import galeri3 from "@/assets/img/gallery/galeri3.png";
import galeri4 from "@/assets/img/gallery/galeri4.png";

export default function SwiperGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [galeri1, galeri2, galeri3, galeri4];

  const handleImageClick = (index) => {
    if (mainSwiper && thumbsSwiper) {
      mainSwiper.slideTo(index);
      setSelectedImageIndex(index);
    }
  };

  return (
    <div className="swiper-gallery">
      <Container>
        <Row>
          <Col>
            <h1
              className="fw-bold"
              style={{ marginBottom: "50px", marginTop: "-10rem" }}
            >
              GALERI SUDIRMAN RUN 2022
            </h1>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
              className="mySwiper2"
              onSwiper={setMainSwiper}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    onClick={() => handleImageClick(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col className="pt-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    style={{ opacity: selectedImageIndex === index ? 1 : 0.4 }}
                    onClick={() => handleImageClick(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
