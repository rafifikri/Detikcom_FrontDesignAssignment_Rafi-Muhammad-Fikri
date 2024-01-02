import { Container, Row, Col } from "react-bootstrap";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Event from "@/components/event";
import Artikel from "@/components/artikel";
import Footer from "@/components/footer";
import SwiperGallery from "@/components/SwiperGallery";
import SwiperSponsor from "@/components/SwiperSponsor";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Layout>
        <Header />
        <div className="section">
          <Event />

          <Container className="swiper-sponsor" fluid>
            <Row
              className="mb-5"
              style={{
                alignItems: "flex-start",
                paddingTop: "20px",
                height: "19rem",
              }}
            >
              <Col className="text-center">
                <SwiperSponsor />
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col className="text-center">
                <SwiperGallery />
              </Col>
            </Row>
          </Container>

          <Artikel />

          <Footer />
        </div>
      </Layout>
    </div>
  );
}
