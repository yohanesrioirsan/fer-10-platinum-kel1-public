import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function SearchDetail() {
  const location = useLocation();
  const { car } = location.state;
  const [carData, setCarData] = useState(null);

  const fetchCarData = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${car.id}`
      );
      setCarData(response.data);
    } catch (error) {
      <p>Error</p>;
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [car]);

  return (
    <div className="mb-5">
      {carData ? (
        <Container>
          <Row>
            <Col lg={9}>
              <div className="info-paket">
                <Card
                  style={{
                    paddingLeft: "25px",
                    height: "570px",
                    paddingTop: "25px",
                  }}
                >
                  <Card.Title>
                    <h3>Tentang Paket</h3>
                  </Card.Title>
                  <Card.Title>
                    <h5>Include</h5>
                  </Card.Title>
                  <Card.Text>
                    <li>Sudah termasuk bensin selama 12 jam </li>
                    <li>Sudah termasuk Tiket Wisata </li>
                    <li>Sudah termasuk pajak</li>
                  </Card.Text>
                  <Card.Title>
                    <h5>Exclude</h5>
                  </Card.Title>
                  <Card.Text>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </Card.Text>
                  <Card.Title>
                    <h5>Refund, Reschedule, Overtime</h5>
                  </Card.Title>
                  <Card.Text>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </Card.Text>
                </Card>
              </div>
            </Col>
            <Col lg={3}>
              <div className="info-paket">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={carData.image} />
                  <Card.Body>
                    <Card.Text>{carData.name}</Card.Text>
                    <Card.Text style={{ fontWeight: "100", color: "#8A8A8A" }}>
                      {carData.category}
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>total</Col>
                        <Col>{carData.price}</Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
}

export default SearchDetail;
