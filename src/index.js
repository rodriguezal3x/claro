import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
