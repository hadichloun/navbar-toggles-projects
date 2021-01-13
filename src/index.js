import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Toggle from "./Toggle"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />

    <Toggle />
  </React.StrictMode>,
  rootElement
);
