import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import Button from "@/components/button";
import Layout from "@/components/layout";
import SwiperGallery from "@/components/SwiperGallery";
import SwiperSponsor from "@/components/SwiperSponsor";
import brand from "@/assets/img/navbar-brand.png";
import maps from "@/assets/img/maps.png";
import artist from "@/assets/img/artist.png";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Layout>
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
          <Container>
            <Row className="header-box">
              <Col>
                <h1 className="fw-bold">
                  <span style={{ color: "#20409a", fontWeight: 900 }}>
                    SUDIRMAN
                  </span>
                  <br />
                  <span style={{ color: "#27a997", fontWeight: 900 }}>
                    RUN 2023
                  </span>
                </h1>
                <div className="d-flex align-items-center">
                  <p className="mb-0 pe-2" style={{ fontStyle: "italic" }}>
                    Presented by:
                  </p>
                  <img src={brand} alt="detik health" />
                </div>
                <Button label="Tentang Acara" />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="maps">
          <Container>
            <Row>
              <Col>
                <Card
                  style={{
                    width: "35rem",
                    marginBottom: "10px",
                  }}
                  className="rounded-5"
                >
                  <Card.Img variant="top" src={maps} className="p-4" />
                  <Card.Body className="px-4 pb-4">
                    <Card.Title className="fw-bold text-white">
                      10K FUN RUN
                    </Card.Title>
                    <Card.Text className="text-white">
                      Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi
                      hari dimulai dari Bundaran HI hingga Patung Pemuda
                      Membangun di Senayan lalu kembali lagi ke Bundaran HI!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="d-grid justify-content-end">
                <Card
                  style={{
                    width: "35rem",
                    height: "130px",
                    marginBottom: "10px",
                  }}
                  className="rounded-5 bg-success"
                >
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold text-white">
                      GRATIS DAN BERHADIAH
                    </Card.Title>
                    <Card.Text className="text-white">
                      Pendaftaran gratis! Ajak keluarga anda dan menangkan
                      hadiah total puluhan juta rupiah doorprize menarik!
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "35rem",
                    height: "130px",
                    marginBottom: "5px",
                  }}
                  className="rounded-5 bg-success"
                >
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold text-white">
                      50+ TENANT BAZZAR
                    </Card.Title>
                    <Card.Text className="text-white">
                      Dapatkan promo menarik pada booth-booth tenant bazzar
                      Sudirman Run 2023 mulai dari F&B hingga fashion
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "35rem", height: "230px" }}
                  className="rounded-5 bg-success"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Img
                      variant="top"
                      src={artist}
                      className="py-4 ps-4"
                      style={{ width: "15rem" }}
                    />
                    <Card.Body className="py-4 pe-4">
                      <Card.Title className="fw-bold text-white">
                        SPECIAL PERFORMANCE
                      </Card.Title>
                      <Card.Text className="text-white">
                        Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria,
                        serta hiburan lainnya!
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
              <Col className="d-flex justify-content-center mb-5">
                <Button label="Daftar Sekarang" />
              </Col>
            </Row>
          </Container>

          <Container className="swiper" fluid>
            <Row
              className="mb-5"
              style={{
                alignItems: "flex-start",
                paddingTop: "20px",
                height: "17rem",
              }}
            >
              <Col className="text-center">
                <h1 className="fw-bold text-white my-3">DIDUKUNG OLEH</h1>
                <SwiperSponsor />
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col className="text-center">
                <h1 className="fw-bold">GALERI SUDIRMAN RUN 2022</h1>
                {/* <SwiperGallery /> */}
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
