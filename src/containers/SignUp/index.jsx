import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import landingpage from "./images/landing-page.jpg";
import useSignUp from "./hooks/useSignUp";
// import '@/styles/App.css'
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const { doSignUp, signup } = useSignUp();
  const [formValues, setFormValues] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doSignUp(formValues);
  };

  const onClickToLogin = () => {
    router.push("/signin");
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Row>
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="form-section">
            <div
              className="brand"
              style={{
                height: "34px",
                width: "100px",
                color: "#CFD4ED",
                backgroundColor: "#CFD4ED",
              }}
            >
              brand
            </div>
            <h3 className="pt-3 d-flex align-items-start">Sign Up</h3>
            <Form onSubmit={handleSubmit} style={{ width: "50vh" }}>
              <Form.Label htmlFor="name" className="pt-3">
                Name*
              </Form.Label>
              <Form.Control placeholder="Full Name" name="name" id="name" />
              <Form.Label htmlFor="email" className="pt-3">
                Email*
              </Form.Label>
              <Form.Control
                placeholder="Contoh: johndee@gmail.com"
                name="email"
                id="email"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    email: e.target.value,
                  })
                }
              />
              <Form.Label htmlFor="password" className="pt-3">
                Create Password*
              </Form.Label>
              <Form.Control
                placeholder="6+ karakter"
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    password: `${e.target.value}`.trim(),
                  })
                }
              />
              <Button
                type="submit"
                variant="primary"
                className="mt-3 mb-3 d-block"
                style={{ width: "100%" }}
                disabled={signup.loading}
              >
                {signup.loading ? "Loading..." : "Submit"}
              </Button>
              <ToastContainer autoClose={3000} />
              <p>
                Already have an account?{" "}
                <div onClick={onClickToLogin}>Sign In Here </div>
              </p>
            </Form>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} className="d-none d-md-block">
          <div className="side-panel">
            <div
              style={{
                backgroundColor: "#0D28A6",
                height: "100vh",
                width: "100%",
              }}
            >
              <div
                style={{
                  color: "#FFFFFF",
                  opacity: "75%",
                  marginBottom: "50px",
                  paddingLeft: "150px",
                  paddingTop: "100px",
                }}
                className="container"
              >
                <h1>Binar Car Rental</h1>
              </div>
              <Image
                style={{
                  marginLeft: "150px",
                  bottom: "0",
                  right: "0",
                }}
                src={landingpage}
                alt="landing-page"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
