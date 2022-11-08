import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";
import { RepostContentProps, PostType } from "../../interfaces";
import { FloatingMenu } from "../FloatingMenu";
import { PostHeader } from "../PostHeader";
import { PostImageType } from "../PostImageType";
import { PostTextType } from "../PostTextType";

import {
  Container,
  Content,
  Header,
  ImageWrapper,
  postBody,
  RepostNavigationButton,
  RepostText,
  TextContent,
  Title,
} from "./styles";

interface Props extends PostType, RepostContentProps {
 name: string;
 
}

export function Repost({
  screenType = "small",
  postType,
  isRepost = true,
  postTitle,
  postBody,
  name,
  repostTimeStamp,
  repostBody,
  repostTitle,
  repostPhotoUrl
}: Props) {
  const navigation = useTypeNavigation();

  function handleNavigation(postType: string) {
    navigation.navigate("PostScreen", { postType, screenType: "fullscreen" });
  }

  return (
    <Container>
      <Header>
        <PostHeader
        
          name={name}
          postTimeStamp={repostTimeStamp}
          avatarUrl={name}
          screenType={screenType}
          postType={postType}
          isRepost={isRepost} />
      </Header>
      <Content>
        <TextContent>
          <postBody>
            <Title>{postTitle}</Title>
            {"\n"}
            {postBody}
          </postBody>
        </TextContent>

        {/* //The Repost is here*/}
        {postType === "image" ? (
          <RepostNavigationButton onPress={() => handleNavigation(postType)}>
            <ImageWrapper>
              <PostImageType screenType="small" isRepost={true} postTitle={repostTitle}
              postBody={repostBody} postPhotoUrl={repostPhotoUrl} />
            </ImageWrapper>
          </RepostNavigationButton>
        ) : (
          <RepostText>
            <RepostNavigationButton onPress={() => handleNavigation(postType)}>
              <PostTextType
                  screenType="small"
                  isRepost={true}
                  postTitle={repostTitle}
                  postBody={repostBody}  />
            </RepostNavigationButton>
          </RepostText>
        )}
        <FloatingMenu screenType="small" />
      </Content>
    </Container>
  );
}
