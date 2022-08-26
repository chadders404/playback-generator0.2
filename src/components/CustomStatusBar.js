import React from "react";

import { StatusBar } from "react-native";
import styled from "styled-components/native";

const StatusBarContainer = styled.View`
  flex-direction: row;
  layout-direction: rtl;
`;
const StatusBarTime = styled.Text`
flex: 0.8
  font-weight: 400;
  padding: 8px;
`;

const Signal4gBattery = styled.Image`
  flex: 0.2;
  height: 13px;
  width: 90px;
  margin: 4px;
  resize-mode: contain;
  align-items: flex-end;
  align-self: center;
  justify-content: flex-end;
  align-content: flex-end;
  position: absolute;
  right: 0px;
`;

export default function CustomStatusBar() {
  StatusBar.setHidden(true);
  return (
    <StatusBarContainer>
      <StatusBarTime> 13:30</StatusBarTime>
      <Signal4gBattery
        source={require("../../assets/icons/black/signal4gbattery.png")}
      />
    </StatusBarContainer>
  );
}
