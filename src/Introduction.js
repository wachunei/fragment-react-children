import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  border-bottom: 1px solid #d6b8ca;
`;
const Introduction = () => (
  <Wrapper>
    <h2>Introduction</h2>
    <p>
      The idea behind this demo is to show how {"<Fragment>"} tag gets in the
      way of any manipulation done in a component using React.Children methods.
    </p>
    <p>
      In the example, items with a dot are cloned with a "first" prop in case of
      being the first child. For demonstration purposes, border-top color is
      transparent in that case (have in mind this can happen in a situation not
      related to styling).
    </p>
  </Wrapper>
);
export default Introduction;
