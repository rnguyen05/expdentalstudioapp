import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import fb from "../img/logos/facebook.png";
// import gl from "../img/logos/google.png";
// import tw from "../img/logos/twitter.png";
// import fbmb from "../img/logos/facebook-mb.png";
// import glmb from "../img/logos/google-mb.png";
// import twmb from "../img/logos/twitter-mb.png";
import "./modals.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Login from "../Login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { getJwt } from "../Helpers";

//
//Popup Modal
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
      password: "",
      showPopup: false //MODAL
    };
  }

  //username input event listener
  handlerUsernameChanged(event) {
    this.setState({
      email: event.target.value
    });
  }

  //password input event listener
  handlerPasswordChanged(event) {
    this.setState({
      password: event.target.value
    });
  }

  //Function loginUser
  loginUser(submitObject) {
    //First find valid token in localStorage
    //If there is none then send user submit data to api
    //   const jwt = getJwt();

    //   if (!jwt) {
    //     axios
    //       .post("/api/user/login", submitObject)
    //       .then(
    //         function(data) {
    //           this.props.authenticate();
    //           this.setState({
    //             redirectToReferrer: true
    //           });
    //           console.log(data);
    //         }.bind(this)
    //       )
    //       .catch(function(err) {
    //         console.log(err);
    //       });
    //   } else {
    //     axios
    //       .get("/getUser", { headers: { Authorization: getJwt() } })
    //       .then(res => {
    //         console.log("getUser", res.data);
    //         this.setState({
    //           user: res.data
    //         });
    //       });
    //   }

    //   //clear the form
    //   this.setState({
    //     username: "",
    //     password: ""
    //   });
    //   return;
    // }

    axios.post("/api/user/login", submitObject).then(res => {
      if (res.data.errors) {
        return this.setState(res.data);
      } else {
        localStorage.setItem("jwtAppToken", res.data.token);
        window.location.href = "/";
      }
      return this.setState({
        userdata: res.data,
        errors: null,
        success: true
      });
      //clear the form
      this.setState({
        email: "",
        password: ""
      });
    });
  }

  submitForm(event) {
    event.preventDefault();

    //Check to see if both fields are filled
    const usernameInput = this.state.email;
    const passwordInput = this.state.password;

    const objSubmit = {
      email: usernameInput,
      password: passwordInput
    };

    console.log("objSubmit", objSubmit);
    if (!objSubmit.username || !objSubmit.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(objSubmit);

    // axios.post("/api/user/login", objSubmit).then(res => {
    //   if (res.data.errors) {
    //     return this.setState(res.data);
    //   } else {
    //     localStorage.setItem("jwtAppToken", res.data.token);
    //     window.location.href = "/";
    //   }
    //   return this.setState({
    //     userdata: res.data,
    //     errors: null,
    //     success: true
    //   });
    // });
  }

  isAuthenticated() {
    const token = localStorage.getItem("jwtAppToken");
    return token && token.length > 10;
  }

  responseFacebook = response => {
    localStorage.setItem("jwtAppToken", response.name);
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  //MODAL
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
    window.location.reload();
  }

  render() {
    let fbContent;

    console.log("user state", this.state);
    // if (this.state.isLoggedIn) {
    //   fbContent = (
    //     <div
    //       style={{
    //         width: "200px",
    //         margin: "auto",
    //         background: "#f4f4f4",
    //         padding: "20px"
    //       }}
    //     >
    //       <img src={this.state.picture} alt={this.state.name} />
    //       <h6>{this.state.name}</h6>
    //       Email: {this.state.email}
    //     </div>
    //   );
    // } else {
    //   fbContent = (
    //     <FacebookLogin
    //       appId="929702273883725"
    //       autoLoad={true}
    //       fields="name,email,picture"
    //       onClick={this.props.closePopup}
    //       callback={this.responseFacebook}
    //     />
    //   );
    // }

    return (
      <div className="popup">
        <div className="popup_inner text-center">
          {this.state.isLoggedIn ? (
            <div>
              <h6 className="h6-white">Welcome</h6>
              <div className="login-bg">
                <br />
                <div>{fbContent}</div>
                <br />
                <span className="modal-footer">
                  <Button color="danger" onClick={this.props.closePopup}>
                    Close
                  </Button>
                </span>
              </div>
            </div>
          ) : (
            <div>
              <h6 className="h6-white">Please Login</h6>
              <div className="login-bg">
                <br />
                <div>{fbContent}</div>
                <br />
                {/*Custom login form*/}
                <Form
                  className="login-form text-center"
                  onSubmit={this.submitForm.bind(this)}
                >
                  <FormGroup row>
                    <Col>
                      <Label for="UserName">User Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="login-email"
                        value={this.state.email}
                        placeholder="your-email@email.com"
                        onChange={this.handlerUsernameChanged.bind(this)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Label for="Password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        placeholder="Enter Password"
                        onChange={this.handlerPasswordChanged.bind(this)}
                      />
                    </Col>
                  </FormGroup>
                  <Button type="submit">Login</Button>
                </Form>
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
          )}
        </div>
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
//End Popup Modal
export default Popup;

// import React, { Component } from "react";
// import "./modals.css";
// import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
// import axios from "axios";
// import { getJwt } from "../Helpers";
// import $ from "jquery";
// //
// //Popup Modal
// class Popup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//       // showPopup: false, //MODAL
//       // userdata: null,
//       // success: false
//     };
//     this.submitHandler = this.submitHandler.bind(this);
//     this.changeHandler = this.changeHandler.bind(this);
//   }

//   changeHandler(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   submitHandler(event) {
//     event.preventDefault();
//     console.log("<<<<<before calling /api/user/login>>>>>");
//     axios
//       .post("/api/user/login", {
//         //this.state
//         email: this.state.email,
//         password: this.state.password
//       })
//       .then(result => {
//         console.log("result sent back from server: ", result);
//         if (result.data.errors) {
//           return this.setState(result.data);
//         } else {
//           localStorage.setItem("jwtAppToken", result.data.token);
//           // window.location.href = "/";
//         }
//         return this.setState({
//           userdata: result.data,
//           errors: null,
//           success: true
//         });
//       });
//   }

//   //MODAL
//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//     // window.location.reload();
//   }

//   render() {
//     return (
//       <div className="popup">
//         <div className="popup_inner text-center">
//           <div>
//             <h6 className="h6-white">Please Login</h6>
//             <div className="login-bg">
//               <br />
//               {/*Custom login form*/}
//               <Form
//                 className="login-form text-center"
//                 onSubmit={this.submitForm}
//               >
//                 <FormGroup row>
//                   <Col>
//                     <Label for="UserName">User Name</Label>
//                     <Input
//                       type="email"
//                       name="email"
//                       id="email"
//                       required
//                       placeholder="your-email@email.com"
//                       onChange={this.changeHandler}
//                     />
//                   </Col>
//                 </FormGroup>
//                 <FormGroup row>
//                   <Col>
//                     <Label for="Password">Password</Label>
//                     <Input
//                       type="password"
//                       name="password"
//                       id="password"
//                       required
//                       placeholder="Password"
//                       onChange={this.changeHandler}
//                     />
//                   </Col>
//                 </FormGroup>
//                 <Button>Login</Button>
//               </Form>
//               <span className="modal-footer">
//                 <a
//                   className="signup"
//                   href="/signup#user-reg"
//                   onClick={this.props.closePopup}
//                 >
//                   Register
//                 </a>
//                 <Button color="danger" onClick={this.props.closePopup}>
//                   Close
//                 </Button>
//               </span>
//             </div>
//           </div>
//         </div>
//         {this.state.showPopup ? (
//           <Popup closePopup={this.togglePopup.bind(this)} />
//         ) : null}
//       </div>
//     );
//   }
// }
// //End Popup Modal
// export default Popup;

//Function loginUser
//loginUser(submitObject) {
//First find valid token in localStorage
//If there is none then send user submit data to api
//   const jwt = getJwt();

//   if (!jwt) {
//     axios
//       .post("/api/user/login", submitObject)
//       .then(
//         function(data) {
//           this.props.authenticate();
//           this.setState({
//             redirectToReferrer: true
//           });
//           console.log(data);
//         }.bind(this)
//       )
//       .catch(function(err) {
//         console.log(err);
//       });
//   } else {
//     axios
//       .get("/getUser", { headers: { Authorization: getJwt() } })
//       .then(res => {
//         console.log("getUser", res.data);
//         this.setState({
//           user: res.data
//         });
//       });
//   }

//   //clear the form
//   this.setState({
//     username: "",
//     password: ""
//   });
//   return;
// }

//   axios.post("/api/user/login", submitObject).then(result => {
//     console.log("login result sent back from server: ", result);
//     if (result.data.errors) {
//       return this.setState(result.data);
//     } else {
//       localStorage.setItem("jwtAppToken", result.data.token);
//       window.location.href = "/";
//     }
//     return this.setState({
//       userdata: result.data,
//       errors: null,
//       success: true
//     });

//     //clear the form
//     // this.setState({
//     //   email: "",
//     //   password: ""
//     // });
//   });
// }
