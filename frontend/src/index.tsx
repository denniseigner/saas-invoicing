import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./LoginForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LoginForm></LoginForm>
  </React.StrictMode>,
);
