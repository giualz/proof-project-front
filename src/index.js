import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers";
import GlobalStyle from "./assets/globalStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Routers />
    <ToastContainer />
  </React.Fragment>,
  document.getElementById("root")
);
