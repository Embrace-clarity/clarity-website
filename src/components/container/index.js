import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

const Container = styled.div`
  height: ${props => (props.full ? "100vh" : "none")};
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  ${color}
`;

export default ({ children, background, bg, id, full }) => (
  <Container bg={bg} background={background} id={id} full={full}>
    {children}
  </Container>
);
