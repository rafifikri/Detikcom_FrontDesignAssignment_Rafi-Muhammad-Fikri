import { Container, Row, Col } from "react-bootstrap";
import Button from "@/components/button";

import Layout from "@/components/layout";
import brand from "@/assets/img/navbar-brand.png";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Layout>
        <Container>
          <Row>
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
      </Layout>
    </div>
  );
}
