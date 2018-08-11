import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";
import TopBtn from "../TopBtn";

const Footer = () => {
  return (
    <Row className="section-footer">
      <Container>
        <Row>
          <Col className="footer-content">
            <h6 className="clearfix">Our Address</h6>
            <p>
              12345 Dental Studio Dr. #101 <br />
              Westwood Village, CA 90024<br />
              <a className="footer-address" href="tel:8008888888">
                Tel: (800)888 - 8888
              </a>
              <br />
              <a
                className="footer-address"
                href="mailto:hello@dentalstudio.com"
              >
                Email: hello@dentalstudio.com
              </a>
            </p>
          </Col>
          <Col className="footer-content">
            <h6 className="clearfix">Business Hours</h6>
            <p>
              Monday - Friday: 9:00am - 6:00pm <br />
              Saturday: 10:00am - 5:00pm<br />
              Sunday: Closed
            </p>
          </Col>
          <Col className="social-icons">
            <h6 className="clearfix text-center">Connect with Us</h6>
            <p>
              <a href="facebook.com">
                <i className="fab fa-facebook-square fa-4x mr-2" />
              </a>
              <a href="twitter.com">
                <i className="fab fa-twitter-square fa-4x mr-2" />
              </a>
              <a href="google.com">
                <i className="fab fa-google-plus-square fa-4x mr-2" />
              </a>
              <a href="linkedin.com">
                <i className="fab fa-linkedin fa-4x mr-2" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <TopBtn />
    </Row>
  );
};

export default Footer;
