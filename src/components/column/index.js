import React from "react"
import Container from "../../components/container"
import Text from "../../components/text"

function Column(props) {
  return (
    <Container>
      <Text color={props.titleColor} mb={0}>
        {props.title}
      </Text>
      <Text color={props.subtitleColor}>{props.subtitle}</Text>
    </Container>
  )
}
export default Column
