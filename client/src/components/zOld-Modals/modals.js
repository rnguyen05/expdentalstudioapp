//Add to parent component
/*
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


  //Add this button inside return
<button onClick={this.togglePopup.bind(this)}>show popup</button>
//Add this to the same section of the button
{this.state.showPopup ? (
            <Popup closePopup={this.togglePopup.bind(this)} />
          ) : null}

*/

import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import fb from "../img/logos/facebook.png";
// import gl from "../img/logos/google.png";
// import tw from "../img/logos/twitter.png";
// import fbmb from "../img/logos/facebook-mb.png";
// import glmb from "../img/logos/google-mb.png";
// import twmb from "../img/logos/twitter-mb.png";
import "./modals.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../Login";

import axios from "axios";
axios.defaults.withCredentials = true;

//Popup Modal
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
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
    axios
      .post("https://dentalstudioapp.herokuapp.com/api/login", this.state)
      .then(res => {
        if (res.data.error) {
          return this.setState({ error: res.data.message });
        }
        if (res.data.errors) {
          return this.setState({ valerrors: res.data.errors });
        }
        return (window.location = "/");
      });
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner text-center">
          <h6 className="h6-white">Please Login</h6>
          <div className="login-bg">
            <br />
            <Login />
            <br />
            {/*Custom buttons*/}
            {/* <a href="#">
              {<img className="login-logo" src={fb} alt="Facebook" />}
              <Login />
            </a>
            <a href="#">
              {<img className="login-logo" src={gl} alt="Google" />}
            </a>
            <a href="#">
              {<img className="login-logo" src={tw} alt="Twitter" />}
            </a>
             */}
            {this.state.error && <p>{this.state.error}</p>}
            <Form
              className="login-form text-center"
              onSubmit={this.submitHandler}
            >
              {this.state.valerrors &&
                this.state.valerrors.email && (
                  <p>{this.state.valerrors.email.msg}</p>
                )}
              <FormGroup row>
                <Col>
                  <Label for="UserName">User Name</Label>
                  <Input
                    type="email"
                    name="email"
                    id="username"
                    placeholder="your-email@email.com"
                    onChange={this.changeHandler}
                  />
                </Col>
              </FormGroup>
              {this.state.valerrors &&
                this.state.valerrors.password && (
                  <p>{this.state.valerrors.password.msg}</p>
                )}
              <FormGroup row>
                <Col>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={this.changeHandler}
                  />
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            <br />
            <span className="modal-footer">
              <a
                className="signup"
                href="/signup#user-reg"
                onClick={this.props.closePopup}
              >
                Register
              </a>
              <Button color="danger" onClick={this.props.closePopup}>
                Close
              </Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
//End Popup Modal
export default Popup;
