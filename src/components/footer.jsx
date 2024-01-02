import { Container, Row, Col } from "react-bootstrap";

import footerLogo from "@/assets/img/footer/footerlogo.png";
import sosmed from "@/assets/img/footer/sosmed.png";

export default function Footer() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#28A997" }}>
        <Row>
          <Col style={{ margin: "0rem 15rem 0rem 15rem" }}>
            <img src={footerLogo} alt="" width={285} height={115} />
          </Col>
          <Row>
            <Col
              lg={6}
              style={{ margin: "0rem 15rem 0rem 15rem" }}
              className="pt-5"
            >
              <p className="text-white">
                Event olahraga lari sejauh 10 kilometer yang diselenggarakan
                oleh Detikhealth secara gratis untuk masyarakat Indonesia. Ajak
                keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023
                lalu menangkan hadiah utama serta doorprize dengan total puluhan
                juta rupiah
              </p>
            </Col>
            <Col>
              <p className="fs-6 fw-light text-white">Connect With Us</p>
              <img src={sosmed} alt="" />
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: "0rem 15rem 0rem 15rem" }}>
              <div className="mt-4 pt-3 border-top border-light text-white">
                <p>Copyright @ 2023 detikcom. All right reserved</p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
