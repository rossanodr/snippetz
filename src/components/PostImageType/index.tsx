import React from "react";
<<<<<<< HEAD
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
=======

import { PostHeader } from "../PostHeader";
import { Skeleton } from "@rneui/themed";
import { PostContent, PostType } from "../../interfaces";
import { FloatingMenu } from "../FloatingMenu";
import { ImageComponent } from "../ImageComponent";
import {
  SkeletonContainer,
  Container,
  Content,
  Header,
  ImageWrapper,
  SubTitle,
  TextContent,
  Title,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";

interface Props extends PostContent, PostType {
  loading: boolean;
  likeButtonActivity?: boolean;

  savedPost: boolean;
  handleSavePost: () => Promise<void>;
  handleLikePost: () => Promise<void>;
}
>>>>>>> ace9350... implementing comments

export function PostImageType({
  screenType,
  postType = "image",
  isRepost,
<<<<<<< HEAD
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
=======
  loading,
  postAuthor,
  postAuthorAvatar,
  postBody,
  postPhotoUrl,
  postTimeStamp,
  postTitle,
  postAuthorId,
  postId,
  savedPost,
  numberOfComments,
  numberOfLikes,
  likeButtonActivity,
  handleSavePost,
  handleLikePost,
}: Props) {
  const navigation = useTypeNavigation();

  //FUNCTIONS
  function handleGoToPost() {
    navigation.navigate("PostScreen", {
      screenType: "fullscreen",
      postId: postId,
      isRepost: false,
    });
  }

  return loading ? (
    <SkeletonContainer isRepost={isRepost} screenType={screenType}>
      <Skeleton
        circle
        animation="wave"
        LinearGradientComponent={LinearGradient}
        width={400}
        height={200}
      />
    </SkeletonContainer>
  ) : (
    <Container>
      <ImageWrapper screenType={screenType} isRepost={isRepost}>
        <ImageComponent source={{ uri: postPhotoUrl }}>
          {/* Menu in absolute position */}
          <Header>
            <PostHeader
              name={postAuthor}
              avatarUrl={postAuthorAvatar}
              screenType={screenType}
              postType={postType}
              showButton={isRepost ? false : true}
              postTimeStamp={postTimeStamp}
              userId={postAuthorId}
              buttonActivity={savedPost}
              handleSavePost={handleSavePost}
            />
          </Header>
          {!isRepost && (
            <FloatingMenu
              screenType={screenType}
              postType={postType}
              numberOfLikes={numberOfLikes}
              handleButtonPress={handleLikePost}
              buttonActivity={likeButtonActivity}
            />
          )}

          {/* Title, Subtitle, Last likes */}
          <Content onPress={handleGoToPost}>
            <TextContent screenType={screenType}>
              <Title screenType={screenType}>
                {postTitle}
              </Title>
              <SubTitle screenType={screenType}>
                {postBody}
              </SubTitle>
            </TextContent>
          </Content>
        </ImageComponent>
      </ImageWrapper>
>>>>>>> ace9350... implementing comments
    </Container>
  );
}
