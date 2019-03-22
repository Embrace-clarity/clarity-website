import React from "react";
import styled from "styled-components";
import { color, space, fontSize, lineHeight } from "styled-system";

const Heading2 = styled.h2`
${fontSize}
  ${color}
  ${space}
  ${fontSize}
  ${lineHeight}
`;

export default ({ children, color }) => (
  <Heading2 color={color} mb={6} fontSize={[1, 2]} lineHeight={[1, 2]}>
    {children}
  </Heading2>
);
