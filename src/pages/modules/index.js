import React from "react";
import Container from "../../components/container";
import InnerContainer from "../../components/innerContainer";
import styled from "styled-components";
import Column from "../../components/column";
import Heading from "../../components/heading";
import ColumnsContainer from "../../components/columnsContainer";
import Link from "../../components/link";
import modules from "../../../static/modules.png";

const HeadingsContainer = styled.div`
  max-width: 700px;
`;

const FooterContainer = styled.div``;

export default () => (
  <Container>
    <InnerContainer>
      <HeadingsContainer>
        <Heading mb={6}>
          Inspired by present time. <br />
          Designed for the future.
        </Heading>
      </HeadingsContainer>
      <img src={modules} alt='Modules Preview' />
      <ColumnsContainer my={5}>
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
        <Link
          color='black'
          href='https://spectrum.chat/embrace-clarity/general/how-to-contribute-design-code-ideas~d1a95605-b63a-497e-9cf7-416323953e77'
          target='_blank'
        >
          Contribute
        </Link>{" "}
      </FooterContainer>
    </InnerContainer>
  </Container>
);
