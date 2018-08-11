import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Services from "./components/Pages/services";
import Contact from "./components/Pages/contact";
import Promotions from "./components/Pages/promotions";
import Appointments from "./components/Pages/appointments";
import Signup from "./components/Pages/signup";
import Calendar from "./components/Pages/Calendar";
import Login from "./components/Pages/login";
import decode from "jwt-decode";

import TestLogin from "./components/Pages/testlogin";
import TestModal from "./components/Pages/testmodal";

//Function to check if there is a valid and not expired token in localStorage
const checkAuth = () => {
  const token = localStorage.getItem("jwtAppToken");
  console.log(token);
  if (!token) {
    return false;
  }
  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

//Protected Routes
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/promotions" component={Promotions} />
      <AuthRoute exact path="/appointments" component={Appointments} />
      <Route exact path="/signup" component={Signup} />
      <AuthRoute exact path="/calendar" component={Calendar} />

      <Route exact path="/testlogin" component={TestLogin} />
      <Route exact path="/testmodal" component={TestModal} />
    </Switch>
  </Router>
);

export default App;
