import React from "react";
import styled from "styled-components";
import { color, space, fontSize, lineHeight, maxWidth } from "styled-system";

const Text = styled.p`
  margin: 0;
  ${color}
  ${space}
  ${lineHeight}
  ${fontSize}
  ${maxWidth}
`;

export default ({ children, color, space, maxWidth }) => (
  <Text
    color={color}
    space={space}
    fontSize={0}
    lineHeight={0}
    maxWidth={maxWidth}
  >
    {children}
  </Text>
);
