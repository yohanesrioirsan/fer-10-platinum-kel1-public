import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchForm({
  nameValue = "",
  categoryValue = "",
  priceValue = 0,
  statusValue = "",
}) {
  const navigate = useNavigate();
  const [name, setName] = useState(nameValue);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(priceValue);
  const [status, setStatus] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("result submit");
    // console.log("name: ", name);
    // console.log("kategori: ", category);
    // console.log("harga: ", price);
    // console.log("status: ", status);
    navigate(
      `/result?name=${name}&category=${category}&harga=${price}&status=${status}`
    );
  };

  return (
    <Container className="py-3 search-form">
      <Card className="p-3 my-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={3} sm={12}>
              <FormGroup>
                <FormLabel>Nama Mobil</FormLabel>
                <Form.Control
                  defaultValue={nameValue}
                  type="text"
                  placeholder="Ketik Nama / Tipe Mobil"
                  className="search-input"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col lg={3} sm={12}>
              <FormGroup>
                <FormLabel>Kategori</FormLabel>
                <FormSelect
                  defaultValue={String(categoryValue)}
                  className="search-input"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="small">2-4 orang</option>
                  <option value="medium">4-6 orang</option>
                  <option value="large">6-8 orang</option>
                </FormSelect>
              </FormGroup>
            </Col>
            <Col lg={3} sm={12}>
              <FormGroup>
                <FormLabel>Harga</FormLabel>
                <FormSelect
                  defaultValue={String(priceValue)}
                  className="search-input"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">Pilih Harga</option>
                  <option value="0-400000">{"< Rp. 400.000"}</option>
                  <option value="400000-600000">
                    Rp. 400.000 - Rp. 600.000
                  </option>
                  <option value="600000">{"> Rp. 600.000"}</option>
                </FormSelect>
              </FormGroup>
            </Col>
            <Col lg={3} sm={12}>
              <div className="d-flex align-items-end gap-3">
                <FormGroup className="flex-fill">
                  <FormLabel>Status</FormLabel>
                  <FormSelect
                    defaultValue={String(statusValue)}
                    className="search-input"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Pilih Status</option>
                    <option value="true">Disewa</option>
                    <option value="false">Tersedia</option>
                  </FormSelect>
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
  );
}

export default SearchForm;
