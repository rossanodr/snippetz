import constants from "expo-constants";
import firestore from "@react-native-firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { CommentInput } from "../../components/CommentInput";
import { Comments } from "../../components/Comments";
import { Container, Feed, GoToPostButton, HeaderContainer } from "./styles";
import { MainHeader } from "../../components/MainHeader";
import { Post } from "../../components/Post";
import { PostImageType } from "../../components/PostImageType";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";

type Posts = {
  id: string;
};
export function Home() {
 
  const [postsId, setPostsId] = useState<Posts[]>([]);
  const [refreshing, setRefreshing] = useState(false);


/**
 * When the user refreshes the feed, the function will get the posts from the database and set the
 * postsId state to the data returned from the database.
 */

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

     
    </Container>
  );
}
