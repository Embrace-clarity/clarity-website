import React from "react"
import styled from "styled-components"
import { color } from "styled-system"

const Container = styled.div`
  height: ${props => (props.full ? "90vh" : "none")};
  flex: 1;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  justify-content: center;
  ${color}
`

export default ({ children, background, full, bg }) => (
  <Container bg={bg} background={background} full={full}>
    {children}
  </Container>
)
