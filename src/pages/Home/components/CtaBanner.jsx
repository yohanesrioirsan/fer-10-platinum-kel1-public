/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { RentButton } from "./RentButton";
import SearchForm from "../../../components/SearchForm";

function CtaBanner(props) {
  const { withRentButton = true, withSearchForm = false } = props;
  return (
    <section id="cta-banner">
      <Container className="mt-5 position-relative">
        <Row>
          <Col
            md
            className="position-absolute top-50 start-50 translate-middle"
          >
            <div className="detail">
              <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {withRentButton ? <RentButton /> : <></>}
            </div>
          </Col>
        </Row>
      </Container>
      {withSearchForm && <SearchForm />}
    </section>
  );
}

CtaBanner.propTypes = {
  withRentButton: PropTypes.bool,
  withSearchForm: PropTypes.bool,
};

export default CtaBanner;
