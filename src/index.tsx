import React from "react";
import ReactDOM from "react-dom/client";
import { reportWebVitals } from "./reportWebVitals";
import { Metric } from "web-vitals";
import { App } from "./App";
import { Global } from "@emotion/react";
import { ResetCSS } from "./styles/global";

const handleWebVitals = (metric: Metric) => {
  console.log(metric);
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global styles={ResetCSS} />
    <App />
  </React.StrictMode>
);

reportWebVitals(handleWebVitals);
