import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Footer() {
  return (
    <div className="bg-[#007bff]">
      <Container>
        <Row className="bg-[#007bff] py-5 text-white footer-item">
          <Col >
            <ul className="gap-5">
              <li >Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Category</li>
            </ul>
          </Col>
          <Col>
            {" "}
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Category</li>
            </ul>{" "}
          </Col>
          <Col>
            {" "}
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Category</li>
            </ul>
          </Col>
          <Col>
            {" "}
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Category</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
