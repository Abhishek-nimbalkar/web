import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ToastContainer } from "react-toastify";

// import dotenv from "dotenv"
// dotenv.config()
// console.log('path.resolve(process.cwd(), `../.env`)', path.resolve(__dirname, `../.env`))


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
  <>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <App />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
