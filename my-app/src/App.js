import React, { Fragment } from "react";
import "./App.scss";
import Time from "./components/time/time.jsx";
import MainPage from "./components/mainPage/mainPage.jsx";
import ButtonPrimary from "./components/buttonPrimary/buttonPrimary.jsx";
import FormRegistration from "./components/form/form.jsx";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Time />
      <ButtonPrimary />
      <FormRegistration />
    </div>
  );
}

export default App;
