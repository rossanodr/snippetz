import { useNavigation } from "@react-navigation/native";
import React from "react";
import { PostType } from "../../interfaces";
import { ImageComponent } from "../ImageComponent";
import { FloatingMenu } from "../FloatingMenu";
import { PostHeader } from "../PostHeader";
import { PostImageType } from "../PostImageType";
import { PostTextType } from "../PostTextType";
import ImgA from "../../assets/imgTest.png";

import { Container, Content, Header, ImageWrapper, Text, TextContent } from "./styles";

export function ImageRepost({
  screenType = "small",
  postType,
  isRepost = true,
}: PostType) {
  const navigation = useNavigation();

  function handleNavigation(postType: string) {
    navigation.navigate("PostScreen", { postType, screenType: "fullscreen" });
  }

  return (
    <Container>
      <Header>
      
      <PostHeader
        name="Rossano"
        time="19 hour ago"
        avatarUrl="http://www.github.com/rossanodr.png"
        screenType={screenType}
        postType={postType}
        isRepost={isRepost}
        />
        </Header>
      <Content>
        <TextContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            explicabo neque ullam soluta veritatis quas a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            explicabo neque ullam soluta veritatis quas a.
          </Text>
        </TextContent>

        {/* //The image is here*/}
        <ImageWrapper>
          <PostImageType screenType="small" isRepost={true} />
        </ImageWrapper>
        <FloatingMenu screenType="small" />
      </Content>
    </Container>
  );
}
