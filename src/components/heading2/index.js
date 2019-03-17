import styled from "styled-components";
import { color, space } from "styled-system";
import { device } from "../../utils/device";

const Heading = styled.h2`
  ${color}
  ${space}
  @media ${device.mobileS} {
    letter-spacing: -0.2px;
    column-count: 1;
    font-size: 24px;
    line-height: 30px;
  }

  @media ${device.tablet} {
    letter-spacing: -1px;
    column-count: 2;
    font-size: 32px;
  }
`;

export default Heading;
