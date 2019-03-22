import React from "react";
import Container from "../../components/container";
import InnerContainer from "../../components/innerContainer";
import Logo from "../../components/logo";
import styled from "styled-components";
import cover from "../../../static/cover.png";
import ALink from "../../components/aLink";
import GLink from "../../components/gLink";
import Heading from "../../components/heading";
import { device } from "../../utils/device";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
const HeadingsContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`;

const BottomLinksContainer = styled.div`
  height: 20px;
`;

export default () => (
  <Container background={cover} full bg='black'>
    <InnerContainer>
      <Logo />
      <TextContainer>
      <Heading color="white" title='Clarity is making communication a common good through open source and decentralisation.' />
         <BottomLinksContainer>
          <ALink
            mr={3}
            color='white'
            href='https://spectrum.chat/embrace-clarity/general/how-to-contribute-design-code-ideas~d1a95605-b63a-497e-9cf7-416323953e77'
            target='_blank'
          >
            Contribute
          </ALink>
          <GLink mr={3} color='white' to='/#more'>
            Explore the project
          </GLink>
        </BottomLinksContainer>
      </TextContainer>
    </InnerContainer>
  </Container>
);
