import React from "react";
import ImgA from "../../assets/imgTest.png";

import { PostHeader } from "../PostHeader";

import { PostType } from "../../interfaces";
import { FloatingMenu } from "../FloatingMenu";
import { ImageComponent } from "../ImageComponent";
import {
  Container,
  Content, Header, ImageWrapper, SubTitle,
  TextContent,
  Title
} from "./styles";

export function PostImageType({
  screenType,
  postType = "image",
  isRepost,
}: PostType) {
  return (
    <Container>
      <ImageWrapper screenType={screenType} isRepost={isRepost}>
        <ImageComponent source={ImgA} />
      </ImageWrapper>

      {/* Menu in absolute position */}
      <Header>
        <PostHeader
          name="Rossano"
          time="19 hour ago"
          avatarUrl="http://www.github.com/rossanodr.png"
          screenType={screenType}
          postType={postType}
          showButton={isRepost ? false : true}
        />
      </Header>
      {!isRepost && <FloatingMenu screenType={screenType} postType={postType} />}

      {/* Title, Subtitle, Last likes */}
      <Content>
        <TextContent screenType={screenType}>
          <Title screenType={screenType}>Titulo dessa foto incrível</Title>
          <SubTitle screenType={screenType}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </SubTitle>
        </TextContent>
      </Content>
    </Container>
  );
}
