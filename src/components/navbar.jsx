import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";

import brand from "@/assets/img/navbar-brand.png";

export default function NavbarComponent() {
  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "Tentang Acara", link: "#tentang-acara" },
    { label: "Galeri", link: "#galeri" },
    { label: "Berita", link: "#berita" },
  ];

  return (
    <Navbar className="fixed-top bg-white bg-opacity-50">
      <Container>
        <Row>
          <Col>
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src={brand} alt="Detik Health" />
            </a>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex">
            <ul className="navbar-nav">
              {menuItems.map((menuItem, index) => (
                <li key={index} className="nav-item">
                  <a href={menuItem.link} className="nav-link">
                    {menuItem.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="border border-0 text-white btn-registrasi "
            >
              Registrasi
            </button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
