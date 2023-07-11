import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/router";

function PilihMetode({setProgress}) {
    const [accessToken, setAccessToken] = useState("")
    const [selectedBank, setSelectedBank] = useState(null);
    const [showPrices, setShowPrices] = useState(true);
    const [loading, setLoading] = useState(false);
    const listRef = useRef();

    const handleBankSelection = (bank) => {
        setSelectedBank(bank);
    };

    const handleChevronClick = () => {
        setShowPrices(!showPrices);
    };

    useEffect(() => {
        // const handleClickOutside = (event) => {
        //     if (listRef.current && !listRef.current.contains(event.target)) {
        //         setSelectedBank(null);
        //     }
        // };

        // document.addEventListener("mousedown", handleClickOutside);

        // return () => {
        //     document.removeEventListener("mousedown", handleClickOutside);
        // };
        setAccessToken(localStorage.getItem("token"))
    }, []);

    const [carOrderDetail, setCarOrderDetail] = useState({
        carName: "",
        category: "",
        start_rent_at: "",
        finish_rent_at: "",
        total_price: 0
    });

    const router = useRouter()

    
    const fetchAPIGetCarById = async () => {
        const config = {
            headers: {
                access_token: localStorage.getItem("token"),
            },
        };
        console.log(router)
        setLoading(true);
        try {
            const response = await axios.get(`https://api-car-rental.binaracademy.org/customer/order/${router.query.carId}`, config);
            if (response.status === 200) {
                console.log(response.data);
                setCarOrderDetail({
                    carName: response.data.Car.name,
                    category: response.data.Car.category,
                    start_rent_at: response.data.start_rent_at,
                    finish_rent_at: response.data.Car.finish_rent_at,
                    total_price: response.data.total_price
                });
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAPIGetCarById();
    }, []);

    const isBankSelected = selectedBank !== null;
    const buttonStyle = {
        backgroundColor: isBankSelected ? "green" : "gray",
        width: "100%",
        color: "black",
        fontWeight: "bold",
        border: "none",
    };

    const nextPage = () => {
        const dataPembayaran = {
            bank: selectedBank,
            targetPembayaran: new Date(Date.now()),
            totalBayar: carOrderDetail.total_price
        }
        localStorage.setItem("pembayaran" , JSON.stringify(dataPembayaran))
        setProgress(2)
    }

    return (
        <div>
            {loading === true ? (
                <div>loading...</div>
            ) : (
                <Container>
                    <Row className="justify-content-between">
                        <Col
                            md={7}
                            xs={12}
                            className="justify-content-start mb-4"
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "10px",
                            }}
                        >
                            <h4>Pilih Bank Transfer</h4>
                            <p style={{ fontWeight: 400 }}>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking, atau Mobile Banking</p>
                            <div>
                                <ul className="ms-3" ref={listRef} style={{ listStyleType: "none", padding: 0 }}>
                                    <li
                                        className="mb-4"
                                        onClick={() => handleBankSelection("BCA")}
                                        style={{
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: "700",
                                            color: "black",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: "absolute",
                                                right: "0.5rem",
                                                color: selectedBank === "BCA" ? "green" : "transparent",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        <span
                                            style={{
                                                border: "1px solid black",
                                                borderRadius: "5px",
                                                width: "5rem",
                                                textAlign: "center",
                                                marginRight: "1rem",
                                            }}
                                        >
                                            BCA
                                        </span>
                                        BCA Transfer
                                    </li>
                                    <li
                                        className="mb-4"
                                        onClick={() => handleBankSelection("BNI")}
                                        style={{
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: "700",
                                            color: "black",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: "absolute",
                                                right: "0.5rem",
                                                color: selectedBank === "BNI" ? "green" : "transparent",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        <span
                                            style={{
                                                border: "1px solid black",
                                                borderRadius: "5px",
                                                width: "5rem",
                                                textAlign: "center",
                                                marginRight: "1rem",
                                            }}
                                        >
                                            BNI
                                        </span>
                                        BNI Transfer
                                    </li>
                                    <li
                                        onClick={() => handleBankSelection("Mandiri")}
                                        style={{
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: "700",
                                            color: "black",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: "absolute",
                                                right: "0.5rem",
                                                color: selectedBank === "Mandiri" ? "green" : "transparent",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        <span
                                            style={{
                                                border: "1px solid black",
                                                borderRadius: "5px",
                                                width: "5rem",
                                                textAlign: "center",
                                                marginRight: "1rem",
                                            }}
                                        >
                                            MANDIRI
                                        </span>
                                        Mandiri Transfer
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col
                            md={4}
                            xs={12}
                            className="justify-content-end"
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "10px",
                            }}
                        >
                            <div>
                                <p>{carOrderDetail.carName}</p>
                                <p>{carOrderDetail.category}</p>
                            </div>
                            <div>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <h5 style={{ marginRight: "10px" }}>Total</h5>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            src="/fi_chevron-up.png"
                                            alt="chevron-up"
                                            style={{
                                                width: "20px",
                                                marginRight: "10rem",
                                                cursor: "pointer",
                                            }}
                                            onClick={handleChevronClick}
                                        />
                                        <h5>{carOrderDetail.total_price}</h5>
                                    </div>
                                </div>
                                {showPrices && (
                                    <ul
                                        className="ps-2"
                                        style={{
                                            fontFamily: "Arial",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: "20px",
                                        }}
                                    >
                                        <li
                                            style={{
                                                listStyleType: "none",
                                                fontWeight: "bold",
                                                color: "black",
                                            }}
                                        >
                                            Harga Sewa
                                        </li>
                                        <li className="ms-4">Sewa Mobil ....</li>
                                        <li
                                            style={{
                                                listStyleType: "none",
                                                fontWeight: "bold",
                                                color: "black",
                                            }}
                                        >
                                            Biaya Lainnya
                                        </li>
                                        <li className="ms-4" style={{ display: "flex", justifyContent: "space-between" }}>
                                            Pajak <span style={{ color: "green" }}>(Termasuk)</span>
                                        </li>
                                        <li className="ms-4" style={{ display: "flex", justifyContent: "space-between" }}>
                                            Biaya Makan Sopir <span style={{ color: "green" }}>(Termasuk)</span>
                                        </li>

                                        <li
                                            style={{
                                                listStyleType: "none",
                                                fontWeight: "bold",
                                                color: "black",
                                            }}
                                        >
                                            Belum Termasuk
                                        </li>
                                        <li className="ms-4">Bensin</li>
                                        <li className="ms-4">Tol dan Parkir</li>
                                        <li
                                            style={{
                                                listStyleType: "none",
                                                fontWeight: "bold",
                                                color: "black",
                                            }}
                                        >
                                            Akumulasi
                                        </li>
                                    </ul>
                                )}
                                <Button style={buttonStyle}  onClick={nextPage}>
                                    Bayar
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default PilihMetode;
