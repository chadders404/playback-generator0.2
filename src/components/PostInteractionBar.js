import React, { useCallback, useState, useRef } from "react";
import { Image } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import styled from "styled-components/native";

const PostInteractionIconContainer = styled.View`
  height: 50px;
  flex-direction: row;
  margin: 8px 0px 0px 0px;
`;

const LeftIcons = styled.Image`
  width: 34px;
  height: 26px;
  margin: 10px;
  resize-mode: contain;
`;

const RightIcons = styled.Image`
  width: 34px;
  height: 26px;
  margin: 10px;
  resize-mode: contain;
  position: absolute;
  right: 0px;
`;

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function () {
  let [isLiked, setIsLiked] = useState(false);
  //can this state be updated when Photo is doubletapped in PostCard?
  let [instaLikeIcon, setInstaLikeIcon] = useState(
    require("../../assets/icons/black/insta-like.png")
  );
  let instaComment = require("../../assets/icons/black/insta-comment.png");
  let instaMessage = require("../../assets/icons/black/insta-message.png");
  let instaSave = require("../../assets/icons/black/insta-save.png");

  const scale = useSharedValue(0);

  const likeRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 1) }],
  }));
  const handleLike = useCallback(() => {
    if (isLiked === false) {
      console.log("liked");
      setIsLiked(true);
      setInstaLikeIcon(
        require("../../assets/icons/other/insta-like-solid-red.png")
      );
      scale.value = withSpring(
        1,
        { mass: 0.5, stiffness: 300, damping: 10 },
        (isFinished) => {
          if (isFinished) {
            scale.value = withSpring(0);
          }
        }
      );
    } else {
      console.log("unliked");
      setIsLiked(false);
      setInstaLikeIcon(require("../../assets/icons/black/insta-like.png"));
      scale.value = withSpring(
        1,
        { mass: 0.5, stiffness: 300, damping: 10 },
        (isFinished) => {
          if (isFinished) {
            scale.value = withSpring(0);
          }
        }
      );
    }
  }, [isLiked]);

  return (
    <PostInteractionIconContainer>
      <TapGestureHandler
        ref={likeRef}
        numberOfTaps={1}
        onActivated={handleLike}
      >
        <Animated.View>
          <AnimatedImage
            source={instaLikeIcon}
            style={[
              rStyle,
              { width: 34, height: 26, margin: 10, resizeMode: "contain" },
            ]}
          />
        </Animated.View>
      </TapGestureHandler>

      <LeftIcons source={instaComment} />

      <LeftIcons source={instaMessage} />
      <RightIcons source={instaSave} />
    </PostInteractionIconContainer>
  );
}
