import React from "react";
import { Container, Row, Col } from "reactstrap";
import Cd from "../img/services/cd.png";
import Coa from "../img/services/coa.png";
import Im from "../img/services/im.png";
import Ps from "../img/services/ps.png";
import Pvc from "../img/services/pvc.png";
import Rc from "../img/services/rc.png";
import Sa from "../img/services/sa.png";
import Sdc from "../img/services/sdc.png";
import Wtr from "../img/services/wtr.png";
import "./services.css";

const Services = () => {
  return (
    <Container id="id-services">
      <h2 className="clearfix text-center">Our Services</h2>
      <Row>
        <Col className="col-4">
          <p className="p-services">
            <a href="preventive">
              <img className="services-icon" src={Pvc} alt="Services" />
            </a>
            <br />
            Preventative <br /> Dentistry
          </p>
        </Col>
        <Col className="col-4">
          <p className="p-services">
            <a href="costmetic">
              <img className="services-icon" src={Cd} alt="Services" />
            </a>
            <br />
            Costmetic <br /> Dentistry
          </p>
        </Col>
        <Col className="col-4">
          <p className="p-services">
            <a href="clearorth">
              <img className="services-icon" src={Coa} alt="Services" />
            </a>
            <br />
            Clear Ortho <br /> Aligners
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-4">
          <p className="p-services">
            <a href="implants">
              <img className="services-icon" src={Im} alt="Services" />
            </a>
            <br />
            Implants
          </p>
        </Col>
        <Col className="col-4">
          <p className="p-services">
            <a href="sedation">
              <img className="services-icon" src={Sa} alt="Services" />
            </a>
            <br />
            Sedation /<br /> Anesthesia
          </p>
        </Col>
        <Col className="col-4">
          <p className="p-services">
            <a href="crowns">
              <img className="services-icon" src={Sdc} alt="Services" />
            </a>
            <br />
            Same Day <br /> Crowns
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-4">
          <p className="p-services">
            <a href="oralsurgery">
              <img className="services-icon" src={Ps} alt="Services" />
            </a>
            <br />
            Oral <br /> Surgery
          </p>
        </Col>
        <Col className="col-4">
          <p className="p-services">
            <a href="rootcanals">
              <img className="services-icon" src={Rc} alt="Services" />
            </a>
            <br />
            Root <br /> Canals
          </p>
        </Col>
        <Col className="col-4">
          <p className="p-services">
            <a href="teethremoval">
              <img className="services-icon" src={Wtr} alt="Services" />
            </a>
            <br />
            Wisdom Teeth <br /> Removal
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
