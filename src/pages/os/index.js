import React from "react";
import Container from "../../components/container";
import InnerContainer from "../../components/innerContainer";
import styled from "styled-components";
import Column from "../../components/column";
import Heading from "../../components/heading";
import ColumnsContainer from "../../components/columnsContainer";
import osImage from "../../../static/os.png";
import Link from "../../components/link";

const HeadingsContainer = styled.div`
  max-width: 700px;
`;

const FooterContainer = styled.div``;

export default () => (
  <Container bg='black'>
    <InnerContainer>
      <HeadingsContainer>
        <Heading mb={6} color='white'>
          Atmosphere OS <br />
          Designed for decentralisation.
        </Heading>
      </HeadingsContainer>
      <img src={osImage} alt='AOS Preview' />
      <ColumnsContainer my={5}>
        <Column
          title='Decentralised'
          subtitle='Native support for all major decentralised networks like Ethereum, IPFS, Dat and others.'
          subtitleColor='lightwhite'
          titleColor='white'
        />
        <Column
          title='Modules & Layers'
          subtitle='Modules are going to replace standalone apps by allowing developers to add extra features on top of core Layers of the OS (Transportation, Communication, Payments, etc.)'
          subtitleColor='lightwhite'
          titleColor='white'
        />
        <Column
          title='Typographic UI'
          subtitle='The minimalist approach to the UI will enable developers to create modules without the need of designers. '
          subtitleColor='lightwhite'
          titleColor='white'
        />
      </ColumnsContainer>
      <FooterContainer>
        <Link
          color='white'
          href='https://spectrum.chat/embrace-clarity/general/how-to-contribute-design-code-ideas~d1a95605-b63a-497e-9cf7-416323953e77'
          target='_blank'
        >
          Contribute
        </Link>
      </FooterContainer>
    </InnerContainer>
  </Container>
);
