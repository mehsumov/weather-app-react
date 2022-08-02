import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import { usePosition } from "use-position";
import { Container } from "reactstrap";
import Main from "../main/Main";
import "./App.css";
import { hideLoader } from "../../redux/actions/loaderActions";

const App = () => {
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();
  useEffect(() => {
    latitude &&
      longitude &&
      dispatch(weatherActions.getWeatherData(latitude, longitude));
  }, [latitude, longitude]);
  return (
    <Container>
      <div className="main-box">
        <Main />
      </div>
    </Container>
  );
};

export default App;
