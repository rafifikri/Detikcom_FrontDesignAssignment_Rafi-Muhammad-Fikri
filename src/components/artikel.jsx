import { Container, Row, Col } from "react-bootstrap";

import { gambarArtikel, dataArtikel } from "@/utils/data";

import Button from "@/components/button";

export default function Artikel() {
  const redirectToDetik = () => {
    window.location.href =
      "https://www.detik.com/search/searchall?query=fun+run&siteid=2";
  };

  return (
    <div className="artikel">
      <Container>
        <h1 className="text-center fw-bold mb-5">ARTIKEL TERKAIT</h1>
        <div className="menu d-flex justify-content-center text-white mx-auto mb-4">
          <p className="my-2">Artikel</p>
          <p className="my-2">Foto</p>
          <p className="my-2">Video</p>
        </div>
        <Row>
          {gambarArtikel.map((image, index) => (
            <Col key={index} md={4} className="text-center artikel-col">
              <div className="image-container">
                <img
                  src={image}
                  alt="artikel"
                  className="w-100 rounded-5 my-2 artikel-image"
                />
              </div>
              <div className="text-start pt-3">
                <h5 className="artikel-title">{dataArtikel[index].judul}</h5>
                <p>{dataArtikel[index].tanggal}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button label="Lihat Lebih Banyak" onClick={redirectToDetik} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
