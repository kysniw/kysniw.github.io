import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LangContextProvider from "./context/LangContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>
);
