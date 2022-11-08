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
            <GoToPostButton>
              <Repost postType="image" screenType="small" />
            </GoToPostButton>
            
          </Post>
          <Post>
            <GoToPostButton>
             
              <Repost postType="text" screenType="small" />
            </GoToPostButton>
            
          </Post>
          <Post>
            <PostImageType screenType="small" />
          </Post> */}
    </Container>
  );
}
