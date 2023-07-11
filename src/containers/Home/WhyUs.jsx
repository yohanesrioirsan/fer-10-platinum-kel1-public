import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import hrs from "@/assets/images/icon_24hrs.png";
import cmt from "@/assets/images/icon_complete.png";
import price from "@/assets/images/icon_price.png";
import prf from "@/assets/images/icon_professional.png";
import Image from "next/image";

function WhyUs() {
    return (
        <section id="why-us">
            <Container className="pb-5 mb-5">
                <h2>Why Us?</h2>
                <p>Mengapa harus pilih Binar Car Rental?</p>
                <Row>
                    <Col md-3 className="mt-3">
                        <Card>
                            <Image variant="top" src={cmt} alt={cmt} className="ms-3 mt-3" />
                            <Card.Body>
                                <Card.Title>Mobil Lengkap</Card.Title>
                                <Card.Text>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md-3 className="mt-3">
                        <Card>
                            <Image variant="top" src={price} alt={price} className="ms-3 mt-3" />
                            <Card.Body>
                                <Card.Title>Harga Murah</Card.Title>
                                <Card.Text>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md-3 className="mt-3">
                        <Card>
                            <Image variant="top" src={hrs} alt={hrs} className="ms-3 mt-3" />
                            <Card.Body>
                                <Card.Title>Layanan 24 Jam</Card.Title>
                                <Card.Text>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md-3 className="mt-3">
                        <Card>
                            <Image variant="top" src={prf} alt={prf} className="ms-3 mt-3" />
                            <Card.Body>
                                <Card.Title>Sopir Profesional</Card.Title>
                                <Card.Text>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default WhyUs;
