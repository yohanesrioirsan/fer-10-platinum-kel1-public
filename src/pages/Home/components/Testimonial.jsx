import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";

function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < 2) {
      setIndex(index + 1);
    }
  };

  return (
    <section id="testimonial">
      <div className="container mb-5">
        <div className="text-center">
          <h2>Testimonial</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            doloremque iure ullam.
          </p>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} slide>
          <Carousel.Item>
            <div className="row">
              <div className="col-sm-12">
                <div className="card p-5">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images/testi3_img_photo.png" alt="Gambar 1" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <img src="images/rate.png" alt="" />
                        </h5>
                        <p className="card-text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            John Dee 32, Bromo
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-sm-12">
                <div className="card p-5">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="images/testi3_img_photo.png"
                        className="img-fluid rounded-start"
                        alt="Gambar 2"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <img src="images/rate.png" alt="" />
                        </h5>
                        <p className="card-text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            John Dee 32, Bromo
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-sm-12">
                <div className="card p-5">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="images/testi2_img_photo.png"
                        className="img-fluid rounded-start"
                        alt="Gambar 3"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <img src="images/rate.png" alt="" />
                        </h5>
                        <p className="card-text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            John Dee 32, Bromo
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="my-3 d-flex justify-content-center align-items-center gap-2">
          <Button
            onClick={handlePrevious}
            disabled={index === 0}
            className="border-0 bg-white"
          >
            <img src="images/leftbtn.png" alt="" />
          </Button>
          <Button
            onClick={handleNext}
            disabled={index === 2}
            className="border-0 bg-white"
          >
            <img src="images/rightbtn.png" alt="" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
