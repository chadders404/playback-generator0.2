import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import CustomStatusBar from "./src/components/CustomStatusBar.js";
import Header from "./src/components/Header.js";
import StoryBar from "./src/components/StoryBar";
import Separator from "./constants/Seperator.js";
import Footer from "./src/components/Footer.js";
import PostCard from "./src/components/PostCard.js";
import InstagramNewsfeedInput from "./src/screens/InstagramNewsfeedInput.js";

export default function App() {
  let [renderNewsfeed, setRenderNewsfeed] = useState(true);
  let name = "charlie_spr1";
  let avatarimage = require("./assets/images/CharlieProfilePic.jpg");
  let postphoto = require("./assets/images/1CharlieBonfireNight.jpg");
  let caption = "Bonfire night✨";
  let likecount = 26;
  let date = "15 hours ago";
  let commentcount = 6;

  if (renderNewsfeed === true) {
    return (
      <>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <CustomStatusBar />
          <Header />
          <ScrollView>
            <StoryBar />
            <Separator />
            <PostCard
              name={name}
              avatarimage={avatarimage}
              postphoto={postphoto}
              likecount={likecount}
              caption={caption}
              commentcount={commentcount}
              date={date}
            />
          </ScrollView>
        </GestureHandlerRootView>
        <Footer />
      </>
    );
  } else {
    return <InstagramNewsfeedInput />;
  }
}
