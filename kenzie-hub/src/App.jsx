import "react-toastify/dist/ReactToastify.css";
import { Div, GlobalStyle } from "./styles/globalStyles";
import RoutesMain from "./routes";
import { useState } from "react";

const App = () => {
  return (
    <Div>
      <GlobalStyle />
      <RoutesMain />
    </Div>
  );
};

export default App;
