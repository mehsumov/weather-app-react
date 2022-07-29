import React from "react";
import { Container } from "reactstrap";
import Main from "../main/Main";
import "./App.css"

const App = () => {
  return (
    <Container>
      <div className="main-box">
        <Main />
      </div>
    </Container>
  );
};

export default App;
