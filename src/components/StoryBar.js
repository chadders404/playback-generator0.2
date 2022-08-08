import React from "react";

import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  aspect-ratio: ${1 / 1};
  margin: 2px;
  border-radius: 50px;
  border-width: 4px;
  border-color: white;
`;

const StoryBarRow = styled.View`
  flex: 0.2;
  flex-direction: row;
`;

const StoryContainer = styled.View`
  flex-direction: column;
`;

const StoryCircle = styled.View`
  background: white;
  border-radius: 60px;
  margin: 0px 8px 4px 8px;
`;
//LinearGradient styling has to be applied directly? No styled components?

const StoryID = styled.Text`
  font-size: 12px;
  text-align: center;
  padding-bottom: 8px;
`;

const AddStoryButton = styled.Text`
  position: absolute;
  right: 15px;
  bottom: 32px;
  height: 24px;
  aspect-ratio: ${1 / 1};
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  border: none;
  background: #3d97f1;
  border-radius: 12px;
  border: 2px solid #fff;
  color: #fff;
  overflow: hidden;
`;
//border-radius property acting weird on iOS. Temporary fix in place.

export default function StoryBar() {
  return (
    <StoryBarRow>
      <StoryContainer>
        <StoryCircle>
          <Avatar
            source={require("../../assets/images/CharlieProfilePic.jpg")}
          />
        </StoryCircle>
        <AddStoryButton>+</AddStoryButton>
        <StoryID>Your story</StoryID>
      </StoryContainer>
      <StoryContainer>
        <StoryCircle>
          <LinearGradient
            colors={["#bc2a8d", "red", "orange", "#fccc63"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0, y: 0.9 }}
            locations={[0, 0.1, 0.6, 0.8]}
            style={{ borderRadius: 43 }}
          >
            <Avatar source={require("../../assets/images/10.jpg")} />
          </LinearGradient>
        </StoryCircle>
        <StoryID>be_greenie</StoryID>
      </StoryContainer>
      <StoryContainer>
        <StoryCircle>
          <LinearGradient
            colors={["#bc2a8d", "red", "orange", "#fccc63"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0, y: 0.9 }}
            locations={[0, 0.2, 0.5, 0.8]}
            style={{ borderRadius: 43 }}
          >
            <Avatar source={require("../../assets/images/2CharlieBook.jpg")} />
          </LinearGradient>
        </StoryCircle>
        <StoryID>nicknzzzz</StoryID>
      </StoryContainer>
    </StoryBarRow>
  );
}
