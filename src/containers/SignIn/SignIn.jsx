import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Image,
  Navbar,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/SignIn/authSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Menyimpan pesan kesalahan
  const [loginSuccess, setLoginSuccess] = useState(false); // Menyimpan status login berhasil
  const dispatch = useDispatch();

  useEffect(() => {
    // Mengatur overflow pada elemen body dan html menjadi hidden saat komponen ini dipasang
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Mengembalikan overflow pada elemen body dan html menjadi auto saat komponen ini dilepas
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Kirim permintaan login ke API
      const response = await fetch(
        "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        // Ambil token dari respons API
        const { token } = await response.json();

        // Simpan token ke local storage
        localStorage.setItem("token", token);

        // Dispatch aksi login dengan token
        dispatch(login(token));

        // Reset form dan error
        setEmail("");
        setPassword("");
        setError(null);

        // Set status login berhasil
        setLoginSuccess(true);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      // Tangani kesalahan login
      setError("Login failed, please try again.");
      console.error(error);
    }
  };

  return (
    <Container fluid>
      <Row className="h-100">
        <Col
          xs={12}
          md={6}
          lg={6}
          className="bg-white d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div>
            {error && <Alert variant="danger">{error}</Alert>}
            {loginSuccess && <Alert variant="success">Login berhasil</Alert>}
            <Navbar bg="light">
              <Navbar.Brand href="#home">
                <Image
                  src={process.env.PUBLIC_URL + "/logobcr.png"}
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Navbar.Brand>
            </Navbar>
            <h1 className="mt-4">Welcome Back!</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" className="mt-5">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  border="dark"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Contoh: johndee@gmail.com"
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="6+ karakter"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mt-4"
                style={{ backgroundColor: "#0D28A6", width: "100%" }}
              >
                Sign In
              </Button>
            </Form>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/SignUp" style={{ textDecoration: "underline" }}>
                Sign Up for free
              </Link>
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={6}
          className="d-none d-md-block"
          style={{ backgroundColor: "#0D28A6", height: "100vh" }}
        >
          <div
            style={{ marginTop: "112px", marginLeft: "103px", color: "white" }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: 500,
                marginBottom: "49px",
              }}
            >
              Binar Car Rental
            </h1>
            <Image
              src={process.env.PUBLIC_URL + "/landingpage.png"}
              style={{
                marginTop: "49px",
                position: "relative",
                bottom: 0,
                right: 0,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
