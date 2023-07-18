import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import SuccessIcon from "@/assets/images/success.png";
import Image from "next/image";

function PaymentSuccess() {
  return (
    <Container>
      <section className="payment-image pt-5 d-flex justify-content-center">
        <div>
          <Image src={SuccessIcon} alt="success-icon" width={35} height={35} />
        </div>
      </section>
      <section className="payment-heading pt-4 d-flex justify-content-center">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h5 className="fw-bold">Pembayaran Berhasil</h5>
          <p style={{ fontSize: "14px", fontWeight: "400", color: "#8A8A8A" }}>
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>
      </section>
      <section className="payment-heading pt-4 d-flex justify-content-center">
        <Card style={{ width: "600px", height: "285px" }}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold">Invoice</h5>
              <Button
                className="fw-bold"
                variant="outline-primary"
                style={{ borderRadius: "2px" }}
              >
                <i
                  className="bi bi-download"
                  style={{ marginRight: "10px" }}
                ></i>
                Unduh
              </Button>
            </div>
            <div
              className="mt-3 d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "190px",
                backgroundColor: "#D0D0D0",
                borderRadius: "4px",
              }}
            >
              <i className="bi bi-image" style={{ marginRight: "10px" }}></i>{" "}
              PDF Viewer
            </div>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
}

export default PaymentSuccess;
