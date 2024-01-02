import { Container, Row, Col } from "react-bootstrap";

import event from "@/assets/img/header/logo-event.png";
import Button from "@/components/button";

export default function Header() {
  return (
    <div>
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box">
            <Col>
              <div>
                <img src={event} alt="" />
              </div>
              <Button label="Tentang Acara" />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
