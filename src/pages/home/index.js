import React from "react";
import Container from "../../components/container";
import InnerContainer from "../../components/innerContainer";
import Logo from "../../components/logo";
import styled from "styled-components";
import cover from "../../../static/cover.png";
import Link from "../../components/link";
import Heading from "../../components/heading";
import { device } from "../../utils/device";

const TextContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  flex: 1;
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
  display: flex;
`;

export default () => (
  <Container background={cover} full>
    <InnerContainer full>
      <Logo />
      <TextContainer>
        <HeadingsContainer>
          <Heading color='white'>
            Clarity is a decentralised communication device.
          </Heading>
          <Heading color='lightwhite'>
            Let's make communication a common good.
          </Heading>
        </HeadingsContainer>
        <BottomLinksContainer>
          <Link
            mr={3}
            color='white'
            href='https://spectrum.chat/embrace-clarity/general/how-to-contribute-design-code-ideas~d1a95605-b63a-497e-9cf7-416323953e77'
            target='_blank'
          >
            Contribute
          </Link>
        </BottomLinksContainer>
      </TextContainer>
    </InnerContainer>
  </Container>
);
