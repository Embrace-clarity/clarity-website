import styled from "styled-components";
import { color, space } from "styled-system";
import { device } from "../../utils/device";

const Heading = styled.h3`
  ${color}
  ${space}
  @media ${device.mobileS} {
    column-count: 1;
    font-size: 24px;
  }

  @media ${device.tablet} {
    column-count: 2;
    font-size: 32px;
  }
`;

export default Heading;
