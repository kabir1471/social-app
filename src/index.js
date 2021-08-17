import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App.jsx";
import reportWebVitals from "./reportWebVitals";

const rootEl = document.getElementById("root");

const render = () => {
  ReactDOM.render(<App />, rootEl);
};

if (module.hot) {
  module.hot.accept("./app/layout/App.jsx", () => {
    setTimeout(render);
  });
}
render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
