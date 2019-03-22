import React from "react";
import Container from "../../components/container";
import InnerContainer from "../../components/innerContainer";
import styled from "styled-components";
import Column from "../../components/column";
import Heading from "../../components/heading";
import ColumnsContainer from "../../components/columnsContainer";
import ALink from "../../components/aLink";
import modules from "../../../static/modules.png";
import Image from "../../components/image";

const FooterContainer = styled.div``;

export default () => (
  <Container id='more'>
    <InnerContainer>
      <Heading title='Inspired by present time. Designed for the future.' />
    </InnerContainer>
    <Image src={modules} alt='Modules Preview' />
    <InnerContainer>
      <ColumnsContainer mb={5}>
        <Column
          title='Open Source'
          subtitle='Future is transparent and everyone should be able to contribute to it.'
          subtitleColor='lightblack'
        />
        <Column
          title='Modular design'
          subtitle='Modularity will enable a more sustainable and ethical hardware manufacturing.'
          subtitleColor='lightblack'
        />
        <Column
          title='Built by the community'
          subtitle='Clarity is a non-profit project designed to support free flow of information.'
          subtitleColor='lightblack'
        />
      </ColumnsContainer>
      <FooterContainer>
        <ALink
          color='black'
          href='https://spectrum.chat/embrace-clarity/general/how-to-contribute-design-code-ideas~d1a95605-b63a-497e-9cf7-416323953e77'
          target='_blank'
        >
          Contribute
        </ALink>{" "}
      </FooterContainer>
    </InnerContainer>
  </Container>
);
