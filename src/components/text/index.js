import React from "react";
import styled from "styled-components";
import { color, space, fontSize, lineHeight } from "styled-system";

const Text = styled.p`
  ${color}
  ${space}
  ${lineHeight}
  ${fontSize}
`;

export default ({ children, color, space }) => (
  <Text color={color} space={space} fontSize={0} lineHeight={0}>
    {children}
  </Text>
);
