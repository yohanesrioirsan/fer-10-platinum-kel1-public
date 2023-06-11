import React from "react";
import {
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

function OurService() {
  return (
    <section id="our-service">
      <Container fluid>
        <Row className="align-items-end">
          <Col md-7 className="ps-5 pb-4 text-center">
            <Image src="images/img_service.png" fluid />
          </Col>
          <Col
            md
            className="pb-5"
            id="detail-text-ourservice"
            style={{ paddingLeft: "5rem" }}
          >
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="my-2 lh-base">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ListGroup id="list-ourservice">
              <ListGroupItem action style={{ border: "none" }}>
                <Image src="images/checkicon.png" className="me-2" /> Sewa Mobil
                Dengan Supir di Bali 12 Jam
              </ListGroupItem>
              <ListGroupItem action style={{ border: "none" }}>
                <Image src="images/checkicon.png" className="me-2" /> Sewa Mobil
                Lepas Kunci di Bali 24 Jam
              </ListGroupItem>
              <ListGroupItem action style={{ border: "none" }}>
                <Image src="images/checkicon.png" className="me-2" /> Sewa Mobil
                Jangka Panjang Bulanan
              </ListGroupItem>
              <ListGroupItem action style={{ border: "none" }}>
                <Image src="images/checkicon.png" className="me-2" /> Gratis
                Antar - Jemput Mobil di Bandara
              </ListGroupItem>
              <ListGroupItem action style={{ border: "none" }}>
                <Image src="images/checkicon.png" className="me-2" /> Layanan
                Airport Transfer / Drop In Out
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurService;
