/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import RentButton  from "../../pages/Home/components/RentButton";
import SearchForm  from "../SearchForm";

function Hero(props) {
  const {
    withRentButton = true,
    withSearchForm = false,
    withHeroContent = true,
  } = props;

  return (
    <div>
      <section id="navbar">
        {["sm"].map(
          (expand) =>
            expand && (
              <Navbar key={expand} expand={expand}>
                <Container className="m-0">
                  <Navbar.Brand href="./#home" id="navbar-brand">
                    <Image src="images/logo.png" />
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        BCR
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body id="navbar-body">
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#our-service">Our Service</Nav.Link>
                        <Nav.Link href="#why-us">Why Us</Nav.Link>
                        <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            )
        )}
      </section>

      <section id="hero">
        <Container fluid>
          {withHeroContent && (
            <Row>
              <Col
                md
                className="mt-2 p-5 align-self-center"
                id="detail-text-hero"
              >
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {withRentButton ? <RentButton /> : <></>}
              </Col>
              <Col md className="mt-2 p-0">
                <Image src="images/img_car.png" fluid />
              </Col>
            </Row>
          )}
        </Container>
        {withSearchForm && <SearchForm />}
      </section>
    </div>
  );
}

export default Hero;
