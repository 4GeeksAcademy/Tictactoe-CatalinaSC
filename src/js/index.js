import React from "react";
import ReactDOM from "react-dom";

import App from "./component/app";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById("root"));
});
