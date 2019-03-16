import React from "react";
import Text from "../../components/text";
import styled from "styled-components";

const ColumnContainer = styled.div`
  padding-right: 16px;
  flex: 1;
`;

function Column(props) {
  return (
    <ColumnContainer>
      <Text color={props.titleColor} mb={0}>
        {props.title}
      </Text>
      <Text color={props.subtitleColor}>{props.subtitle}</Text>
    </ColumnContainer>
  );
}
export default Column;
