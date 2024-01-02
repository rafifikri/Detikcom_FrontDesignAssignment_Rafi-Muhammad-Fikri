import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import Button from "@/components/button";
import maps from "@/assets/img/event/maps.png";
import artist from "@/assets/img/event/artist.png";

export default function event() {
  return (
    <div>
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
                  Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari
                  dimulai dari Bundaran HI hingga Patung Pemuda Membangun di
                  Senayan lalu kembali lagi ke Bundaran HI!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-grid ">
            <Card
              style={{
                width: "35rem",
                height: "150px",
                marginBottom: "40px",
              }}
              className="rounded-5 bg-success"
            >
              <Card.Body className="p-4">
                <Card.Title className="fw-bold text-white">
                  GRATIS DAN BERHADIAH
                </Card.Title>
                <Card.Text className="text-white">
                  Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah
                  total puluhan juta rupiah doorprize menarik!
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "35rem",
                height: "150px",
                marginBottom: "40px",
              }}
              className="rounded-5 bg-success"
            >
              <Card.Body className="p-4">
                <Card.Title className="fw-bold text-white">
                  50+ TENANT BAZZAR
                </Card.Title>
                <Card.Text className="text-white">
                  Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman
                  Run 2023 mulai dari F&B hingga fashion
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "35rem",
                height: "220px",
              }}
              className="rounded-5 bg-success mb-3"
            >
              <div className="d-flex justify-content-between align-items-center">
                <Card.Img
                  variant="top"
                  src={artist}
                  className="py-4 ps-4"
                  style={{ width: "12rem" }}
                />
                <Card.Body className="py-4 pe-4">
                  <Card.Title className="fw-bold text-white">
                    SPECIAL PERFORMANCE
                  </Card.Title>
                  <Card.Text className="text-white">
                    Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta
                    hiburan lainnya!
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Row>
            <Col className="d-flex justify-content-center mb-5">
              <Button label="Daftar Sekarang" />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
