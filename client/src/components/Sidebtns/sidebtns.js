import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import "./sidebtns.css";
import $ from "jquery";
import Popup from "../Modals";

export default class Sidebtns extends Component {
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

  componentDidMount() {
    //Fade out side btns on scroll
    $(window).scroll(function() {
      $(".appoint").css("opacity", 1 - $(window).scrollTop() / 250);
    });
  }
  render() {
    return (
      <div>
        <Container className="appoint">
          <Button
            className="sidebtn"
            color="secondary"
            size="lg"
            href="/appointments#id-appointment"
          >
            Make an
            <br />
            Appointment
          </Button>
          <br />
          <Button
            className="sidebtn"
            color="secondary"
            size="lg"
            href="/promotions#id-promo"
          >
            Special
            <br />
            Promotions
          </Button>
          <br />
          <Button
            className="sidebtn"
            color="secondary"
            size="lg"
            href="/payment"
          >
            Make a<br />
            Payment
          </Button>
        </Container>
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
