import { useRoute } from "@react-navigation/native";
import React from "react";
import { PostImageType } from "../../components/PostImageType";
import { PostTextType } from "../../components/PostTextType";
<<<<<<< HEAD
import { Repost } from "../../components/Repost";

=======
import { TextRepost } from "../../components/TextRepost";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
>>>>>>> ace9350... implementing comments
import { ImageRepost } from "../../components/ImageRepost";
import { PostType } from "../../interfaces";

import { Container, Content } from "./styles";
<<<<<<< HEAD

export function PostScreen() {
  const route = useRoute();
  const { postType, screenType, isRepost } = route.params as PostType;

  if (postType === "image" && !isRepost) {
    return (
      <Container>
        <PostImageType screenType={screenType} isRepost={false} />
      </Container>
    );
  }
  if (postType === "text" && !isRepost) {
    return (
      <Container>
        <Content>
          <PostTextType screenType={screenType} isRepost={false} />
        </Content>
      </Container>
    );
  }
  if (postType === "image" && isRepost) {
    return (
      <Container>
        <ImageRepost screenType={screenType} postType="image" />
      </Container>
    );
  }
  if (postType === "text" && isRepost) {
    <Container>
      <Content>
        <Repost screenType={screenType} postType="text" />
      </Content>
    </Container>;
  }
  return (
    <Container>
      {/* {postType === "image" ? (
        <PostImageType screenType={screenType} isRepost={false} />
      ) : (
        <Content>
          <PostTextType screenType={screenType} isRepost={false} />
        </Content>
      )} */}
      <Content>
       {/* <ImageRepost screenType={screenType} postType='image'/> */}
        <Repost screenType={screenType} postType='text'   />
      </Content>
    </Container>
  );
=======
import { Repost } from "../../components/Repost/Index";
import { Post } from "../../components/Post";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";

interface Params {
  postId: string;
}

export function PostScreen() {
  const route = useRoute();
  const navigation = useTypeNavigation();
  const { postType, screenType, isRepost } = route.params as PostType;
  const { postId } = route.params as Params;

  const positionY = useSharedValue(0);
  function GoBack() {
    navigation.goBack();
  }
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event) => {},
    onActive: (event) => {
      positionY.value = event.translationY;
      
    },
    onEnd: (event) => {
      positionY.value = withSpring(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: positionY.value }],
      opacity: interpolate(positionY.value, [0, 250], [1, 0]),
    };
  });

  if (!isRepost) {
    return (
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onEnded={() => {
          if (positionY.value > 120) GoBack();
        }}
      >
        <Animated.View style={[{ flex: 1 }, rStyle]}>
          <Post screenType={screenType} isRepost={false} postId={postId} />
        </Animated.View>
      </PanGestureHandler>
    );
  }

  // if (postType === "image" && isRepost) {
  //   return (
  //     <Container screenType={screenType} postType={postType}>
  //       <Repost screenType={screenType} postType="image" />
  //     </Container>
  //   );
  // }
  // if (postType === "text" && isRepost) {
  //   return (
  //     <Container>
  //       <Content>
  //         <Repost screenType={screenType} postType="text" />
  //       </Content>
  //     </Container>
  //   );
  // }
>>>>>>> ace9350... implementing comments
}
