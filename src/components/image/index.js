import React from "react";
import styled from "styled-components";
import { device } from "../../utils/device";

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  @media ${device.mobileS} {
    padding-left: 1.5em;
  }

  @media ${device.laptop} {
    padding-left: 4em;
  }
`;

export default ({ src, alt }) => (
  <ImageContainer>
    <Image src={src} alt={alt} />
  </ImageContainer>
);
