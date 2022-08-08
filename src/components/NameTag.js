import React from "react";
import styled from "styled-components/native";

const ID = styled.Text`
  flex: 0.5;
  flex-direction: column;
  font-weight: bold;
  align-self: center;
  font-size: 16px;
  padding: 0px 8px 0px 16px;
`;

const NameTagRow = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 40px;
  margin: 12px;
`;

const Avatar = styled.Image`
  width: 36px;
  aspect-ratio: ${1 / 1};
  border-radius: 50px;
`;

export default function NameTag(props) {
  if (props.avatarimage) {
    return (
      <NameTagRow>
        <Avatar source={props.avatarimage} />
        <ID>{props.name}</ID>
      </NameTagRow>
    );
  } else {
    <NameTagRow>
      <ID>{props.name}</ID>
    </NameTagRow>;
  }
}
