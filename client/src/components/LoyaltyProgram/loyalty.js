import React from "react";
import { Container, Button } from "reactstrap";
import "./loyalty.css";

const Loyalty = () => {
  return (
    <div className="row section-loyalty">
      <Container>
        <h2 className="clearfix text-center">Our Loyalty Program</h2>
        <p className="loyalty-content">
          Dental Studio is a general dental practice that provides a full range
          of dental services, allowing us to make minimal referrals to
          specialists. We have developed our Patient Loyalty program with our
          uninsured patients in mind. It is designed to make affordable quality
          dental care more obtainable to those without insurance.
          <ul className="loyalty-content">
            <li>2 Cleanings Per Year (2 per benefit year) </li>
            <li>Additional Cleanings as Prescribed at a 50% discount.</li>
            <li>Fluoride Treatment </li>
            <li>X-Rays as Needed </li>
            <li>Examinations (2 per benefit year)</li>
            <li>One Emergency Exam (if necessary) </li>
            <li>20% off all other dental services provided in our office.</li>
          </ul>
        </p>
        <p className="loyaltyBtn">
          <Button href="/signup" color="secondary" size="md">
            Sign Up Now
          </Button>
        </p>
      </Container>
    </div>
  );
};

export default Loyalty;
