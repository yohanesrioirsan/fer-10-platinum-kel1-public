import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchDetail() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [carData, setCarData] = useState(null);

  const location = useLocation();
  const { car } = location.state;

  const fetchCarData = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${car.id}`
      );
      setCarData(response.data);
    } catch (error) {
      <p>${error}</p>;
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [car]);

  const calculateTotalPrice = (startDate, endDate, pricePerDay) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const totalPrice = diffInDays * pricePerDay;
    return totalPrice;
  };

  useEffect(() => {
    if (dateRange[0] && dateRange[1]) {
      const startDate = dateRange[0];
      const endDate = dateRange[1];
      const totalPrice = calculateTotalPrice(startDate, endDate, carData.price);
      setCarData((prevCarData) => ({
        ...prevCarData,
        totalPrice,
      }));
    }
  }, [dateRange, carData]);

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
                      <span>Tentukan lama sewa mobil. (Max 7 Hari.)</span>
                    </Card.Text>

                    {/* ADD DATE PICKER DISINI */}
                    <div className="mb-3">
                      <DatePicker
                        selectsRange
                        startDate={dateRange[0]}
                        endDate={dateRange[1]}
                        onChange={(update) => {
                          setDateRange(update);
                        }}
                        isClearable
                        placeholderText="Pilih tanggal mulai dan akhir sewa"
                        maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                      />
                    </div>

                    {/* BATAS ADD PICKER  */}
                    <Card.Text>
                      <Row>
                        <Col>Total</Col>
                        <Col>Rp. {carData.totalPrice}</Col>
                      </Row>
                    </Card.Text>

                    {/* ADD BUTTON DISINI */}

                    <Button
                      type="button"
                      variant="success"
                      style={{ width: "100%" }}
                    >
                      Lanjutkan Pembayaran
                    </Button>

                    {/* BATAS BUTTON */}
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
