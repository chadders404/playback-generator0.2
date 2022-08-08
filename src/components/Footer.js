import React from "react";

import styled from "styled-components/native";

const FooterContainer = styled.View`
  flex-direction: row;
  background: white;
  justify-content: space-between;
`;

const Icons = styled.Image`
  width: 34px;
  height: 26px;
  margin: 12px;
  align-content: center;
  resize-mode: contain;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Icons source={require("../../assets/icons/black/insta-home.png")} />
      <Icons source={require("../../assets/icons/black/insta-search.png")} />
      <Icons source={require("../../assets/icons/black/insta-reels.png")} />
      <Icons source={require("../../assets/icons/black/insta-shop.png")} />
      <Icons
        source={require("../../assets/icons/black/insta-profile-icon.png")}
      />
    </FooterContainer>
  );
}
