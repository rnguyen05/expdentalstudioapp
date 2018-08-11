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
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      email_con: "",
      password: "",
      password_con: "",
      phoneone: "",
      phonetwo: "",
      addrone: "",
      addrtwo: "",
      city: "",
      addrstate: "CA",
      zipcode: "",
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
    axios.post("/api/user/signup", this.state).then(result => {
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
        {this.state.success && <p>You are successfully registered!</p>}
        <Container>
          <Col className="col-12">
            <Container>
              <Form id="reg-form" onSubmit={this.submitHandler}>
                <Row>
                  <Col className="col-12 col-md-4 col-lg-4">
                    <FormGroup>
                      <Label for="firstname">First Name</Label>
                      <Input
                        type="input"
                        name="firstname"
                        id="firstname"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.firstname && (
                          <p>{this.state.errors.firstname.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                  <Col className="col-12 col-md-4 col-lg-4">
                    <FormGroup>
                      <Label for="firstname">Last Name</Label>
                      <Input
                        type="input"
                        name="lastname"
                        id="lastname"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.lastname && (
                          <p>{this.state.errors.lastname.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-md-4 col-lg-4">
                    <FormGroup>
                      <Label for="email">Email</Label>
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
                  <Col className="col-12 col-md-4 col-lg-4">
                    <FormGroup>
                      <Label for="repeatemail">Confirm Email</Label>
                      <Input
                        type="email"
                        name="email_con"
                        id="email_con"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.email_con && (
                          <p>{this.state.errors.email_con.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-md-4 col-lg-4">
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
                  <Col className="col-12 col-md-4 col-lg-4">
                    <FormGroup>
                      <Label for="password_con">Confirm Password</Label>
                      <Input
                        type="password"
                        name="password_con"
                        id="password_con"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.password_con && (
                          <p>{this.state.errors.password_con.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-12 col-md-4 col-lg-4">
                    <FormGroup>
                      <Label for="phoneone">Contact No. 1</Label>
                      <Input
                        type="input"
                        name="phoneone"
                        id="phoneone"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.phoneone && (
                          <p>{this.state.errors.phoneone.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                  <Col className="col-12 col-md-4 col-lg-4">
                    <FormGroup>
                      <Label for="phonetwo">Contact No. 2</Label>
                      <Input
                        type="input"
                        name="phonetwo"
                        id="phonetwo"
                        //required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.phonetwo && (
                          <p>{this.state.errors.phonetwo.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-md-4  col-lg-4">
                    <FormGroup>
                      <Label for="addrone">Address Line 1</Label>
                      <Input
                        type="input"
                        name="addrone"
                        id="addrone"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.addrone && (
                          <p>{this.state.errors.addrone.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                  <Col className="col-12 col-md-4  col-lg-4">
                    <FormGroup>
                      <Label for="addrtwo">Address Line 2</Label>
                      <Input
                        type="input"
                        name="addrtwo"
                        id="addrtwo"
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.addrtwo && (
                          <p>{this.state.errors.addrtwo.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-md-3 col-lg-3">
                    <FormGroup>
                      <Label for="city">City</Label>
                      <Input
                        type="input"
                        name="city"
                        id="city"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.city && (
                          <p>{this.state.errors.city.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                  <Col className="col-12 col-md-3 col-lg-3">
                    <FormGroup>
                      <Label for="addrstate">State</Label>
                      <br />
                      <select
                        className="dropdown-list"
                        id="addrstate"
                        name="addrstate"
                        onChange={this.changeHandler}
                      >
                        <option value="AL">Alabama (AL)</option>
                        <option value="AK">Alaska (AK)</option>
                        <option value="AZ">Arizona (AZ)</option>
                        <option value="AR">Arkansas (AR)</option>
                        <option value="CA">California (CA)</option>
                        <option value="CO">Colorado (CO)</option>
                        <option value="CT">Connecticut (CT)</option>
                        <option value="DE">Delaware (DE)</option>
                        <option value="DC">District Of Columbia (DC)</option>
                        <option value="FL">Florida (FL)</option>
                        <option value="GA">Georgia (GA)</option>
                        <option value="HI">Hawaii (HI)</option>
                        <option value="ID">Idaho (ID)</option>
                        <option value="IL">Illinois (IL)</option>
                        <option value="IN">Indiana (IN)</option>
                        <option value="IA">Iowa (IA)</option>
                        <option value="KS">Kansas (KS)</option>
                        <option value="KY">Kentucky (KY)</option>
                        <option value="LA">Louisiana (LA)</option>
                        <option value="ME">Maine (ME)</option>
                        <option value="MD">Maryland (MD)</option>
                        <option value="MA">Massachusetts (MA)</option>
                        <option value="MI">Michigan (MI)</option>
                        <option value="MN">Minnesota (MN)</option>
                        <option value="MS">Mississippi (MS)</option>
                        <option value="MO">Missouri (MO)</option>
                        <option value="MT">Montana (MT)</option>
                        <option value="NE">Nebraska (NE)</option>
                        <option value="NV">Nevada (NV)</option>
                        <option value="NH">New Hampshire (NH)</option>
                        <option value="NJ">New Jersey (NJ)</option>
                        <option value="NM">New Mexico (NM)</option>
                        <option value="NY">New York (NY)</option>
                        <option value="NC">North Carolina (NC)</option>
                        <option value="ND">North Dakota (ND)</option>
                        <option value="OH">Ohio (OH)</option>
                        <option value="OK">Oklahoma (OK)</option>
                        <option value="OR">Oregon (OR)</option>
                        <option value="PA">Pennsylvania (PA)</option>
                        <option value="RI">Rhode Island (RI)</option>
                        <option value="SC">South Carolina (SC)</option>
                        <option value="SD">South Dakota (SD)</option>
                        <option value="TN">Tennessee (TN)</option>
                        <option value="TX">Texas (TX)</option>
                        <option value="UT">Utah (UT)</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                      {this.state.errors &&
                        this.state.errors.addrstate && (
                          <p>{this.state.errors.addrstate.msg}</p>
                        )}
                    </FormGroup>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2">
                    <FormGroup>
                      <Label for="zip">Zip Code</Label>
                      <Input
                        type="input"
                        name="zipcode"
                        id="zipcode"
                        required
                        onChange={this.changeHandler}
                      />
                      {this.state.errors &&
                        this.state.errors.zipcode && (
                          <p>{this.state.errors.zipcode.msg}</p>
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
