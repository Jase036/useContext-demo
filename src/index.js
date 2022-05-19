import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DemoContextProvider } from "./context/DemoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DemoContextProvider>
      <App />
    </DemoContextProvider>
  </React.StrictMode>
);
