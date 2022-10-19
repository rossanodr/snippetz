import { useRoute } from "@react-navigation/native";
import React from "react";
import { PostImageType } from "../../components/PostImageType";
import { PostTextType } from "../../components/PostTextType";
import { Repost } from "../../components/Repost";

import { ImageRepost } from "../../components/ImageRepost";
import { PostType } from "../../interfaces";

import { Container, Content } from "./styles";

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
}
