import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  margin: 60px auto;
`;

const Box = styled.div`
  background-color: white;
  box-shadow: 0px 2px 4px #ccc;
`;

const Items = ({ children }) => (
  <Box>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        first: index === 0
      })
    )}
  </Box>
);

const Section = ({ title, description, children }) => (
  <SectionWrapper>
    <h2>{title}</h2>
    <p>{description}</p>
    <Items>{children}</Items>
  </SectionWrapper>
);

export default Section;
