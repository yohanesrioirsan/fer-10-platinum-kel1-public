import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RentButton() {
  return (
    <Link to="/search">
      <Button type="button" className="btn btn-success">
        Mulai Sewa Mobil
      </Button>
    </Link>
  );
}

export default RentButton;
