import React from "react"
import styled from "styled-components"
import { device } from "../../utils/device"

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1024px;
  flex: 1;
  height: ${props => (props.full ? "90vh" : "none")};

  @media ${device.mobileS} {
    padding: 1.5em;
  }

  @media ${device.laptop} {
    padding: 4em;
  }
`

export default ({ children, full }) => (
  <InnerContainer full={full}>{children}</InnerContainer>
)
