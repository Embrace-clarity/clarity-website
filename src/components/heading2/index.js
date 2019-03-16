import styled from "styled-components"
import { color, space } from "styled-system"
import { device } from "../../utils/device"

const Heading = styled.h3`
  ${color}
  ${space}
  @media ${device.mobileS} {
    column-count: 1;
  }

  @media ${device.tablet} {
    column-count: 2;
  }
`

export default Heading
