import React from "react";
import ReactDOM from "react-dom/client";
import { reportWebVitals } from "./reportWebVitals";
import { Metric } from "web-vitals";
import { App } from "./App";

const handleWebVitals = (metric: Metric) => {
  console.log(metric);
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(handleWebVitals);
