import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// get element by id root is used from index.html from public folder
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
