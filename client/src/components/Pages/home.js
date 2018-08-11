import React, { Component } from "react";
import Home from "../Home";
import Mission from "../Mission";
import About from "../About";
import Services from "../Services";
import Loyalty from "../LoyaltyProgram";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Home />
        <Mission />
        <About />
        <Services />
        <Loyalty />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
