/* eslint-disable react/jsx-no-useless-fragment */
import { useRouter } from "next/navigation";
import Router from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import RentButton from "@/containers/Home/RentButton";
import SearchForm from "../SearchForm";
import SearchFormDisable from "../SearchFormDisable";
import logo from "@/assets/images/logo.png";
import car from "@/assets/images/img_car.png"

function Hero(props) {
    const { withRentButton = true, withSearchForm = false, withSearchFormDisable = false, withHeroContent = true } = props;
    const router = useRouter();
    const onClickLogout = () => {
        localStorage.setItem("token", "");
        router.push("/signin");
    };

    return (
        <div>
            <section id="navbar">
                {["sm"].map(
                    (expand) =>
                        expand && (
                            <Navbar key={expand} expand={expand}>
                                <Container className="m-0">
                                    <Navbar.Brand href="/" id="navbar-brand">
                                        <Image src={logo} alt={logo} />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand-${expand}`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>BCR</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body id="navbar-body">
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Link href="#our-service">Our Service</Nav.Link>
                                                <Nav.Link href="#why-us">Why Us</Nav.Link>
                                                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                                                <Nav.Link href="#faq">FAQ</Nav.Link>
                                                <Nav.Link onClick={onClickLogout}>Logout</Nav.Link>
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
                            <Col md className="mt-2 p-5 align-self-center" id="detail-text-hero">
                                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                <p>
                                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap
                                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                </p>
                                {withRentButton ? <RentButton /> : <></>}
                            </Col>
                            <Col md className="mt-2 p-0">
                                <Image src={car} alt={car} fluid />
                            </Col>
                        </Row>
                    )}
                </Container>
                {withSearchForm === true ? <SearchForm /> : null}
                {withSearchFormDisable === true ? <SearchFormDisable /> : null}
            </section>
        </div>
    );
}

export default Hero;
