import React from "react"
import Container from "../../components/container"
import InnerContainer from "../../components/innerContainer"
import styled from "styled-components"
import Heading from "../../components/heading"
import Logo from "./../../components/logo"
import Text from "../../components/text"
import Link from "../../components/link"
import { space } from "styled-system"
import { device } from "../../utils/device"

const HeadingsContainer = styled.div`
  max-width: 700px;
`

const About = styled.div`
  display: flex;
  flex: 1;
  max-width: 420px;
  ${space}
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`

const SocialContainer = styled.div`
  flex-shrink: 1;
  flex-basis: 55%;
`

export default () => (
  <Container bg="grey">
    <InnerContainer>
      <HeadingsContainer>
        <Heading mb={6} color="black">
          Contribute and make Embrace Clarity a reality.
        </Heading>
      </HeadingsContainer>
      <About mb={5}>
        <Text color="lightblack" pr={4}>
          Clarity needs Software Engineers, Hardware Engineers, Product
          Designers, Industrial Designers, Copywriters, Project Managers, Token
          Experts, Blockchain developers and most of all Visionaries who seek to
          change how humans communicate.{" "}
          <Link
            color="black"
            target="_blank"
            href="https://spectrum.chat/embrace-clarity/general/how-to-contribute-design-code-ideas~d1a95605-b63a-497e-9cf7-416323953e77"
          >
            Join our Community
          </Link>
          {""} and redefine communication for centuries ahead.
        </Text>
      </About>
      <FooterContainer>
        <Text color="lightblack">All rights reserved for humanity © 2018</Text>
        <SocialContainer>
          <Text color="lightblack">
            The paradox is that we are on all of these platforms which we won't
            support. <br />
            <Link
              color="black"
              mr={2}
              href="https://twitter.com/embraceclarity"
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              color="black"
              mr={2}
              href="http://instagram.com/embraceclarity_/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              color="black"
              mr={2}
              href="https://medium.com/embrace-clarity"
              target="_blank"
            >
              Medium
            </Link>
          </Text>
        </SocialContainer>
      </FooterContainer>
      <Logo black />
    </InnerContainer>
  </Container>
)
