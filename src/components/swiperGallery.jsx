import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "swiper/css";
// import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import galeri1 from "@/assets/img/galeri1.png";
import galeri2 from "@/assets/img/galeri2.png";
import galeri3 from "@/assets/img/galeri3.png";
import galeri4 from "@/assets/img/galeri4.png";

const SwiperGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const images = [
    <img src={galeri1} alt="Galeri 1" />,
    <img src={galeri2} alt="Galeri 2" />,
    <img src={galeri3} alt="Galeri 3" />,
    <img src={galeri4} alt="Galeri 4" />,
  ];

  const handleImageClick = (index) => {
    const newSelectedImages = [...selectedImages];
    const imageIndex = newSelectedImages.indexOf(index);

    if (imageIndex === -1) {
      newSelectedImages.push(index);
    } else {
      newSelectedImages.splice(imageIndex, 1);
    }

    setSelectedImages(newSelectedImages);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col>
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={3}
            freeMode={true}
            watchSlidesVisibility
            watchSlidesProgress
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleImageClick(index)}
                  style={{
                    border: selectedImages.includes(index)
                      ? "2px solid #007bff"
                      : "2px solid #ccc",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default SwiperGallery;
