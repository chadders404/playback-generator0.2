import React, { useCallback, useRef } from "react";
import { View, Image } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from "react-native-reanimated";

import NameTag from "./NameTag";
import PostInteractionBar from "./PostInteractionBar";

import styled from "styled-components/native";

const PostCardContainer = styled.View`
  flex: 1;
`;

const Photo = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: auto;
  aspect-ratio: ${4 / 5};
  elevation: 4
  backgroundcolor: "#0000";
`;

const InstaHeart = styled.Image`
  flex: 1;
  width: 30%;
  resize-mode: contain;
  align-self: center;
`;
// shadow-offset: width 0, height 20
// shadow-opacity: 0.35;
// shadow-radius: 35

const Likes = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-left: 12px
  padding: 4px 0px 2px;
`;

const CaptionRow = styled.View`
  flex-direction: row;
`;

const ID = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-left: 12px
  padding: 0px;
  align-self: center;
`;

const Caption = styled.Text`
  font-size: 16px;
  margin-left: 12px;
  padding: 0px 0px 4px;
  align-self: center;
`;

const Comment = styled.Text`
  font-size: 16px;
  color: grey;
  margin-left: 12px;
  padding: 0px 0px 4px;
`;

const Date = styled.Text`
  font-size: 12px;
  color: grey;
  margin-left: 12px;
  padding: 0px 0px 4px;
`;

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function PostCard(props) {
  // LIKE HEART ---------------------------------------------------------------------------------------------------------------
  let instalike = require("../../assets/icons/other/insta-like-solid-white.png");
  const scale = useSharedValue(0);
  const doubleTapRef = useRef();
  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(
      1,
      { mass: 0.4, stiffness: 280, damping: 9 },
      (isFinished) => {
        if (isFinished) {
          scale.value = withDelay(500, withSpring(0));
        }
      }
    );
    console.log("doubletap");
  }, []);
  //---------------------------------------------------------------------------------------------------------------------------
  return (
    <PostCardContainer>
      <View>
        <NameTag name={props.name} avatarimage={props.avatarimage} />
        <TapGestureHandler
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}
        >
          <Animated.View>
            <Photo source={props.postphoto}>
              <AnimatedImage
                source={instalike}
                style={[
                  {
                    flex: 1,
                    width: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                  },
                  rStyle,
                ]}
              />
            </Photo>
          </Animated.View>
        </TapGestureHandler>
      </View>
      <PostInteractionBar isLiked={props.isLiked} />
      <View>
        <Likes>{props.likecount} likes</Likes>
        <CaptionRow>
          <ID>{props.name}</ID>
          <Caption>{props.caption}</Caption>
        </CaptionRow>
      </View>
      <Comment>View all {props.commentcount} comments</Comment>
      <Date>{props.date}</Date>
    </PostCardContainer>
  );
}
