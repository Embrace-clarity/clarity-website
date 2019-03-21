import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default ({ children }) => <Wraper>{children}</Wraper>;
