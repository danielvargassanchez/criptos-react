import styled from "@emotion/styled";
import React from "react";

const Text = styled.div`
  background-color: #b7322c;
  color: white;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;
const Error = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Error;
