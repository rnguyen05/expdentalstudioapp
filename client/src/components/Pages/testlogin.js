import React, { Component } from "react";
import axios from "axios";
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
// import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userdata: null,
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios.post("/api/user/login", this.state).then(result => {
      console.log("result sent back from server: ", result);
      if (result.data.errors) {
        return this.setState(result.data);
      } else {
        localStorage.setItem("jwtAppToken", result.data.token);
        window.location.href = "/";
      }
      return this.setState({
        userdata: result.data,
        errors: null,
        success: true
      });
    });
  }
  render() {
    return (
      <div className="reg-section" id="user-reg">
        <h2 className="clearfix clear-top text-center">User Registration</h2>
        <br />
        {this.state.success && <p>Welcome!</p>}
        <Container className="user-reg-inner">
          <Col className="col-12">
            <Container>
              <Form id="reg-form" onSubmit={this.submitHandler}>
                <Row>
                  <Col className="col-12">
                    <FormGroup>
                      <Label for="repeatemail">Confirm Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.email && (
                          <p>{this.state.errors.email.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12">
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="passwordreg"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.password && (
                          <p>{this.state.errors.password.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Button className="contact" size="lg">
                  Submit
                </Button>
              </Form>
            </Container>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Signup;
