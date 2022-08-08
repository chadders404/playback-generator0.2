import React from "react";
import {} from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  height: 60px;
  margin: 0px 12px 10px 8px;
  flex-direction: row;
  justify-content: flex-end;
`;

const HeaderLogo = styled.Image`
  flex: 0.6;
  width: 140px;
  height: 80px;
  resize-mode: contain;
  position: absolute;
  left: 0px;
`;

const Icons = styled.Image`
  width: 34px;
  height: 26px;
  margin: 24px 0px 0px 16px;
  align-content: center;
  resize-mode: contain;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo
        source={require("../../assets/icons/instagram-logo-2022.png")}
      />

      <Icons source={require("../../assets/icons/black/insta-make-post.png")} />
      <Icons source={require("../../assets/icons/black/insta-like.png")} />
      <Icons source={require("../../assets/icons/black/insta-message.png")} />
    </HeaderContainer>
  );
}
