import React from "react";
import { Text, TextInput, View, StatusBar, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styled from "styled-components/native";

import Seperator from "../../constants/Seperator";
import Header from "../components/Header";
import Footer from "../components/Footer";

const YourStoryAvatar = styled.Image`
  width: 80px;
  height: 80px;
  aspect-ratio: ${1 / 1};
  margin: 2px;
  border-radius: 50px;
  border-width: 4px;
  border-color: white;
  background: grey;
`;

const StoryCircle = styled.View`
  background: white;
  border-radius: 60px;
  margin: 0px 8px 4px 8px;
  overflow: hidden;
`;

const StoryContainer = styled.View`
  flex-direction: column;
`;

const StoryBarRow = styled.View`
  flex-direction: row;
`;

const StoryID = styled.Text`
  font-size: 12px;
  text-align: center;
  padding-bottom: 8px;
`;

const NameTagRow = styled.View`
  flex-direction: row;
  max-height: 40px;
  margin: 5px;
`;

const Avatar = styled.Image`
  width: 26px;
  aspect-ratio: ${1 / 1};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  opacity: 0.5;
`;

const PostID = styled.TextInput`
  flex-direction: column;
  font-weight: bold;
  align-self: center;
  font-size: 16px;
  padding: 0px 8px 0px 16px;
`;

const AddPostPhoto = styled.Image`
  width: 100%;
  height: auto;
  aspect-ratio: ${1 / 1};
  background: grey;
`;

export default function InstagramNewsfeedInput() {
  StatusBar.setHidden(true);

  const addRoundPictureIcon = require("../../assets/icons/input/add-picture-icon.png");
  const addSquarePictureIcon = require("../../assets/icons/input/instagram-post-photo-icon.png");
  return (
    <>
      <View>
        <TextInput placeholder="Enter the time here. eg 12:45" />
      </View>
      <Seperator />
      <Header />
      <Seperator />
      <ScrollView>
        <StoryBarRow>
          <StoryContainer>
            <StoryCircle>
              <YourStoryAvatar source={addRoundPictureIcon} />
            </StoryCircle>
            <StoryID>Your Story</StoryID>
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
                <YourStoryAvatar source={addRoundPictureIcon} />
              </LinearGradient>
            </StoryCircle>
            <StoryID>Add story</StoryID>
          </StoryContainer>
        </StoryBarRow>

        <Seperator />
        <>
          <NameTagRow>
            <Avatar
              source={require("../../assets/icons/black/insta-profile-icon.png")}
            />
            <PostID placeholder="username" />
          </NameTagRow>
        </>
        <Seperator />
        <AddPostPhoto source={addSquarePictureIcon} />
        <Seperator />
        <Text>Number of likes</Text>
        <TextInput placeholder="10" />
        <Seperator />
        <Text>Caption</Text>
        <TextInput placeholder="Write a caption to go with this post!" />
        <Seperator />
        <Text>Number of comments</Text>
        <TextInput placeholder="30" />
        <Seperator />
        <Text>Date</Text>
        <TextInput placeholder="14 hours ago" />
      </ScrollView>
      <Footer />
    </>
  );
}
