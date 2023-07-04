import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function SearchFormDisable() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log("result submit");
        // console.log("name: ", name);
        // console.log("kategori: ", category);
        // console.log("harga: ", price);
        // console.log("status: ", status);
        // navigate(`/result?name=${name}&category=${category}&harga=${price}&status=${status}`);
    };

    const [carOrderDetail, setCarOrderDetail] = useState({
        carName: "",
        category: "",
        start_rent_at: "",
        finish_rent_at: "",
    });

    const params = useParams();
    const config = {
        headers: {
            access_token: localStorage.getItem("token"),
        },
    };

    const fetchAPIGetCarById = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api-car-rental.binaracademy.org/customer/order/${params.id}`, config);
            if (response.status === 200) {
                console.log(response.data);
                setCarOrderDetail({
                    carName: response.data.Car.name,
                    category: response.data.Car.category,
                    start_rent_at: response.data.start_rent_at,
                    finish_rent_at: response.data.Car.finish_rent_at,
                });
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(params);
        fetchAPIGetCarById();
    }, []);

    return (
        <div>
            {loading === true ? (
                <div>loading...</div>
            ) : (
                <Container className="py-3 search-form">
                    <Card className="p-3 my-5">
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={3} sm={12}>
                                    <FormGroup>
                                        <FormLabel>Nama Mobil</FormLabel>
                                        <Form.Control
                                            defaultValue={carOrderDetail.carName}
                                            type="text"
                                            placeholder="Ketik Nama / Tipe Mobil"
                                            disabled
                                            className="search-input"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={3} sm={12}>
                                    <FormGroup>
                                        <FormLabel>Kategori</FormLabel>
                                        <Form.Control defaultValue={carOrderDetail.category} className="search-input" disabled />
                                    </FormGroup>
                                </Col>
                                <Col lg={3} sm={12}>
                                    <FormGroup>
                                        <FormLabel>Start Date</FormLabel>
                                        <Form.Control defaultValue={carOrderDetail.start_rent_at} className="search-input" disabled />
                                    </FormGroup>
                                </Col>
                                <Col lg={3} sm={12}>
                                    <div className="d-flex align-items-end gap-3">
                                        <FormGroup className="flex-fill">
                                            <FormLabel>Finish Date</FormLabel>
                                            <Form.Control defaultValue={carOrderDetail.finish_rent_at} className="search-input" disabled />
                                        </FormGroup>
                                        <Button type="submit" variant="success">
                                            Cari Mobil
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Container>
            )}
        </div>
    );
}

export default SearchFormDisable;
