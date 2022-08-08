import React from "react";

import { StatusBar } from "react-native";
import styled from "styled-components/native";

const StatusBarTime = styled.Text`
  font-weight: 400;
  padding: 8px;
`;

export default function CustomStatusBar() {
  StatusBar.setHidden(true);
  return (
    <>
      <StatusBarTime>00:00</StatusBarTime>
    </>
  );
}
