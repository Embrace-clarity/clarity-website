import React from "react"
import styled from "styled-components"

const Logo = styled.svg`
  flex: none;
  width: 48px;
  height: 48px;
  margin-bottom: 48px;
  fill: ${props => (props.black ? "rgba(0,0,0, 0.2)" : "white")};
`

export default (props, black) => (
  <Logo
    width="48"
    height="75"
    viewBox="0 0 48 75"
    black={props.black}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.9565 24H0.173889C0.173889 10.8412 10.8412 0.173889 24 0.173889C37.1588 0.173889 47.8261 10.8412 47.8261 24H37.0435C37.0435 16.7963 31.2037 10.9565 24 10.9565C16.7963 10.9565 10.9565 16.7963 10.9565 24Z" />
    <path d="M24 26.7826V37.5652C16.7963 37.5652 10.9565 43.405 10.9565 50.6087C10.9565 57.8124 16.7963 63.6521 24 63.6521C31.2037 63.6521 37.0435 57.8124 37.0435 50.6087H47.8261C47.8261 63.7674 37.1588 74.4347 24 74.4347C10.8412 74.4347 0.173889 63.7674 0.173889 50.6087C0.173889 37.4499 10.8412 26.7826 24 26.7826Z" />
  </Logo>
)
