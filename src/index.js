import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
  rootElement
);
