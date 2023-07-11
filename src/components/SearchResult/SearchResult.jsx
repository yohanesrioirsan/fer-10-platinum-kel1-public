import { Button, Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCar } from "@/redux/Car/carSlice";
// {car, name, status, category, minPrice, maxPrice}
function SearchResult({ name, status, category, minPrice, maxPrice }) {
    const searchParams = useSearchParams();
    const [data, setData] = useState();
    const router = useRouter();
    const dispatch = useDispatch()

    const selectCar = (car) => {
        dispatch(setCar(car))
        router.push( `/detail/${car.id}`,
            
        );
    };

    const fetchCarsData = async () => {
        const response = await axios.get("https://api-car-rental.binaracademy.org/customer/v2/car", {
            params: {
                name: searchParams.get("name"),
                category: searchParams.get("category"),
                isRented: searchParams.get("status"),
                minPrice: searchParams.get("price"),
                maxPrice: searchParams.get("price"),
            },
        });
        console.log(response.data);
        setData(response.data);
    };

    useEffect(() => {
        fetchCarsData();
    }, [searchParams]);

    return (
        <Container className="my-5">
            <Row>
                {data && data.cars && data.cars.length > 0 ? (
                    data.cars.map((car) => (
                        <Col lg={3} key={car.id}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={car.image} />
                                <Card.Body>
                                    <Card.Title>{car.name}</Card.Title>
                                    <Card.Text>Rp. {car.price} / hari</Card.Text>
                                    <Card.Text>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam illo dolore magni, vel sit totam enim
                                        a consectetur repudiandae corrupti blanditiis fugit nam facere laboriosam quasi sed at. Dolorum!
                                    </Card.Text>
                                    <Button
                                        type="submit"
                                        variant="success"
                                        className="d-block"
                                        style={{ width: "100%" }}
                                        onClick={() => {
                                            selectCar(car);
                                        }}
                                    >
                                        pilih mobil
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <div className="text-center">loading....</div>
                )}
            </Row>
        </Container>
    );
}

export default SearchResult;
