import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
// import en from "./i18n/en/en.json";
// import es from "./i18n/es/es.json";

// i18next.use(initReactI18next).init({
//   lng: "es",
//   interpolation: {
//     escapeValue: false,
//   },
//   resources: {
//     en: {
//       translation: en,
//     },
//     es: {
//       translation: es,
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
