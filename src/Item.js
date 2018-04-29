import React from "react";
import styled from "styled-components";

const Row = styled.div`
  padding: 10px;
  border-top: 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top-color: ${({ first }) => (first ? "transparent" : "#bbb")};
`;

const Dot = styled.div`
  margin: 0 10px;
  background-color: ${props => props.color};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
`;

const Label = styled.span`
  font-size: 15px;
`;

const Item = ({ dotColor, label, first }) => (
  <Row first={first}>
    <Dot color={dotColor} />
    <Label>{label}</Label>
  </Row>
);

export default Item;
