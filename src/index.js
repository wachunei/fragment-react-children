import React, { Component } from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import Introduction from "./Introduction";
import Example from "./Example";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #ffe0f2;
    color: #555;
    line-height: 1.5em;
    min-width: 300px;
  }

  h2 { color: #bc458d }
`;

const Page = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 30px auto;
  width: 80%;
  max-width: 500px;
`;

class App extends Component {
  render() {
    return (
      <Page>
        <GlobalStyles />
        <Introduction />
        <Example show="one" />
        <Example show="multiple" />
        <Example show="conditionally" single={false} /* change me */ />
      </Page>
    );
  }
}

render(<App />, document.getElementById("root"));
