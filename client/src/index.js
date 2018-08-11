import React from "react";
import ReactDOM from "react-dom";
import MainRouter from "./MainRouter";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tui-calendar/dist/tui-calendar.min.css";

ReactDOM.render(<MainRouter />, document.getElementById("root"));
registerServiceWorker();
