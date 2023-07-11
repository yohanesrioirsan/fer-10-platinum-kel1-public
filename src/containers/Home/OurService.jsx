import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import checkicon from "@/assets/images/checkicon.png";
import service from "@/assets/images/img_service.png";
import Image from "next/image";

function OurService() {
    return (
        <section id="our-service">
            <Container fluid>
                <Row className="align-items-end">
                    <Col md-7 className="ps-5 pb-4 text-center">
                        <Image src={service} alt={service} fluid />
                    </Col>
                    <Col md className="pb-5" id="detail-text-ourservice" style={{ paddingLeft: "5rem" }}>
                        <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                        <p className="my-2 lh-base">
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                            serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                        </p>
                        <ListGroup id="list-ourservice">
                            <ListGroupItem action style={{ border: "none" }}>
                                <Image src={checkicon} alt={checkicon} className="me-2" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                            </ListGroupItem>
                            <ListGroupItem action style={{ border: "none" }}>
                                <Image src={checkicon} alt={checkicon} className="me-2" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                            </ListGroupItem>
                            <ListGroupItem action style={{ border: "none" }}>
                                <Image src={checkicon} alt={checkicon} className="me-2" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                            </ListGroupItem>
                            <ListGroupItem action style={{ border: "none" }}>
                                <Image src={checkicon} alt={checkicon} className="me-2" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                            </ListGroupItem>
                            <ListGroupItem action style={{ border: "none" }}>
                                <Image src={checkicon} alt={checkicon} className="me-2" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default OurService;
