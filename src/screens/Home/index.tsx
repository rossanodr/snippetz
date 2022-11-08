<<<<<<< HEAD
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { AddComment } from "../../components/AddComment";
import { Avatar } from "../../components/Avatar";
import { Comments } from "../../components/Comments";
import { MainHeader } from "../../components/MainHeader";
import { PostImageType } from "../../components/PostImageType";
import { PostTextType } from "../../components/PostTextType";
import { Repost } from "../../components/Repost";
import { PhotoScreen } from "../PhotoScreen";

import {
  Container,
  Content,
  Feed,
  HeaderContainer,
  Post,
  GoToPostButton,
} from "./styles";

export function Home() {
  const navigation = useNavigation();
  function handleNavigateToPost() {
    navigation.navigate("PhotoScreen");
  }

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <MainHeader />
        </HeaderContainer>

       
        <Feed>
          <Post>
=======
import React, { useEffect, useState } from "react";
import constants from "expo-constants";

import firestore from "@react-native-firebase/firestore";
import { MainHeader } from "../../components/MainHeader";
import { PostImageType } from "../../components/PostImageType";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";

import { Container, Feed, GoToPostButton, HeaderContainer } from "./styles";
import { FlatList } from "react-native";
import { CommentInput } from "../../components/CommentsInput";
import { Comments } from "../../components/Comments";
import { Post } from "../../components/Post";

type Posts = {
  id: string;
};
export function Home() {
  const navigation = useTypeNavigation();
  const [postsId, setPostsId] = useState<Posts[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  function handleGoToPost(postId: string) {
    navigation.navigate("PostScreen",  {screenType: "fullscreen", postId: postId, isRepost: false} );
  }

  async function buildTheFeed() {
    await firestore()
      .collection("posts")
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
          };
        });
        setPostsId(data);
      });
    setRefreshing(false);
  }
  useEffect(() => {
    buildTheFeed();
  }, [refreshing]);

  return (
    <Container>
      <Feed>
        <FlatList
          data={postsId}
          onRefresh={() => setRefreshing(true)}
          refreshing={refreshing}
          contentContainerStyle={{
            width: "100%",
            justifyContent: "center",
            paddingBottom: 90
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <HeaderContainer>
              <MainHeader />
            </HeaderContainer>
          }
          ListHeaderComponentStyle={{
            height: constants.statusBarHeight + 100,
            marginBottom: 10,
          }}
          renderItem={({ item }) => (
            <GoToPostButton  >

            <Post screenType="small" postId={item.id} isRepost={false} 
            />
            </GoToPostButton>
          )}
        />
      </Feed>

      {/* <Post>
>>>>>>> ace9350... implementing comments
            <GoToPostButton>
              <Repost postType="image" screenType="small" />
            </GoToPostButton>
            
          </Post>
          <Post>
            <GoToPostButton>
<<<<<<< HEAD
              {/* <PostImageType screenType="small" /> */}
              {/* <PostTextType screenType="small" /> */}
              <Repost postType="text" screenType="small" />
            </GoToPostButton>
            {/* <Comments /> */}

            {/* <AddComment /> */}
          </Post>
          <Post>
            <PostImageType screenType="small" />
          </Post>
          <Post>
            <PostTextType screenType="small" />
          </Post>
        </Feed>
       
      </Content>
=======
             
              <Repost postType="text" screenType="small" />
            </GoToPostButton>
            
          </Post>
          <Post>
            <PostImageType screenType="small" />
          </Post> */}
>>>>>>> ace9350... implementing comments
    </Container>
  );
}
