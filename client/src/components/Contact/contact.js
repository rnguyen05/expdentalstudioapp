import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import Map from "../Map";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-section" id="id-contact">
        <h2 className="clearfix clear-top text-center">Contact Us</h2>
        <span className="clearfix" />
        <Row>
          <Col className="col-12">
            <Container>
              <Form id="contact-form">
                <FormGroup>
                  <Label for="name">First Name & Last Name</Label>
                  <Input type="input" name="name" id="name" required />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" required />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Telephone</Label>
                  <Input type="input" name="phone" id="phone" required />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Message</Label>
                  <Input type="textarea" name="message" id="message" rows="7" />
                </FormGroup>
                <Button className="contact" size="lg">
                  Send Message
                </Button>
              </Form>
            </Container>
          </Col>
          <Col className="col-12 text-center">
            <Row>
              <Col className="contact-body">
                <p>
                  12345 Dental Studio Dr. #101 <br />
                  Westwood Village, CA 90024.<br />
                  Tel: (800)888 - 8888
                </p>
              </Col>
              <Col className="contact-body">
                <p>
                  Monday - Friday: 9:00am - 6:00pm<br />
                  Saturday: 10:00am - 5:00pm<br />
                  Sunday: Closed
                </p>
              </Col>
              <Col className="clearfix" />
            </Row>
            <Row>
              <Col>
                <Map />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
