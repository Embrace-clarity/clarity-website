import styled from "styled-components";
import { color, space } from "styled-system";
import { Link } from "gatsby";

const GLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px;
  padding-bottom: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${color};
  ${color}
  ${space}
  transition: 500ms ease-out;
  &:hover {
    opacity: 0.6;
    border-bottom: 1px;
    padding-bottom: 1px;
  }
`;

export default GLink;
