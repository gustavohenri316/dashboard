import { App } from "./App";
import "antd/dist/antd.css";
import { GlobalStyles } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  );
}
