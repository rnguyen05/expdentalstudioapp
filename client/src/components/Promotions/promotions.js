import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import "./promotions.css";
import Popup from "../Modals";

export default class Promotions extends Component {
  //Popup Modal
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false //MODAL
    };
  }
  //MODAL
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="section-promo" id="id-promo">
        <Container>
          <h2 className="clearfix text-center">Special Promotions</h2>
          <br />
          <h6>
            <ins>
              New Patient Special:<br />
            </ins>{" "}
            No-cost exam and 3D x-rays!
          </h6>
          <br />
          <hr className="style-hr" />
          <br />
          <h6>
            <ins>Loyalty Program:</ins>
          </h6>
          <ul className="loyalty-content">
            <li>2 Cleanings Per Year (2 per benefit year) </li>
            <li>Additional Cleanings as Prescribed at a 50% discount.</li>
            <li>Fluoride Treatment </li>
            <li>X-Rays as Needed </li>
            <li>Examinations (2 per benefit year)</li>
            <li>One Emergency Exam (if necessary) </li>
            <li>20% off all other dental services provided in our office.</li>
          </ul>

          <p>
            <Button
              className="contact"
              color="secondary"
              size="md"
              onClick={this.togglePopup.bind(this)}
            >
              Sign Up Now
            </Button>
            OR&nbsp;&nbsp;
            <Button
              href="tel:8008888888"
              className="contact"
              color="secondary"
              size="md"
            >
              Call Us Today
            </Button>
            {this.state.showPopup ? (
              <Popup closePopup={this.togglePopup.bind(this)} />
            ) : null}
          </p>
        </Container>
      </div>
    );
  }
}
