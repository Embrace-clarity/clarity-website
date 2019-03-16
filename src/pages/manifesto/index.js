import React from "react"
import Container from "../../components/container"
import InnerContainer from "../../components/innerContainer"
import styled from "styled-components"
import Heading from "../../components/heading"
import Heading2 from "../../components/heading2"
import Link from "../../components/link"
import { space } from "styled-system"

const HeadingsContainer = styled.div`
  max-width: 700px;
`

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  ${space}
`

const FooterContainer = styled.div``

export default () => (
  <Container bg="white">
    <InnerContainer>
      <HeadingsContainer>
        <Heading mb={6} color="black">
          Manifesto
        </Heading>
      </HeadingsContainer>
      <ColumnsContainer mb={5}>
        <Heading2 color="lightblack" pr={4}>
          Our communication belongs to conglomerates designed to harvest data
          and capitalise on our privacy. For the past decade we've been the
          customer and the product, we've made the biggest even bigger and more
          powerful. We've allowed for profit organisations to shape our society
          through products designed to capture as much attention and data from
          us as possible. Communication became a common good but yet we still
          recognise it as a product with a market cap. The regimes of digital
          dictatorships are ever growing but they also inspired a wave of new
          technologies like Dat, IPFS, Ethereum and many others. Now it's just a
          matter of passion and human collaboration to bring these new and
          empowering technologies to our society. Embrace Clarity is a
          non-profit open-source project that wants to make communication a
          common good, and you can be part of it.
        </Heading2>
      </ColumnsContainer>
      <FooterContainer>
        <Link
          color="black"
          href="https://spectrum.chat/embrace-clarity/general/how-to-contribute-design-code-ideas~d1a95605-b63a-497e-9cf7-416323953e77"
          target="_blank"
        >
          Contribute
        </Link>{" "}
      </FooterContainer>
    </InnerContainer>
  </Container>
)
