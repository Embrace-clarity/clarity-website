import styled from "styled-components";
import { color, space } from "styled-system";
import { device } from "../../utils/device";

const Heading = styled.h1`
  @media ${device.mobileS} {
    font-size: 32px;
  }

  @media ${device.tablet} {
    font-size: 42px;
  }
  ${color}
  ${space}
`;

export default Heading;
