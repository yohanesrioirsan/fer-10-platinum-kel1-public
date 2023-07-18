import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import fbIcon from "@/assets/images/icon_facebook.png";
import igIcon from "@/assets/images/icon_instagram.png";
import twitterIcon from "@/assets/images/icon_twitter.png";
import mailIcon from "@/assets/images/icon_mail.png";
import twitchIcon from "@/assets/images/icon_twitch.png";

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
              <Image
                src={fbIcon}
                className="p-2"
                width={42}
                height={42}
                alt="icon"
              />
              <Image
                src={igIcon}
                className="p-2"
                width={42}
                height={42}
                alt="icon"
              />
              <Image
                src={twitterIcon}
                className="p-2"
                width={42}
                height={42}
                alt="icon"
              />
              <Image
                src={mailIcon}
                className="p-2"
                width={42}
                height={42}
                alt="icon"
              />
              <Image
                src={twitchIcon}
                className="p-2"
                width={42}
                height={42}
                alt="icon"
              />
            </div>
          </Col>
          <Col>
            <p>Copyright Binar 2022</p>
            <div
              style={{
                width: "100px",
                height: "34px",
                backgroundColor: "#0D28A6",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
