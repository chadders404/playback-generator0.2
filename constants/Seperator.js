import React from "react";

import { StyleSheet } from "react-native";

import styled from "styled-components/native";

const Separator = styled.View`
  background-color: #e2e2e2;
  height: ${StyleSheet.hairlineWidth}px;
`;
export default function () {
  return <Separator />;
}
