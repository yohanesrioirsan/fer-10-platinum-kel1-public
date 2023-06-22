import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PilihMetode() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col
          md={7}
          className="justify-content-start"
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            marginRight: "3.7rem",
          }}
        >
          <h4>Pilih Bank Transfer</h4>
          <p style={{ fontWeight: 400 }}>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking, atau Mobile Banking</p>
          <div>s</div>
        </Col>
        <Col md={4} className="justify-content-end" style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px" }}>
          ssssssssssssssss
        </Col>
      </Row>
    </Container>
  );
}

export default PilihMetode;
