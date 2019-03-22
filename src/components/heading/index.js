import React from "react";
import styled from "styled-components";
import { color, space, fontSize } from "styled-system";

const Heading = styled.h1`
  ${fontSize}
  ${color}
  ${space}
`;

const HeadingsContainer = styled.div`
  max-width: 700px;
`;

export default ({ title, color }) => (
  <HeadingsContainer>
    <Heading color={color} mb={6} fontSize={[2, 3]}>
      {title}
    </Heading>
  </HeadingsContainer>
);
