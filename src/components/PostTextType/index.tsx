import React, { useEffect, useState } from "react";
import { PostContent, PostType } from "../../interfaces";
import { FloatingMenu } from "../FloatingMenu";
import { PostHeader } from "../PostHeader";
import firestore from "@react-native-firebase/firestore";
import { Skeleton } from "@rneui/themed";

import { Container, Content, Header, Text, Title } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useFocusEffect } from "@react-navigation/native";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";

interface Props extends PostContent, PostType {
  loading: boolean;
  likeButtonActivity?: boolean;

  savedPost: boolean;
  handleSavePost: () => Promise<void>;
  handleLikePost: () => Promise<void>;
}

export function PostTextType({
  screenType,
  isRepost,
  loading,
  postAuthor,
  postAuthorAvatar,
  postBody,
  postTimeStamp,
  postTitle,
  postAuthorId,
  postId,
  savedPost,
  likeButtonActivity,
  numberOfComments,
  numberOfLikes,
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
    <Container isRepost={isRepost} screenType={screenType}>
      <Skeleton circle animation="wave" width={400} height={200} />
    </Container>
  ) : (
    <Container
      isRepost={isRepost}
      screenType={screenType}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
      }}
    >
      <Header>
        <PostHeader
          name={postAuthor}
          avatarUrl={postAuthorAvatar}
          postTimeStamp={postTimeStamp}
          screenType={screenType}
          userId={postAuthorId}
          buttonActivity={savedPost}
          handleSavePost={handleSavePost}
        />
      </Header>

      <Content screenType={screenType} onPress={handleGoToPost}>
        <Text>
          <Title>{postTitle}</Title>
          {"\n"}
          {postBody}
        </Text>
      </Content>
      {!isRepost && (
        <FloatingMenu
          screenType="small"
          postType="text"
          numberOfLikes={numberOfLikes}
          handleButtonPress={handleLikePost}
          buttonActivity={likeButtonActivity}
        />
      )}
    </Container>
  );
}
