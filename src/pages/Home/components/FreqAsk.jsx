import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

function FreqAsk() {
  return (
    <section id="faq">
      <Container className="mb-5">
        <Row>
          <Col md>
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing e lit</p>
          </Col>
          <Col md>
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  Apa saja syarat yang dibutuhkan?
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  laborum doloribus minima? Facere dolore nesciunt laudantium
                  similique, eos qui commodi ea porro veniam hic ipsa sed
                  aspernatur molestiae, harum fuga?
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="1">
                <AccordionHeader>
                  Berapa hari minimal sewa mobil lepas kunci?
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit similique odio velit provident soluta cum, dolore ex,
                  blanditiis aliquam non praesentium dolorum laboriosam est
                  molestias illo, iure nesciunt consequuntur atque.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="2">
                <AccordionHeader>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, rem culpa autem velit eveniet optio illum,
                  perferendis sit, esse recusandae dicta ducimus! Assumenda eos
                  labore molestias sed harum sapiente veritatis.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="3">
                <AccordionHeader>
                  Apakah Ada biaya antar-jemput?
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe necessitatibus totam magni pariatur, dolor nisi ex
                  voluptas. Architecto debitis ad libero tempora, laboriosam nam
                  laudantium quia maxime quo amet officia.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="4">
                <AccordionHeader>
                  Bagaimana jika terjadi kecelakaan
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur ex similique commodi ratione deleniti, magnam quod
                  sapiente recusandae, vel animi itaque numquam tempore, ad
                  omnis explicabo veniam! Alias, quaerat. Corporis!
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FreqAsk;
