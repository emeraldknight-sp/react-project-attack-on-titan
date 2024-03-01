import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppProvider } from "./context";
import { Global } from "@emotion/react";
import { Metric } from "web-vitals";
import { ResetCSS } from "./styles/global";
import { reportWebVitals } from "./reportWebVitals";

const handleWebVitals = (metric: Metric) => {
  console.log(metric);
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Global styles={ResetCSS} />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);

reportWebVitals(handleWebVitals);
