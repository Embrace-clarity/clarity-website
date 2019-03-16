import React from "react"
import styled from "styled-components"
import { device } from "../../utils/device"
import { space } from "styled-system"

const ColumnsContainer = styled.div`
  display: flex;
  flex: 1;
  ${space};
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`
export default ({ children, my }) => (
  <ColumnsContainer my={my}>{children}</ColumnsContainer>
)
