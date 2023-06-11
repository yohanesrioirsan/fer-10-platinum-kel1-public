import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Footer() {
  return (
    <section id="footer" className="mb-3">
      <Container>
        <Row>
          <Col>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col>
            <a href="#our-service">
              <p>Our Service</p>
            </a>
            <a href="#why-us">
              <p>Why Us</p>
            </a>
            <a href="#testimonial">
              <p>Testimonial</p>
            </a>
            <a href="#faq">
              <p>FAQ</p>
            </a>
          </Col>
          <Col>
            <p>Connect with us</p>
            <div className="d-flex">
              <Image src="images/icon_facebook.png" className="p-2" />
              <Image src="images/icon_instagram.png" className="p-2" />
              <Image src="images/icon_twitter.png" className="p-2" />
              <Image src="images/icon_mail.png" className="p-2" />
              <Image src="images/icon_twitch.png" className="p-2" />
            </div>
          </Col>
          <Col>
            <p>Copyright Binar 2022</p>
            <a href="#home">
              <img src="images/logo.png" alt="" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
