import React from "react";
import { render } from "react-dom";

import App from "./components/App";

render(
  <App url="http://localhost:1337" />,
  document.getElementById("react")
);
