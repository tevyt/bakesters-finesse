import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/header";
import Home from "./scenes/home/view";
import styled from "styled-components";
import colors from "./styles/colors";
import media from "./styles/media";

export default () => {
  //Set body color when application is rendered
  document
    .getElementsByTagName("body")[0]
    .setAttribute("style", `background-color: ${colors.lightPink}`);

  const AppContainer = styled.div`
    font-family: "Oswald", sans-serif;
  `;

  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <Home />
      </AppContainer>
    </Provider>
  );
};
