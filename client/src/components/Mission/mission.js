import React from "react";
import { Container, Col } from "reactstrap";
import "./mission.css";

const OurMission = () => {
  return (
    <Col>
      <Container className="mission text-center">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide professional dental services that are
          technologically current, with a commitment to excellence. Every
          patient is important to us. Our concern is that every patient is
          treated carefully with special attention to their comfort, their time,
          and their needs. We strive to be of value to our patients with a goal
          to exceed their expectations.
        </p>
      </Container>
    </Col>
  );
};

export default OurMission;
